'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects', mono: true },
  { href: '#awards', label: 'Awards', mono: true },
  { href: '#other', label: 'Other' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact', primary: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.logo}>
        syahril<span className={styles.logoAccent}>/</span>
      </div>

      <button
        className={styles.navToggle}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="nav-links"
        aria-label="Toggle menu"
      >
        <span className={styles.hamburger} />
      </button>

      <ul id="nav-links" className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${styles.navLink} ${item.primary ? styles.navPrimary : ''} ${item.mono ? styles.navMono : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}