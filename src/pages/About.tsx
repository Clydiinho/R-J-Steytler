import { useEffect, useRef } from 'react';
import { ArrowRight, Landmark, Briefcase, FileCode2, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import FactStrip from '../components/FactStrip';
import MilestonesSection from '../components/MilestonesSection';
import GlobalCta from '../components/GlobalCta';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
      id: '01',
      title: 'Government and institutional coordination',
      icon: <Landmark size={26} strokeWidth={1.5} />,
      description: 'Institutional mapping, approval pathways, policy analysis and structured engagement between public and private participants.'
    },
    {
      id: '02',
      title: 'Private-sector and investment advisory',
      icon: <Briefcase size={26} strokeWidth={1.5} />,
      description: 'Market assessment, commercial analysis, market entry, business expansion and investment readiness.'
    },
    {
      id: '03',
      title: 'Project development and finance',
      icon: <FileCode2 size={26} strokeWidth={1.5} />,
      description: 'Project concepts, financial models, funding strategies, investor materials, risk registers and development roadmaps.'
    },
    {
      id: '04',
      title: 'Implementation support',
      icon: <CheckCircle2 size={26} strokeWidth={1.5} />,
      description: 'Action plans, assigned responsibilities, project trackers, decision logs, milestones and executive reporting.'
    }
  ];

  const methodStages = [
    { num: "01", step: "Define the decision", desc: "Agree the exact question, the deadline and the output required." },
    { num: "02", step: "Gather evidence", desc: "Review data, financial information, policy requirements, documents and stakeholder views." },
    { num: "03", step: "Test the options", desc: "Compare costs, risks, assumptions, institutional requirements and financing implications." },
    { num: "04", step: "Recommend a course of action", desc: "Present the options, the trade-offs and the reasons for the recommendation." },
    { num: "05", step: "Organise implementation", desc: "Translate the decision into actions, responsible parties, deadlines and reporting." }
  ];

  const values = [
    { num: "01", title: "Evidence before assertion", desc: "Important recommendations state their sources, assumptions and limitations." },
    { num: "02", title: "Direct senior accountability", desc: "Every assignment has a named senior adviser responsible for its quality and delivery." },
    { num: "03", title: "Clear attribution", desc: "Achievements from previous public, private or institutional roles are credited to the person and organisation where the work occurred." },
    { num: "04", title: "Commercial and public value", desc: "Recommendations weigh financial viability, institutional requirements and national development priorities." },
    { num: "05", title: "Implementation with ownership", desc: "Strategies conclude with actions, responsible parties, deadlines and measures of progress." },
    { num: "06", title: "Independence and discretion", desc: "Conflicts of interest are declared, sensitive information is protected, and advice is based on the client's stated objectives." }
  ];

  return (
    <div className="pt-32 pb-24 text-white relative" ref={sectionRef}>
      {/* Hero Section for About Page */}
      <section className="relative px-6 max-w-7xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          About R&amp;J Steytler
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight max-w-4xl">
          Operating at the intersection of <br />
          <span className="italic text-rj-gold">Government, Private Sector, Infrastructure and Finance</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed max-w-3xl mb-8">
          Established in 2025, R&amp;J Steytler is a Namibia-based advisory and project development firm working across African markets. We help governments, businesses, investors and institutions assess opportunities, structure projects, secure institutional alignment, prepare for financing and move approved initiatives towards implementation.
        </p>
      </section>

      {/* Fact Strip */}
      <FactStrip />

      {/* Section: Why R&J Exists & Four Pillars */}
      <section className="relative py-24 bg-[#050D1A]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-3 block">
              Why R&amp;J Exists
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Projects stall between <span className="italic text-rj-gold">approval and implementation</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg font-sans leading-relaxed">
              Government institutions, businesses, investors, lenders and technical partners often assess the same project separately. This creates unclear responsibilities, repeated work and delays. R&amp;J coordinates these requirements — clarifying the decisions needed, assessing the commercial and institutional context, identifying responsible parties, preparing funding approaches and organising the next steps to move a project forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id} 
                className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative group overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rj-gold group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 group-hover:text-rj-navy transition-all duration-500">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-xs text-rj-gold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-colors duration-500">
                      {pillar.id} / 04
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium mb-3 text-white group-hover:text-rj-navy transition-colors duration-500 leading-snug">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed font-sans text-sm group-hover:text-rj-navy/80 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Milestones Section */}
      <MilestonesSection />

      {/* Five-stage Method */}
      <section className="px-6 max-w-7xl mx-auto my-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            How We Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            A five-stage <span className="italic text-rj-gold">method</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Every mandate proceeds through a disciplined sequence ensuring that evidence precedes recommendations and implementation follows clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {methodStages.map((stage, i) => (
            <div 
              key={i}
              className="p-6 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 transition-all flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-rj-gold mb-4">{stage.num}</div>
              <h3 className="font-serif text-lg font-medium text-white mb-3 leading-snug">
                {stage.step}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values in Practice */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            How We Operate
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Values shown through <span className="italic text-rj-gold">practice</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-rj-gold group-hover:text-rj-navy mb-4 inline-block transition-colors duration-500">{v.num} / 06</span>
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-rj-navy mb-3 transition-colors duration-500">{v.title}</h3>
                <p className="text-gray-400 group-hover:text-rj-navy/80 text-sm leading-relaxed font-sans transition-colors duration-500">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <GlobalCta />
    </div>
  );
}
