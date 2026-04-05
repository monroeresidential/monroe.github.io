import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

const targetMarkets = [
  { name: 'Victor-Driggs, ID', resort: 'Jackson Hole' },
  { name: 'Hailey-Ketchum, ID', resort: 'Sun Valley' },
  { name: 'Colorado Springs-Carbondale, CO', resort: 'Aspen-Snowmass' },
  { name: 'Frasier-Tabernash, CO', resort: 'Winter Park' },
  { name: 'Eagle-Avon, CO', resort: 'Vail-Beaver Creek' },
  { name: 'Steamboat Springs, CO', resort: '' },
  { name: 'Summit County, CO', resort: 'Breckenridge, Keystone, Copper Mt' },
  { name: 'Park City, UT', resort: '' },
];

const whyMonroe = [
  'Chicago Headquarters, National Reach',
  'Vertically Integrated Development Platform',
  'Focus on Multifamily Residential Excellence',
  'Disciplined, Data-Driven Investment Strategy',
  'Long-Term Partnerships Built on Trust and Results',
];

const marketRegions = [
  {
    title: 'Chicago & the Midwest',
    body:
      'Our home market and foundation, where we leverage deep regional knowledge, established partnerships, and an understanding of urban and suburban housing dynamics.',
  },
  {
    title: 'Mountain West Markets',
    body:
      'Select high-growth communities where demographic trends and housing demand align with our development strategy.',
  },
  {
    title: 'Targeted National Opportunities',
    body: 'Markets across the U.S. that meet our disciplined investment criteria and long-term growth outlook.',
  },
];

export default function About() {
  useEffect(() => {
    document.title = 'About | Monroe Residential Partners';
  }, []);

  return (
    <>
      <PageHero
        title="About Monroe Residential"
        subtitle="Midwest Roots. National Multifamily Expertise."
      />

      {/* About Us */}
      <section className="section-y border-b border-monroe-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6 text-balance">
                A Midwest-Based Developer
                <br />
                With a National Footprint
              </h2>
              <div className="space-y-5 text-monroe-gray-500 leading-relaxed">
                <p>
                  Founded and headquartered in Chicago, Monroe Residential Partners is a multifamily residential real estate
                  development firm driven by disciplined investment strategy, thoughtful design, and long-term value creation.
                  While our roots are firmly planted in the Midwest, our experience and active development pipeline extend
                  across multiple U.S. markets, including the Mountain West and other high-growth regions.
                </p>
                <p>
                  We approach every project with a deep understanding of local market dynamics, combining Chicago-born real
                  estate fundamentals with a national perspective on housing demand, design trends, and operational
                  performance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative lg:pl-4">
                <div className="aspect-[4/3] bg-monroe-cream overflow-hidden">
                  <img
                    src="/assets/projects/teton-flats.webp"
                    alt="Teton Flats - Monroe Residential"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="hidden lg:block absolute -bottom-5 -right-1 w-full h-full border-2 border-monroe-accent/25 -z-10 pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach + Capabilities */}
      <section className="section-y bg-monroe-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <header className="text-center max-w-3xl mx-auto">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Our Approach
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-8 text-balance">
                Integrated Expertise. Consistent Execution.
              </h2>
              <div className="space-y-5 text-monroe-gray-500 leading-relaxed text-left md:text-center md:[&>p]:max-w-2xl md:[&>p]:mx-auto">
                <p>
                  Monroe Residential Partners operates through a vertically integrated platform, allowing our team to oversee
                  the full lifecycle of each project&mdash;from acquisition and development through construction, lease-up, and
                  long-term asset management.
                </p>
                <p>
                  By keeping core functions in-house, we maintain accountability, cost control, and quality across every phase
                  of development, ensuring each community is positioned for sustained performance.
                </p>
              </div>
            </header>
          </AnimatedSection>

          <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-monroe-gray-300/40">
            <AnimatedSection>
              <h3 className="font-display text-xl md:text-2xl font-medium text-monroe-dark text-center mb-12 md:mb-14">
                Capabilities Across the Lifecycle
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {services.map((service, i) => (
                <AnimatedSection key={service.id} delay={i * 80}>
                  <ServiceCard service={service} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Develop */}
      <section className="section-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <header className="max-w-3xl mb-12 md:mb-16">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                What We Develop
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6 text-balance">
                Multifamily Communities Designed for Long-Term Value
              </h2>
              <p className="text-monroe-gray-500 text-lg leading-relaxed">
                Our portfolio and development pipeline focus on well-located multifamily residential communities that respond
                to the needs of modern renters while supporting long-term investment objectives.
              </p>
              <p className="mt-8 text-sm font-semibold tracking-wider uppercase text-monroe-dark">
                We actively pursue opportunities in
              </p>
            </header>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {marketRegions.map((region, i) => (
              <AnimatedSection key={region.title} delay={i * 100}>
                <article className="group h-full p-8 bg-white border border-monroe-gray-100 transition-all duration-500 hover:border-monroe-accent/30 hover:shadow-lg md:min-h-[220px] flex flex-col">
                  <h3 className="font-display text-lg font-medium text-monroe-dark mb-3 text-balance">{region.title}</h3>
                  <p className="text-sm text-monroe-gray-500 leading-relaxed flex-1">{region.body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy + Why Monroe */}
      <section className="section-y bg-monroe-cream border-t border-monroe-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <AnimatedSection className="lg:col-span-6">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6 text-balance">
                Local Insight, National Perspective
              </h2>
              <p className="text-monroe-gray-500 text-lg leading-relaxed">
                As a Chicago-based firm, Monroe Residential Partners brings Midwest pragmatism, transparency, and
                relationship-driven execution to every project&mdash;regardless of location. We believe successful multifamily
                development requires more than capital; it demands market intelligence, community awareness, and a commitment
                to quality that endures beyond stabilization.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="lg:col-span-6">
              <div className="bg-white border border-monroe-gray-100 p-8 md:p-10 lg:sticky lg:top-28">
                <h3 className="font-display text-xl md:text-2xl font-medium text-monroe-dark mb-8">
                  Why Monroe Residential Partners
                </h3>
                <ul className="space-y-5">
                  {whyMonroe.map((item) => (
                    <li key={item} className="flex gap-4 text-monroe-gray-500 text-sm leading-snug">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Acquisition Criteria */}
      <section className="section-y">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <AnimatedSection>
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Strategic Focus
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6 text-balance">
                Acquisition Criteria
              </h2>
              <p className="text-monroe-gray-500 leading-relaxed mb-8">
                In select Mountain West and resort-adjacent markets, we pursue multifamily opportunities in supply-constrained
                submarkets&mdash;with an emphasis on workforce housing in bedroom communities near major destinations. These
                criteria complement our broader national pipeline while keeping execution disciplined.
              </p>
              <ul className="space-y-3.5 text-sm text-monroe-gray-500">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent" aria-hidden />
                  <span>1&ndash;10+ acres</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent" aria-hidden />
                  <span>Property value up to $5,000,000 (excluding dev. costs)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent" aria-hidden />
                  <span>Zoned or viable path to entitlements for 100+ units (40+ minimum)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent" aria-hidden />
                  <span>Water rights required</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-monroe-accent" aria-hidden />
                  <span>Within 45-minute commute to major resort</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="lg:pt-1">
                <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Markets
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-monroe-dark mb-8">
                  Target Markets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {targetMarkets.map((market) => (
                    <div
                      key={market.name}
                      className="p-4 bg-monroe-cream border border-monroe-gray-100 hover:border-monroe-accent/25 transition-colors duration-300"
                    >
                      <div className="font-medium text-monroe-dark text-sm leading-snug">{market.name}</div>
                      {market.resort && (
                        <div className="text-xs text-monroe-gray-500 mt-1.5 leading-relaxed">{market.resort}</div>
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
