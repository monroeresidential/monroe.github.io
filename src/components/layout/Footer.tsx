import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-monroe-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <img
              src="/assets/logo/MonroeFinal-headerFooterLogo.png"
              alt="Monroe Residential Partners"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              A vertically integrated real estate development company specializing in boutique-style, luxury apartment communities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Navigation
            </p>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/team', label: 'Team' },
                { to: '/portfolio', label: 'Portfolio' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Contact
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href="tel:+13122964855"
                className="block hover:text-white transition-colors"
              >
                +1 (312) 296-4855
              </a>
              <p>Monday &ndash; Friday</p>
              <p>7:00 AM &ndash; 6:00 PM CST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Monroe Residential Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
