import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Speaking() {
  const topics = [
    "Why most FMCG E-commerce strategies break at scale",
    "The hidden cost of performance-led growth",
    "Operating digital commerce across uneven SEA markets",
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-4 block">
            Speaking
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
            Share insights with your team
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-xl mb-4">
            I speak to leadership teams and senior operators about what actually breaks at scale in FMCG digital commerce.
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Regional FMCG teams · E-commerce leadership · Partner summits
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col">
          <span className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)] mb-8">
            Topics I cover
          </span>
          <div className="flex flex-col gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="group flex gap-6 items-baseline pb-8 border-b border-[var(--border)] last:border-b-0 last:pb-0">
                <span className="text-sm font-medium text-[var(--brown-light)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-[var(--text-primary)] group-hover:text-[var(--brown-dark)] transition-colors">
                  {topic}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button variant="primary" href="#contact">Invite me to speak</Button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 lg:mt-24">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
            {/* TODO: Replace with real speaking photo */}
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=1000&fit=crop"
              alt="Jocelyn Pang speaking at FMCG leadership conference about digital commerce strategy"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-[var(--text-secondary)] italic">
            Leadership teams & senior operators
          </p>
        </div>
      </div>
    </div>
  );
}
