import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Privacy() {
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
            Privacy <span className="italic text-rj-gold">Policy</span>
          </h1>
          <p className="text-gray-300 font-sans text-lg mb-4">
            How we handle information in connection with this website. This is an informational site with no accounts, no payments and no tracking cookies.
          </p>
          <div className="font-mono text-xs text-rj-amber bg-rj-amber/10 border border-rj-amber/30 px-3 py-1.5 rounded-full inline-block">
            Effective date: 22 July 2026 · Draft pending review by legal counsel.
          </div>
        </div>

        {/* Intro */}
        <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-12 text-gray-300 font-sans space-y-6 leading-relaxed">
          <p>
            This Privacy Policy explains how R&amp;J Steytler (Pty) Ltd ("R&amp;J Steytler", "we", "us") handles information in connection with this website, <span className="text-white font-mono">www.steytler.com.na</span>. We are based in Windhoek, Namibia. Questions may be directed to <span className="text-rj-gold font-mono">info@steytler.com.na</span>.
          </p>

          <div className="border-t border-white/10 pt-6 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">1. The short version</h2>
              <p>
                This is an informational website. We do not run accounts, take payments, or set advertising or tracking cookies. We do not sell personal information. The only information you actively provide is through the enquiry form, and that is sent from your own device to our email address.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">2. Information you provide</h2>
              <p>
                If you use the enquiry form on our Contact page, it opens your own email application, pre-filled with the details you entered — your name, email address, and any organisation, phone number, country and message you choose to include. That message is sent by you, from your email account, to <span className="text-white font-mono">info@steytler.com.na</span>. We receive it as an ordinary email and use it solely to respond to your enquiry and to manage any resulting engagement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">3. Information collected automatically</h2>
              <p>
                We do not place analytics or tracking cookies on this site. However, some features load data directly from third-party services in your browser, which necessarily receive your device's IP address and standard request information in order to respond. These are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-400">
                <li>(a) Exchange-rate data for the market ticker and Macro Monitor, from <span className="text-white font-mono">open.er-api.com</span>;</li>
                <li>(b) Precious-metals prices, from <span className="text-white font-mono">gold-api.com</span>;</li>
                <li>(c) Map geometry for the interactive Africa map, from the jsDelivr / GitHub content networks.</li>
              </ul>
              <p className="mt-2 text-sm text-gray-400">
                These providers handle that request information under their own privacy policies. We do not control and are not responsible for their practices. If a provider is unavailable, the site falls back to stored figures and the feature still works.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">4. How we use information</h2>
              <p>
                We use information you send us to respond to enquiries, provide requested information, and manage professional engagements. We do not use it for automated decision-making or profiling, and we do not share it with third parties for their own marketing.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">5. Legal basis</h2>
              <p>
                Where applicable data-protection law requires a legal basis, we rely on your consent (which you give by choosing to contact us) and on our legitimate interest in responding to and managing professional enquiries.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">6. Retention</h2>
              <p>
                We keep enquiry correspondence for as long as needed to address your request and to meet our legal, accounting and record-keeping obligations, after which it is deleted or archived.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">7. Sharing</h2>
              <p>
                We do not sell or rent personal information. We may share it only with professional advisers, or where required by law or to establish or defend legal claims. The third-party data services in section 3 receive only the technical request information described there, not the contents of your enquiries.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">8. International transfers</h2>
              <p>
                The third-party data services in section 3 may process request information on servers outside Namibia. Any correspondence you send us is received in Namibia.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">9. Your rights</h2>
              <p>
                Subject to applicable law, you may request access to, correction of, or deletion of the personal information we hold about you, and you may object to or restrict certain processing. To exercise these rights, email <span className="text-white font-mono">info@steytler.com.na</span>. We will respond within a reasonable period.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">10. Security</h2>
              <p>
                We take reasonable measures to protect information in our possession. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">11. Children</h2>
              <p>
                This site is intended for a professional audience and is not directed at children. We do not knowingly collect information from children.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">12. Changes</h2>
              <p>
                We may update this policy from time to time. The effective date above indicates when it was last revised.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-white mb-2">13. Contact</h2>
              <p>
                R&amp;J Steytler (Pty) Ltd, Windhoek, Namibia. Email <span className="text-white font-mono">info@steytler.com.na</span>, telephone <span className="text-white font-mono">+264 81 750 8980</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Note & CTA */}
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-center">
          <p className="font-mono text-xs text-gray-400 mb-6 italic">
            This document is a working draft prepared to reflect how the website operates. It should be reviewed and approved by qualified legal counsel, and adjusted for the specific data-protection laws that apply to R&amp;J Steytler, before it is relied upon.
          </p>
          <div className="text-lg font-serif text-white mb-4">
            Questions about your information?
          </div>
          <p className="text-sm text-gray-300 font-sans mb-6">
            Email us and we will respond within a reasonable period.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Contact us <ArrowRight size={14} className="ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
