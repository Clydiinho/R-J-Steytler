import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GlobalCtaProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function GlobalCta({
  heading = "Discuss a project or decision with R&J",
  text = "Tell us what you are considering, what work has already been completed, and which decision, approval, funding requirement or institutional obstacle needs support. We work with governments, businesses, investors, development institutions and project sponsors across Africa.",
  buttonText = "Start a conversation",
  buttonLink = "/contact"
}: GlobalCtaProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
      <div className="bg-gradient-to-br from-[#0A1628]/90 to-[#050D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-rj-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Abstract watermark chart line */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M0,400 L0,200 Q100,250 200,150 T400,180 T600,100 T800,220 T1000,50 L1000,400 Z" fill="currentColor" />
        </svg>

        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-6 relative z-10">
          Direct Senior Advisory
        </span>

        <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 text-white relative z-10 leading-tight">
          {heading}
        </h2>
        
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed text-base md:text-lg relative z-10">
          {text}
        </p>

        <Link 
          to={buttonLink}
          className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-8 py-4 rounded-full font-bold tracking-wider hover:bg-white hover:text-rj-navy transition-all duration-300 shadow-[0_0_20px_rgba(200,162,74,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] relative z-10 text-sm uppercase"
        >
          {buttonText} <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
