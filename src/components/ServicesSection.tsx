import { Users, Globe, LineChart } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'SME Development & Business Support',
      desc: 'Empowering local enterprises with strategic guidance, capacity building, and access to capital to scale sustainably.',
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      num: '02',
      title: 'Trade & Investment Facilitation',
      desc: 'Structuring cross-border opportunities, navigating regulatory landscapes, and derisking capital deployment for DFIs and institutional investors.',
      icon: <Globe size={32} strokeWidth={1.5} />
    },
    {
      num: '03',
      title: 'Economic Consulting & Research',
      desc: 'Delivering data-driven insights, sector analysis, and policy formulation to guide strategic decisions in the Namibian market.',
      icon: <LineChart size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-rj-navy-light/40 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex-1 p-10 md:p-12 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group relative overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
              <div className="font-mono text-sm text-rj-gold mb-8 bg-white/5 border border-white/10 inline-block px-3 py-1 rounded-full shadow-inner group-hover:border-rj-navy/20 group-hover:bg-rj-navy/5 group-hover:text-rj-navy transition-colors duration-500">
                {service.num} / 03
              </div>
              
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-all duration-500 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 text-rj-gold group-hover:text-rj-navy">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-2xl font-medium mb-4 text-white group-hover:text-rj-navy transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-rj-navy/80 leading-relaxed font-sans text-sm md:text-base transition-colors duration-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
