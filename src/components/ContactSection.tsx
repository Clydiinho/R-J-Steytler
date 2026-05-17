import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-transparent text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-rj-amber/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-4">
              Let's build something together.
            </h2>
            <p className="font-serif italic text-2xl text-rj-gold mb-12 border-l-2 border-rj-gold pl-4">
              Partner with the premier advisors in the Namibian market.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-6 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-1">Call Us</div>
                  <div className="font-sans font-medium text-lg">+264 61 223 4567</div>
                  <div className="text-gray-500 text-sm mt-1">Mon-Fri, 8am-5pm CAT</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-6 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-1">Email</div>
                  <div className="font-sans font-medium text-lg">partners@rjadvisory.na</div>
                  <div className="text-gray-500 text-sm mt-1">We aim to reply within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-6 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-1">Headquarters</div>
                  <div className="font-sans font-medium text-lg leading-snug">
                    Mutongo Street, Klein Windhoek<br/>
                    Windhoek, Namibia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Last Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Business Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Area of Interest</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-900">Select an option...</option>
                  <option value="sme" className="text-gray-900">SME Development</option>
                  <option value="fdi" className="text-gray-900">Trade & Foreign Investment</option>
                  <option value="research" className="text-gray-900">Economic Research</option>
                  <option value="other" className="text-gray-900">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full py-4 font-mono font-medium tracking-wide uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] ${
                  submitted 
                    ? 'bg-rj-green text-rj-navy' 
                    : 'bg-white/10 hover:bg-rj-gold border border-white/20 hover:border-rj-gold text-white hover:text-rj-navy'
                }`}
              >
                {submitted ? 'Message Sent ✓' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
