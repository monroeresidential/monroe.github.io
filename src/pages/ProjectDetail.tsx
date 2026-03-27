import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Monroe Residential Partners`;
    }
  }, [project]);

  // Close lightbox on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => {
        const images = project?.gallery || [];
        return prev !== null && prev < images.length - 1 ? prev + 1 : prev;
      });
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => {
        return prev !== null && prev > 0 ? prev - 1 : prev;
      });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-display text-monroe-dark mb-4">Project not found</h1>
          <Link to="/portfolio" className="text-monroe-accent-dark hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section - Full bleed image with overlay */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src={project.heroImage || project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-monroe-dark via-monroe-dark/40 to-monroe-dark/20" />

        {/* Back link */}
        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
            <AnimatedSection>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-monroe-accent-dark text-white rounded-sm mb-4">
                {project.type}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight mb-3">
                {project.name}
              </h1>
              <p className="text-xl text-white/70 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
                {project.address || project.location}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-monroe-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {project.units && (
              <div className="py-8 px-4 text-center">
                <p className="text-3xl font-display font-medium text-white">{project.units}</p>
                <p className="text-sm text-white/50 mt-1 tracking-wider uppercase">Units</p>
              </div>
            )}
            {project.sqft && (
              <div className="py-8 px-4 text-center">
                <p className="text-3xl font-display font-medium text-white">{project.sqft}</p>
                <p className="text-sm text-white/50 mt-1 tracking-wider uppercase">Sq Ft</p>
              </div>
            )}
            {project.floors && (
              <div className="py-8 px-4 text-center">
                <p className="text-3xl font-display font-medium text-white">{project.floors}</p>
                <p className="text-sm text-white/50 mt-1 tracking-wider uppercase">Floors</p>
              </div>
            )}
            {project.parking && (
              <div className="py-8 px-4 text-center">
                <p className="text-lg font-display font-medium text-white leading-tight">{project.parking}</p>
                <p className="text-sm text-white/50 mt-1 tracking-wider uppercase">Parking</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Description + Award */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Main Description */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-8 leading-tight">
                  About the Project
                </h2>
                <div className="space-y-5">
                  {(project.fullDescription || [project.description]).map((p, i) => (
                    <p key={i} className="text-monroe-gray-500 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
                {project.website && (
                  <p className="mt-8">
                    <a
                      href={`https://www.${project.website.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-monroe-accent-dark font-medium hover:underline"
                    >
                      Visit {project.website}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </p>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar with quick info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={150}>
                <div className="bg-monroe-cream p-8 rounded-sm">
                  <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent-dark mb-6">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                      <dt className="text-monroe-gray-500">Location</dt>
                      <dd className="text-monroe-dark font-medium">{project.location}</dd>
                    </div>
                    <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                      <dt className="text-monroe-gray-500">Type</dt>
                      <dd className="text-monroe-dark font-medium">{project.type}</dd>
                    </div>
                    {project.units && (
                      <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                        <dt className="text-monroe-gray-500">Units</dt>
                        <dd className="text-monroe-dark font-medium">{project.units}</dd>
                      </div>
                    )}
                    {project.sqft && (
                      <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                        <dt className="text-monroe-gray-500">Size</dt>
                        <dd className="text-monroe-dark font-medium">{project.sqft} sq ft</dd>
                      </div>
                    )}
                    {project.floors && (
                      <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                        <dt className="text-monroe-gray-500">Floors</dt>
                        <dd className="text-monroe-dark font-medium">{project.floors}</dd>
                      </div>
                    )}
                    {project.yearBuilt && (
                      <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                        <dt className="text-monroe-gray-500">Year Built</dt>
                        <dd className="text-monroe-dark font-medium">{project.yearBuilt}</dd>
                      </div>
                    )}
                    {project.commercialSpace && (
                      <div className="flex justify-between border-b border-monroe-gray-100 pb-3">
                        <dt className="text-monroe-gray-500">Commercial</dt>
                        <dd className="text-monroe-dark font-medium">{project.commercialSpace}</dd>
                      </div>
                    )}
                  </dl>
                  {project.historicDesignation && (
                    <div className="mt-6 pt-6 border-t border-monroe-gray-100">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-monroe-accent-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                        </svg>
                        <p className="text-sm text-monroe-gray-500 leading-relaxed">{project.historicDesignation}</p>
                      </div>
                    </div>
                  )}
                  {project.award && (
                    <div className="mt-8 pt-6 border-t border-monroe-gray-100">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-monroe-accent-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9.75H12m4.5 9V9.75m0 0a3.375 3.375 0 00-3.375-3.375H12m0 0V3m0 3.375A3.375 3.375 0 008.625 9.75H12m0-3.375V3" />
                        </svg>
                        <p className="text-sm text-monroe-gray-500 leading-relaxed">{project.award}</p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-monroe-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-12">
                Gallery
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="w-full group relative overflow-hidden aspect-[4/3] cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`${project.name} - Photo ${i + 1}`}
                      width={600}
                      height={450}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-monroe-dark/0 group-hover:bg-monroe-dark/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Amenities */}
      {(project.apartmentAmenities || project.communityAmenities) && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-monroe-dark mb-16">
                Amenities & Features
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {project.apartmentAmenities && (
                <AnimatedSection delay={100}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent-dark mb-8 flex items-center gap-3">
                      <span className="w-8 h-px bg-monroe-accent-dark" />
                      Apartment Amenities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {project.apartmentAmenities.map((amenity, i) => (
                        <li key={i} className="flex items-start gap-3 text-monroe-gray-500">
                          <svg className="w-5 h-5 text-monroe-accent-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {project.communityAmenities && (
                <AnimatedSection delay={200}>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-monroe-accent-dark mb-8 flex items-center gap-3">
                      <span className="w-8 h-px bg-monroe-accent-dark" />
                      Community Amenities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {project.communityAmenities.map((amenity, i) => (
                        <li key={i} className="flex items-start gap-3 text-monroe-gray-500">
                          <svg className="w-5 h-5 text-monroe-accent-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA / Other Projects */}
      <section className="py-24 bg-monroe-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Explore More Projects
            </h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto">
              Discover our portfolio of multifamily and mixed-use developments across the United States.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-monroe-accent-dark text-white text-sm font-medium tracking-wider uppercase hover:bg-monroe-accent transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {lightboxIndex < project.gallery.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <img
            src={project.gallery[lightboxIndex]}
            alt={`${project.name} - Photo ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightboxIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </>
  );
}
