import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TickerBar from './components/TickerBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FocusAreas from './pages/FocusAreas';
import Leadership from './pages/Leadership';
import Namibia from './pages/Namibia';
import MacroMonitor from './pages/MacroMonitor';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Individual Leadership Profiles
import JohnSteytler from './pages/profiles/JohnSteytler';
import VijayJha from './pages/profiles/VijayJha';
import RachelGesami from './pages/profiles/RachelGesami';
import PeikBruhns from './pages/profiles/PeikBruhns';
import SalehAlhashmi from './pages/profiles/SalehAlhashmi';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-white min-h-screen flex flex-col bg-transparent relative overflow-x-hidden">
        <TickerBar />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/focus" element={<FocusAreas />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/team" element={<Leadership />} />
            
            {/* Leadership Profile Routes */}
            <Route path="/john" element={<JohnSteytler />} />
            <Route path="/vijay" element={<VijayJha />} />
            <Route path="/gesami" element={<RachelGesami />} />
            <Route path="/peik" element={<PeikBruhns />} />
            <Route path="/saleh" element={<SalehAlhashmi />} />

            {/* Content & Intelligence Routes */}
            <Route path="/namibia" element={<Namibia />} />
            <Route path="/macro" element={<MacroMonitor />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
