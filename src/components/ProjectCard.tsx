import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveDemoLink?: string;
  repoLink?: string;
  image?: string;
}

export default function ProjectCard({ title, description, technologies, liveDemoLink, repoLink, image }: ProjectCardProps) {
  return (
    <div className="glass-card flex flex-col gap-4 h-full" style={{ padding: '1.5rem' }}>
      {image && (
        <div style={{ width: '100%', height: '200px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '0.5rem' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1 }}>{description}</p>

      <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
        {technologies.map(tech => (
          <span key={tech} className="skill-badge" style={{ padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}>
            {tech}
          </span>
        ))}
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {liveDemoLink && (
          <Link href={liveDemoLink} target="_blank" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Live Demo
          </Link>
        )}
        {repoLink && (
          <Link href={repoLink} target="_blank" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            Source Code
          </Link>
        )}
      </div>
    </div>
  );
}
