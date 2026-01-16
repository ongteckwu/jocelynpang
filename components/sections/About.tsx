export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left side - full image */}
      <div className="lg:col-span-4">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=faces"
          alt="Jocelyn Pang, Digital Commerce Strategist based in Singapore"
          className="w-full aspect-[3/4] object-cover rounded-lg"
        />
      </div>

      {/* Right side - main content */}
      <div className="lg:col-span-8">
        <span className="text-base font-medium tracking-widest uppercase text-[var(--brown-light)] mb-6 block">
          About
        </span>
        <div className="text-lg md:text-xl lg:text-2xl font-serif leading-[1.5] text-[var(--text-primary)]">
          <p className="mb-6">
            I started in distribution. Learned the cost structures and tradeoffs that sit underneath everything else.
          </p>
          <p className="mb-6">
            Then I spent years in the trenches: growing a portfolio in a category that was actively shrinking. Building channels that didn't exist before. Fixing fundamentals that everyone else ignored.
          </p>
          <p className="mb-6">
            Now I build <span className="text-[var(--brown-dark)]">commerce engines</span> across six countries.
          </p>
          <p className="text-[var(--brown-dark)] font-medium">
            What I've learned is simple: growth fails when teams chase channels instead of building systems.
          </p>
        </div>
      </div>
    </div>
  );
}
