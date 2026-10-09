import { useEffect, useState } from 'react';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Publications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<string>('ALL');

  const publications = [
    {
      category: "ECONOMIC NOTES",
      typeLabel: "Economic Note",
      year: "2026",
      region: "Namibia",
      title: "Namibia Taxation Demands Representation, Especially for SMEs",
      summary: "Why the 2026/27 budget is an opening to embed SME voices in tax policy, and how a preferential corporate rate and lighter compliance burden would change the incentives facing 40,000 enterprises.",
      author: "Dr. John Steytler",
      role: "Co-founder",
      pdf: "/publications/Tax demands representation.pdf"
    },
    {
      category: "ECONOMIC NOTES",
      typeLabel: "Economic Note",
      year: "2026",
      region: "Namibia",
      title: "When Fuel Prices Rise, Namibians Start Looking for a Hike",
      summary: "How a petrol and diesel increase transmits into transport, food, tourism and vulnerable households — and five practical steps to soften the impact.",
      author: "Dr. John Steytler",
      role: "Co-founder",
      pdf: "/publications/Namibians fuel prices rise.pdf"
    },
    {
      category: "ECONOMIC NOTES",
      typeLabel: "Economic Note",
      year: "2026",
      region: "Kenya",
      title: "When Fuel Prices Rise, Kenyans Feel It Everywhere",
      summary: "From matatu fares to farm inputs, why transparent communication, targeted support and investment in rail and alternative energy build a more resilient economy.",
      author: "Prof. Rachel K. Gesami",
      role: "Head of East Africa",
      pdf: "/publications/Kenya fuel prices rise.pdf"
    },
    {
      category: "ECONOMIC NOTES",
      typeLabel: "Economic Note",
      year: "2025",
      region: "Namibia",
      title: "The Pothole Economy: Filling People's Pockets",
      summary: "The case for a grassroots-first approach to N$500 million in road repairs — paying local unemployed Namibians and building demand from the local economy up.",
      author: "Dr. John Steytler",
      role: "Co-founder",
      pdf: "/publications/The Pothole Economy 2.pdf"
    },
    {
      category: "SECTOR BRIEFS",
      typeLabel: "Sector Brief",
      year: "2025",
      region: "Southern Africa",
      title: "Building an Oil Refinery Could Be a Fine Idea",
      summary: "The economic, environmental and geopolitical trade-offs of a joint Namibia–Botswana refinery — and why a proper feasibility study is the decision that matters next.",
      author: "Dr. John Steytler",
      role: "Co-founder",
      pdf: "/publications/Building an oil refinery 2.pdf"
    },
    {
      category: "SECTOR BRIEFS",
      typeLabel: "Media feature",
      year: "May 2024",
      region: "Namibia",
      title: "Namibia Might Have to Import Yellow Cake",
      summary: "The case for regional value chains, Agenda 2063 alignment and rethinking Africa's role in the critical-minerals conversation, with uranium at the centre.",
      author: "Dr. John Steytler",
      role: "then CEO, Development Bank of Namibia",
      pdf: "/publications/Namibia import yellow cake.pdf"
    }
  ];

  const categories = ['ALL', 'ECONOMIC NOTES', 'SECTOR BRIEFS', 'PROJECT GUIDES'];

  const filtered = activeTab === 'ALL'
    ? publications
    : activeTab === 'PROJECT GUIDES'
    ? []
    : publications.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero Intro */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          Research &amp; Analysis
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          Research &amp; <span className="italic text-rj-gold">analysis</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
          Economic Notes, Sector Briefs and Project and Investment Guides. Each piece sets out what changed, who is affected, which evidence matters, and the decision the reader should consider.
        </p>

        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl max-w-2xl font-mono text-xs text-gray-300">
          <span className="text-rj-gold font-bold">Analysis organised around decisions:</span> Each piece sets out what changed, who is affected, which evidence matters, the commercial or institutional implications, and the decision the reader should consider.
        </div>
      </section>

      {/* Filter Chips */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-mono text-xs uppercase px-4 py-2 rounded-full border transition-all ${
                activeTab === cat
                  ? 'bg-rj-gold text-rj-navy border-rj-gold font-bold shadow-[0_0_15px_rgba(200,162,74,0.3)]'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-rj-gold/40 hover:text-white'
              }`}
            >
              {cat === 'PROJECT GUIDES' ? 'Project and Investment Guides' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Publications Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-400 mb-4 pb-3 border-b border-white/5">
                  <span className="text-rj-gold font-semibold uppercase">{item.typeLabel}</span>
                  <span>{item.year} · {item.region}</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-white mb-3 group-hover:text-rj-gold transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed font-sans mb-6">
                  {item.summary}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <div className="font-serif text-sm font-medium text-white truncate">{item.author}</div>
                    <div className="font-mono text-[10px] text-gray-400 truncate">{item.role}</div>
                  </div>

                  <a 
                    href={item.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-rj-gold font-semibold flex items-center gap-1 hover:translate-x-1 transition-transform shrink-0"
                  >
                    Read PDF <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empty State / In-Preparation Block for Project & Investment Guides */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={20} className="text-rj-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold">
              Project and Investment Guides
            </span>
          </div>

          <h2 className="font-serif text-3xl font-medium text-white mb-4">
            Practical guides for sponsors and investors are in preparation.
          </h2>

          <p className="text-gray-300 font-sans text-base leading-relaxed mb-6">
            These will set out, for a specific project type or market, what a sponsor needs to prepare, which approvals apply, how financing is typically structured and what investors look for. To request a specific guide or commissioned analysis, <Link to="/contact" className="text-rj-gold underline underline-offset-4 hover:text-white">get in touch</Link>.
          </p>
        </div>
      </section>

      {/* Page-Specific CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0A1628]/90 to-[#050D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Commission analysis or discuss a <span className="italic text-rj-gold">project</span>
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We work with governments, DFIs and institutional partners on nationally aligned research and policy mandates.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
          >
            Start a conversation <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
