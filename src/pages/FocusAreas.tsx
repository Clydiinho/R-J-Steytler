import { useEffect } from 'react';
import { Zap, Anchor, ShieldCheck, Factory, Handshake, Pickaxe, Globe2, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalCta from '../components/GlobalCta';

export default function FocusAreas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const areas = [
    {
      num: "01",
      title: "Energy Transition & Grid Stability",
      desc: "Supporting Namibia's transition to renewable energy, including battery storage deployment (BESS) and grid stability solutions for sovereign energy security.",
      icon: <Zap size={28} className="text-rj-gold" />
    },
    {
      num: "02",
      title: "Strategic Infrastructure",
      desc: "Advancing nationally significant infrastructure projects across logistics corridors, transport, deep-water ports (Walvis Bay), and industrial export platforms.",
      icon: <Anchor size={28} className="text-rj-gold" />
    },
    {
      num: "03",
      title: "Climate & Development Finance",
      desc: "Mobilising climate finance through the Green Climate Fund, development finance institutions (DFIs), and multilateral development banks for Namibia and the Southern African region.",
      icon: <ShieldCheck size={28} className="text-rj-gold" />
    },
    {
      num: "04",
      title: "Industrialisation & Localisation",
      desc: "Advisory on national industrial policy, value-chain development, local content requirements, and economic diversification aligned with Namibia's Growth at Home strategy.",
      icon: <Factory size={28} className="text-rj-gold" />
    },
    {
      num: "05",
      title: "Public-Private Partnerships (PPPs)",
      desc: "Structuring bankable PPP frameworks and transactions that align sovereign national priorities with private-sector capital, technical efficiency, and operational discipline.",
      icon: <Handshake size={28} className="text-rj-gold" />
    },
    {
      num: "06",
      title: "Mining & Resource-Linked Infrastructure",
      desc: "Advisory on uranium, critical minerals, and offshore hydrocarbons extraction infrastructure, domestic beneficiation, and resource-linked corridor platforms.",
      icon: <Pickaxe size={28} className="text-rj-gold" />
    },
    {
      num: "07",
      title: "Market Entry — Namibia & Africa",
      desc: "Guiding institutional investors, multinationals, and DFIs entering Namibian and broader African frontier markets with grounded advisory and verified regulatory pathways.",
      icon: <Globe2 size={28} className="text-rj-gold" />
    },
    {
      num: "08",
      title: "Finance & Banking",
      desc: "Strategic advisory for commercial banks and development financial institutions operating across Namibia and sub-Saharan Africa, including capital adequacy and credit structuring.",
      icon: <Building2 size={28} className="text-rj-gold" />
    }
  ];

  return (
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero Intro */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          Selected Areas of Focus
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          Where we <span className="italic text-rj-gold">focus</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
          R&amp;J Steytler operates across sectors of strategic significance, aligned with Namibia's national development priorities and Africa's broader growth agenda.
        </p>
      </section>

      {/* Eight Sectors */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Sectoral Depth
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            Eight sectors where our institutional relationships, technical understanding and execution record are <span className="italic text-rj-gold">deepest</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-rj-gold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {area.num} / 08
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rj-gold/10 group-hover:border-rj-gold/30 transition-all">
                    {area.icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-rj-gold transition-colors leading-snug">
                  {area.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">
                  {area.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-gray-500 flex items-center justify-between">
                <span>Focus Portfolio</span>
                <span className="text-rj-gold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Underlying conditions anchor block */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rj-gold/5 blur-3xl pointer-events-none"></div>

          <span className="font-mono text-xs uppercase tracking-widest text-rj-green border border-rj-green/30 bg-rj-green/5 px-3 py-1 rounded-full inline-block mb-4">
            Underlying Conditions
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            Every focus area is anchored to something <span className="italic text-rj-gold">measurable.</span>
          </h2>

          <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-8">
            These sectors are not abstract categories. Each one moves with a price, a policy rate or a capital flow that we track continuously. The full picture — sectoral growth, fiscal position, commodities and currencies — sits on the <Link to="/macro" className="text-rj-gold underline underline-offset-4 hover:text-white font-medium">Macro Monitor</Link>.
          </p>

          <Link 
            to="/macro"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rj-gold hover:text-white bg-white/5 border border-rj-gold/30 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            Explore Macro Monitor indicators <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <GlobalCta />
    </div>
  );
}
