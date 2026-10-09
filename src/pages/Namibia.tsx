import { useEffect } from 'react';
import { ArrowRight, Compass, TrendingUp, DollarSign, Calendar, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Namibia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuralStats = [
    {
      val: "3.7/km²",
      label: "Population density",
      desc: "3.02 million people across 825,000 square kilometres, among the most sparsely populated countries on earth. Almost half the population now lives in urban areas, concentrating demand for housing, utilities and services.",
      source: "Namibia Statistics Agency, 2023 Census"
    },
    {
      val: "37%",
      label: "Under 15 years old",
      desc: "A young population that represents both a future labour force and an immediate demand for education, skills and employment creation.",
      source: "Namibia Statistics Agency, 2023 Census"
    },
    {
      val: "1.7%",
      label: "Growth in 2025",
      desc: "Weak diamond demand slowed real GDP growth to 1.7 per cent in 2025, with uranium and gold exports providing partial support. Commodity exposure remains the dominant cyclical risk.",
      source: "International Monetary Fund"
    },
    {
      val: "1:1",
      label: "Currency peg to the rand",
      desc: "The Namibia Dollar is fixed to the South African Rand and both circulate as legal tender. Monetary policy tracks South African conditions closely, which is why SARB decisions matter as much as domestic ones.",
      source: "Bank of Namibia"
    },
    {
      val: "Middle income",
      label: "Status that conceals inequality",
      desc: "Middle-income classification masks severe structural inequality. Limited employment creation, regional disparity and youth unemployment remain the central constraints on inclusive growth.",
      source: "World Bank"
    },
    {
      val: "1 in 100 yrs",
      label: "Drought severity, 2023–24",
      desc: "The IMF described the 2023–24 drought as the most severe in a century. It cut agricultural output and required additional public spending — a reminder that climate is a fiscal variable here, not only an environmental one.",
      source: "International Monetary Fund"
    }
  ];

  const resourceStats = [
    {
      val: "3rd",
      label: "Largest uranium producer",
      desc: "Namibia produced 12 per cent of the world's mined uranium in 2024, behind only Kazakhstan and Canada. Husab and Rössing are among the largest uranium mines globally.",
      source: "World Nuclear Association"
    },
    {
      val: "20bn boe",
      label: "Offshore discoveries",
      desc: "Discovered resources exceed 20 billion barrels of oil equivalent on IMF estimates, repositioning Namibia within global energy markets. Commercial production has not yet begun.",
      source: "International Monetary Fund"
    },
    {
      val: "Pre-revenue",
      label: "Exploration hits the accounts first",
      desc: "Foreign investment tied to drilling and mining raises imports, infrastructure demand and the current-account deficit years before any production revenue arrives. The deficit is a signal about sequencing, not necessarily about weakness.",
      source: "International Monetary Fund"
    },
    {
      val: "H₂",
      label: "Green hydrogen ambition",
      desc: "Strong coastal wind, high solar irradiation, available land and Atlantic port access underpin Namibia's green hydrogen and green ammonia export programme.",
      source: "Namibia Green Hydrogen Programme"
    },
    {
      val: "Atlantic",
      label: "Walvis Bay corridor",
      desc: "Walvis Bay is the Atlantic gateway for landlocked Southern Africa, with corridors reaching Botswana, Zambia, Zimbabwe and the Democratic Republic of the Congo.",
      source: "Namport"
    },
    {
      val: "Const.",
      label: "Conservation written into law",
      desc: "Namibia placed environmental protection in its Constitution at independence. Its communal conservancy system gives rural communities formal rights and economic stakes in wildlife management and tourism.",
      source: "Ministry of Environment, Forestry and Tourism"
    }
  ];

  const operatingStats = [
    {
      val: "N$23.48",
      label: "Petrol, per litre",
      desc: "Pump prices rose in each of the three months to June 2026. Petrol went up N$1.40 in May alone; diesel 50ppm sits at N$28.26 and 10ppm at N$28.36 after a N$4.63 increase.",
      source: "Ministry of Industries, Mines and Energy, May 2026"
    },
    {
      val: "5.0%",
      label: "Transport inflation",
      desc: "Transport inflation swung from deflation of 1.7 per cent to 5.0 per cent in a single month as fuel adjustments passed through. Food inflation followed to 2.0 per cent, led by meat, milk, cheese and eggs.",
      source: "Namibia Statistics Agency, May 2026"
    },
    {
      val: "153,835",
      label: "Tourist arrivals",
      desc: "Total airport arrivals rose 1.8 per cent over the first four months of 2026. The mix shifted: international arrivals fell 4.9 per cent to 64,119 while regional arrivals rose 7.2 per cent to 89,716.",
      source: "Bank of Namibia, January–April 2026"
    },
    {
      val: "N$9.0bn",
      label: "Merchandise trade deficit",
      desc: "The trade gap widened 9.8 per cent in the first quarter as imports of electricity, sulphur, mineral fuel and machinery outpaced export receipts. Uranium, gold, live animals and processed fish carried the export side.",
      source: "Bank of Namibia, Q1 2026"
    },
    {
      val: "N$58.8bn",
      label: "International reserves",
      desc: "Reserves rose 13.6 per cent on SACU inflows and foreign currency placements, covering 3.7 months of imports — or 4.1 months excluding oil and gas exploration imports. Adequate to sustain the peg.",
      source: "Bank of Namibia, end-April 2026"
    },
    {
      val: "65.2%",
      label: "Government debt to GDP",
      desc: "The debt stock reached N$179.7 billion, up 6.8 per cent year on year. It is projected to reach N$193.7 billion in 2026/27 and peak at N$217.3 billion by FY2028/29 — averaging 67 per cent of GDP, above the 60 per cent SADC benchmark.",
      source: "Ministry of Finance, end-April 2026"
    }
  ];

  const chronology = [
    { year: "1884", desc: "Germany declares a protectorate over South West Africa, beginning four decades of colonial administration and the dispossession of communal land." },
    { year: "1904–1908", desc: "German colonial forces commit genocide against the Ovaherero and Nama peoples. The demographic and land-tenure consequences remain visible in rural economic structure today." },
    { year: "1915–1920", desc: "South African forces occupy the territory during the First World War. In 1920 the League of Nations grants South Africa a mandate to administer it, drawing Namibia into the South African economic and monetary orbit." },
    { year: "1966", desc: "The United Nations revokes South Africa's mandate. The liberation war begins, and decades of contested administration follow under apartheid rule." },
    { year: "1978", desc: "UN Security Council Resolution 435 sets out the settlement plan and the framework for supervised elections that would eventually deliver independence." },
    { year: "21 March 1990", title: "Independence", desc: "A United Nations mission supervises the transition and the first democratic election. The South African Rand continues as legal tender — the new state has political sovereignty but not yet a currency." },
    { year: "1992", title: "Common Monetary Area", desc: "Namibia joins the Common Monetary Area with South Africa, Lesotho and Eswatini, securing free movement of capital and continued access to South African financial markets." },
    { year: "1993", title: "Currency Peg Established", desc: "The Namibia Dollar is introduced and pegged one-to-one to the Rand. The reasoning was deliberate: South Africa was — and remains — the dominant trade, investment and financial counterparty, so a fixed rate removed exchange risk on the majority of transactions and imported the credibility of an established central bank into a two-year-old monetary authority. The Rand stayed legal tender alongside it. The cost, accepted openly, was monetary independence: Namibia cannot durably set interest rates away from South Africa without pressure on reserves and the peg. That trade-off still governs every rate decision the Bank of Namibia takes." },
    { year: "1 March 1994", desc: "Walvis Bay is fully integrated into Namibia, four years after independence, resolving competing British, German and South African claims and giving the country control of its deep-water Atlantic port." },
    { year: "2004", desc: "Germany issues its first formal acknowledgement of the colonial-era atrocities at the Waterberg centenary, opening two decades of negotiation over recognition and reparative funding." },
    { year: "2008–2009", desc: "The global financial crisis transmits through commodity prices rather than the banking system, demonstrating that Namibia's principal external vulnerability is the terms of trade, not financial contagion." },
    { year: "2016–2017", desc: "Recession follows the end of a construction and mining investment cycle, alongside a sharp fall in SACU receipts. Fiscal consolidation begins and public debt starts its climb toward present levels." },
    { year: "2020", desc: "COVID-19 delivers the deepest contraction since independence, hitting tourism, transport and mining simultaneously and widening the fiscal deficit." },
    { year: "2021", desc: "Germany formally recognises the 1904–1908 atrocities as genocide. The associated reconciliation and development funding remains politically contested within Namibia." },
    { year: "2022", title: "Offshore Oil Discoveries", desc: "Major offshore oil discoveries in the Orange Basin reposition Namibia in global energy markets. Discovered resources are later estimated by the IMF at more than 20 billion barrels of oil equivalent." },
    { year: "2023", desc: "The national green hydrogen and green ammonia programme advances, and the census records a population of 3.02 million growing at 3.0 per cent a year — the fastest rate since independence." },
    { year: "2023–2024", desc: "The most severe drought in a century, on IMF assessment, cuts agricultural output and forces additional public spending — a reminder that in Namibia climate is a fiscal variable." },
    { year: "21 March 2025", desc: "Netumbo Nandi-Ndaitwah takes office as Namibia's first female president, elected in 2024, alongside the country's first female vice president." },
    { year: "June 2026", title: "Repo Rate Raised to 6.75%", desc: "The Bank of Namibia raises the repo rate to 6.75 per cent — the first increase in three years — as an energy shock lifts inflation and the peg requires alignment with a tightening South African stance." }
  ];

  return (
    <div className="pt-32 pb-20 text-white relative">
      {/* Hero Intro */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <span className="font-mono text-xs uppercase tracking-widest text-rj-gold border border-white/10 bg-white/5 px-3 py-1 rounded-full inline-block mb-4">
          Namibia Insights
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-tight">
          Namibia <span className="italic text-rj-gold">in context</span>
        </h1>
        <p className="text-gray-300 font-sans text-lg md:text-xl max-w-3xl leading-relaxed">
          The facts, figures and institutional context that shape how capital, policy and infrastructure decisions get made in Namibia — with sources attached.
        </p>
      </section>

      {/* SECTION A: The Structural Picture */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Land, People and Economy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            The <span className="italic text-rj-gold">structural picture</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
            Namibia is defined by scale, scarcity and concentration — a very large country with a very small population, dependent on a narrow set of commodities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structuralStats.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-4xl text-rj-gold font-medium mb-2">{item.val}</div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-gray-500 italic truncate">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION B: What Namibia Holds */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Resources and Energy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            What Namibia <span className="italic text-rj-gold">holds</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
            Uranium, offshore hydrocarbons and renewable energy potential place Namibia in global supply conversations well above its economic weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceStats.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-4xl text-rj-gold font-medium mb-2">{item.val}</div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-gray-500 italic truncate">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION C: Doing Business Table */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Doing Business
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            Rates, thresholds and <span className="italic text-rj-gold">registration</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
            The practical parameters investors ask about first. Headline positions only — sector regimes and incentives vary considerably.
          </p>
          <div className="font-mono text-xs text-rj-gold/80 mt-2">
            Position as at July 2026. Sources: NamRA, PwC Namibia tax and mining tax cards, BIPA.
          </div>
        </div>

        <div className="bg-[#0A1628]/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase tracking-wider text-rj-gold">
                <th className="p-6 md:w-1/3">Parameter</th>
                <th className="p-6">Detail &amp; Regime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm font-sans">
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Corporate income tax</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  30% for non-mining companies. A reduction to 28% has been proposed for financial years commencing on or after 1 January 2026 but is not yet enacted.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Mining taxation</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  Diamond mining and diamond mining services carry an effective rate of 55%. Other mining operations are taxed at 37.5%. Royalties apply separately by mineral.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Value added tax</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  15% standard rate. Registration is compulsory once taxable turnover exceeds N$1,000,000 over a 12-month period.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Personal income tax</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  Progressive, rising to a top marginal rate of 37% on taxable income above N$750,000.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Company registration</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  Administered solely by the Business and Intellectual Property Authority (BIPA), covering Private Companies (Pty Ltd), Close Corporations and non-profit entities. The sequence is name reservation, registration, then enrolment with tax and social security.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Why the certificate matters</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  Without a valid BIPA certificate a business cannot open a corporate bank account, access SME financing or participate in public procurement.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Currency and exchange</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  Namibia Dollar fixed 1:1 to the South African Rand; both are legal tender. Namibia is part of the Common Monetary Area.
                </td>
              </tr>
              <tr>
                <td className="p-6 font-mono text-xs text-gray-300 font-semibold align-top">Regional membership</td>
                <td className="p-6 text-gray-300 leading-relaxed">
                  SACU and SADC member. SACU transfers are a large but volatile share of government revenue.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION D: What It Costs To Operate */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Movement, Energy and Trade
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            What it <span className="italic text-rj-gold">costs to operate</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base mt-2 max-w-2xl">
            Fuel, freight and visitor flows are the figures that show up first in an operating budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operatingStats.map((item, i) => (
            <div 
              key={i}
              className="p-8 bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-4xl text-rj-gold font-medium mb-2">{item.val}</div>
                <h3 className="font-serif text-xl font-medium text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans mb-6">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-gray-500 italic truncate">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: Chronology (Vertical Timeline) */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-2 block">
            Chronology
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">
            How Namibia <span className="italic text-rj-gold">got here</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base mt-2">
            The colonial, constitutional and monetary decisions that still shape how business is done here — in the order they happened.
          </p>
        </div>

        <div className="relative pl-8 border-l border-rj-gold/30 space-y-10">
          {chronology.map((event, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-rj-gold shadow-[0_0_10px_rgba(200,162,74,0.8)]"></div>
              <div className="font-mono text-sm text-rj-gold font-bold mb-1">{event.year}</div>
              {event.title && (
                <div className="font-serif text-xl text-white font-medium mb-2">{event.title}</div>
              )}
              <div className="text-gray-300 text-sm md:text-base font-sans leading-relaxed">
                {event.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION F: Strategic Question */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <div className="bg-[#0A1628]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <span className="font-mono text-xs uppercase tracking-widest text-rj-gold mb-3 block">
            Strategic Imperative
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
            The constraint is <span className="italic text-rj-gold">conversion</span>, not endowment.
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed">
            Namibia's challenge has never been a shortage of natural assets. It is converting mineral wealth, renewable energy potential, port infrastructure and political stability into local skills, value addition, employment and broad-based prosperity. That conversion problem is what our mandates are built around.
          </p>
        </div>
      </section>

      {/* Page-Specific CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0A1628]/90 to-[#050D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Considering a Namibian <span className="italic text-rj-gold">mandate?</span>
          </h2>
          <p className="text-gray-300 font-sans text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We advise governments, investors and institutions on market entry, feasibility and project structuring in Namibia and across the region.
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
