import React from "react";

export function Footer() {
  return (
    <footer className="bg-[var(--brown-dark)] py-12">
      <div className="max-w-[var(--max-width)] mx-auto px-6 w-full">
        {/* Tagline */}
        <p className="text-white/70 font-serif text-xl md:text-2xl mb-12">
          Building durable commerce systems across Southeast Asia.
        </p>

        {/* Bottom line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Jocelyn Pang</p>
            <span className="hidden md:inline">·</span>
            <p>Based in Singapore</p>
          </div>
          <a
            href="https://www.linkedin.com/in/jocelynpangjl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
