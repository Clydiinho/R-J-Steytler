import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-rj-navy-light text-white border-t border-[rgba(200,162,74,0.2)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1 */}
          <div>
            <div className="font-serif text-3xl font-semibold tracking-wide mb-6">
              R<span className="text-rj-gold">&amp;</span>J
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 max-w-xs">
              Namibia's premier trade, investment, and economic advisory firm. Global Impact. Local Insights.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-rj-gold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-sans">
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Insights & Reports</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-rj-gold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-sans">
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">SME Development</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Trade Facilitation</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Economic Research</a></li>
              <li><a href="#" className="hover:text-rj-gold hover:underline transition-colors">Policy Consulting</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-rj-gold mb-6">Connect</h4>
            <p className="text-gray-300 text-sm mb-6">Subscribe to our newsletter for the latest Namibian economic insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-rj-gold hover:border-rj-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-rj-gold hover:border-rj-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-rj-gold hover:border-rj-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-rj-gold hover:border-rj-gold transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500">
          <div>&copy; {new Date().getFullYear()} R&J Advisory. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-rj-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rj-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
