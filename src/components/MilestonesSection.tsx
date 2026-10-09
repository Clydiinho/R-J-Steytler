import { Award, Briefcase, Landmark, ShieldCheck, Users2, Globe2 } from 'lucide-react';

export default function MilestonesSection() {
  const milestones = [
    {
      category: "Leadership",
      title: "First independent MPC member",
      desc: "R&J co-founder Dr John Steytler was appointed the first independent member of the Bank of Namibia Monetary Policy Committee in 2026, for a three-year term.",
      icon: <Landmark size={20} />
    },
    {
      category: "Leadership",
      title: "Namibia's founding Statistician-General",
      desc: "Dr Steytler served as the founding Statistician-General and chief executive of the Namibia Statistics Agency, building the national data architecture.",
      icon: <Award size={20} />
    },
    {
      category: "Leadership",
      title: "National policy experience",
      desc: "R&J leadership has contributed to monetary policy, national statistics, development finance, industrial policy and presidential economic advice in Namibia.",
      icon: <Briefcase size={20} />
    },
    {
      category: "Leadership",
      title: "East African policy leadership",
      desc: "Prof Rachel Gesami's experience includes the IMF, Kenya's Office of the Prime Minister, Vision 2030, senior university leadership and the Moran of the Burning Spear national honour.",
      icon: <ShieldCheck size={20} />
    },
    {
      category: "Programme results",
      title: "15,000+ entrepreneurs reached",
      desc: "Peik Bruhns led an entrepreneurship programme delivered through 26 implementing agencies, reaching more than 15,000 participants and supporting 5,000 business registrations.",
      icon: <Users2 size={20} />
    },
    {
      category: "Firm",
      title: "UK–Africa investment partnership",
      desc: "In 2026, R&J formed a partnership with UK-based The Strategic Economy to connect African projects and businesses with international investors, institutions and policymakers.",
      icon: <Globe2 size={20} />
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
            The record of R&amp;J and its leadership
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4">
            Selected leadership and firm <span className="italic text-rj-gold">milestones</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Achievements earned in previous roles are credited to the individual and the institution where the work occurred.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div 
              key={i} 
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-colors duration-500">
                    {m.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-rj-gold group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-all duration-500">
                    {m.icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium mb-3 text-white group-hover:text-rj-navy transition-colors duration-500">
                  {m.title}
                </h3>

                <p className="text-gray-400 group-hover:text-rj-navy/80 text-sm leading-relaxed font-sans transition-colors duration-500">
                  {m.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 group-hover:border-rj-navy/10 font-mono text-[10px] text-gray-500 group-hover:text-rj-navy/60 transition-colors duration-500">
                0{i + 1} / 06
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
