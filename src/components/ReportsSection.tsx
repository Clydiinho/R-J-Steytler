import { FileText, Download } from 'lucide-react';

export default function ReportsSection() {
  const reports = [
    {
      title: "Namibia Economic Insights: Navigating Moderate Growth Amid Global Headwinds",
      date: "May 2025",
      category: "MACROECONOMICS",
      excerpt: "An in-depth analysis of Namibia's fiscal policy trajectory, inflation targeting, and resilience strategies for the upcoming financial year.",
      featured: true,
      color: "#0A1628"
    },
    {
      title: "Green Hydrogen: Namibia's $10B Export Opportunity",
      date: "Apr 2025",
      category: "ENERGY SECTOR",
      excerpt: "Evaluating the infrastructure requirements, global off-take agreements, and local value creation of the Tsau //Khaeb National Park projects.",
      featured: false,
      color: "#00FF88"
    },
    {
      title: "SME Finance Gap: Unlocking N$4.2B in Untapped Lending",
      date: "Mar 2025",
      category: "FINANCIAL INCLUSION",
      excerpt: "Assessing structural barriers in the Namibian credit market and proposing blended finance solutions for SME acceleration.",
      featured: false,
      color: "#C8A24A"
    }
  ];

  return (
    <section className="py-24 bg-transparent text-white border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-rj-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-rj-gold mb-3 block">Knowledge Hub</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">Intelligence Reports</h2>
          </div>
          <a href="#" className="font-mono text-sm hover:text-rj-gold transition-colors mt-4 md:mt-0 flex items-center gap-2 text-gray-300">
            View All Publications <span>→</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          
          {/* Featured Report (Left) */}
          <div className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/30 transition-all duration-500 flex flex-col h-full">
            <div className="h-48 md:h-64 bg-rj-navy relative flex items-center justify-center overflow-hidden">
              {/* SVG Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="crosshatch" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4 M-2,6 l4,4 M0,0 l8,8 M6,-2 l4,4" stroke="currentColor" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#crosshatch)" />
              </svg>
              
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs px-3 py-1.5 rounded-full shadow-inner">
                FEATURED
              </div>
              <FileText size={48} className="text-white/80 relative z-10" strokeWidth={1} />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-[#0A1628]/60 backdrop-blur-sm -mt-4 relative z-10 rounded-t-3xl border-t border-white/5">
              <div className="flex justify-between items-center font-mono text-xs text-gray-400 mb-4">
                <span>{reports[0].date}</span>
                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">{reports[0].category}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 leading-tight text-white group-hover:text-rj-gold transition-colors">
                {reports[0].title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {reports[0].excerpt}
              </p>
              <div className="mt-auto">
                <a href="#" className="font-mono text-rj-gold font-medium uppercase tracking-wide text-sm flex items-center hover:translate-x-2 transition-transform w-[max-content]">
                  Read Report <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Stacked */}
          <div className="flex flex-col gap-6 h-full">
            {reports.slice(1).map((report, i) => (
              <div key={i} className="bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/30 transition-all duration-500 flex sm:flex-row flex-col flex-1">
                <div className="sm:w-1/3 min-h-[160px] bg-rj-navy relative flex items-center justify-center overflow-hidden">
                   <svg className="absolute inset-0 w-full h-full opacity-20" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <defs><pattern id={`crosshatch2-${i}`} width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0,6 l6,-6 M-1,1 l2,-2 M5,7 l2,-2" stroke={report.color} strokeWidth="1"/></pattern></defs>
                    <rect width="100%" height="100%" fill={`url(#crosshatch2-${i})`} />
                  </svg>
                  <FileText size={32} className="text-white/80 relative z-10" strokeWidth={1} />
                </div>
                
                <div className="p-6 sm:w-2/3 flex flex-col justify-center sm:-ml-4 relative z-10 bg-[#0A1628]/60 backdrop-blur-sm sm:rounded-l-3xl border-t sm:border-t-0 sm:border-l border-white/5">
                  <div className="flex justify-between items-center font-mono text-[0.65rem] text-gray-400 mb-3">
                    <span>{report.date}</span>
                    <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{report.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2 leading-snug text-white group-hover:text-rj-gold transition-colors">
                    {report.title}
                  </h3>
                  <a href="#" className="font-mono text-rj-gold font-medium uppercase tracking-wide text-xs mt-3 flex items-center hover:translate-x-2 transition-transform w-[max-content]">
                    Read Report <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Subscription Strip */}
        <div className="bg-[#0A1628]/60 backdrop-blur-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mt-16">
          <div className="bg-rj-gold/10 p-8 md:p-10 md:w-1/2 w-full border-b md:border-b-0 md:border-r border-white/10 flex items-center">
            <h4 className="font-serif text-2xl md:text-3xl text-white">Get premium insights delivered monthly.</h4>
          </div>
          <div className="p-8 md:p-10 md:w-1/2 w-full flex">
            <form className="flex w-full bg-white/5 border border-white/10 p-1.5 rounded-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-transparent text-white px-4 py-2 font-sans w-full focus:outline-none transition-colors placeholder:text-gray-500 rounded-l-full"
              />
              <button className="bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium px-6 py-2.5 rounded-full whitespace-nowrap hover:bg-rj-gold hover:text-rj-navy transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
