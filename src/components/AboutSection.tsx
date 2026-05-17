import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return (
    <section ref={sectionRef} className="py-24 bg-transparent text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-rj-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Images */}
          <div className="relative h-[500px] fade-up">
            <img 
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80" 
              alt="Windhoek cityscape" 
              className="absolute top-0 right-0 w-[75%] h-[65%] object-cover rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              loading="lazy"
              decoding="async"
            />
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" 
              alt="African business handshake" 
              className="absolute bottom-0 left-0 w-[55%] h-[55%] object-cover rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-[6px] border-rj-base"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute top-[50%] left-[30%] transform -translate-y-1/2 bg-[#0A1628]/60 backdrop-blur-xl border border-white/10 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-full z-10">
              <span className="font-mono text-xs text-white uppercase tracking-wider">Windhoek HQ</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col space-y-6">
            <div className="fade-up">
              <span className="font-mono text-sm tracking-wider uppercase border border-white/20 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full">Who We Are</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight fade-up" style={{ transitionDelay: '0.1s' }}>
              Your strategic bridge into Namibia
            </h2>
            
            <div className="w-12 h-1 bg-rj-gold rounded-full fade-up" style={{ transitionDelay: '0.2s' }}></div>
            
            <p className="text-lg font-medium text-white/90 fade-up" style={{ transitionDelay: '0.3s' }}>
              R&J Advisory is a premier trade, investment, and economic advisory firm dedicated to unlocking value in emerging markets.
            </p>
            
            <p className="text-gray-400 leading-relaxed fade-up" style={{ transitionDelay: '0.4s' }}>
              With deep roots in the Namibian economy and a global perspective, we facilitate high-impact investments, guide SME development, and provide unparalleled economic research. We connect international capital with local opportunity.
            </p>

            <div className="flex flex-wrap gap-3 pt-6 fade-up" style={{ transitionDelay: '0.5s' }}>
              {['01 Insight-Driven', '02 Locally Rooted', '03 Globally Connected'].map((pillar, i) => (
                <div key={i} className="font-mono text-xs bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-full text-white flex items-center">
                  <div className="w-1.5 h-1.5 bg-rj-gold rounded-full mr-2"></div>
                  {pillar}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
