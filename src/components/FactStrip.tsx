export default function FactStrip() {
  const facts = [
    { label: "Established", value: "2025" },
    { label: "Headquartered", value: "Windhoek" },
    { label: "Ownership", value: "100% Namibian Owned" },
    { label: "Regional Footprint", value: "Working Across African Markets" }
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-8 mb-16">
      <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {facts.map((fact, i) => (
            <div key={i} className={`flex flex-col ${i > 0 ? 'md:pl-6 pt-3 md:pt-0' : ''}`}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-rj-gold mb-1">
                {fact.label}
              </span>
              <span className="font-serif text-lg md:text-xl font-medium text-white">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
