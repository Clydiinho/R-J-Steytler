import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TickerBar from './components/TickerBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-white min-h-screen flex flex-col bg-transparent relative overflow-x-hidden">
        <TickerBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
