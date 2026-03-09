"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '6rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand & Intro */}
          <div>
            <h2 className="gradient-text" style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
              Ayan Jyoti Bora
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              A passionate Full-Stack & Mobile Application Developer dedicated to building scalable and user-centric digital experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
              <li><Link href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>About</Link></li>
              <li><Link href="#skills" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Skills</Link></li>
              <li><Link href="#experience" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Experience</Link></li>
              <li><Link href="#projects" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>Projects</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Connect</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="flex gap-4" style={{ marginTop: '1rem' }}>
              <Link href="https://github.com/Ayanjyoti2003" target="_blank" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="GitHub" onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com/in/ayanjyoti-bora" target="_blank" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="LinkedIn" onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                <FaLinkedin />
              </Link>
              <a href="mailto:ayanjyotibora8@gmail.com" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="Email" onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Ayan Jyoti Bora. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
