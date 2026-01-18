"use client";

import React, { useCallback, useMemo } from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
}

// Hoisted outside component to prevent recreation on each render (rendering-hoist-jsx)
const ARROW_ICON = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const BASE_STYLES = "inline-flex items-center justify-center rounded-xl px-8 py-4 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brown-light)] focus:ring-offset-2";

const VARIANT_STYLES = {
  primary: "bg-[var(--brown-light)] text-white hover:bg-[var(--brown-medium)]",
  secondary: "bg-transparent border border-[var(--brown-light)] text-[var(--brown-dark)] hover:bg-[var(--brown-light)]/10",
} as const;

export function Button({ variant = "primary", className = "", children, href, ...props }: ButtonProps) {
  // Memoized smooth scroll handler (rerender optimization)
  const handleHashClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = (e.currentTarget.getAttribute("href") || "").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 200;
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const content = useMemo(() => (
    <span className="flex items-center gap-2">
      {children}
      {variant === "primary" && ARROW_ICON}
    </span>
  ), [children, variant]);

  const styles = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} onClick={handleHashClick} className={styles}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {content}
    </button>
  );
}
