import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    phone: '',
    country: '',
    area: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    setError('');

    const subject = encodeURIComponent(`Mandate Inquiry: ${formData.area || 'Strategic Advisory'} - ${formData.organisation || formData.fullName}`);
    const bodyContent = 
`Full Name: ${formData.fullName}
Email: ${formData.email}
Organisation: ${formData.organisation || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Country / Region: ${formData.country || 'N/A'}
Area of Interest: ${formData.area || 'General Strategic Advisory'}

Message:
${formData.message}
`;

    const mailtoUrl = `mailto:info@steytler.com.na?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-rj-amber/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4 w-fit">
              Get In Touch
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-4">
              Let's start the <span className="italic text-rj-gold">conversation</span>
            </h2>
            <p className="font-sans text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              We work with governments, investors and institutions seeking credible advisory and delivery support across Africa. We respond within one business day.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-5 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">Email</div>
                  <a href="mailto:info@steytler.com.na" className="font-sans font-medium text-lg text-white hover:text-rj-gold transition-colors">
                    info@steytler.com.na
                  </a>
                  <div className="text-gray-500 text-xs mt-0.5">We respond within one business day</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-5 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">Direct Line</div>
                  <a href="tel:+264817508980" className="font-sans font-medium text-lg text-white hover:text-rj-gold transition-colors">
                    +264 81 750 8980
                  </a>
                  <div className="text-gray-500 text-xs mt-0.5">Windhoek Central Office</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-rj-gold shrink-0 mr-5 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">Headquarters</div>
                  <div className="font-sans font-medium text-base text-white">
                    Windhoek, Namibia
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    Operating markets: Windhoek · Nairobi · Lagos · New Delhi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative">
            <h3 className="font-serif text-2xl font-medium text-white mb-2">
              Tell us about your mandate
            </h3>
            <p className="text-gray-400 text-xs font-mono mb-6">
              Opens pre-filled in your default email client. No tracking cookies.
            </p>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@organisation.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Organisation
                  </label>
                  <input 
                    type="text" 
                    value={formData.organisation}
                    onChange={(e) => setFormData({...formData, organisation: e.target.value})}
                    placeholder="Company or Institution"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+264 ..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Country or Region
                  </label>
                  <input 
                    type="text" 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="e.g. Namibia, SADC, UK, UAE"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Area of Interest
                  </label>
                  <select 
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    className="w-full bg-[#0A1628] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors"
                  >
                    <option value="">Select an area…</option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Government & Institutional Navigation">Government &amp; Institutional Navigation</option>
                    <option value="Infrastructure & Project Development">Infrastructure &amp; Project Development</option>
                    <option value="Development Finance & Capital Structuring">Development Finance &amp; Capital Structuring</option>
                    <option value="Energy Transition & Industrial Platforms">Energy Transition &amp; Industrial Platforms</option>
                    <option value="Market Entry — Namibia & Africa">Market Entry — Namibia &amp; Africa</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                  Message *
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Outline what you are considering, what work has been completed, and what support is needed..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-rj-gold focus:ring-1 focus:ring-rj-gold transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full py-3.5 font-mono text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-rj-green text-rj-navy' 
                    : 'bg-rj-gold text-rj-navy hover:bg-white transition-colors'
                }`}
              >
                {submitted ? 'Email Client Opened ✓' : (
                  <>
                    Send message <ArrowRight size={14} />
                  </>
                )}
              </button>

              <div className="text-center font-mono text-[11px] text-gray-400 pt-2">
                We respond within one business day.
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
