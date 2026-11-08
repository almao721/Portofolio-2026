'use client';

import React, { useEffect, useRef } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
};

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('popup-visible');
        } else {
          element.classList.remove('popup-visible');
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="popup-reveal">
      {children}
    </div>
  );
}