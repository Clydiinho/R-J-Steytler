import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import InvestSection from '../components/InvestSection';
import TeamTeaserSection from '../components/TeamTeaserSection';
import ReportsSection from '../components/ReportsSection';
import DashboardSection from '../components/DashboardSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InvestSection />
      <TeamTeaserSection />
      <ReportsSection />
      <DashboardSection />
      <ContactSection />
    </>
  );
}
