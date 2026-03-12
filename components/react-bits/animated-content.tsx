"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimatedContent({
  children,
  distance = 30,
  direction = "up",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const axis = direction === "left" || direction === "right" ? "X" : "Y";
  const sign =
    direction === "up" || direction === "left" ? 1 : -1;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0,0,0)"
          : `translate${axis}(${sign * distance}px)`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
