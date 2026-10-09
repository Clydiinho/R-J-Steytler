import { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 text-white relative">
      <ContactSection />

      {/* Direct Contact Block */}
      <section className="px-6 max-w-5xl mx-auto -mt-8">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
              Prefer to speak directly?
            </h3>
            <p className="text-gray-300 font-sans text-sm md:text-base">
              Call the Windhoek office on <span className="text-white font-mono">+264 81 750 8980</span>, or write directly to <span className="text-rj-gold font-mono">info@steytler.com.na</span>.
            </p>
          </div>
          <a
            href="mailto:info@steytler.com.na"
            className="inline-flex items-center justify-center bg-white/10 border border-white/20 hover:bg-rj-gold hover:text-rj-navy text-white px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all shrink-0"
          >
            Email us →
          </a>
        </div>
      </section>
    </div>
  );
}
