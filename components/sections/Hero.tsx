import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[80vh] items-center">
      {/* Main content */}
      <div className="relative flex flex-col gap-8 order-2 lg:order-1 lg:pr-12">
        {/* Corner geometric accent */}
        <div className="corner-accent hidden lg:block -top-4 -left-4" aria-hidden="true" />

        {/* Subtle dot grid background */}
        <div className="dot-grid-bg absolute inset-0 -z-10 hidden lg:block" aria-hidden="true" />

        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            FMCG E-commerce Consultant & Speaker
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] tracking-tight text-[var(--text-primary)]">
            What works in one market often breaks at regional scale.
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
            I help FMCG brands build durable growth pillars across SEA.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button variant="primary" href="#contact">Book a consult</Button>
          <a
            href="#work"
            className="text-[var(--text-secondary)] hover:text-[var(--brown-dark)] transition-colors underline underline-offset-4"
          >
            View selected work
          </a>
        </div>

        {/* Signature name with geometric accents */}
        <div className="pt-8 mt-4 border-t border-[var(--border)]">
          <div className="flex items-center gap-4 mb-3">
            <span className="geometric-line" aria-hidden="true" />
            <span className="signature-text text-2xl md:text-3xl text-[var(--text-primary)]">
              Jocelyn Pang
            </span>
            <span className="geometric-line geometric-line-after" aria-hidden="true" />
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Based in Singapore · Working across Southeast Asia
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="order-1 lg:order-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] rounded-2xl overflow-hidden">
          <Image
            src="/images/hero_image.jpeg"
            alt="Jocelyn Pang - FMCG E-commerce Consultant"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
