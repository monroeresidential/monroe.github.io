import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import HeroSlideshow from '../components/ui/HeroSlideshow';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const featuredProjects = projects.filter((p) => p.featured);

const metrics = [
  { value: '70+', label: 'Years Combined Experience' },
  { value: '30,000+', label: 'Units Completed' },
  { value: '8', label: 'Target Markets' },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Monroe Residential Partners | Real Estate Development';
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 text-center px-6 pt-24 md:pt-0 max-w-5xl mx-auto">
          <p className="text-monroe-accent text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Monroe Residential Partners
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-medium text-white leading-tight">
            A Vertically Integrated Real Estate Development Company
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Focusing on boutique-style, luxury apartment communities with a combined 70 years of multifamily industry experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-monroe-accent-dark text-white text-sm font-medium tracking-wider uppercase hover:bg-monroe-accent-dark/90 transition-colors duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-white/30 text-white text-sm font-medium tracking-wider uppercase hover:bg-white/10 transition-colors duration-300"
            >
              About Monroe Residential
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-monroe-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-6">
                Building Communities That Inspire
              </h2>
              <p className="text-monroe-gray-500 text-lg leading-relaxed">
                Monroe Residential Partners is a vertically integrated real estate development firm recognized as an industry leader. With a half-century of combined experience, we specialize in inspirational design and uncompromised quality across ground-up and adaptive reuse multifamily and mixed-use projects.
              </p>
            </div>
          </AnimatedSection>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, i) => (
              <AnimatedSection key={metric.label} delay={i * 150}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-semibold text-monroe-dark">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm text-monroe-gray-500 tracking-wider uppercase">
                    {metric.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                  Selected Work
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-monroe-gray-500 hover:text-monroe-dark transition-colors"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-monroe-gray-500 hover:text-monroe-dark transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-monroe-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              We live to talk about the next great project. Let's build something extraordinary together.
            </p>
            <a
              href="tel:+13122964855"
              className="inline-flex items-center gap-3 px-8 py-3 bg-monroe-accent-dark text-white text-sm font-medium tracking-wider uppercase hover:bg-monroe-accent-dark/90 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (312) 296-4855
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
