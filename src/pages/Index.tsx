import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import DeveloperSection from "@/components/DeveloperSection";
import LinksSection from "@/components/LinksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <SkillsSection />
      <DeveloperSection />
      <LinksSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
