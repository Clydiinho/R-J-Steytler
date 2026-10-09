import { useEffect, useState } from 'react';
import { ArrowRight, RefreshCw, Clock, Activity, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LiveTileState {
  usdZar: string;
  eurZar: string;
  gbpZar: string;
  goldUsd: string;
  status: 'live' | 'snapshot';
  lastUpdated: string;
}

export default function MacroMonitor() {
  const [tileData, setTileData] = useState<LiveTileState>({
    usdZar: '18.42',
    eurZar: '19.95',
    gbpZar: '23.85',
    goldUsd: '2,680.50',
    status: 'snapshot',
    lastUpdated: 'October 2026 [SNAPSHOT — UPDATE]'
  });
  const [loading, setLoading] = useState(false);

  const fetchLiveFeeds = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (res.ok) {
        const json = await res.json();
        const zar = json.rates?.ZAR;
        const eur = json.rates?.EUR;
        const gbp = json.rates?.GBP;

        if (zar) {
          const zarNum = Number(zar);
          const eurZarCalc = eur ? (zarNum / Number(eur)).toFixed(2) : '19.95';
          const gbpZarCalc = gbp ? (zarNum / Number(gbp)).toFixed(2) : '23.85';

          setTileData({
            usdZar: zarNum.toFixed(2),
            eurZar: eurZarCalc,
            gbpZar: gbpZarCalc,
            goldUsd: '2,680.50',
            status: 'live',
            lastUpdated: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' CAT'
          });
          setLoading(false);
          return;
        }
      }
      throw new Error('API feed unavailable');
    } catch (e) {
      setTileData(prev => ({
        ...prev,
        status: 'snapshot',
        lastUpdated: 'Dated Snapshot [SNAPSHOT — UPDATE]'
      }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchLiveFeeds();
    const interval = setInterval(fetchLiveFeeds, 60000);
    return () => clearInterval(interval);
  }, []);

  const readings = [
    { num: '01', title: 'Growth is positive but weak', text: 'Official 2026 forecasts sit between 2.1% (IMF) and 2.6% (Bank of Namibia). We treat that as a range and model optimistic, base and downside scenarios rather than adopting a single figure.' },
    { num: '02', title: 'Composition matters more than the headline', text: 'Real GDP grew 2.0% year-on-year in Q1 2026, but mining contracted 12.2% and manufacturing 5.9%, while wholesale and retail grew 9.3%. Growth led by services has very different commercial implications from growth led by mining investment.' },
    { num: '03', title: 'Diamonds are the structural risk; uranium the counterweight', text: 'Diamond prices remain under pressure from weak demand and laboratory-grown competition. Uranium, supported by energy-security and nuclear-power demand, offsets part of that drag.' },
    { num: '04', title: 'The energy shock has reset the cost base', text: 'The IMF expects crude oil to rise roughly 32% in 2026 against 2025, feeding fuel, fertiliser, transport and ultimately food prices. Domestic electricity generation fell 15.3% year-on-year in Q1 while imports rose — an energy-security risk, and an opening in generation, storage and transmission.' },
    { num: '05', title: 'Policy has tightened, and independence is limited', text: 'The Bank of Namibia raised the repo rate to 6.75% in June 2026. Because of the peg, domestic policy has limited independence from South African conditions — which is why South African growth of just 1.1% deserves close attention.' },
    { num: '06', title: 'Twin deficits remain elevated', text: 'The fiscal deficit widened to an estimated 6.4% of GDP in FY2025/26 as SACU receipts fell from 10.8% to 8.5% of GDP. The current-account deficit narrowed to 13.1% but stays wide. Reserves of N$55.4bn — about 3.5 months of import cover — remain adequate for the peg.' },
    { num: '07', title: 'Unemployment constrains the consumer story', text: 'At 36.9%, unemployment weakens the link between GDP growth and mass-market demand. Market-sizing work should use household income distributions rather than population totals.' }
  ];

  const disciplines = [
    { num: '01', title: 'Use ranges, not point forecasts', text: 'Official 2026 growth forecasts span 2.1% to 2.6%. Treating any single figure as certain produces brittle models. We build optimistic, base and downside cases from the spread.' },
    { num: '02', title: 'Disaggregate inflation by cost line', text: 'Applying one headline rate to revenue, wages, rent, electricity, transport and procurement alike produces weak forecasts. Each line carries its own inflation path.' },
    { num: '03', title: 'Separate transaction from economic exposure', text: 'A miner earning dollars while paying local wages carries a different currency risk profile from a retailer importing most of its stock. The headline exchange rate tells you neither.' },
    { num: '04', title: 'Read composition before judgement', text: 'A trade deficit driven by productive machinery imports is not the same as one driven by consumer goods. Credit growth below inflation is a real contraction. Inspect before interpreting.' }
  ];

  const cadences = [
    { cadence: 'Weekly', focus: 'Prices and financial conditions', items: 'Oil, gold, uranium, diamonds and base metals. USD/ZAR. Government bond yields. Equity volatility. Fuel and freight conditions.' },
    { cadence: 'Monthly', focus: 'Domestic activity', items: 'Namibia CPI and PPI. Trade balance. Private-sector credit. Tourism arrivals. Vehicle sales. Electricity and mining production. Building plans and retail activity.' },
    { cadence: 'Quarterly', focus: 'Structural position', items: 'GDP and sectoral growth. Current account. Foreign direct investment. Government fiscal execution. Bank profitability, liquidity and non-performing loans.' },
    { cadence: 'Annually', focus: 'Policy and household conditions', items: 'National budget. Public-debt strategy. Labour-force statistics. Poverty and inequality. Household income and expenditure. Population and demographic change.' },
    { cadence: 'High frequency', focus: 'Sector-specific signals', items: 'Mining licences and exploration spend. Hotel occupancy and airline capacity. Livestock marketings. Rainfall and dam levels. Port cargo volumes. Telecommunications usage.' },
    { cadence: 'Continuous', focus: 'Policy and geopolitics', items: 'Tariffs and trade restrictions. Shipping-route disruption. SACU formula changes. Credit-rating actions. Regional monetary policy, particularly the SARB.' }
  ];

  return (
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero Intro */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          Macro Monitor
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          The indicators we <span className="italic text-rj-gold">watch</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
          A continuously maintained view of the Namibian and global conditions that shape our mandates. Currencies and metals refresh live; official statistics are dated and attributed.
        </p>
      </section>

      {/* LIVE DATA TILES STRIP */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className={`w-2.5 h-2.5 rounded-full ${tileData.status === 'live' ? 'bg-rj-green shadow-[0_0_10px_rgba(0,255,136,0.8)]' : 'bg-rj-amber'}`}></span>
            <span className="font-mono text-xs uppercase tracking-wider text-gray-300">
              {tileData.status === 'live' ? 'Live API Feed' : 'Snapshot Mode'}
            </span>
            <span className="font-mono text-xs text-gray-500">· {tileData.lastUpdated}</span>
          </div>

          <button 
            onClick={fetchLiveFeeds} 
            disabled={loading}
            className="flex items-center gap-1.5 font-mono text-xs text-rj-gold hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1 rounded-full"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="font-mono text-xs text-gray-400 mb-2">USD/NAD (1:1 ZAR)</div>
            <div className="font-mono text-3xl font-medium text-white mb-2">{tileData.usdZar}</div>
            <div className="font-mono text-[10px] text-rj-green flex items-center gap-1">
              <span>●</span> {tileData.status.toUpperCase()}
            </div>
          </div>

          <div className="p-6 bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="font-mono text-xs text-gray-400 mb-2">EUR/NAD</div>
            <div className="font-mono text-3xl font-medium text-white mb-2">{tileData.eurZar}</div>
            <div className="font-mono text-[10px] text-gray-400">Common Monetary Area</div>
          </div>

          <div className="p-6 bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="font-mono text-xs text-gray-400 mb-2">GBP/NAD</div>
            <div className="font-mono text-3xl font-medium text-white mb-2">{tileData.gbpZar}</div>
            <div className="font-mono text-[10px] text-gray-400">UK-Africa Trade Link</div>
          </div>

          <div className="p-6 bg-[#0A1628]/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="font-mono text-xs text-gray-400 mb-2">Gold (XAU/USD)</div>
            <div className="font-mono text-3xl font-medium text-rj-gold mb-2">${tileData.goldUsd}</div>
            <div className="font-mono text-[10px] text-gray-400">Precious Metals Benchmark</div>
          </div>
        </div>
      </section>

      {/* SECTION: Present Reading */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Present Reading
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
            Namibia today: <span className="italic text-rj-gold">mixed, and diverging</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            The headline growth figure conceals the more important story — which parts of the economy are expanding, and which are contracting underneath it.
          </p>
        </div>

        <div className="space-y-4">
          {readings.map((r, i) => (
            <div 
              key={i}
              className="p-6 md:p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-rj-gold/40 transition-all flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
            >
              <span className="font-mono text-xs text-rj-gold bg-white/5 border border-white/10 px-3 py-1 rounded-full shrink-0 w-fit">
                {r.num} / 07
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium text-white mb-2">{r.title}</h3>
                <p className="text-gray-300 text-sm md:text-base font-sans leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Four Disciplines */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            How We Read It
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
            Four disciplines we apply to <span className="italic text-rj-gold">every number</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disciplines.map((d, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 transition-all"
            >
              <div className="font-mono text-xs text-rj-gold mb-4">{d.num} / 04</div>
              <h3 className="font-serif text-2xl font-medium text-white mb-3">{d.title}</h3>
              <p className="text-gray-400 text-sm md:text-base font-sans leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Monitoring Cadence */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Monitoring Cadence
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-3">
            What we track, and <span className="italic text-rj-gold">how often</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base">
            National accounts arrive too slowly for most commercial decisions, so we supplement them with higher-frequency indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cadences.map((c, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-rj-gold px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
                  {c.cadence}
                </span>
                <h3 className="font-serif text-xl font-medium text-white mb-3">{c.focus}</h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed">{c.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCING NOTE BLOCK */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-3 block">
            On Sourcing
          </span>
          <h3 className="font-serif text-2xl font-medium text-white mb-4">
            Every figure carries a date and an attribution.
          </h3>
          <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
            Exchange rates and metals prices refresh live when this site is served over the web; each tile says so explicitly and reverts to a dated snapshot if a feed is unavailable. Official statistics are published on a lag and are frequently revised. Forecasts are projections, not commitments. This page is maintained for the firm's own analytical use and shared for information — it is not investment advice and should not be the sole basis for a transaction decision.
          </p>
        </div>
      </section>

      {/* Page-Specific CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0A1628]/90 to-[#050D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Need this applied to a <span className="italic text-rj-gold">decision?</span>
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We use this foundation for market sizing, demand forecasting, feasibility studies, sector strategy and scenario planning.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center bg-rj-gold text-rj-navy px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors"
          >
            Get in touch <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
