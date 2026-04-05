import { useEffect, useState, type FormEvent } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Monroe Residential Partners';
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, company }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setCompany('');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or reach us by phone.');
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Development, investment, and partnership inquiries from Chicago to markets nationwide."
      />

      <section className="section-y border-b border-monroe-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <AnimatedSection>
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Get in touch
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6 text-balance">
                Let&rsquo;s talk about what you&rsquo;re building
              </h2>
              <div className="space-y-4 text-monroe-gray-500 leading-relaxed">
                <p>
                  Whether you&rsquo;re exploring development opportunities, evaluating investment alignments, or want to
                  learn more about our national multifamily platform, we welcome the conversation.
                </p>
                <p>
                  Use the form and we&rsquo;ll route your message to our team. For urgent matters, you can also reach us
                  directly by phone.
                </p>
              </div>
              <div className="mt-10">
                <p className="text-sm font-semibold tracking-wider uppercase text-monroe-dark mb-2">Phone</p>
                <a
                  href="tel:+13122964855"
                  className="text-lg text-monroe-accent-dark font-medium hover:underline"
                >
                  +1 (312) 296-4855
                </a>
                <p className="mt-4 text-sm text-monroe-gray-500">
                  Monday &ndash; Friday, 7:00 AM &ndash; 6:00 PM CST
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-monroe-cream border border-monroe-gray-100 p-8 md:p-10">
                {status === 'success' ? (
                  <p className="text-monroe-gray-700 text-lg leading-relaxed" role="status">
                    Thank you. Your message has been sent. We&rsquo;ll get back to you as soon as we can.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <input
                      type="text"
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-monroe-dark mb-1.5">
                        Name <span className="text-monroe-accent-dark">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-monroe-gray-300 bg-white text-monroe-dark text-sm focus:outline-none focus:ring-2 focus:ring-monroe-accent/40 focus:border-monroe-accent"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-monroe-dark mb-1.5">
                        Email <span className="text-monroe-accent-dark">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-monroe-gray-300 bg-white text-monroe-dark text-sm focus:outline-none focus:ring-2 focus:ring-monroe-accent/40 focus:border-monroe-accent"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-monroe-dark mb-1.5">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-monroe-gray-300 bg-white text-monroe-dark text-sm focus:outline-none focus:ring-2 focus:ring-monroe-accent/40 focus:border-monroe-accent"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-monroe-dark mb-1.5">
                        Message <span className="text-monroe-accent-dark">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 border border-monroe-gray-300 bg-white text-monroe-dark text-sm focus:outline-none focus:ring-2 focus:ring-monroe-accent/40 focus:border-monroe-accent resize-y min-h-[140px]"
                      />
                    </div>
                    {status === 'error' && errorMessage && (
                      <p className="text-sm text-red-700" role="alert">
                        {errorMessage}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-8 py-3 bg-monroe-accent-dark text-white text-sm font-medium tracking-wider uppercase hover:bg-monroe-accent-dark/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
