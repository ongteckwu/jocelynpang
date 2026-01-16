"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
}

export function Button({ variant = "primary", className = "", children, href, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl px-8 py-4 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brown-light)] focus:ring-offset-2";

  const variants = {
    primary: "bg-[var(--brown-light)] text-white hover:bg-[var(--brown-medium)]",
    secondary: "bg-transparent border border-[var(--brown-light)] text-[var(--brown-dark)] hover:bg-[var(--brown-light)]/10",
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {variant === "primary" && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </span>
  );

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // Use plain anchor for hash links (same-page navigation)
    if (href.startsWith("#")) {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const offset = 200; // Scroll this many pixels past the top of the section
          const top = target.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      return (
        <a href={href} onClick={handleClick} className={styles}>
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
