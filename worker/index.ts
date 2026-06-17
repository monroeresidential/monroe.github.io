export interface Env {
  ASSETS: Fetcher;
  MAILGUN_API_KEY: string;
  MAILGUN_DOMAIN: string;
  MAILGUN_FROM: string;
  CONTACT_TO: string;
}

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
};

const MAX = { name: 200, email: 320, phone: 60, message: 8000 };

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN || !env.CONTACT_TO || !env.MAILGUN_FROM) {
    return json({ ok: false, error: 'Server mail is not configured.' }, 503);
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  if (isNonEmptyString(body.company)) {
    return json({ ok: true });
  }

  const name = isNonEmptyString(body.name) ? body.name.trim().slice(0, MAX.name) : '';
  const email = isNonEmptyString(body.email) ? body.email.trim().slice(0, MAX.email) : '';
  const phone = isNonEmptyString(body.phone) ? body.phone.trim().slice(0, MAX.phone) : '';
  const message = isNonEmptyString(body.message) ? body.message.trim().slice(0, MAX.message) : '';

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Name, email, and message are required.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }

  const subject = `Website inquiry from ${name}`;
  const text = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : null, '', message]
    .filter(Boolean)
    .join('\n');

  const params = new URLSearchParams({
    from: env.MAILGUN_FROM,
    to: env.CONTACT_TO,
    subject,
    text,
    'h:Reply-To': email,
  });

  const auth = btoa(`api:${env.MAILGUN_API_KEY}`);

  const mgRes = await fetch(`https://api.mailgun.net/v3/${encodeURIComponent(env.MAILGUN_DOMAIN)}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!mgRes.ok) {
    const errText = await mgRes.text();
    console.error('Mailgun error', mgRes.status, errText);
    return json({ ok: false, error: 'Could not send message. Please try again or call us.' }, 502);
  }

  return json({ ok: true });
}
