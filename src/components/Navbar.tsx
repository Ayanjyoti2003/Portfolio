"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo cursor-pointer gradient-text" style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)'}}>
          <Link href="/">AJB.</Link>
        </div>
        <div className="nav-links">
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#experience" className="nav-link">Experience</Link>
          <Link href="#projects" className="nav-link">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
