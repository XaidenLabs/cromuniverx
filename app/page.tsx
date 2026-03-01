import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/BrandsSection";
import InfoVideoSection from "./components/InfoVideoSection";
import ServicesSection from "./components/ServicesSection";
import ServicesDetailsSection from "./components/ServicesDetailsSection";
import RecentProjectsSection from "./components/RecentProjectsSection";
import PsychologyToolsSection from "./components/PsychologyToolsSection";
import RecentUpdatesSection from "./components/RecentUpdatesSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <InfoVideoSection />
      <ServicesSection />
      <ServicesDetailsSection />
      <RecentProjectsSection />
      <PsychologyToolsSection />
      <SubscribeSection />
      <RecentUpdatesSection />
      <Footer />
    </main>
  );
}
