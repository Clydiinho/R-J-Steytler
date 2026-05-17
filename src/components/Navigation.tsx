import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Windhoek',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{time} CAT</>;
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${scrolled ? 'top-[65px]' : 'top-[80px]'}`}>
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[10px] text-rj-gold tracking-widest whitespace-nowrap z-50">
        AFRICAN CENTRAL TIME (WINDHOEK) · <span className="text-white"><LiveClock /></span>
      </div>
      <div className={`rounded-full p-[1px] transition-all duration-700 bg-gradient-to-r from-white/10 via-rj-gold/50 to-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative`}>
        <div className={`rounded-full backdrop-blur-2xl px-6 md:px-8 h-16 flex items-center justify-between transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${scrolled ? 'bg-rj-navy/40' : 'bg-[#050D1A]/30'}`}>
          <div className="font-serif text-2xl font-semibold tracking-wide flex-shrink-0 w-32">
            R<span className="text-rj-gold">&amp;</span>J
          </div>
          
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8 text-[0.75rem] uppercase tracking-[0.1em] font-medium text-gray-200">
            <Link to="/team" className="hover:text-rj-gold transition-colors">Team</Link>
            <a href="#" className="hover:text-rj-gold transition-colors">Services</a>
            <a href="#" className="hover:text-rj-gold transition-colors">Insights</a>
            <Link to="/about" className="hover:text-rj-gold transition-colors">About</Link>
          </div>

          <div className="hidden lg:flex flex-shrink-0 w-32 justify-end">
            <a href="#" className="text-[0.75rem] uppercase tracking-[0.1em] bg-rj-gold text-rj-navy px-5 py-2 rounded-full hover:bg-white hover:text-rj-navy transition-colors font-bold shadow-[0_0_15px_rgba(200,162,74,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] whitespace-nowrap">Contact Us</a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-rj-navy/80 backdrop-blur-3xl border border-rj-gold/30 rounded-2xl px-6 py-6 flex flex-col space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Link to="/team" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors">Team</Link>
          <a href="#" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors">Services</a>
          <a href="#" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors">Insights</a>
          <Link to="/about" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors">About</Link>
          <a href="#" className="uppercase tracking-[0.08em] text-sm text-rj-gold font-bold">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
