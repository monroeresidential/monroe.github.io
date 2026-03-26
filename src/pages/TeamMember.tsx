import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import { team } from '../data/team';

export default function TeamMember() {
  const { id } = useParams<{ id: string }>();
  const member = team.find((m) => m.id === id);

  useEffect(() => {
    if (member) {
      document.title = `${member.name} | Monroe Residential Partners`;
    }
  }, [member]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-display text-monroe-dark mb-4">Team member not found</h1>
          <Link to="/team" className="text-monroe-accent hover:underline">Back to Team</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-monroe-dark pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Team
          </Link>

          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <AnimatedSection>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="flex-1">
                <p className="text-monroe-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
                  {member.role === 'advisor' ? 'Advisor' : 'Leadership'}
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-medium text-white leading-tight mb-2">
                  {member.name}
                </h1>
                <p className="text-xl text-white/60 mb-8">
                  {member.title}
                </p>

                <div className="space-y-4">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Details */}
      {(member.education || member.affiliations || member.linkedin) && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {member.education && (
                <AnimatedSection>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent mb-4">
                      Education
                    </h3>
                    <ul className="space-y-3">
                      {member.education.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-monroe-gray-500 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {member.affiliations && (
                <AnimatedSection delay={100}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent mb-4">
                      Affiliations
                    </h3>
                    <ul className="space-y-3">
                      {member.affiliations.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-monroe-gray-500 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-monroe-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {member.linkedin && (
                <AnimatedSection delay={200}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent mb-4">
                      Connect
                    </h3>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-monroe-gray-500 hover:text-monroe-dark transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
