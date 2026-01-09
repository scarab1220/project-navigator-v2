import { ArrowRight, Calendar, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-narrow section-padding relative z-10">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold-light text-sm font-medium">
              Available for Remote Project Leadership & Consulting
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Technical Project Manager for{" "}
            <span className="text-gradient-gold">Software & Digital Teams</span>
          </h1>
          
          {/* Subheading */}
          <p className="animate-fade-in-up animate-delay-100 text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl leading-relaxed">
            Delivering complex projects on time with Agile execution and KPI-driven delivery. 
            10+ years leading cross-functional teams across the Americas.
          </p>
          
          {/* Spanish tagline */}
          <p className="animate-fade-in-up animate-delay-200 text-base text-gold-light/80 italic mb-10">
            Gerente de Proyectos Técnico — Disponible para clientes en USA, LATAM y global.
          </p>
          
          {/* CTAs */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:oscarnoeabarca@outlook.com"
              className="btn-primary-hero"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="#services"
              className="btn-secondary-hero"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full bg-navy-light/20 blur-3xl" />
    </section>
  );
};

export default HeroSection;
