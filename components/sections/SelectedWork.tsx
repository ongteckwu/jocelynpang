import Image from "next/image";

export function SelectedWork() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Section header */}
      <div className="max-w-xl">
        <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-4 block">
          Selected Work
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1]">
          Building FMCG commerce across <em className="text-[var(--brown-dark)]">Southeast Asia</em>
        </h2>
      </div>

      {/* Case Study 1: Multi-Market Launch (OATSIDE story) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            alt="Plant-based FMCG brand digital commerce dashboard for Malaysia, Philippines and Vietnam markets"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            Plant-based FMCG Brand
          </span>
          <h3 className="text-3xl md:text-4xl font-serif">
            Zero to growth pillar in 6 months
          </h3>

          <div className="flex flex-col gap-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              The brand was entering digital commerce across Southeast Asia. No existing channels. Different platform ecosystems per market. The brief was speed without sacrificing execution quality.
            </p>
            <p>
              Built and launched digital commerce in Malaysia, Philippines, and Vietnam. Stood up social commerce, affiliate, and content selling capabilities. Aligned local teams and partners.
            </p>
            <p className="text-[var(--text-primary)] font-medium">
              All three markets now operate as growth pillars. The capabilities transferred to local teams.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* Case Study 2: Category Leadership (Blackmores story) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="flex flex-col gap-6 lg:order-2">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            Health & Wellness Brand
          </span>
          <h3 className="text-3xl md:text-4xl font-serif">
            From underperformance to category leader
          </h3>

          <div className="flex flex-col gap-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              When I took over, the eContent score was under 10%. Online contribution was flat. Distribution was limited to a handful of channels.
            </p>
            <p>
              Built 10+ new distribution channels that didn't exist before. Fixed the fundamentals in 3 months. Created a playbook that other regional markets adapted.
            </p>
            <p className="text-[var(--text-primary)] font-medium">
              +60% category over-indexing in Vitamins & Supplements. Online contribution grew by 8 percentage points.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            alt="Health and wellness e-commerce analytics showing category leadership growth in vitamins and supplements"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* Case Study 3: Declining Category Growth (Nestle story) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop"
            alt="Infant nutrition e-commerce growth analytics showing category over-indexing in declining market"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            Infant Nutrition Brand
          </span>
          <h3 className="text-3xl md:text-4xl font-serif">
            Growth in a shrinking market
          </h3>

          <div className="flex flex-col gap-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            <p>
              Baby formula was declining -2.7% year-on-year. The category had headwinds. Parallel imports were diluting brand presence on key platforms.
            </p>
            <p>
              Drove new user acquisition at scale. Eliminated parallel imports on key accounts. Negotiated prime campaign visibility during mega sales.
            </p>
            <p className="text-[var(--text-primary)] font-medium">
              +45% category over-indexing for core brand. Proved digital could offset offline decline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
