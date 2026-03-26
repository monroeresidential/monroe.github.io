import { useEffect, useState } from 'react';
import PageHero from '../components/layout/PageHero';
import AnimatedSection from '../components/ui/AnimatedSection';
import FilterBar from '../components/ui/FilterBar';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const filters = ['All', 'Mixed Use', 'Residential'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Portfolio | Monroe Residential Partners';
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="Ground-up and adaptive reuse multifamily and mixed-use developments across the United States."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-12">
              <FilterBar
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-monroe-gray-500">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
