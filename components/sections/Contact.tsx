"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    enquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Memoized with useCallback to prevent recreation on each render (rerender-functional-setstate)
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", enquiryType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }, [formData]);

  // Memoized change handler using functional setState for stable reference (rerender-functional-setstate)
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const isFormComplete = formData.name && formData.email && formData.enquiryType && formData.message;

  return (
    <div className="flex flex-col gap-16 md:gap-24">
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

      {/* Two columns: Form left, Email right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Combined Form */}
        <div className="flex flex-col">
          <div className="mb-8 pb-8 border-b border-[var(--border)]">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-2">Send an Enquiry</h3>
            <p className="text-[var(--text-secondary)]">
              For consultancy projects or speaking engagements. I'd love to hear what you're working on.
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col gap-4 py-8">
              <p className="text-xl font-serif text-[var(--text-primary)]">Thank you for reaching out!</p>
              <p className="text-[var(--text-secondary)]">I'll get back to you within 48 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[var(--brown-dark)] underline underline-offset-4 text-left"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-[var(--text-primary)]">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your organisation"
                    className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors placeholder:text-[var(--text-secondary)]/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="enquiryType" className="text-sm font-medium text-[var(--text-primary)]">I'm interested in</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors text-[var(--text-primary)]"
                  >
                    <option value="" disabled className="text-[var(--text-secondary)]/50">Select one</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="speaking">Speaking engagement</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">Tell me more</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What challenge are you facing, or what event are you planning?"
                  className="px-4 py-3 border-b border-[var(--border)] bg-transparent focus:outline-none focus:border-[var(--brown-light)] transition-colors resize-none placeholder:text-[var(--text-secondary)]/50"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again or email me directly.</p>
              )}

              <div className="mt-4">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className={isFormComplete ? "!bg-[var(--brown-dark)] hover:!bg-[var(--brown-medium)]" : ""}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Email & Quick Info */}
        <div className="flex flex-col">
          <div className="mb-8 pb-8 border-b border-[var(--border)]">
            <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-2">Prefer Email?</h3>
            <p className="text-[var(--text-secondary)]">
              Drop me a line directly. I typically respond within 48 hours.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Email display */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">Email</span>
              <a
                href="mailto:jocelynpang95@gmail.com"
                className="text-xl md:text-2xl font-serif text-[var(--text-primary)] hover:text-[var(--brown-dark)] transition-colors break-all"
              >
                jocelynpang95@gmail.com
              </a>
            </div>

            {/* What I can help with */}
            <div className="flex flex-col gap-4 pt-8 border-t border-[var(--border)]">
              <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">What I Offer</span>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2 shrink-0" aria-hidden="true"></span>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Strategic Consultancy</span>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">E-commerce strategy, marketplace optimization, and growth frameworks for FMCG brands scaling across SEA.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2 shrink-0" aria-hidden="true"></span>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Keynotes & Panels</span>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">Insights on digital commerce challenges and what actually works at scale in Southeast Asia.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brown-light)] mt-2 shrink-0" aria-hidden="true"></span>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Coffee Chat</span>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">Let's connect over coffee to discuss ideas, share insights, or explore potential collaboration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-3 pt-8 border-t border-[var(--border)]">
              <span className="text-sm font-medium tracking-widest uppercase text-[var(--brown-light)]">Based In</span>
              <p className="text-[var(--text-primary)]">Singapore, working across Southeast Asia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
