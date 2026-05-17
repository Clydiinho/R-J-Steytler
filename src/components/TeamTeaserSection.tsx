import { Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamTeaserSection() {
  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden flex items-center justify-center">
      {/* Liquid glass background elements */}
      <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-rj-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] bg-rj-green/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="bg-[#0A1628]/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Users size={32} className="text-rj-gold" strokeWidth={1.5} />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Meet the minds behind the market.
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
            Our leadership brings decades of collective experience across global capital markets, sovereign advisory, and frontier structuring.
          </p>

          <Link 
            to="/team" 
            className="inline-flex items-center justify-center bg-white/5 border border-rj-gold/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium tracking-wide uppercase text-sm hover:bg-rj-gold hover:text-rj-navy hover:border-rj-gold transition-all duration-300 shadow-[0_0_20px_rgba(200,162,74,0.1)] hover:shadow-[0_0_25px_rgba(200,162,74,0.3)]"
          >
            Discover Our Team <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
