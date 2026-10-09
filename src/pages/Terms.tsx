import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
            Legal
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4 leading-tight">
            Terms of <span className="italic text-rj-gold">Use</span>
          </h1>
          <p className="text-gray-300 font-sans text-lg mb-4">
            The terms governing your use of this website. Information here is provided for general purposes and is not professional advice.
          </p>
          <div className="font-mono text-xs text-rj-amber bg-rj-amber/10 border border-rj-amber/30 px-3 py-1.5 rounded-full inline-block">
            Effective date: 22 July 2026 · Draft pending review by legal counsel.
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-12 text-gray-300 font-sans space-y-6 leading-relaxed">
          <p>
            These Terms of Use govern your use of the R&amp;J Steytler (Pty) Ltd website at <span className="text-white font-mono">www.steytler.com.na</span>. By using the site, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <div className="border-t border-white/10 pt-6 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">1. Purpose of the site</h2>
              <p>
                This website provides general information about R&amp;J Steytler, our services and leadership, and about economic conditions relevant to our work. It is provided for information only.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">2. Not professional advice</h2>
              <p>
                Nothing on this site constitutes investment, financial, legal, tax or other professional advice, and nothing here should be relied upon as the basis for any transaction or decision. The macroeconomic indicators, market data, commodity prices, tax rates and country information presented are for general information, may be delayed, estimated or summarised, and may contain errors or become out of date. Tax and regulatory figures in particular should be confirmed with the relevant authorities and qualified advisers before being relied upon. You should obtain professional advice specific to your circumstances before acting.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">3. Data sources and accuracy</h2>
              <p>
                Figures are drawn from public sources including the Bank of Namibia, the Namibia Statistics Agency and others named on the site, and some are refreshed live from third-party providers. We make reasonable efforts to present accurate information but give no warranty, express or implied, as to its accuracy, completeness, timeliness or fitness for any purpose.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">4. Intellectual property</h2>
              <p>
                The content, design, text, graphics and the R&amp;J Steytler name and logo on this site are owned by or licensed to R&amp;J Steytler (Pty) Ltd and are protected by applicable intellectual-property laws. You may view and print pages for your own reference. You may not reproduce, republish or exploit the content commercially without our prior written permission. Third-party data and map geometry remain the property of their respective sources.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">5. Acceptable use</h2>
              <p>
                You agree not to use the site unlawfully, to attempt to gain unauthorised access to it or its systems, to interfere with its operation, or to use it in any way that could damage or impair the site or others' use of it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">6. External links and services</h2>
              <p>
                The site links to, and loads data from, third-party services. We do not control and are not responsible for the content, availability or practices of those third parties. Links do not imply endorsement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">7. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, R&amp;J Steytler (Pty) Ltd shall not be liable for any loss or damage — whether direct, indirect, incidental or consequential — arising from your use of, or inability to use, this site or any information on it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">8. Governing law</h2>
              <p>
                These terms are governed by the laws of the Republic of Namibia, and the Namibian courts shall have jurisdiction over any dispute arising from them.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">9. Changes</h2>
              <p>
                We may revise these terms at any time. The effective date above indicates when it was last revised. Continued use of the site constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">10. Contact</h2>
              <p>
                R&amp;J Steytler (Pty) Ltd, Windhoek, Namibia. Email <span className="text-white font-mono">info@steytler.com.na</span>, telephone <span className="text-white font-mono">+264 81 750 8980</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Note & CTA */}
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-center">
          <p className="font-mono text-xs text-gray-400 mb-6 italic">
            This document is a working draft. It should be reviewed and approved by qualified legal counsel before it is relied upon.
          </p>
          <div className="text-lg font-serif text-white mb-4">
            Prefer to speak with us?
          </div>
          <p className="text-sm text-gray-300 font-sans mb-6">
            We work with governments, investors and institutions across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Get in touch <ArrowRight size={14} className="ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
