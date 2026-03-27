import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/portfolio/${project.id}`} className="group relative overflow-hidden block aspect-[4/3]">
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-monroe-dark/90 via-monroe-dark/20 to-transparent transition-opacity duration-500" />

      {/* Type Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-monroe-accent-dark text-white rounded-sm">
          {project.type}
        </span>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-semibold text-white mb-1">
          {project.name}
        </h3>
        <p className="text-white/70 text-sm">
          {project.location}
          {project.units && ` \u2022 ${project.units} Units`}
        </p>
        <p className="text-white/50 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
