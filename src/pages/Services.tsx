import { useEffect } from 'react';
import { Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import GlobalCta from '../components/GlobalCta';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const decisions = [
    {
      num: '01',
      title: 'Assess a market or investment opportunity',
      when: 'You are considering a new market, sector or investment and need an objective read before committing capital or time.',
      does: 'Assess market size, demand, competitive position and regulatory conditions, and test commercial viability against realistic assumptions.',
      receive: 'A market assessment and a commercial feasibility review.'
    },
    {
      num: '02',
      title: 'Prepare a project for government, lenders or investors',
      when: 'An approved or emerging project must be made ready for decision-makers to evaluate.',
      does: 'Structure the project, build the financial model, map the institutions involved and prepare investor-facing materials.',
      receive: 'A financial model, an institutional map and an investment memorandum.'
    },
    {
      num: '03',
      title: 'Navigate policy, regulation and institutional approvals',
      when: 'A project depends on permits, policy alignment or approvals from several public and private parties.',
      does: 'Identify the approval pathway, responsible parties and policy requirements, and organise structured engagement between them.',
      receive: 'An approval pathway, an institutional map and a stakeholder plan.'
    },
    {
      num: '04',
      title: 'Develop a financing and investor engagement strategy',
      when: 'A project is ready to approach lenders, development finance institutions or investors.',
      does: "Define the funding strategy, test financing options against the project's risk profile and prepare investor engagement.",
      receive: 'A funding strategy, an investment memorandum and a risk register.'
    },
    {
      num: '05',
      title: 'Convert an approved strategy into an implementation plan',
      when: 'A decision has been taken and now has to be executed across multiple parties.',
      does: 'Translate the strategy into actions, responsible parties, milestones and reporting arrangements.',
      receive: 'An implementation roadmap, a project tracker and an executive decision brief.'
    },
    {
      num: '06',
      title: 'Support boards and executives with economic and policy analysis',
      when: 'Leadership needs independent economic or policy analysis to inform a specific decision.',
      does: 'Analyse the macroeconomic, policy and institutional context, and set out the options and their trade-offs.',
      receive: 'An executive decision brief with supporting analysis.'
    }
  ];

  const deliverables = [
    "Market assessment",
    "Commercial feasibility review",
    "Institutional map",
    "Approval pathway",
    "Financial model",
    "Funding strategy",
    "Investment memorandum",
    "Stakeholder plan",
    "Risk register",
    "Implementation roadmap",
    "Executive decision brief"
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
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero intro */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          What We Help Clients Do
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          What we help clients <span className="italic text-rj-gold">do</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
          R&amp;J supports assignments where commercial analysis, government processes, financing and implementation planning must be coordinated. Each engagement is organised around a decision the client needs to make.
        </p>
      </section>

      {/* Six client decisions */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Work We Take On
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            Six client <span className="italic text-rj-gold">decisions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decisions.map((d, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-rj-gold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {d.num} / 06
                  </span>
                  <Compass size={18} className="text-rj-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-serif text-2xl font-medium text-white mb-6 group-hover:text-rj-gold transition-colors leading-snug">
                  {d.title}
                </h3>

                <div className="space-y-4 text-xs font-sans">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                      When it helps
                    </div>
                    <div className="text-gray-300 leading-relaxed">{d.when}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-1">
                      What R&amp;J does
                    </div>
                    <div className="text-gray-300 leading-relaxed">{d.does}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-rj-gold/10 border border-rj-gold/20">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-rj-gold mb-1">
                      What you receive
                    </div>
                    <div className="text-white font-medium leading-relaxed">{d.receive}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Cloud */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-[#0A1628]/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-3 block">
            Outputs &amp; Artefacts
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">
            Typical <span className="italic text-rj-gold">deliverables</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {deliverables.map((item, idx) => (
              <span 
                key={idx}
                className="font-mono text-xs md:text-sm bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-gray-200 hover:border-rj-gold/40 hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Five-stage method */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
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

      {/* Values in practice */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            How We Operate
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Values shown through <span className="italic text-rj-gold">practice</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Professional advisory is judged by rigor, transparency, and independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-rj-gold mb-4 inline-block">{v.num} / 06</span>
                <h3 className="font-serif text-xl font-medium text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Lines Overview */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-1">Formal Service Lines</div>
            <div className="text-gray-300 font-serif text-lg">
              Strategic Advisory · Government Navigation · Infrastructure Development · Development Finance · Energy Transition
            </div>
          </div>
          <a href="#contact" className="font-mono text-xs uppercase tracking-wider text-rj-gold hover:text-white transition-colors">
            Inquire for Service Spec →
          </a>
        </div>
      </section>

      {/* Global CTA Band */}
      <GlobalCta />
    </div>
  );
}
