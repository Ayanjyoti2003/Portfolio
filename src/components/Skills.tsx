import SkillBadge from './SkillBadge';

export default function Skills() {
  const languages = ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS'];
  const frontend = ['React.js', 'Next.js', 'React Native (Expo)', 'Tailwind CSS'];
  const backend = ['Node.js', 'Express.js', 'FastAPI'];
  const databases = ['MongoDB', 'MySQL', 'Firebase (Firestore)'];
  const tools = ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Expo'];
  const apisAuth = ['REST APIs', 'API Integration', 'Firebase Auth', 'Google Sign-In', 'JWT Authentication'];

  return (
    <section id="skills" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        Skills & Technologies
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--card-border)', maxWidth: '300px' }}></div>
      </h2>

      <div className="grid-cols-2" style={{ gap: '2rem' }}>
        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Languages & Core</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {languages.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Frontend</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {frontend.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Backend</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {backend.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Databases</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {databases.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Tools & Dev Platforms</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>APIs & Authentication</h3>
          <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {apisAuth.map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
