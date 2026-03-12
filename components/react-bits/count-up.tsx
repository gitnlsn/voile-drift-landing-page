"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}

export function CountUp({
  from = 0,
  to,
  duration = 0.8,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);

      if (ref.current) {
        ref.current.textContent = String(current);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [from, to, duration]);

  useEffect(() => {
    if (hasStarted) {
      animate();
    }
  }, [hasStarted, animate]);

  return (
    <span className={className} ref={ref}>
      {from}
    </span>
  );
}
