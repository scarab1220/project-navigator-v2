import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import DeveloperSection from "@/components/DeveloperSection";
import LinksSection from "@/components/LinksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SpeedInsights } from "@vercel/speed-insights/react"

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondo aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-[-180px]
            h-[520px] w-[820px]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-500
            opacity-25 blur-3xl
          "
        />
        <div
          className="
            absolute right-[-220px] top-[35%]
            h-[420px] w-[420px]
            rounded-full
            bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500
            opacity-15 blur-3xl
          "
        />
      </div>

      <Reveal>
        <HeroSection />
      </Reveal>

      <Reveal delay={0.05}>
        <ExperienceSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ServicesSection />
      </Reveal>

      <Reveal delay={0.15}>
        <SkillsSection />
      </Reveal>

      <Reveal delay={0.2}>
        <DeveloperSection />
      </Reveal>

      <Reveal delay={0.25}>
        <LinksSection />
      </Reveal>

      <Reveal delay={0.3}>
        <ContactSection />
      </Reveal>

      <Reveal delay={0.35}>
        <Footer />
      </Reveal>
    </main>
  );
};

export default Index;