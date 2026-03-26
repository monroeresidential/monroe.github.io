import { useEffect } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';
import TeamCard from '../components/ui/TeamCard';
import { team } from '../data/team';

const leadership = team.filter((m) => m.role === 'leadership');
const advisors = team.filter((m) => m.role === 'advisor');

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

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                Leadership
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark">
                Meet Our Team
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 100}>
                <TeamCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      {advisors.length > 0 && (
        <section className="py-24 bg-monroe-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                  Advisory
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark">
                  Advisors
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-sm mx-auto">
              {advisors.map((member, i) => (
                <AnimatedSection key={member.id} delay={i * 100}>
                  <TeamCard member={member} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
