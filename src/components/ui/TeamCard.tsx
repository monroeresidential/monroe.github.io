import { Link } from 'react-router-dom';
import type { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Link to={`/team/${member.id}`} className="group text-center block">
      <div className="relative overflow-hidden aspect-[3/4] mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-monroe-dark/0 group-hover:bg-monroe-dark/10 transition-colors duration-500" />
      </div>
      <h3 className="text-lg font-semibold text-monroe-dark group-hover:text-monroe-accent transition-colors">
        {member.name}
      </h3>
      <p className="text-sm text-monroe-gray-500 mt-1">
        {member.title}
      </p>
    </Link>
  );
}
