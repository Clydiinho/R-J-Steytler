import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';

export default function LeadershipTeaserSection() {
  const leaders = [
    {
      name: "Dr. John Steytler",
      role: "Co-founder & Chief Executive Officer",
      roleTag: "CEO",
      initials: "JS",
      route: "/john",
      summary: "First independent member of the Bank of Namibia MPC (2026); founding Statistician-General and CEO of the Namibia Statistics Agency; former CEO of the Development Bank of Namibia."
    },
    {
      name: "Vijay Jha",
      role: "Co-founder & Chief Operating Officer",
      roleTag: "COO",
      initials: "VJ",
      route: "/vijay",
      summary: "Infrastructure advisory, energy transition (BESS), and cross-border commercial development across Africa, the UAE, and India."
    },
    {
      name: "Prof. Rachel K. Gesami",
      role: "Senior Associate · Head of East Africa",
      roleTag: "East Africa",
      initials: "RG",
      route: "/gesami",
      summary: "Economist with experience at the IMF, Kenya's Office of the Prime Minister and Vision 2030; recipient of the Moran of the Burning Spear (MBS)."
    },
    {
      name: "Peik Bruhns",
      role: "Senior Associate · Head of West Africa",
      roleTag: "West Africa",
      initials: "PB",
      route: "/peik",
      summary: "Development practitioner who led entrepreneurship programmes reaching 15,000+ participants through 26 implementing agencies, supporting 5,000 business registrations."
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
              Leadership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
              Meet our <span className="italic text-rj-gold">leadership</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
            Decades of combined experience at the highest levels of government, development finance and cross-border commercial development across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Initials badge fallback */}
                  <div className="w-14 h-14 rounded-2xl bg-rj-navy border border-rj-gold/30 flex items-center justify-center font-mono text-lg text-rj-gold font-bold group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 group-hover:text-rj-navy transition-all duration-500 shadow-[0_0_15px_rgba(200,162,74,0.15)]">
                    {leader.initials}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-colors duration-500">
                    {leader.roleTag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-white mb-1 group-hover:text-rj-navy transition-colors duration-500">
                  {leader.name}
                </h3>
                <div className="font-mono text-xs text-gray-400 group-hover:text-rj-navy/70 mb-4 leading-snug transition-colors duration-500">
                  {leader.role}
                </div>

                <p className="text-gray-400 group-hover:text-rj-navy/80 text-sm leading-relaxed font-sans mb-6 transition-colors duration-500">
                  {leader.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 group-hover:border-rj-navy/15 transition-colors duration-500">
                <Link
                  to={leader.route}
                  className="font-mono text-xs text-rj-gold group-hover:text-rj-navy uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-all duration-300"
                >
                  View profile <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rj-gold hover:text-white bg-white/5 border border-rj-gold/30 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            Meet the full team <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
