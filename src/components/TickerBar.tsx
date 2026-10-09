import { useEffect, useState } from 'react';

interface TickerData {
  usdNad: string;
  goldPrice: string;
  repoRate: string;
  nsxIndex: string;
  crudeBrent: string;
  isLive: boolean;
}

export default function TickerBar() {
  const [data, setData] = useState<TickerData>({
    usdNad: '18.42',
    goldPrice: '2,680.50',
    repoRate: '6.75%',
    nsxIndex: '1,842',
    crudeBrent: '$82.40',
    isLive: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchRates() {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        if (res.ok) {
          const json = await res.json();
          // ZAR is 1:1 with NAD
          const zarRate = json.rates?.ZAR;
          if (zarRate && isMounted) {
            setData(prev => ({
              ...prev,
              usdNad: Number(zarRate).toFixed(2),
              isLive: true
            }));
          }
        }
      } catch (err) {
        console.warn('Ticker rate fetch using snapshot fallback:', err);
      }
    }

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const items = [
    { label: 'USD/NAD (1:1 ZAR)', value: data.usdNad, icon: '▲', type: 'up' },
    { label: 'BoN Repo Rate', value: data.repoRate, icon: '▲', type: 'up' },
    { label: 'Gold (XAU/USD)', value: `$${data.goldPrice}`, icon: '▲', type: 'up' },
    { label: 'Brent Crude', value: data.crudeBrent, icon: '▲', type: 'up' },
    { label: 'NSX Overall', value: data.nsxIndex, icon: '▲', type: 'up' },
    { label: 'Status', value: data.isLive ? 'LIVE FEED' : 'SNAPSHOT', icon: data.isLive ? '●' : '—', type: data.isLive ? 'up' : 'neutral' },
    { label: 'Namibia Mined Uranium', value: '12% World Total', icon: '', type: 'up' },
    { label: 'Offshore Discoveries', value: '>20bn boe', icon: '—', type: 'neutral' },
  ];

  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="fixed top-0 left-0 z-[60] w-full bg-[#0A1628]/90 backdrop-blur-xl border-b border-rj-gold/20 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex whitespace-nowrap animate-ticker font-mono text-[0.7rem]">
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center space-x-2 mx-5">
            <span className="text-rj-gold">{item.label}</span>
            <span className="text-gray-400">·</span>
            <span className="text-white font-medium">{item.value}</span>
            {item.icon && (
              <span className={item.type === 'up' ? 'text-rj-green' : item.type === 'down' ? 'text-rj-red' : 'text-gray-400'}>
                {item.icon}
              </span>
            )}
            <span className="text-white/20 ml-5">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
