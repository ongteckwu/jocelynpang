import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[80vh] items-center">
      {/* Main content */}
      <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            FMCG E-commerce Consultant & Speaker
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15] tracking-tight text-[var(--text-primary)]">
            Most e-commerce strategies look right until they break at scale.
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

        {/* Credibility signals - quiet, text-based */}
        <div className="pt-8 mt-4 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-secondary)]">
            Based in Singapore · Working across Southeast Asia · Available for consultancy and talks
          </p>
        </div>
      </div>

      {/* Image - placeholder for real headshot */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
          {/* TODO: Replace with real professional headshot - natural light, neutral/warm background, confident pose */}
          <Image
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=1000&fit=crop&crop=faces"
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
