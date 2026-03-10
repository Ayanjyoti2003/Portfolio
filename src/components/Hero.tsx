"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="section container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
          Hi, I'm <br />
          <span className="gradient-text">Ayan Jyoti Bora</span>
        </h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Full-Stack & Mobile Developer specializing in React, Node.js, and AI-powered applications.
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.8' }}>
          I build high-performance web and mobile applications with a focus on modern design, robust backend architecture, and seamless user experiences. Experienced in React, Next.js, and React Native.
        </p>

        <div className="flex gap-4" style={{ marginBottom: '3rem', flexWrap: 'wrap' }}>
          <Link href="#projects" className="btn btn-primary">
            View My Work
          </Link>
          <a href="/AYAN_JYOTI_BORA_Latest_March.pdf" download="Ayan_Jyoti_Bora_Resume.pdf" className="btn btn-outline">
            Download Resume
          </a>
          <a href="mailto:ayanjyotibora8@gmail.com" className="btn btn-outline" style={{ border: 'none' }}>
            Contact Me
          </a>
        </div>

        <div className="flex gap-6">
          <Link href="https://github.com/Ayanjyoti2003" target="_blank" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }} aria-label="GitHub">
            <FaGithub style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} />
          </Link>
          <Link href="https://linkedin.com/in/ayanjyoti-bora" target="_blank" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }} aria-label="LinkedIn">
            <FaLinkedin style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} />
          </Link>
          <a href="mailto:ayanjyotibora8@gmail.com" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }} aria-label="Email">
            <FaEnvelope style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')} />
          </a>
        </div>
      </div>
    </section>
  );
}
