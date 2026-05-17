import { useEffect, useRef } from 'react';
import { ArrowRight, Lightbulb, MapPin, Globe } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      id: '01',
      title: 'Insight-Driven Precision',
      icon: <Lightbulb size={24} />,
      description: 'We do not rely on surface-level data. Our approach is rooted in rigorous, ground-level economic research and predictive modeling. We understand the nuances of the Namibian market—from regulatory shifts to macroeconomic trends—allowing our partners to make decisions with confidence and clarity in an emerging landscape.'
    },
    {
      id: '02',
      title: 'Locally Rooted Expertise',
      icon: <MapPin size={24} />,
      description: 'Based in Windhoek, we have cultivated deep relationships with key local stakeholders, regulatory bodies, and industry leaders. Our intimate understanding of the domestic business environment ensures that international capital is not only deployed effectively but is structured to thrive within the local context, derisking investments and fostering sustainable growth.'
    },
    {
      id: '03',
      title: 'Globally Connected Networks',
      icon: <Globe size={24} />,
      description: 'We serve as the bridge between Namibia\'s frontier opportunities and global institutional capital. Our extensive network spans international Development Finance Institutions (DFIs), private equity funds, and multinational corporations. We structure opportunities that meet global standards of compliance, yield, and impact, ensuring seamless cross-border capital deployment.'
    }
  ];

  return (
    <div className="pt-32 pb-24" ref={sectionRef}>
      {/* Hero Section for About Page */}
      <section className="relative px-6 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="fade-up">
              <span className="font-mono text-xs uppercase border border-white/20 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full text-rj-gold tracking-widest pl-4">
                <span className="inline-block w-4 h-[1px] bg-rj-gold align-middle mr-2 -ml-2"></span>
                About R&J Advisory
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl mt-8 mb-6 leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
              Bridging Capital <br />and African Potential
            </h1>
            
            <p className="text-lg text-gray-300 font-sans leading-relaxed fade-up max-w-xl mb-8" style={{ transitionDelay: '0.2s' }}>
              R&J Advisory is Namibia's premier trade, investment, and economic advisory firm. We are dedicated to unlocking value in frontier markets, guiding institutional investors, local enterprises, and policymakers through complex economic landscapes.
            </p>
          </div>
          
          <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden fade-up border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ transitionDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-rj-navy/40 mix-blend-multiply z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80" 
              alt="Strategic advisory meeting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Overlay Data Card */}
             <div className="absolute bottom-8 right-8 z-20 bg-[#0A1628]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[280px]">
                <div className="font-mono text-xs text-gray-400 mb-2">FOUNDED</div>
                <div className="font-mono text-2xl text-white mb-4">2024</div>
                <div className="font-mono text-xs text-gray-400 mb-2">HEADQUARTERS</div>
                <div className="font-mono text-lg text-white">Windhoek, NAM</div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="font-mono text-[10px] text-rj-gold">MARKET STATUS</span>
                    <span className="font-mono text-xs text-[#00FF88]">ACTIVE</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="relative py-24 bg-[#050D1A]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-rj-gold/30 to-transparent"></div>
        <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-rj-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Our Foundational Pillars</h2>
            <p className="text-gray-400 text-lg font-sans">
              The philosophy that drives our advisory practice and ensures sustainable, high-impact results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div 
                key={pillar.id} 
                className="fade-up bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative group overflow-hidden transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="absolute top-0 left-6 w-12 h-[2px] bg-rj-gold/50 group-hover:bg-rj-navy transition-colors duration-500"></div>
                
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rj-gold group-hover:bg-rj-navy/5 group-hover:border-rj-navy/20 group-hover:text-rj-navy transition-all duration-500">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xl text-white/20 group-hover:text-rj-navy/40 transition-colors duration-500">{pillar.id}</span>
                </div>
                
                <h3 className="font-serif text-2xl mb-4 text-white group-hover:text-rj-navy transition-colors duration-500">{pillar.title}</h3>
                
                <p className="text-gray-400 leading-relaxed font-sans text-sm md:text-base group-hover:text-rj-navy/80 transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-5xl mx-auto px-6 mt-24 fade-up">
        <div className="bg-gradient-to-br from-[#0A1628] to-[#050D1A] border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
           {/* Abstract chart background */}
           <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <path d="M0,400 L0,200 Q100,250 200,150 T400,180 T600,100 T800,220 T1000,50 L1000,400 Z" fill="currentColor" />
           </svg>
           
           <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10">Partner with R&J Advisory</h2>
           <p className="text-gray-400 mb-10 max-w-2xl mx-auto font-sans relative z-10">
             Whether you are an international investor seeking localized insights, or a Namibian enterprise looking to expand, our team is ready to provide strategic guidance.
           </p>
           <a href="#contact" className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white hover:text-rj-navy transition-all shadow-[0_0_20px_rgba(200,162,74,0.3)] relative z-10 text-sm uppercase">
             Contact Our Team <ArrowRight size={16} className="ml-2" />
           </a>
        </div>
      </section>
    </div>
  );
}
