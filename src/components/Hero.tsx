import { useEffect, useState, useMemo } from 'react';

const CANDLE_COUNT = 50;

function CandlestickChart() {
  const [candles, setCandles] = useState(() => {
    let currentY = 250;
    const data = [];
    for (let i = 0; i < CANDLE_COUNT; i++) {
      const isUp = Math.random() > 0.35;
      const bodyHeight = 10 + Math.random() * 30;
      const wickTop = Math.random() * 20;
      const wickBottom = Math.random() * 20;
      
      const newY = isUp ? currentY - (Math.random() * 15 + 5) : currentY + (Math.random() * 10);
      currentY = Math.max(50, Math.min(newY, 350));
      
      data.push({
        id: i,
        isUp,
        y: currentY,
        bodyHeight,
        wickTop,
        wickBottom
      });
    }
    return data;
  });

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    let ws: WebSocket;
    let fallbackInterval: NodeJS.Timeout;

    const connectWebSocket = () => {
      ws = new WebSocket(wsUrl);

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data && data.type === 'TICK') {
            setCandles(prev => {
              const next = [...prev];
              return next.map((candle, i) => {
                const isRecent = i > CANDLE_COUNT - 8;
                if (!isRecent) return candle; // Only updates recent candles
                
                // Add some randomness per candle since backend sends a single tick per interval
                const uniqueVariation = Math.random() * 0.5 + 0.5;
                const changeY = data.changeY * uniqueVariation;
                const changeHeight = data.changeHeight * uniqueVariation;
                const wickTopChange = data.wickTopChange * uniqueVariation;
                const wickBottomChange = data.wickBottomChange * uniqueVariation;
                
                return {
                  ...candle,
                  y: Math.max(20, Math.min(380, candle.y + changeY)),
                  bodyHeight: Math.max(5, candle.bodyHeight + changeHeight),
                  wickTop: Math.max(2, candle.wickTop + wickTopChange),
                  wickBottom: Math.max(2, candle.wickBottom + wickBottomChange),
                  isUp: changeY < 0 ? true : false, // Update color based on move
                };
              });
            });
          }
        } catch (err) {
          console.error("Failed to parse websocket message", err);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket closed, using fallback simulation');
        startFallbackSimulation();
      };
      
      ws.onerror = () => {
        console.log('WebSocket error, using fallback simulation');
      };
    };

    const startFallbackSimulation = () => {
      clearInterval(fallbackInterval);
      fallbackInterval = setInterval(() => {
        setCandles(prev => {
          const next = [...prev];
          return next.map((candle, i) => {
            const isRecent = i > CANDLE_COUNT - 8;
            const volatility = isRecent ? 8 : 2;
            
            const changeY = (Math.random() - 0.5) * volatility;
            const changeHeight = (Math.random() - 0.5) * volatility * 1.5;
            
            return {
              ...candle,
              y: Math.max(20, Math.min(380, candle.y + changeY)),
              bodyHeight: Math.max(5, candle.bodyHeight + changeHeight),
              wickTop: Math.max(2, candle.wickTop + (Math.random() - 0.5) * volatility),
              wickBottom: Math.max(2, candle.wickBottom + (Math.random() - 0.5) * volatility),
              isUp: changeY < 0 ? true : false,
            };
          });
        });
      }, 800);
    };

    // Initialize with websocket
    connectWebSocket();
    
    return () => {
      if (ws) ws.close();
      clearInterval(fallbackInterval);
    };
  }, []);

  const trendLinePoints = useMemo(() => {
    return candles.map((c, i) => `${(i / CANDLE_COUNT) * 100},${c.y + c.bodyHeight/2}`).join(' ');
  }, [candles]);

  return (
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 400">
      {/* Horizontal grid lines */}
      {[50, 150, 250, 350].map((y, i) => (
        <line key={`grid-${i}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
      ))}
      
      {/* Candles */}
      {candles.map((candle, i) => {
        const x = (i / CANDLE_COUNT) * 100 + 1;
        const color = candle.isUp ? 'var(--color-rj-green)' : 'var(--color-rj-red)';
        
        return (
          <g key={candle.id} className="opacity-70 transition-all duration-[800ms] ease-in-out">
            {/* Wick */}
            <line 
              x1={x} y1={candle.y - candle.wickTop} 
              x2={x} y2={candle.y + candle.bodyHeight + candle.wickBottom} 
              stroke={color} strokeWidth="0.2" 
              className="transition-all duration-[800ms] ease-in-out"
            />
            {/* Body */}
            <rect 
              x={x - 0.4} y={candle.y} 
              width="0.8" height={candle.bodyHeight} 
              fill={color} 
              className="transition-all duration-[800ms] ease-in-out"
            />
          </g>
        );
      })}

      <polyline 
        points={trendLinePoints}
        fill="none"
        stroke="var(--color-rj-gold)"
        strokeWidth="0.5"
        className="opacity-50 transition-all duration-[800ms] ease-in-out"
        style={{ filter: 'drop-shadow(0 0 4px var(--color-rj-gold))' }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-40px)] min-h-[700px] bg-transparent overflow-hidden flex items-center justify-center pt-32 md:pt-40">
      {/* Base Layer is bg-transparent */}
      
      {/* Right 60% Candlestick Chart */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-30 md:opacity-100 z-0">
        <CandlestickChart />
      </div>

      {/* Left 45% Real landscape image */}
      <div className="absolute left-0 top-0 w-full md:w-[45%] h-full z-10 clip-dunes opacity-35 mix-blend-luminosity">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-rj-base z-20"></div>
        <img 
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80" 
          alt="Namibia Dunes" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Scan line overlay */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[rgba(0,255,136,0.03)] z-20 animate-scanline pointer-events-none"></div>

      {/* Floating data cards */}
      <div className="absolute hidden md:block top-[15%] left-[50%] z-30 bg-[#0A1628]/60 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl px-4 py-2.5 font-mono text-xs animate-float float-d1 hover:border-rj-gold/50 hover:scale-105 transition-all">
        <span className="text-gray-300">NAD/USD</span> <span className="text-white mx-2">0.0548</span> <span className="text-rj-green">▲ 0.31%</span>
      </div>
      
      <div className="absolute hidden md:block top-[45%] right-[10%] z-30 bg-[#0A1628]/60 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl px-4 py-2.5 font-mono text-xs animate-float float-d2 hover:border-rj-gold/50 hover:scale-105 transition-all">
        <span className="text-gray-300">NSX OVERALL</span> <span className="text-white mx-2">1,842</span> <span className="text-rj-green">▲ 1.1%</span>
      </div>
      
      <div className="absolute hidden md:block bottom-[25%] right-[20%] z-30 bg-[#0A1628]/60 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl px-4 py-2.5 font-mono text-xs animate-float float-d3 hover:border-rj-gold/50 hover:scale-105 transition-all">
        <span className="text-gray-300">GDP GROWTH</span> <span className="text-white mx-2">4.2%</span> <span className="text-rj-gold">▲</span>
      </div>

      <div className="absolute hidden md:block top-[20%] right-[5%] z-30 bg-[#0A1628]/60 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(255,191,0,0.1)] backdrop-blur-xl px-4 py-2.5 font-mono text-xs animate-float float-d1 hover:border-rj-gold/50 hover:scale-105 transition-all">
        <span className="text-gray-300">OIL RESERVES</span> <span className="text-white mx-2">11B BBL</span> <span className="text-rj-amber">Orange Basin</span>
      </div>

      <div className="absolute hidden md:block bottom-[40%] left-[40%] z-30 bg-[#0A1628]/60 border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl px-4 py-2.5 font-mono text-xs animate-float float-d2 hover:border-rj-gold/50 hover:scale-105 transition-all">
        <span className="text-gray-300">PRIME RATE</span> <span className="text-white mx-2">11.25%</span> <span className="text-white">—</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-4 tracking-tight">
            Unlocking<br/>
            Africa's<br/>
            Next Frontier
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-sans mb-6 max-w-lg leading-relaxed">
            Connecting global capital with Namibia's prime investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-10 md:mb-12">
            <a href="#" className="bg-white/5 border border-rj-gold/30 backdrop-blur-xl shadow-[0_0_20px_rgba(200,162,74,0.15)] text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center hover:bg-rj-gold hover:text-rj-navy transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,162,74,0.4)]">
              Invest in Namibia <span className="ml-2 font-mono">→</span>
            </a>
            <a href="#" className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center hover:border-rj-gold/50 hover:text-rj-gold transition-all duration-300 hover:bg-white/10">
              Read Our Reports
            </a>
          </div>

          <div className="mt-8 md:mt-12 flex items-center font-mono text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full animate-pulse-ring mr-3"></div>
            LIVE <span className="mx-2 text-white">Namibian Economic Dashboard</span> <span className="ml-4 opacity-50">↓ scroll</span>
          </div>
        </div>
      </div>
    </div>
  );
}
