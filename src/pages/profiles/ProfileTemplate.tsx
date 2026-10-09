import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CareerHighlight {
  category: string;
  title: string;
  institution: string;
  text: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  desc?: string;
}

export interface PublicationItem {
  num: number;
  citation: string;
}

export interface ProfileData {
  name: string;
  surnameItalic: string;
  roleLine: string;
  initials: string;
  quickFacts: string[];
  aboutHeading: string;
  pullQuote: string;
  quoteAuthor?: string;
  bioParagraphs: string[];
  highlights: CareerHighlight[];
  // Optional extras
  timeline?: TimelineItem[];
  expertiseTags?: string[];
  publications?: PublicationItem[];
  closingQuote?: string;
}

export default function ProfileTemplate({ profile }: { profile: ProfileData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${profile.name} ${profile.surnameItalic} · R&J Steytler`;
  }, [profile]);

  return (
    <div className="pt-32 pb-20 text-white relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link 
          to="/leadership" 
          className="inline-flex items-center text-gray-400 hover:text-rj-gold transition-colors font-mono tracking-widest uppercase text-xs"
        >
          <ArrowLeft size={14} className="mr-2" /> All Leadership
        </Link>
      </div>

      {/* Hero Header */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
              Leadership Profile
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
              {profile.name} <span className="italic text-rj-gold">{profile.surnameItalic}</span>
            </h1>
            <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              {profile.roleLine}
            </p>

            {/* Quick Facts List */}
            <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-3">
                Quick Facts
              </div>
              <div className="flex flex-wrap gap-2.5">
                {profile.quickFacts.map((fact, idx) => (
                  <span 
                    key={idx}
                    className="font-mono text-xs bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-gray-300"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait with Initials Fallback */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl bg-[#0A1628]/80 border border-rj-gold/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(200,162,74,0.2)] p-8 text-center group">
              <div className="w-24 h-24 rounded-2xl bg-rj-navy border border-rj-gold/50 flex items-center justify-center font-mono text-3xl text-rj-gold font-bold mb-4 shadow-inner">
                {profile.initials}
              </div>
              <span className="font-serif text-lg font-medium text-white">{profile.name} {profile.surnameItalic}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-1">R&amp;J Steytler</span>
            </div>
          </div>

        </div>
      </section>

      {/* About Section: Pull-Quote & Bio */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="mb-10 pb-8 border-b border-white/10">
            <blockquote className="font-serif italic text-2xl md:text-3xl text-rj-gold leading-relaxed border-l-2 border-rj-gold pl-6">
              "{profile.pullQuote}"
            </blockquote>
            {profile.quoteAuthor && (
              <div className="font-mono text-xs text-gray-400 mt-3 pl-6">
                — {profile.quoteAuthor}
              </div>
            )}
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            {profile.aboutHeading}
          </h2>

          <div className="space-y-6 text-gray-300 font-sans text-base md:text-lg leading-relaxed">
            {profile.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      {profile.highlights && profile.highlights.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
              Institutional Record
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Career <span className="italic text-rj-gold">highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.highlights.map((h, i) => (
              <div 
                key={i}
                className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {h.category}
                    </span>
                    <span className="font-mono text-xs text-gray-500">0{i+1}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-white mb-2 group-hover:text-rj-gold transition-colors">
                    {h.title}
                  </h3>

                  <div className="font-mono text-xs text-gray-400 mb-4">
                    {h.institution}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Optional: Career Timeline */}
      {profile.timeline && profile.timeline.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
              Chronology
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium">
              Career <span className="italic text-rj-gold">timeline</span>
            </h2>
          </div>

          <div className="relative pl-6 border-l border-rj-gold/30 space-y-8">
            {profile.timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-rj-gold shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="font-mono text-xs text-rj-gold mb-1 font-semibold">{item.year}</div>
                <div className="font-serif text-lg text-white font-medium">{item.title}</div>
                {item.desc && <div className="text-gray-400 text-sm mt-1 font-sans">{item.desc}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Optional: Areas of Expertise */}
      {profile.expertiseTags && profile.expertiseTags.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <div className="bg-[#0A1628]/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {profile.expertiseTags.map((tag, i) => (
                <span key={i} className="font-mono text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional: Selected Publications */}
      {profile.publications && profile.publications.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <div className="bg-[#0A1628]/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={18} className="text-rj-gold" />
              <h3 className="font-serif text-2xl font-medium text-white">
                Selected Publications &amp; Research
              </h3>
            </div>
            <div className="space-y-4">
              {profile.publications.map((pub) => (
                <div key={pub.num} className="flex gap-4 items-start text-sm text-gray-300 font-sans border-b border-white/5 pb-3">
                  <span className="font-mono text-xs text-rj-gold font-semibold shrink-0">[{pub.num}]</span>
                  <span>{pub.citation}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional: Closing Quote */}
      {profile.closingQuote && (
        <section className="px-6 max-w-4xl mx-auto mb-20 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-gray-300">
            {profile.closingQuote}
          </p>
        </section>
      )}

      {/* Shared CTA Band */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Engage with our <span className="italic text-rj-gold">team</span>
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with the R&amp;J Steytler leadership team for strategic advisory, institutional partnerships, and project development support.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
          >
            Start the conversation <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
