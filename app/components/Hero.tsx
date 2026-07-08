'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Blob mouse-follow animation
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const blob1 = blob1Ref.current;
    const blob2 = blob2Ref.current;
    if (!blob1 || !blob2) return;

    let animation1: Animation;
    let animation2: Animation;

    const animateBlobs = () => {
      const x = mousePos.x;
      const y = mousePos.y;

      const blob1Keyframes = [
        { transform: `translate(${x * 0.1}px, ${y * 0.1}px) scale(1)` },
        { transform: `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.05)` },
      ];
      const blob2Keyframes = [
        { transform: `translate(${-x * 0.08}px, ${-y * 0.08}px) scale(1)` },
        { transform: `translate(${-x * 0.12}px, ${-y * 0.12}px) scale(1.03)` },
      ];

      const timing: KeyframeAnimationOptions = { duration: 3000, fill: 'forwards', easing: 'ease-out' };

      animation1 = blob1.animate(blob1Keyframes, timing);
      animation2 = blob2.animate(blob2Keyframes, timing);
    };

    const raf = requestAnimationFrame(animateBlobs);
    return () => {
      cancelAnimationFrame(raf);
      animation1?.cancel();
      animation2?.cancel();
    };
  }, [mousePos, prefersReducedMotion]);

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title" suppressHydrationWarning>
      {/* Background Grid Pattern */}
      <div className="grid-pattern" aria-hidden="true" suppressHydrationWarning />

      {/* Background Blobs */}
      <div ref={blob1Ref} className="blob blob-1" aria-hidden="true" suppressHydrationWarning />
      <div ref={blob2Ref} className="blob blob-2" aria-hidden="true" suppressHydrationWarning />

      <div className={styles.heroContent}>
        <div className={styles.terminalPrefix}>
          <span className="mono badge badge-green">$ whoami</span>
        </div>
        <p className={styles.greeting}>Hello, I&apos;m</p>
        <h1 id="hero-title" className={styles.name}>
          Muhammad Syahril<br />
          <span className="gradient-text">Eka Pratama</span>
        </h1>
        <p className={styles.role}><span className="mono badge badge-amber">IoT Systems Engineer</span></p>
        <p className={styles.summary}>
          Building the bridge between hardware and software.
          Specializing in <strong>IoT</strong> and <strong>Embedded Systems</strong>.
        </p>
        <div className={styles.heroCta}>
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/assets/images/profile.webp"
          alt="Muhammad Syahril Eka Pratama"
          fill
          className={styles.profilePic}
          priority
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    </section>
  );
}