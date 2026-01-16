export function CredibilityBar() {
  const items = [
    { number: "3", label: "Markets launched", sublabel: "in 6 months" },
    { number: "+60%", label: "Category over-index", sublabel: "Vitamins & Supplements" },
    { number: "10+", label: "Channels built", sublabel: "from scratch" },
    { number: "6", label: "SEA markets", sublabel: "P&L ownership" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-4">
      {items.map((item, index) => (
        <div
          key={index}
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
