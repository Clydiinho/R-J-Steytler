import { useState } from 'react';
import { FileText, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const reports = [
    {
      title: "Namibia Taxation Demands Representation, Especially for SMEs",
      date: "2026",
      region: "Namibia",
      category: "ECONOMIC NOTES",
      author: "Dr. John Steytler, Co-founder",
      excerpt: "Why the 2026/27 budget is an opening to embed SME voices in tax policy, and how a preferential corporate rate and lighter compliance burden would change the incentives facing 40,000 enterprises.",
      featured: true,
      pdf: "/publications/Tax demands representation.pdf",
      color: "#0A1628"
    },
    {
      title: "When Fuel Prices Rise, Namibians Start Looking for a Hike",
      date: "2026",
      region: "Namibia",
      category: "ECONOMIC NOTES",
      author: "Dr. John Steytler, Co-founder",
      excerpt: "How a petrol and diesel increase transmits into transport, food, tourism and vulnerable households — and five practical steps to soften the impact.",
      featured: false,
      pdf: "/publications/Namibians fuel prices rise.pdf",
      color: "#00FF88"
    },
    {
      title: "When Fuel Prices Rise, Kenyans Feel It Everywhere",
      date: "2026",
      region: "Kenya",
      category: "ECONOMIC NOTES",
      author: "Prof. Rachel K. Gesami, Head of East Africa",
      excerpt: "From matatu fares to farm inputs, why transparent communication, targeted support and investment in rail and alternative energy build a more resilient economy.",
      featured: false,
      pdf: "/publications/Kenya fuel prices rise.pdf",
      color: "#C8A24A"
    },
    {
      title: "Building an Oil Refinery Could Be a Fine Idea",
      date: "2025",
      region: "Southern Africa",
      category: "SECTOR BRIEFS",
      author: "Dr. John Steytler, Co-founder",
      excerpt: "The economic, environmental and geopolitical trade-offs of a joint Namibia–Botswana refinery — and why a proper feasibility study is the decision that matters next.",
      featured: false,
      pdf: "/publications/Building an oil refinery 2.pdf",
      color: "#00FF88"
    },
    {
      title: "The Pothole Economy: Filling People's Pockets",
      date: "2025",
      region: "Namibia",
      category: "ECONOMIC NOTES",
      author: "Dr. John Steytler, Co-founder",
      excerpt: "The case for a grassroots-first approach to N$500 million in road repairs — paying local unemployed Namibians and building demand from the local economy up.",
      featured: false,
      pdf: "/publications/The Pothole Economy 2.pdf",
      color: "#C8A24A"
    },
    {
      title: "Namibia Might Have to Import Yellow Cake",
      date: "May 2024",
      region: "Namibia",
      category: "SECTOR BRIEFS",
      author: "Dr. John Steytler, Co-founder",
      excerpt: "The case for regional value chains, Agenda 2063 alignment and rethinking Africa's role in the critical-minerals conversation, with uranium at the centre.",
      featured: false,
      pdf: "/publications/Namibia import yellow cake.pdf",
      color: "#0A1628"
    }
  ];

  const categories = ['ALL', 'ECONOMIC NOTES', 'SECTOR BRIEFS'];
  const filteredReports = selectedCategory === 'ALL' 
    ? reports 
    : reports.filter(r => r.category === selectedCategory);

  const featured = filteredReports[0] || reports[0];
  const rest = filteredReports.slice(1, 4);

  return (
    <section className="py-24 bg-transparent text-white border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-rj-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-rj-gold mb-3 block">
              Research &amp; Analysis
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
              Intelligence Reports &amp; <span className="italic text-rj-gold">Economic Notes</span>
            </h2>
          </div>
          <Link to="/publications" className="font-mono text-sm hover:text-rj-gold transition-colors mt-4 md:mt-0 flex items-center gap-2 text-gray-300">
            View All Publications <span>→</span>
          </Link>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-xs uppercase px-4 py-2 rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-rj-gold text-rj-navy border-rj-gold font-bold shadow-[0_0_15px_rgba(200,162,74,0.3)]'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-rj-gold/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          
          {/* Featured Report (Left) */}
          <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/30 transition-all duration-500 flex flex-col h-full">
            <div className="h-48 md:h-64 bg-rj-navy relative flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-20" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4 M-2,6 l4,4 M0,0 l8,8 M6,-2 l4,4" stroke="currentColor" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#crosshatch)" />
              </svg>
              
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs px-3 py-1.5 rounded-full shadow-inner">
                FEATURED · {featured.region}
              </div>
              <FileText size={48} className="text-white/80 relative z-10" strokeWidth={1} />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-[#0A1628]/60 backdrop-blur-sm -mt-4 relative z-10 rounded-t-3xl border-t border-white/5">
              <div className="flex justify-between items-center font-mono text-xs text-gray-400 mb-4">
                <span>{featured.date}</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">{featured.category}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3 leading-tight text-white group-hover:text-rj-gold transition-colors">
                {featured.title}
              </h3>
              <div className="font-mono text-xs text-rj-gold mb-4">
                {featured.author}
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm md:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-auto">
                <a 
                  href={featured.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-mono text-rj-gold font-medium uppercase tracking-wide text-sm flex items-center hover:translate-x-2 transition-transform w-[max-content]"
                >
                  Read PDF <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Stacked */}
          <div className="flex flex-col gap-6 h-full">
            {rest.map((report, i) => (
              <div key={i} className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/30 transition-all duration-500 flex sm:flex-row flex-col flex-1">
                <div className="sm:w-1/3 min-h-[160px] bg-rj-navy relative flex items-center justify-center overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full opacity-20" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <defs><pattern id={`crosshatch2-${i}`} width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0,6 l6,-6 M-1,1 l2,-2 M5,7 l2,-2" stroke={report.color} strokeWidth="1"/></pattern></defs>
                    <rect width="100%" height="100%" fill={`url(#crosshatch2-${i})`} />
                  </svg>
                  <FileText size={32} className="text-white/80 relative z-10" strokeWidth={1} />
                </div>
                
                <div className="p-6 sm:w-2/3 flex flex-col justify-center sm:-ml-4 relative z-10 bg-[#0A1628]/60 backdrop-blur-sm sm:rounded-l-3xl border-t sm:border-t-0 sm:border-l border-white/5">
                  <div className="flex justify-between items-center font-mono text-[0.65rem] text-gray-400 mb-2">
                    <span>{report.date} · {report.region}</span>
                    <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{report.category}</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium mb-1 leading-snug text-white group-hover:text-rj-gold transition-colors">
                    {report.title}
                  </h3>
                  <div className="font-mono text-[10px] text-rj-gold mb-3">
                    {report.author}
                  </div>
                  <a 
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-rj-gold font-medium uppercase tracking-wide text-xs mt-auto flex items-center hover:translate-x-2 transition-transform w-[max-content]"
                  >
                    Read PDF <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Subscription Strip */}
        <div className="bg-[#0A1628]/60 backdrop-blur-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mt-16">
          <div className="bg-rj-gold/10 p-8 md:p-10 md:w-1/2 w-full border-b md:border-b-0 md:border-r border-white/10 flex items-center">
            <h4 className="font-serif text-2xl md:text-3xl text-white">Get macroeconomic briefings delivered monthly.</h4>
          </div>
          <div className="p-8 md:p-10 md:w-1/2 w-full flex">
            <form className="flex w-full bg-white/5 border border-white/10 p-1.5 rounded-full" onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:info@steytler.com.na?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20R%26J%20Steytler%20monthly%20research%20briefings.";
            }}>
              <input 
                type="email" 
                placeholder="Institutional or Business Email" 
                required
                className="bg-transparent text-white px-4 py-2 font-sans w-full focus:outline-none transition-colors placeholder:text-gray-500 rounded-l-full text-sm"
              />
              <button type="submit" className="bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium px-6 py-2.5 rounded-full whitespace-nowrap hover:bg-rj-gold hover:text-rj-navy transition-all duration-300 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
