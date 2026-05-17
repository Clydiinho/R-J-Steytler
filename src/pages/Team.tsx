import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Jonathan Ndlovu",
      role: "Managing Partner",
      bio: "Over 15 years in sovereign advisory and DFI structuring. Formerly with Standard Bank.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80"
    },
    {
      name: "Rachel Shikongo",
      role: "Director, Economic Research",
      bio: "Leading macroeconomist specializing in Southern African debt markets and fiscal policy.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
    },
    {
      name: "Marcus Visser",
      role: "Head of SME Development",
      bio: "Venture builder with a track record of scaling 50+ regional enterprises across SADC.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80"
    },
    {
      name: "Elise Tjikuua",
      role: "Associate Partner",
      bio: "Expert in green hydrogen project finance and large infrastructure syndications.",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&q=80"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen relative overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-rj-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-rj-gold transition-colors font-mono tracking-widest uppercase text-xs mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Our Leadership</h1>
          <p className="text-gray-300 text-lg max-w-2xl font-sans leading-relaxed">
            A collective of specialists with deep local fluency and rigorous institutional discipline, guiding capital to where it creates the most value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="group flex flex-col bg-[#0A1628]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-rj-gold/30 transition-all duration-500">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-[#0A1628]/60 backdrop-blur-sm -mt-4 relative z-10">
                <h3 className="font-serif text-2xl font-medium mb-1">{member.name}</h3>
                <div className="font-mono text-xs text-rj-gold uppercase tracking-wider mb-4">{member.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{member.bio}</p>
                
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
