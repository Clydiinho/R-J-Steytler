import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NamibiaContextSection() {
  const stats = [
    {
      stat: "3.02m",
      title: "People across 825,000 km²",
      desc: "A population density of 3.7 people per square kilometre — among the lowest on earth — with almost half the population now living in urban areas. Distance is the first constraint on any infrastructure plan.",
      source: "Namibia Statistics Agency, 2023 Census"
    },
    {
      stat: "12%",
      title: "Of world mined uranium",
      desc: "Namibia produced 12 per cent of global mined uranium in 2024, behind only Kazakhstan and Canada. Husab and Rössing rank among the largest uranium operations anywhere.",
      source: "World Nuclear Association"
    },
    {
      stat: "20bn boe",
      title: "Discovered offshore",
      desc: "The IMF estimates discovered offshore resources at more than 20 billion barrels of oil equivalent. Commercial production has not yet begun — which makes the sequencing decisions being taken now consequential.",
      source: "International Monetary Fund"
    },
    {
      stat: "1:1",
      title: "Pegged to the rand",
      desc: "The Namibia Dollar is fixed one-to-one with the South African Rand and both are legal tender. Monetary policy therefore has limited independence from South African rate and currency conditions.",
      source: "Bank of Namibia"
    },
    {
      stat: "37%",
      title: "Under the age of 15",
      desc: "Around 37 per cent of residents were below 15 at the 2023 census. That is a future labour force and, simultaneously, an urgent demand for education, skills and employment creation.",
      source: "Namibia Statistics Agency, 2023 Census"
    },
    {
      stat: "30%",
      title: "Corporate tax rate",
      desc: "Non-mining companies are taxed at 30 per cent, with a reduction to 28 per cent proposed but not yet enacted. VAT is 15 per cent, and diamond mining carries an effective rate of 55 per cent.",
      source: "NamRA · PwC Namibia tax card"
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
              Namibia in context
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
              The country we <span className="italic text-rj-gold">know best</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
            Six figures that shape how capital, policy and infrastructure decisions get made here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-4xl md:text-5xl font-medium text-rj-gold group-hover:text-rj-navy transition-colors duration-500 mb-3">
                  {item.stat}
                </div>
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-rj-navy transition-colors duration-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-rj-navy/80 text-sm leading-relaxed font-sans mb-6 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 group-hover:border-rj-navy/15 flex items-center justify-between text-[11px] font-mono text-gray-500 group-hover:text-rj-navy/70 transition-colors duration-500">
                <span className="italic truncate pr-2">Source: {item.source}</span>
                <span className="text-rj-gold group-hover:text-rj-navy shrink-0 transition-colors duration-500">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/namibia" 
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rj-gold hover:text-white bg-white/5 border border-rj-gold/30 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            Namibia insights <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
