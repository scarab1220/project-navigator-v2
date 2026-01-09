import { TrendingUp, Globe, Users, Award } from "lucide-react";

const metrics = [
  {
    number: "5+",
    label: "Years Experience",
    sublabel: "Años de Experiencia",
    icon: TrendingUp,
  },
  {
    number: "20+",
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
    <section className="relative section-padding overflow-hidden bg-background">
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-accent/18 via-primary/12 to-transparent blur-3xl" />
        <div className="absolute top-40 -right-28 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
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
              className="group relative rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm p-6 text-center
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Elegant glow */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
              </span>

              <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4
              transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                <metric.icon className="w-6 h-6" />
              </div>

              <div className="relative metric-number mb-2">
                {metric.number}
              </div>
              <div className="relative text-sm font-medium text-foreground">
                {metric.label}
              </div>
              <div className="relative text-xs text-muted-foreground italic mt-1">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Executive summary */}
        <div className="group relative max-w-3xl mx-auto rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm p-8
        transition-all duration-300 hover:shadow-lg">
          {/* Elegant glow */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
          </span>

          <div className="relative flex items-start gap-4">
            <div className="hidden sm:block w-1 h-full min-h-[120px] bg-accent/70 rounded-full" />

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