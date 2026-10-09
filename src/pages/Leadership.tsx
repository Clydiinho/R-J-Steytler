import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, ShieldCheck } from 'lucide-react';
import GlobalCta from '../components/GlobalCta';

export default function Leadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Dr. John Steytler",
      role: "CEO · Co-founder & Chief Executive",
      roleTag: "CEO",
      initials: "JS",
      route: "/john",
      summary: "First independent member of the Bank of Namibia Monetary Policy Committee (2026); founding Statistician-General and CEO of the Namibia Statistics Agency; former CEO of the Development Bank of Namibia."
    },
    {
      name: "Vijay Jha",
      role: "COO · Co-founder & Chief Operating Officer",
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
      summary: "Economist with experience at the IMF, Kenya's Office of the Prime Minister, and Vision 2030; recipient of the Moran of the Burning Spear (MBS)."
    },
    {
      name: "Peik Bruhns",
      role: "Senior Associate · Head of West Africa",
      roleTag: "West Africa",
      initials: "PB",
      route: "/peik",
      summary: "Development practitioner who led entrepreneurship programmes reaching 15,000+ participants through 26 implementing agencies, supporting 5,000 business registrations."
    },
    {
      name: "Saleh Alhashmi",
      role: "Senior Associate · Head of Middle East Operations",
      roleTag: "Middle East",
      initials: "SA",
      route: "/saleh",
      summary: "Business executive, PMP® professional and technology entrepreneur with 20+ years in oil & gas; Co-Founder & CEO of Power AI Artificial Intelligence LLC."
    }
  ];

  return (
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero Intro */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          Leadership
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          The people responsible for <span className="italic text-rj-gold">the work</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
          R&amp;J is deliberately principal-led. Clients work directly with senior advisers who have held leadership roles in monetary policy, development finance, government, international institutions, entrepreneurship development and cross-border business.
        </p>
      </section>

      {/* Five Profile Cards */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Initials Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-rj-navy border border-rj-gold/40 flex items-center justify-center font-mono text-xl text-rj-gold font-bold group-hover:bg-rj-gold group-hover:text-rj-navy transition-all duration-300 shadow-[0_0_15px_rgba(200,162,74,0.15)]">
                    {member.initials}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-rj-gold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {member.roleTag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-white mb-1 group-hover:text-rj-gold transition-colors">
                  {member.name}
                </h3>
                <div className="font-mono text-xs text-gray-400 mb-4 leading-snug">
                  {member.role}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">
                  {member.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to={member.route}
                  className="font-mono text-xs text-rj-gold uppercase tracking-wider flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform"
                >
                  View profile <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Engagement Model */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={20} className="text-rj-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold">
              Expert Engagement Model
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            Senior people on <span className="italic text-rj-gold">every mandate.</span>
          </h2>

          <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed">
            R&amp;J Steytler is deliberately small at the core. For specialised mandates we engage a curated network of sector experts, technical advisors and domain specialists, bringing targeted expertise to each engagement without carrying the overhead. Clients deal with principals throughout.
          </p>
        </div>
      </section>

      <GlobalCta />
    </div>
  );
}
