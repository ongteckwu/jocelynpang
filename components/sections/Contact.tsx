import { Mail, ArrowUpRight } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

export function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-4 block">
            Work With Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
            Ready to <em className="text-[var(--brown-dark)]">scale smarter</em>?
          </h2>
        </div>
        <div className="lg:col-span-4 lg:flex lg:items-end">
          <p className="text-lg text-[var(--text-secondary)]">
            Whether you need strategic guidance or a compelling speaker for your next event, let's start a conversation.
          </p>
        </div>
      </div>

      {/* Main Content: Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: What I Offer */}
        <div className="flex flex-col gap-8">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">What I Offer</span>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2.5 shrink-0" aria-hidden="true"></span>
              <div>
                <span className="font-medium text-[var(--text-primary)]">Strategic Consultancy</span>
                <p className="text-sm text-[var(--text-secondary)] mt-1">E-commerce strategy, marketplace optimization, and growth frameworks for FMCG brands scaling across SEA.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2.5 shrink-0" aria-hidden="true"></span>
              <div>
                <span className="font-medium text-[var(--text-primary)]">Keynotes & Panels</span>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Insights on digital commerce challenges and what actually works at scale in Southeast Asia.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2.5 shrink-0" aria-hidden="true"></span>
              <div>
                <span className="font-medium text-[var(--text-primary)]">Coffee Chat</span>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Let's connect over coffee to discuss ideas, share insights, or explore potential collaboration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Methods + Location */}
        <div className="flex flex-col gap-10">
          {/* Get in Touch */}
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">Get in Touch</span>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:jocelynpang.ec@gmail.com"
                className="group flex items-center justify-between py-4 border-b border-[var(--border)] hover:border-[var(--brown-light)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[var(--brown-dark)]" />
                  <div>
                    <span className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--brown-dark)] transition-colors">
                      jocelynpang.ec@gmail.com
                    </span>
                    <p className="text-sm text-[var(--text-secondary)]">I typically respond within 48 hours</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--brown-dark)] transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/jocelynpang"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-[var(--border)] hover:border-[var(--brown-light)] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <LinkedInIcon className="w-5 h-5 text-[var(--brown-dark)]" />
                  <div>
                    <span className="text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--brown-dark)] transition-colors">
                      LinkedIn
                    </span>
                    <p className="text-sm text-[var(--text-secondary)]">Let's connect professionally</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--brown-dark)] transition-colors" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">Based In</span>
            <p className="text-[var(--text-primary)]">Singapore, working across Southeast Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
