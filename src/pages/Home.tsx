import Hero from '../components/Hero';
import FactStrip from '../components/FactStrip';
import MilestonesSection from '../components/MilestonesSection';
import WhyExistsSection from '../components/WhyExistsSection';
import NamibiaContextSection from '../components/NamibiaContextSection';
import ClientDecisionsSection from '../components/ClientDecisionsSection';
import AfricaMap from '../components/AfricaMap';
import LeadershipTeaserSection from '../components/LeadershipTeaserSection';
import ReportsSection from '../components/ReportsSection';
import DashboardSection from '../components/DashboardSection';
import GlobalCta from '../components/GlobalCta';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FactStrip />
      <MilestonesSection />
      <WhyExistsSection />
      <NamibiaContextSection />
      <ClientDecisionsSection />
      <AfricaMap />
      <LeadershipTeaserSection />
      <ReportsSection />
      <DashboardSection />
      <GlobalCta />
      <ContactSection />
    </>
  );
}
