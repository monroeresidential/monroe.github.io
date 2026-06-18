export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  CONTACT_FROM: string;
  CONTACT_TO: string;
}

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  website?: string; // honeypot
};

const MAX = { name: 200, email: 320, phone: 60, company: 200, message: 8000 };

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'Method not allowed.' }, 405);
      }
      return handleContact(request, env);
    }

    // Everything else is served from the static site assets.
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

function clean(v: unknown, max: number): string {
  return isNonEmptyString(v) ? v.trim().slice(0, max) : '';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_TO) {
    return json({ ok: false, error: 'Server mail is not configured.' }, 503);
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
  if (isNonEmptyString(body.website)) {
    return json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const company = clean(body.company, MAX.company);
  const message = clean(body.message, MAX.message);

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Name, email, and message are required.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    '',
    message,
  ].filter((l) => l !== null);

  const html = `
    <h2 style="margin:0 0 16px;font-family:Georgia,serif;">New website inquiry</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280;">Email</td><td>${escapeHtml(email)}</td></tr>
      ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ''}
      ${company ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">Company</td><td>${escapeHtml(company)}</td></tr>` : ''}
    </table>
    <p style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px;margin-top:16px;">${escapeHtml(message)}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      text: lines.join('\n'),
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('Resend error', res.status, errText);
    return json({ ok: false, error: 'Could not send message. Please try again or call us.' }, 502);
  }

  return json({ ok: true });
}
