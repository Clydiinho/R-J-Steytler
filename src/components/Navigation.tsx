import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, TrendingUp, Users, Compass, BookOpen, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Windhoek',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{time} CAT</>;
}

type MenuKey = 'services' | 'focus' | 'leadership' | 'namibia' | 'research' | null;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or ESC key
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (key: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-300 ${scrolled ? 'top-[52px]' : 'top-[68px]'}`}
      onMouseLeave={handleMouseLeave}
    >
      {/* African Central Time strip */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-rj-gold tracking-widest whitespace-nowrap z-50 pointer-events-none">
        AFRICAN CENTRAL TIME (WINDHOEK) · <span className="text-white"><LiveClock /></span>
      </div>

      {/* Main Nav Bar Container */}
      <nav 
        aria-label="Main Navigation"
        className="rounded-full p-[1px] transition-all duration-700 bg-gradient-to-r from-white/10 via-rj-gold/50 to-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative"
      >
        <div className={`rounded-full backdrop-blur-2xl px-6 md:px-8 h-16 flex items-center justify-between transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${scrolled ? 'bg-rj-navy/85' : 'bg-[#050D1A]/75'}`}>
          
          {/* Brand Logo */}
          <Link to="/" className="flex flex-col flex-shrink-0 group">
            <span className="font-serif text-2xl font-semibold tracking-wide text-white group-hover:text-rj-gold transition-colors">
              R<span className="text-rj-gold">&amp;</span>J <span className="text-sm font-sans font-normal text-gray-300 ml-1">Steytler</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-rj-gold/80 -mt-1">
              Windhoek · Namibia
            </span>
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden xl:flex flex-1 items-center justify-center space-x-5 2xl:space-x-7 text-[0.72rem] uppercase tracking-[0.08em] font-medium text-gray-200">
            <Link to="/" className="hover:text-rj-gold transition-colors py-2">
              Home
            </Link>

            {/* Services with Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
            >
              <Link 
                to="/services" 
                className={`hover:text-rj-gold transition-colors py-2 flex items-center gap-1 ${activeMenu === 'services' ? 'text-rj-gold' : ''}`}
                aria-expanded={activeMenu === 'services'}
                aria-haspopup="true"
              >
                Services <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Focus Areas with Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('focus')}
            >
              <Link 
                to="/focus" 
                className={`hover:text-rj-gold transition-colors py-2 flex items-center gap-1 ${activeMenu === 'focus' ? 'text-rj-gold' : ''}`}
                aria-expanded={activeMenu === 'focus'}
                aria-haspopup="true"
              >
                Focus Areas <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === 'focus' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Leadership with Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('leadership')}
            >
              <Link 
                to="/leadership" 
                className={`hover:text-rj-gold transition-colors py-2 flex items-center gap-1 ${activeMenu === 'leadership' ? 'text-rj-gold' : ''}`}
                aria-expanded={activeMenu === 'leadership'}
                aria-haspopup="true"
              >
                Leadership <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === 'leadership' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Namibia with Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('namibia')}
            >
              <Link 
                to="/namibia" 
                className={`hover:text-rj-gold transition-colors py-2 flex items-center gap-1 ${activeMenu === 'namibia' ? 'text-rj-gold' : ''}`}
                aria-expanded={activeMenu === 'namibia'}
                aria-haspopup="true"
              >
                Namibia <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === 'namibia' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Macro Monitor (Direct link) */}
            <Link to="/macro" className="hover:text-rj-gold transition-colors py-2">
              Macro Monitor
            </Link>

            {/* Research with Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('research')}
            >
              <Link 
                to="/publications" 
                className={`hover:text-rj-gold transition-colors py-2 flex items-center gap-1 ${activeMenu === 'research' ? 'text-rj-gold' : ''}`}
                aria-expanded={activeMenu === 'research'}
                aria-haspopup="true"
              >
                Research <ChevronDown size={12} className={`transition-transform duration-200 ${activeMenu === 'research' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Contact (Direct link) */}
            <Link to="/contact" className="hover:text-rj-gold transition-colors py-2">
              Contact
            </Link>
          </div>

          {/* Right Action: Get in touch */}
          <div className="hidden xl:flex flex-shrink-0 items-center justify-end">
            <Link 
              to="/contact" 
              className="text-[0.72rem] uppercase tracking-[0.1em] bg-rj-gold text-rj-navy px-5 py-2 rounded-full hover:bg-white hover:text-rj-navy transition-all font-bold shadow-[0_0_15px_rgba(200,162,74,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] whitespace-nowrap"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button 
            className="xl:hidden text-white p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* DESKTOP MEGA-MENU PANELS                                  */}
      {/* ======================================================== */}
      <div 
        className={`hidden xl:block transition-all duration-300 ease-out origin-top ${
          activeMenu 
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-2' 
            : 'opacity-0 scale-98 pointer-events-none -translate-y-2'
        }`}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {/* SERVICES MEGA-PANEL */}
        {activeMenu === 'services' && (
          <div className="bg-[#0A1628]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
            <div className="grid grid-cols-12 gap-8">
              {/* Col 1: Client decisions */}
              <div className="col-span-5">
                <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4 flex items-center gap-2">
                  <Compass size={14} /> Client Decisions
                </div>
                <div className="space-y-2.5">
                  {[
                    "Assess a market or investment opportunity",
                    "Prepare a project for government, lenders or investors",
                    "Navigate policy, regulation and institutional approvals",
                    "Develop a financing and investor engagement strategy",
                    "Convert an approved strategy into an implementation plan",
                    "Support boards and executives with economic and policy analysis"
                  ].map((item, i) => (
                    <Link
                      key={i}
                      to="/services"
                      className="block text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all py-1 border-b border-white/5 font-sans"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2: How we work & Service Lines */}
              <div className="col-span-3 space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-3 flex items-center gap-2">
                    <Layers size={14} /> How We Work
                  </div>
                  <div className="space-y-2">
                    <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                      Five-stage method
                    </Link>
                    <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                      Typical deliverables
                    </Link>
                    <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                      Values in practice
                    </Link>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-3">
                    Service Lines
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-400">
                    <div>Strategic Advisory</div>
                    <div>Government Navigation</div>
                    <div>Infrastructure Development</div>
                    <div>Development Finance</div>
                    <div>Energy Transition</div>
                  </div>
                </div>
              </div>

              {/* Col 3: Featured Card */}
              <div className="col-span-4">
                <div className="bg-[#050D1A]/80 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-rj-gold/40 hover:shadow-[0_0_30px_rgba(200,162,74,0.15)] transition-all group">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-3">
                      Advisory Mandates
                    </span>
                    <h4 className="font-serif text-xl font-medium text-white mb-2 group-hover:text-rj-gold transition-colors">
                      Discuss a project or decision with R&amp;J
                    </h4>
                    <p className="text-gray-400 text-xs font-sans leading-relaxed">
                      We coordinate commercial analysis, government approvals, financing, and delivery roadmap execution across African markets.
                    </p>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-xs font-mono text-rj-gold uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform mt-6"
                  >
                    Start a conversation <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FOCUS AREAS MEGA-PANEL */}
        {activeMenu === 'focus' && (
          <div className="bg-[#0A1628]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4 flex items-center gap-2">
                  <Layers size={14} /> Eight Strategic Focus Areas
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Energy Transition & Grid Stability",
                    "Strategic Infrastructure",
                    "Climate & Development Finance",
                    "Industrialisation & Localisation",
                    "Public-Private Partnerships",
                    "Mining & Resource-Linked Infrastructure",
                    "Market Entry — Namibia & Africa",
                    "Finance & Banking"
                  ].map((area, i) => (
                    <Link
                      key={i}
                      to="/focus"
                      className="block text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all py-1.5 border-b border-white/5 font-sans"
                    >
                      <span className="font-mono text-xs text-rj-gold mr-2">0{i+1}</span>
                      {area}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Card */}
              <div className="col-span-4">
                <div className="bg-[#050D1A]/80 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-rj-gold/40 hover:shadow-[0_0_30px_rgba(200,162,74,0.15)] transition-all group">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-rj-green px-2.5 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-3">
                      Data-Anchored
                    </span>
                    <h4 className="font-serif text-xl font-medium text-white mb-2">
                      Every focus area is anchored to something measurable.
                    </h4>
                    <p className="text-gray-400 text-xs font-sans leading-relaxed">
                      These sectors are not abstract categories. Each moves with a price, a policy rate, or a capital flow that we track continuously.
                    </p>
                  </div>

                  <Link 
                    to="/macro" 
                    className="inline-flex items-center text-xs font-mono text-rj-gold uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform mt-6"
                  >
                    Open Macro Monitor <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LEADERSHIP MEGA-PANEL */}
        {activeMenu === 'leadership' && (
          <div className="bg-[#0A1628]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2"><Users size={14} /> Principal Leadership</span>
                  <Link to="/leadership" className="text-[11px] text-gray-400 hover:text-white lowercase">meet full team →</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Dr. John Steytler', role: 'CEO, Co-founder', route: '/john', initials: 'JS' },
                    { name: 'Vijay Jha', role: 'COO, Co-founder', route: '/vijay', initials: 'VJ' },
                    { name: 'Prof. Rachel K. Gesami', role: 'Head of East Africa', route: '/gesami', initials: 'RG' },
                    { name: 'Peik Bruhns', role: 'Head of West Africa', route: '/peik', initials: 'PB' },
                    { name: 'Saleh Alhashmi', role: 'Head of Middle East Operations', route: '/saleh', initials: 'SA' }
                  ].map((p, i) => (
                    <Link
                      key={i}
                      to={p.route}
                      className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-rj-gold/40 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-rj-navy border border-rj-gold/30 flex items-center justify-center font-mono text-xs text-rj-gold font-bold group-hover:bg-rj-gold group-hover:text-rj-navy transition-colors shrink-0">
                        {p.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-serif text-sm font-medium text-white truncate group-hover:text-rj-gold transition-colors">
                          {p.name}
                        </div>
                        <div className="font-mono text-[10px] text-gray-400 truncate">
                          {p.role}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Card */}
              <div className="col-span-4">
                <div className="bg-[#050D1A]/80 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-rj-gold/40 hover:shadow-[0_0_30px_rgba(200,162,74,0.15)] transition-all group">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-3">
                      Principal-Led
                    </span>
                    <h4 className="font-serif text-xl font-medium text-white mb-2">
                      Expert engagement model
                    </h4>
                    <p className="text-gray-400 text-xs font-sans leading-relaxed">
                      R&amp;J Steytler is deliberately small at the core. Clients deal with principals throughout every mandate, backed by curated domain specialists.
                    </p>
                  </div>

                  <Link 
                    to="/leadership" 
                    className="inline-flex items-center text-xs font-mono text-rj-gold uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform mt-6"
                  >
                    View leadership profiles <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NAMIBIA MEGA-PANEL */}
        {activeMenu === 'namibia' && (
          <div className="bg-[#0A1628]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-7">
                <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4 flex items-center gap-2">
                  <Compass size={14} /> Namibia in Context
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Structural picture", desc: "Scale, scarcity, urban concentration and demographics" },
                    { label: "What Namibia holds", desc: "Uranium, offshore discoveries, and renewable ambition" },
                    { label: "Doing business: rates and registration", desc: "CIT 30%, VAT 15%, and BIPA corporate registration" },
                    { label: "What it costs to operate", desc: "Fuel prices, transport inflation, and trade dynamics" },
                    { label: "Chronology (How Namibia got here)", desc: "1884 protectorate to 2026 monetary tightening" }
                  ].map((sec, i) => (
                    <Link
                      key={i}
                      to="/namibia"
                      className="block p-2 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="font-serif text-sm font-medium text-white group-hover:text-rj-gold transition-colors">
                        {sec.label}
                      </div>
                      <div className="text-xs text-gray-400 font-sans">
                        {sec.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Stat Card */}
              <div className="col-span-5">
                <div className="bg-[#050D1A]/80 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-rj-gold/40 hover:shadow-[0_0_30px_rgba(200,162,74,0.15)] transition-all group">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-rj-gold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-3">
                      Headline Demographics
                    </span>
                    <div className="font-mono text-3xl font-medium text-white mb-1">
                      3.02m people
                    </div>
                    <div className="font-mono text-xs text-gray-400 mb-4">
                      across 825,000 km² (3.7 / km²)
                    </div>
                    <p className="text-gray-300 text-xs font-sans leading-relaxed">
                      Distance is the first constraint on any infrastructure plan. Source: Namibia Statistics Agency, 2023 Census.
                    </p>
                  </div>

                  <Link 
                    to="/namibia" 
                    className="inline-flex items-center text-xs font-mono text-rj-gold uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform mt-6"
                  >
                    Read Namibia insights <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESEARCH MEGA-PANEL */}
        {activeMenu === 'research' && (
          <div className="bg-[#0A1628]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6">
                <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-4 flex items-center gap-2">
                  <BookOpen size={14} /> Publications by Stream
                </div>
                <div className="space-y-3">
                  <Link to="/publications" className="block p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-rj-gold/40 hover:bg-white/10 transition-all">
                    <div className="font-serif text-sm font-medium text-white mb-1">Economic Notes</div>
                    <div className="text-xs text-gray-400">Macroeconomic and policy commentary on tax, energy tariffs, and grassroots stimulus.</div>
                  </Link>
                  <Link to="/publications" className="block p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-rj-gold/40 hover:bg-white/10 transition-all">
                    <div className="font-serif text-sm font-medium text-white mb-1">Sector Briefs</div>
                    <div className="text-xs text-gray-400">Industry, resource analysis, refining feasibility, and uranium value chains.</div>
                  </Link>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 opacity-75">
                    <div className="font-serif text-sm font-medium text-gray-300 mb-1 flex items-center justify-between">
                      Project and Investment Guides
                      <span className="font-mono text-[9px] uppercase tracking-wider text-rj-gold bg-rj-gold/10 px-2 py-0.5 rounded-full">In Preparation</span>
                    </div>
                    <div className="text-xs text-gray-500">Practical guides for sponsors and institutional investors.</div>
                  </div>
                </div>
              </div>

              {/* Featured Recent Publications */}
              <div className="col-span-6">
                <div className="bg-[#050D1A]/80 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-rj-gold/40 transition-all">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-rj-gold mb-3">
                      Recent Publications
                    </div>
                    <div className="space-y-3">
                      <Link to="/publications" className="block border-b border-white/5 pb-2.5 group">
                        <span className="font-mono text-[10px] text-gray-400">2026 · Namibia</span>
                        <div className="font-serif text-sm text-white group-hover:text-rj-gold transition-colors font-medium">
                          Namibia Taxation Demands Representation, Especially for SMEs
                        </div>
                        <span className="font-mono text-[10px] text-rj-gold">Dr. John Steytler</span>
                      </Link>
                      <Link to="/publications" className="block group">
                        <span className="font-mono text-[10px] text-gray-400">2026 · Kenya</span>
                        <div className="font-serif text-sm text-white group-hover:text-rj-gold transition-colors font-medium">
                          When Fuel Prices Rise, Kenyans Feel It Everywhere
                        </div>
                        <span className="font-mono text-[10px] text-rj-gold">Prof. Rachel K. Gesami</span>
                      </Link>
                    </div>
                  </div>

                  <Link 
                    to="/publications" 
                    className="inline-flex items-center text-xs font-mono text-rj-gold uppercase tracking-wider font-semibold hover:translate-x-1 transition-transform mt-4"
                  >
                    View all publications <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* MOBILE ACCORDION MENU                                     */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 bg-rj-navy/95 backdrop-blur-3xl border border-rj-gold/30 rounded-3xl p-6 max-h-[80vh] overflow-y-auto flex flex-col space-y-4 shadow-[0_16px_48px_rgba(0,0,0,0.7)] text-white">
          <Link to="/" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors py-1">
            Home
          </Link>

          {/* Services Accordion */}
          <div className="border-t border-white/10 pt-3">
            <button 
              onClick={() => toggleMobileSubmenu('services')} 
              className="w-full flex items-center justify-between uppercase tracking-[0.08em] text-sm text-left py-1 hover:text-rj-gold"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded.services ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.services && (
              <div className="pl-4 py-2 space-y-2 text-xs text-gray-300 font-sans border-l border-rj-gold/30 mt-2">
                <Link to="/services" className="block hover:text-rj-gold">Overview &amp; Method</Link>
                <Link to="/services" className="block hover:text-rj-gold">Client Decisions</Link>
                <Link to="/services" className="block hover:text-rj-gold">Service Lines</Link>
              </div>
            )}
          </div>

          {/* Focus Areas Accordion */}
          <div className="border-t border-white/10 pt-3">
            <button 
              onClick={() => toggleMobileSubmenu('focus')} 
              className="w-full flex items-center justify-between uppercase tracking-[0.08em] text-sm text-left py-1 hover:text-rj-gold"
            >
              <span>Focus Areas</span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded.focus ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.focus && (
              <div className="pl-4 py-2 space-y-2 text-xs text-gray-300 font-sans border-l border-rj-gold/30 mt-2">
                <Link to="/focus" className="block hover:text-rj-gold">Eight Focus Sectors</Link>
                <Link to="/macro" className="block hover:text-rj-gold">Macro Monitor Link</Link>
              </div>
            )}
          </div>

          {/* Leadership Accordion */}
          <div className="border-t border-white/10 pt-3">
            <button 
              onClick={() => toggleMobileSubmenu('leadership')} 
              className="w-full flex items-center justify-between uppercase tracking-[0.08em] text-sm text-left py-1 hover:text-rj-gold"
            >
              <span>Leadership</span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded.leadership ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.leadership && (
              <div className="pl-4 py-2 space-y-2 text-xs text-gray-300 font-sans border-l border-rj-gold/30 mt-2">
                <Link to="/leadership" className="block hover:text-rj-gold font-medium">All Leadership</Link>
                <Link to="/john" className="block hover:text-rj-gold">Dr. John Steytler</Link>
                <Link to="/vijay" className="block hover:text-rj-gold">Vijay Jha</Link>
                <Link to="/gesami" className="block hover:text-rj-gold">Prof. Rachel K. Gesami</Link>
                <Link to="/peik" className="block hover:text-rj-gold">Peik Bruhns</Link>
                <Link to="/saleh" className="block hover:text-rj-gold">Saleh Alhashmi</Link>
              </div>
            )}
          </div>

          {/* Namibia Accordion */}
          <div className="border-t border-white/10 pt-3">
            <button 
              onClick={() => toggleMobileSubmenu('namibia')} 
              className="w-full flex items-center justify-between uppercase tracking-[0.08em] text-sm text-left py-1 hover:text-rj-gold"
            >
              <span>Namibia</span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded.namibia ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.namibia && (
              <div className="pl-4 py-2 space-y-2 text-xs text-gray-300 font-sans border-l border-rj-gold/30 mt-2">
                <Link to="/namibia" className="block hover:text-rj-gold">Namibia in Context</Link>
                <Link to="/namibia" className="block hover:text-rj-gold">Doing Business &amp; Taxes</Link>
                <Link to="/namibia" className="block hover:text-rj-gold">Chronology</Link>
              </div>
            )}
          </div>

          {/* Macro Monitor (Direct link) */}
          <div className="border-t border-white/10 pt-3">
            <Link to="/macro" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors block py-1">
              Macro Monitor
            </Link>
          </div>

          {/* Research Accordion */}
          <div className="border-t border-white/10 pt-3">
            <button 
              onClick={() => toggleMobileSubmenu('research')} 
              className="w-full flex items-center justify-between uppercase tracking-[0.08em] text-sm text-left py-1 hover:text-rj-gold"
            >
              <span>Research</span>
              <ChevronDown size={16} className={`transition-transform ${mobileExpanded.research ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpanded.research && (
              <div className="pl-4 py-2 space-y-2 text-xs text-gray-300 font-sans border-l border-rj-gold/30 mt-2">
                <Link to="/publications" className="block hover:text-rj-gold">Research &amp; Analysis</Link>
                <Link to="/publications" className="block hover:text-rj-gold">Economic Notes</Link>
                <Link to="/publications" className="block hover:text-rj-gold">Sector Briefs</Link>
              </div>
            )}
          </div>

          {/* Contact (Direct link) */}
          <div className="border-t border-white/10 pt-3">
            <Link to="/contact" className="uppercase tracking-[0.08em] text-sm hover:text-rj-gold transition-colors block py-1">
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Link 
              to="/contact" 
              className="w-full block text-center uppercase tracking-[0.08em] text-sm bg-rj-gold text-rj-navy font-bold py-3 rounded-full"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
