export default function DashboardSection() {
  const dataPoints = [2.5, -8.5, 3.1, 4.0, 4.2, 4.6, 4.9];
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  
  // Map data values to SVG coordinates
  // Y range: min ~ -9, max ~ 5 -> spread is 14. 
  // Let's set viewBox 0 0 700 300
  // X step: 100 per point
  
  const width = 700;
  const height = 300;
  const yMin = -10;
  const yMax = 6;
  const yRange = yMax - yMin;
  
  const points = dataPoints.map((val, i) => {
    const x = i * (width / (dataPoints.length - 1));
    // Invert Y so positive is up
    const normalizedY = (val - yMin) / yRange;
    const y = height - (normalizedY * height);
    return { x, y, val, year: years[i] };
  });

  const polylineStr = points.map(p => `${p.x},${p.y}`).join(' ');
  const zeroLineY = height - ((0 - yMin) / yRange) * height;
  
  const polygonStr = `0,${height} ${polylineStr} ${width},${height}`;

  return (
    <section className="bg-transparent py-12 border-b border-white/10 text-white font-mono">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-white/10">
          <div className="mb-4 md:mb-0">
            <h2 className="bg-white/5 backdrop-blur-md border border-rj-gold/30 rounded-full px-4 py-1.5 font-bold text-sm tracking-wider text-white shadow-[0_0_15px_rgba(200,162,74,0.1)]">
              Live Economic Snapshot
            </h2>
          </div>
          <div className="text-xs text-gray-400 tracking-widest bg-white/5 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-full">
            NAMIBIA · UPDATED MONTHLY
          </div>
        </div>

        <div className="bg-[#0A1628]/40 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative">
          
          {/* Main Chart Area */}
          <div className="relative h-[250px] md:h-[300px] w-full mb-8">
            <svg viewBox={`0 -20 ${width} ${height + 40}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-rj-gold)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="var(--color-rj-gold)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Zero line */}
              <line x1="0" y1={zeroLineY} x2={width} y2={zeroLineY} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4,4" />
              <text x={width + 10} y={zeroLineY + 4} fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="monospace">0%</text>

              {/* Grid lines */}
              {[yMin, -5, 5, yMax].map((tick) => {
                 const tY = height - ((tick - yMin) / yRange) * height;
                 return (
                   <g key={tick}>
                     <line x1="0" y1={tY} x2={width} y2={tY} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                     <text x={-25} y={tY + 4} fill="rgba(255,255,255,0.3)" fontSize="10">{tick}</text>
                   </g>
                 )
              })}

              {/* Area fill */}
              <polygon points={polygonStr} fill="url(#chartGradient)" />
              
              {/* Line */}
              <polyline 
                points={polylineStr} 
                fill="none" 
                stroke="var(--color-rj-gold)" 
                strokeWidth="2"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
              />

              {/* Points */}
              {points.map((p, i) => (
                <g key={i}>
                  {/* COVID Dip notation */}
                  {p.year === 2019 && (
                    <text x={p.x + 10} y={p.y + 15} fill="var(--color-rj-red)" fontSize="10" fontWeight="bold">COVID-19</text>
                  )}
                  
                  <circle cx={p.x} cy={p.y} r="4" fill="var(--color-rj-base)" stroke="var(--color-rj-gold)" strokeWidth="2" />
                  
                  {/* Value labels on hover or visible for wide screens */}
                  <text 
                    x={p.x} 
                    y={p.y - 15} 
                    fill={p.val >= 0 ? "var(--color-rj-green)" : "var(--color-rj-red)"} 
                    fontSize="11" 
                    textAnchor="middle"
                    className="hidden sm:block"
                  >
                    {p.val > 0 ? '+' : ''}{p.val}%
                  </text>
                </g>
              ))}

              {/* X Axis Years */}
              {points.map(p => (
                <text key={p.year} x={p.x} y={height + 25} fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">
                  {p.year}
                </text>
              ))}
            </svg>
            <div className="absolute top-0 right-0 font-mono text-[10px] text-gray-400 border border-white/10 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">REAL GDP GROWTH (YoY)</div>
          </div>

          {/* Bottom Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 hover:border-rj-gold/30 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              <span className="text-gray-400 text-xs mb-2">GDP Growth</span>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-medium">4.2%</span>
                <span className="text-rj-green text-sm flex items-center justify-center bg-rj-green/10 w-6 h-6 rounded-full">▲</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 hover:border-rj-gold/30 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              <span className="text-gray-400 text-xs mb-2">Inflation</span>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-medium">5.1%</span>
                <span className="text-rj-red text-sm flex items-center justify-center bg-rj-red/10 w-6 h-6 rounded-full">▼</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-rj-amber/30 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 relative overflow-hidden shadow-[0_4px_15px_rgba(255,191,0,0.1)]">
               <div className="absolute top-0 right-0 w-16 h-16 bg-rj-amber/10 blur-xl"></div>
              <span className="text-gray-400 text-xs mb-2 flex items-center justify-between">
                Unemployment
                <span className="text-[10px] text-rj-amber border border-rj-amber/30 px-2 py-0.5 rounded-full bg-rj-amber/10">concern</span>
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-medium text-rj-amber">33.4%</span>
                <span className="text-rj-red text-sm flex items-center justify-center bg-rj-red/10 w-6 h-6 rounded-full">▼</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:bg-white/10 hover:border-rj-gold/30 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              <span className="text-gray-400 text-xs mb-2">FDI Inflow</span>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-medium">$1.2B</span>
                <span className="text-rj-green text-sm flex items-center justify-center bg-rj-green/10 w-6 h-6 rounded-full">▲</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
