// Hoisted outside component to prevent recreation on each render (rendering-hoist-jsx)
const CREDIBILITY_ITEMS = [
  { id: "markets-launched", number: "3", label: "Markets launched", sublabel: "in 6 months" },
  { id: "category-overindex", number: "+60%", label: "Category over-index", sublabel: "Vitamins & Supplements" },
  { id: "channels-built", number: "10+", label: "Channels built", sublabel: "from scratch" },
  { id: "sea-markets", number: "6", label: "SEA markets", sublabel: "P&L ownership" },
] as const;

export function CredibilityBar() {

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-4">
      {CREDIBILITY_ITEMS.map((item) => (
        <div
          key={item.id}
          className="group flex items-baseline gap-4 md:flex-col md:items-start md:gap-1"
        >
          <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[var(--brown-dark)] leading-none tracking-tight">
            {item.number}
          </span>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-medium text-[var(--text-primary)]">
              {item.label}
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              {item.sublabel}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
