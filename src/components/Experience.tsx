export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        Experience & Hackathons
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--card-border)', maxWidth: '300px' }}></div>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-color)' }}></div>
          <div className="flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Full Stack Web Development Intern</h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 500 }}>Future Interns</h4>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>07/2025 – 08/2025</div>
          </div>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                Developed and deployed 3 full-stack web applications using React, Next.js, Node.js, and MongoDB.
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                Implemented secure authentication using Firebase and backend APIs.
            </li>
            <li style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>▹</span>
                Optimized frontend performance and reduced load times through Next.js optimizations.
            </li>
          </ul>
        </div>

        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-secondary)' }}></div>
          <div className="flex" style={{ justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>IBM National Hackathon 2025 <span style={{ fontSize: '0.9rem', backgroundColor: 'rgba(140, 0, 255, 0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px', marginLeft: '0.5rem', verticalAlign: 'middle', border: '1px solid var(--accent-secondary)', color: '#fff' }}>Final Round</span></h3>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            Led a 4-member team to develop an AI-powered employee recognition system. Delivered a working prototype with face recognition + attendance logging in 24 hours.
          </p>
        </div>

        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-secondary)' }}></div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Smart India Hackathon</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Designed an Alumni–Student Interaction & Management Platform.
          </p>
        </div>
      </div>
    </section>
  );
}
