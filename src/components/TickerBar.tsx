export default function TickerBar() {
  const items = [
    { label: 'NAD/USD', value: '0.0548', icon: '▲', type: 'up' },
    { label: 'NSX Overall', value: '1,842', icon: '▲', type: 'up' },
    { label: 'GDP', value: '4.2%', icon: '▲', type: 'up' },
    { label: 'Inflation', value: '5.1%', icon: '▼', type: 'down' },
    { label: 'Prime Rate', value: '11.25%', icon: '—', type: 'neutral' },
    { label: 'Green H₂ Export Target', value: '$10B', icon: '—', type: 'up' },
    { label: 'Walvis Bay Port Traffic', value: '▲ 8.3%', icon: '', type: 'up' },
  ];

  // Duplicate for seamless loop
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="fixed top-0 left-0 z-[60] w-full bg-[#0A1628]/80 backdrop-blur-xl border-b border-rj-gold/20 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex whitespace-nowrap animate-ticker font-mono text-[0.72rem]">
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center space-x-2 mx-6">
            <span className="text-rj-gold">{item.label}</span>
            <span className="text-gray-400">·</span>
            <span className="text-white">{item.value}</span>
            {item.icon && (
               <span className={item.type === 'up' ? 'text-rj-green' : item.type === 'down' ? 'text-rj-red' : 'text-gray-400'}>
                 {item.icon}
               </span>
            )}
            <span className="text-white/20 ml-6">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
