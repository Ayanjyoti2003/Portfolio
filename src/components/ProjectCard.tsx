import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveDemoLink?: string;
  repoLink?: string;
  image?: string;
  images?: string[];
  apkLink?: string;
}

export default function ProjectCard({ title, description, technologies, liveDemoLink, repoLink, image, images, apkLink }: ProjectCardProps) {
  return (
    <div className="glass-card flex flex-col gap-4 h-full" style={{ padding: '1.5rem' }}>
      {images && images.length > 0 ? (
        <div style={{ display: 'flex', gap: '0.5rem', width: '100%', height: '200px', marginBottom: '0.5rem' }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ flex: 1, borderRadius: '0.5rem', overflow: 'hidden' }}>
              <img src={img} alt={`${title} screenshot ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          ))}
        </div>
      ) : image ? (
        <div style={{ width: '100%', height: '200px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '0.5rem' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      ) : null}
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
        {apkLink && (
          <Link href={apkLink} download target="_blank" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download APK
          </Link>
        )}
      </div>
    </div>
  );
}
