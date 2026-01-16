"use client";

import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Header - large, impactful */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
            Let's build something <em className="text-[var(--brown-dark)]">durable</em>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:flex lg:items-end">
          <p className="text-lg text-[var(--text-secondary)]">
            If you're scaling across markets or rebuilding a digital growth pillar, I can help.
          </p>
        </div>
      </div>

      {/* Two paths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Consulting Form */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[var(--border)]">
            <span className="text-6xl font-serif font-bold text-[var(--brown-light)]/30">01</span>
            <div>
              <h3 className="text-2xl font-serif text-[var(--text-primary)]">Consulting</h3>
              <p className="text-sm text-[var(--text-secondary)]">Strategy & execution support</p>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-sm font-medium text-[var(--text-primary)]">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Your company"
                className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">What are you trying to solve?</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your challenges..."
                className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors resize-none placeholder:text-[var(--text-secondary)]/50"
              ></textarea>
            </div>
            <div className="mt-4">
              <Button type="submit">Send Inquiry</Button>
            </div>
          </form>
        </div>

        {/* Speaking */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[var(--border)]">
            <span className="text-6xl font-serif font-bold text-[var(--brown-light)]/30">02</span>
            <div>
              <h3 className="text-2xl font-serif text-[var(--text-primary)]">Speaking</h3>
              <p className="text-sm text-[var(--text-secondary)]">Events & leadership teams</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I speak to leadership teams and senior operators about what actually breaks at scale in digital commerce across Southeast Asia.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)]"></span>
                <span className="text-[var(--text-primary)]">Keynotes & panel discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)]"></span>
                <span className="text-[var(--text-primary)]">Executive workshops</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)]"></span>
                <span className="text-[var(--text-primary)]">Private team sessions</span>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Button variant="secondary">Book for Speaking</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
