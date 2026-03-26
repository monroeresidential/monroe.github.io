import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';
import TeamCard from '../components/ui/TeamCard';
import { team } from '../data/team';

export default function Team() {
  useEffect(() => {
    document.title = 'Team | Monroe Residential Partners';
  }, []);

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Experienced professionals with a shared passion for building exceptional communities."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                Leadership &amp; Advisory
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark">
                Meet Our Team
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
