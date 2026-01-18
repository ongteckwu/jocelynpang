"use client";

import React, { useRef, useEffect } from "react";

interface SectionProps {
  variant?: "primary" | "surface";
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale" | "none";
  stagger?: boolean;
}

// Module-level check to avoid re-render on mount (rerender-lazy-state-init)
// This runs once when the module is loaded, not on every component render
let supportsScrollTimeline: boolean | null = null;
function getSupportsScrollTimeline(): boolean {
  if (supportsScrollTimeline === null) {
    supportsScrollTimeline = typeof CSS !== "undefined" && CSS.supports("animation-timeline", "view()");
  }
  return supportsScrollTimeline;
}

export function Section({
  variant = "primary",
  children,
  className = "",
  id,
  animation = "fade-up",
  stagger = false,
}: SectionProps) {
  const bgClass = variant === "primary" ? "bg-[var(--bg-primary)]" : "bg-[var(--bg-surface)]";
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Fallback IntersectionObserver for Safari/Firefox
  useEffect(() => {
    if (getSupportsScrollTimeline() || animation === "none") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, [animation]);

  // Map animation prop to CSS class
  const getAnimationClass = () => {
    if (animation === "none") return "";
    const classMap: Record<string, string> = {
      "fade-up": "scroll-fade-up",
      "slide-left": "scroll-slide-left",
      "slide-right": "scroll-slide-right",
      "scale": "scroll-scale-up",
    };
    return classMap[animation] || "scroll-fade-up";
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${bgClass} py-16 md:py-24 border-b border-[var(--border)] last:border-b-0 ${className}`}
    >
      <div
        ref={contentRef}
        className={`max-w-[var(--max-width)] mx-auto px-6 w-full ${getAnimationClass()} ${stagger ? "scroll-stagger" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
