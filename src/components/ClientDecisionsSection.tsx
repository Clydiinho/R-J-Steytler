import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ClientDecisionsSection() {
  const decisions = [
    {
      num: '01',
      title: 'Assess a market or investment opportunity',
      desc: 'An objective read on market size, demand, competition and viability before you commit.'
    },
    {
      num: '02',
      title: 'Prepare a project for government, lenders or investors',
      desc: 'Structuring, financial modelling and investor-facing materials that stand up to scrutiny.'
    },
    {
      num: '03',
      title: 'Navigate policy, regulation and institutional approvals',
      desc: 'The approval pathway, responsible parties and structured engagement mapped out.'
    },
    {
      num: '04',
      title: 'Develop a financing and investor engagement strategy',
      desc: 'A funding approach, tested options and materials ready for lenders, DFIs and investors.'
    },
    {
      num: '05',
      title: 'Convert an approved strategy into an implementation plan',
      desc: 'Actions, responsibilities, milestones and reporting that turn a decision into delivery.'
    },
    {
      num: '06',
      title: 'Support boards and executives with economic and policy analysis',
      desc: 'Independent analysis of the macroeconomic, policy and institutional context to inform a decision.'
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-3">
              What we help clients do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
              Six client <span className="italic text-rj-gold">decisions</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans text-sm md:text-base max-w-md mt-4 md:mt-0 leading-relaxed">
            R&amp;J supports assignments where commercial analysis, government processes, financing and implementation planning must be coordinated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {decisions.map((d, i) => (
            <div
              key={i}
              className="p-8 bg-rj-gold text-rj-navy border border-rj-gold/80 rounded-3xl shadow-[0_8px_32px_rgba(200,162,74,0.35)] relative group overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(255,255,255,0.7)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-rj-navy font-semibold bg-rj-navy/10 border border-rj-navy/20 px-3 py-1 rounded-full group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 transition-colors duration-500">
                    {d.num} / 06
                  </span>
                  <CheckCircle size={18} className="text-rj-navy opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-rj-navy mb-3 leading-snug transition-colors duration-500">
                  {d.title}
                </h3>

                <p className="text-rj-navy/85 text-sm leading-relaxed font-sans transition-colors duration-500">
                  {d.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-rj-navy/15 group-hover:border-rj-navy/10 transition-colors duration-500">
                <Link
                  to="/services"
                  className="font-mono text-xs text-rj-navy font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Deliverables &amp; Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rj-gold hover:text-white bg-white/5 border border-rj-gold/30 hover:border-white px-6 py-3 rounded-full transition-all"
          >
            See how we work with clients <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
