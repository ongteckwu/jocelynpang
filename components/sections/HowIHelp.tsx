import Image from "next/image";

export function HowIHelp() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Section header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-4 block">
            How I Help
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
            From fragile growth to <em className="text-[var(--brown-dark)]">durable</em> pillar
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Most teams chase channels. The ones that win build systems.
          </p>
        </div>
        {/* Image - hidden on mobile */}
        <div className="hidden lg:block">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/people.jpeg"
              alt="Strategic business planning and collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Three cards: Problem → Intervention → Outcome */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Card 1: The Problem */}
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            The Problem
          </span>
          <h3 className="text-2xl md:text-3xl font-serif">
            E-commerce is growing, but it's fragile.
          </h3>
          <ul className="flex flex-col gap-3 text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Heavy reliance on promos
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Performance depends on a few people
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Channels don't scale cleanly across markets
            </li>
          </ul>
        </div>

        {/* Card 2: The Intervention */}
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            The Intervention
          </span>
          <h3 className="text-2xl md:text-3xl font-serif">
            Commercial clarity and execution discipline.
          </h3>
          <ul className="flex flex-col gap-3 text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Channel P&L ownership
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Funnel design across media, social commerce, affiliates
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Capability building with local teams and partners
            </li>
          </ul>
        </div>

        {/* Card 3: The Outcome */}
        <div className="flex flex-col gap-6">
          <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)]">
            The Outcome
          </span>
          <h3 className="text-2xl md:text-3xl font-serif">
            Durable digital growth without chaos.
          </h3>
          <ul className="flex flex-col gap-3 text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              E-commerce as a true FMCG growth pillar
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Teams that can run without constant escalation
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--brown-light)]">·</span>
              Performance tied to commercial outcomes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
