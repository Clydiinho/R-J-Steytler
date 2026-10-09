import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rj-navy-light text-white border-t border-[rgba(200,162,74,0.2)] relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1 - Brand */}
          <div>
            <div className="font-serif text-3xl font-semibold tracking-wide mb-2">
              R<span className="text-rj-gold">&amp;</span>J <span className="text-xl font-normal text-gray-300">Steytler</span>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-4">
              Windhoek · Namibia
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Strategic Advisory · Project Development · Institutional Partnerships. A Namibia-rooted firm operating across Windhoek, Nairobi, Lagos and New Delhi.
            </p>
            <div className="font-mono text-xs text-gray-500">
              R&amp;J Steytler (Pty) Ltd
            </div>
          </div>

          {/* Col 2 - Pages */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-6 font-semibold">Pages</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><Link to="/" className="hover:text-rj-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Services</Link></li>
              <li><Link to="/focus" className="hover:text-rj-gold transition-colors">Focus Areas</Link></li>
              <li><Link to="/leadership" className="hover:text-rj-gold transition-colors">Leadership</Link></li>
              <li><Link to="/namibia" className="hover:text-rj-gold transition-colors">Namibia</Link></li>
              <li><Link to="/macro" className="hover:text-rj-gold transition-colors">Macro Monitor</Link></li>
              <li><Link to="/publications" className="hover:text-rj-gold transition-colors">Research</Link></li>
              <li><Link to="/contact" className="hover:text-rj-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-6 font-semibold">Service Lines</h4>
            <ul className="space-y-3 text-sm text-gray-300 font-sans">
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Strategic Advisory</Link></li>
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Government Navigation</Link></li>
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Infrastructure Development</Link></li>
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Development Finance</Link></li>
              <li><Link to="/services" className="hover:text-rj-gold transition-colors">Energy Transition</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contact details */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-6 font-semibold">Direct Contact</h4>
            <div className="space-y-4 text-sm text-gray-300 font-sans">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-rj-gold mt-1 shrink-0" />
                <a href="mailto:info@steytler.com.na" className="hover:text-rj-gold transition-colors">
                  info@steytler.com.na
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-rj-gold mt-1 shrink-0" />
                <a href="tel:+264817508980" className="hover:text-rj-gold transition-colors">
                  +264 81 750 8980
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={16} className="text-rj-gold mt-1 shrink-0" />
                <span>www.steytler.com.na</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-rj-gold mt-1 shrink-0" />
                <span className="text-xs text-gray-400">
                  Windhoek · Nairobi · Lagos · New Delhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-400">
          <div>&copy; 2026 R&amp;J Steytler (Pty) Ltd. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-rj-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-rj-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
