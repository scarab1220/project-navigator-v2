import { TrendingUp, Globe, Users, Award } from "lucide-react";

const metrics = [
  {
    number: "10+",
    label: "Years Experience",
    sublabel: "Años de Experiencia",
    icon: TrendingUp,
  },
  {
    number: "50+",
    label: "Projects Delivered",
    sublabel: "Proyectos Entregados",
    icon: Award,
  },
  {
    number: "5+",
    label: "Countries Served",
    sublabel: "Países Atendidos",
    icon: Globe,
  },
  {
    number: "100+",
    label: "Team Members Led",
    sublabel: "Miembros de Equipo",
    icon: Users,
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Executive-level reporting and stakeholder management across global organizations. 
            Trusted by leadership teams to deliver high-stakes projects.
          </p>
        </div>
        
        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="card-professional text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="metric-number mb-2">{metric.number}</div>
              <div className="text-sm font-medium text-foreground">{metric.label}</div>
              <div className="text-xs text-muted-foreground italic mt-1">{metric.sublabel}</div>
            </div>
          ))}
        </div>
        
        {/* Summary paragraph */}
        <div className="card-professional max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="hidden sm:block w-1 h-full min-h-[120px] bg-accent rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Executive Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in bridging the gap between technical teams and business stakeholders. 
                With extensive experience in Agile delivery, I ensure projects are completed on time, 
                within budget, and aligned with strategic objectives. My approach combines data-driven 
                decision-making with clear communication to keep all parties informed and engaged.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Bilingüe (English/Español) — Comunicación ejecutiva para equipos globales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
