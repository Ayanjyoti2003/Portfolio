export default function About() {
  return (
    <section id="about" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        About Me
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--card-border)', maxWidth: '300px' }}></div>
      </h2>

      <div style={{ marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px' }}>
        <p style={{ marginBottom: '1rem' }}>
          Hello! I'm Ayan, a passionate Full Stack and Mobile Application Developer from Assam, India. I enjoy building seamless, AI-powered solutions and highly performant applications that solve real-world problems. 
        </p>
        <p>
          My journey in software development has led me to work with a wide array of technologies, from creating secure backend RESTful APIs to developing cross-platform mobile apps. I thrive in fast-paced environments like hackathons, and I'm currently pursuing my B.Tech in Computer Science at The Assam Kaziranga University.
        </p>
      </div>
      
      <div className="grid-cols-2">
        <div className="glass-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Bachelor of Technology in Computer Science</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 500 }}>The Assam Kaziranga University</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                <span>2022 - Present | Jorhat, Assam</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>CGPA: 7.9/10</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Certifications</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                Artificial Intelligence Fundamentals – IBM SkillsBuild (2026)
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                MongoDB Basics for Students – MongoDB (2025)
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                From Relational Model (SQL) to MongoDB Document Model (2025)
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                Angular & JavaScript Development – Infosys Springboard
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
