import { Link } from 'react-router-dom';

interface NotFoundProps {
  title: string;
  backLink: string;
  backLabel: string;
}

export default function NotFound({ title, backLink, backLabel }: NotFoundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-2xl font-display text-monroe-dark mb-4">{title}</h1>
        <Link to={backLink} className="text-monroe-accent-dark hover:underline">
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
