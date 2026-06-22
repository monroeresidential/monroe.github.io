import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

const targetMarkets = [
  { name: 'Chicago, IL', resort: 'Adaptive reuse & infill' },
  { name: 'Grand Rapids, MI', resort: 'Adaptive reuse & infill' },
  { name: 'Victor-Driggs, ID', resort: 'Jackson Hole' },
  { name: 'Hailey-Ketchum, ID', resort: 'Sun Valley' },
  { name: 'Colorado Springs-Carbondale, CO', resort: 'Aspen-Snowmass' },
  { name: 'Frasier-Tabernash, CO', resort: 'Winter Park' },
  { name: 'Eagle-Avon, CO', resort: 'Vail-Beaver Creek' },
  { name: 'Steamboat Springs, CO', resort: '' },
  { name: 'Summit County, CO', resort: 'Breckenridge, Keystone, Copper Mt' },
  { name: 'Park City, UT', resort: '' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About | Monroe Residential Partners';
  }, []);

  return (
    <>
      <PageHero
        title="About Monroe Residential"
        subtitle="Inspirational design and uncompromised quality since day one."
      />

      {/* Overview */}
      <section className="section-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6">
                An Industry Leader in Multifamily Development
              </h2>
              <div className="space-y-4 text-monroe-gray-500 leading-relaxed">
                <p>
                  Monroe Residential Partners is a vertically integrated real estate development firm based in Chicago, Illinois. We are recognized as an industry leader with a half-century of combined experience in the multifamily sector.
                </p>
                <p>
                  Our focus on inspirational design and uncompromised quality has led to the successful acquisition, development, and redevelopment of over 30,000 apartments and condominiums across the United States.
                </p>
                <p>
                  We specialize in ground-up construction and adaptive reuse of multifamily and mixed-use apartment projects, delivering boutique-style luxury communities that set the standard in their markets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] bg-monroe-cream overflow-hidden">
                  <img
                    src="/assets/projects/teton-flats.webp"
                    alt="Teton Flats - Monroe Residential"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Accent border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-monroe-accent/30 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-y bg-monroe-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                What We Do
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark">
                Our Capabilities
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 100}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Criteria */}
      <section className="section-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Strategic Focus
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6">
                Acquisition Criteria
              </h2>
              <div className="space-y-4 text-monroe-gray-500 leading-relaxed">
                <p>
                  We pursue two complementary strategies: workforce housing in supply-constrained mountain-west markets near major resorts, and multifamily acquisitions in Chicago&mdash;including the adaptive reuse of turn-of-the-century office buildings for residential conversion and ground-up infill development.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-monroe-accent-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-monroe-accent-dark flex-shrink-0" />
                  Mountain West &middot; Workforce Housing
                </h3>
                <ul className="space-y-3 text-sm text-monroe-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    1&ndash;10+ acres
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Property value up to $5,000,000 (excluding dev. costs)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Zoned or viable path to entitlements for 100+ units (40+ minimum)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Water rights required
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Within 45-minute commute to major resort
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-monroe-accent-dark mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-monroe-accent-dark flex-shrink-0" />
                  Chicago &middot; Adaptive Reuse &amp; Infill
                </h3>
                <ul className="space-y-3 text-sm text-monroe-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Adaptive reuse of turn-of-the-century office buildings for residential conversion
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Ground-up infill development sites
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-1.5 flex-shrink-0" />
                    Downtown core and established neighborhood locations
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-lg font-semibold text-monroe-dark mb-6">
                  Target Markets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {targetMarkets.map((market) => (
                    <div
                      key={market.name}
                      className="p-4 bg-monroe-cream border border-monroe-gray-100 hover:border-monroe-accent/30 transition-colors duration-300"
                    >
                      <div className="font-medium text-monroe-dark text-sm">
                        {market.name}
                      </div>
                      {market.resort && (
                        <div className="text-xs text-monroe-gray-500 mt-1">
                          {market.resort}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
