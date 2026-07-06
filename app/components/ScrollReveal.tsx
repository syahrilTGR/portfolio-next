'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={`hidden-section ${isVisible ? 'visible' : ''}`}
      style={{ opacity: prefersReducedMotion ? 1 : undefined, transform: prefersReducedMotion ? 'none' : undefined }}
    >
      {children}
    </div>
  );
}