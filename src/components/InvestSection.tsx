import { useEffect, useRef, useState } from 'react';

export default function InvestSection() {
  const [isVisible, setIsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (barsRef.current) {
      observer.observe(barsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const sectors = [
    { name: 'Energy', value: '85%' },
    { name: 'Mining', value: '72%' },
    { name: 'Agribusiness', value: '58%' },
    { name: 'Tourism', value: '45%' },
    { name: 'Logistics', value: '38%' },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-transparent">
      {/* Full bleed background image with dark overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80)' }}
      >
        <div className="absolute inset-0 bg-[rgba(10,22,40,0.88)]"></div>
      </div>

      {/* Edge peeking container */}
      <div className="relative z-10 max-w-[1400px] mx-auto bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row">
        
        {/* Left Column - Sticky Panel */}
        <div className="lg:w-1/2 p-10 md:p-16 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] overflow-y-auto hidden-scrollbar flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Invest in Namibia</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
            A stable multi-party democracy, robust legal framework, and strategic geographic positioning make Namibia an unparalleled launchpad for Southern African investment.
          </p>
          
          <div className="mb-10" ref={barsRef}>
            <div className="font-mono text-sm uppercase tracking-wider mb-6 text-rj-gold font-semibold">Priority Sectors (Growth Potential)</div>
            <div className="space-y-5">
              {sectors.map((sector, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between font-mono text-xs mb-1.5 font-medium">
                    <span>{sector.name}</span>
                    <span>{sector.value}</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rj-gold transition-all duration-1500 ease-out shadow-[0_0_10px_rgba(200,162,74,0.5)]"
                      style={{ 
                        width: isVisible ? sector.value : '0%',
                        transitionDelay: `${i * 0.15}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-medium hover:bg-rj-gold hover:text-rj-navy hover:border-rj-gold transition-all duration-300 group shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              Download Investment Prospectus <span className="ml-2 font-mono group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 bg-white/5 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Featured full width card */}
            <div className="md:col-span-2 bg-[#0A1628]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-rj-gold/20 relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 text-[120px] font-sans font-bold text-white/5 leading-none pointer-events-none group-hover:scale-110 transition-transform duration-700">FDI</div>
              <div className="relative z-10">
                <div className="font-mono text-rj-gold font-medium mb-2 uppercase tracking-wide">FDI Projected 2025–2030</div>
                <div className="font-mono text-5xl md:text-6xl text-white font-medium">$10.4B</div>
              </div>
            </div>

            {/* Grid cards */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col justify-center">
              <div className="font-mono text-3xl font-medium text-white mb-2">AA-</div>
              <div className="font-sans text-sm text-gray-300 uppercase tracking-widest font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-rj-green rounded-full shadow-[0_0_8px_rgba(0,255,136,0.8)]"></div>
                Sovereign Rating
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col justify-center">
              <div className="font-mono text-3xl font-medium text-white mb-2">2.9M</div>
              <div className="font-sans text-sm text-gray-300 uppercase tracking-widest font-semibold">Population</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col justify-center">
              <div className="font-mono text-3xl font-medium text-white mb-2">30+</div>
              <div className="font-sans text-sm text-gray-300 uppercase tracking-widest font-semibold">Years Democracy</div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col justify-center">
              <div className="font-mono text-3xl font-medium text-white mb-2">824km</div>
              <div className="font-sans text-sm text-gray-300 uppercase tracking-widest font-semibold">Port Coastline</div>
            </div>

            <div className="md:col-span-2 bg-rj-gold/10 backdrop-blur-xl p-8 rounded-3xl border border-rj-gold/30 flex items-center justify-between shadow-[0_8px_32px_rgba(200,162,74,0.15)]">
              <div>
                <div className="font-mono text-xl font-medium text-white mb-1">SADC Access</div>
                <div className="font-sans text-sm text-gray-300">Tariff-free trade reach</div>
              </div>
              <div className="font-mono text-4xl font-medium text-rj-gold">380M+</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
