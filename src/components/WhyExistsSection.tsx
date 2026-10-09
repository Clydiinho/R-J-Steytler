import { Landmark, Briefcase, FileCode2, CheckCircle2 } from 'lucide-react';

export default function WhyExistsSection() {
  const pillars = [
    {
      num: '01',
      title: 'Government and institutional coordination',
      desc: 'Institutional mapping, approval pathways, policy analysis and structured engagement between public and private participants.',
      icon: <Landmark size={28} strokeWidth={1.5} />
    },
    {
      num: '02',
      title: 'Private-sector and investment advisory',
      desc: 'Market assessment, commercial analysis, market entry, business expansion and investment readiness.',
      icon: <Briefcase size={28} strokeWidth={1.5} />
    },
    {
      num: '03',
      title: 'Project development and finance',
      desc: 'Project concepts, financial models, funding strategies, investor materials, risk registers and development roadmaps.',
      icon: <FileCode2 size={28} strokeWidth={1.5} />
    },
    {
      num: '04',
      title: 'Implementation support',
      desc: 'Action plans, assigned responsibilities, project trackers, decision logs, milestones and executive reporting.',
      icon: <CheckCircle2 size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-rj-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
            Why R&amp;J exists
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
            Projects stall between <span className="italic text-rj-gold">approval and implementation</span>
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed">
            Government institutions, businesses, investors, lenders and technical partners often assess the same project separately. This creates unclear responsibilities, repeated work and delays. R&amp;J coordinates these requirements — clarifying the decisions needed, assessing the commercial and institutional context, identifying responsible parties, preparing funding approaches and organising the next steps to move a project forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-rj-gold mb-6 bg-white/5 border border-white/10 inline-block px-3 py-1 rounded-full shadow-inner group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-colors duration-500">
                  {pillar.num} / 04
                </div>
                
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-all duration-500 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 text-rj-gold group-hover:text-rj-navy">
                  {pillar.icon}
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-3 text-white group-hover:text-rj-navy transition-colors duration-500 leading-snug">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-rj-navy/80 leading-relaxed font-sans text-sm transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 group-hover:border-rj-navy/10 flex items-center justify-between text-[11px] font-mono text-gray-400 group-hover:text-rj-navy/60 transition-colors">
                <span>Four Pillars</span>
                <span>Pillar {pillar.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
