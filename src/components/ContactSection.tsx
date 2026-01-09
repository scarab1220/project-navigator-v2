import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-hero section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-2 block">
            Let's Work Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Whether you need end-to-end project leadership or strategic consulting, 
            I'm here to help you deliver with confidence.
          </p>
          
          {/* CTA */}
          <a 
            href="mailto:oscarnoeabarca@outlook.com"
            className="btn-primary-hero mb-12"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          
          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-sm">oscarnoeabarca@outlook.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gold/50" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm">San Salvador, El Salvador</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gold/50" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold" />
              <span className="text-sm">USA / LATAM / Remote</span>
            </div>
          </div>
          
          {/* Spanish note */}
          <p className="text-sm text-gold-light/80 mt-8 italic">
            ¿Prefiere comunicarse en español? No hay problema — hablo ambos idiomas con fluidez.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute right-1/4 top-0 w-96 h-96 rounded-full bg-navy-light/10 blur-3xl" />
    </section>
  );
};

export default ContactSection;
