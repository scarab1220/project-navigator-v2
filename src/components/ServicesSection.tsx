import {
  LayoutDashboard,
  GitBranch,
  ClipboardCheck,
  BarChart3,
  Workflow,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Technical Project Management",
    titleEs: "Gestión de Proyectos Técnicos",
    description:
      "End-to-end delivery of software and digital transformation projects. From requirements gathering to deployment and beyond.",
  },
  {
    icon: GitBranch,
    title: "Agile Delivery Coordination",
    titleEs: "Coordinación de Entregas Ágiles",
    description:
      "Scrum and Kanban implementation. Sprint planning, retrospectives, and continuous improvement for development teams.",
  },
  {
    icon: Workflow,
    title: "Software Project Planning",
    titleEs: "Planificación de Proyectos de Software",
    description:
      "Roadmap development, resource allocation, risk assessment, and milestone tracking for complex technical initiatives.",
  },
  {
    icon: BarChart3,
    title: "KPI & Performance Dashboards",
    titleEs: "Dashboards de KPI y Desempeño",
    description:
      "Data-driven reporting and visualization. Executive dashboards that provide actionable insights for decision-makers.",
  },
  {
    icon: LayoutDashboard,
    title: "IT Project Coordination",
    titleEs: "Coordinación de Proyectos de TI",
    description:
      "Cross-functional team alignment, vendor management, and infrastructure project oversight.",
  },
  {
    icon: Shield,
    title: "Quality Assurance Oversight",
    titleEs: "Supervisión de Control de Calidad",
    description:
      "Process improvement, testing coordination, and quality gate management to ensure deliverable excellence.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden bg-background"
    >
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-accent/16 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-44 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Engagement Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models tailored to your project needs — from
            short-term consulting to long-term project leadership.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm p-6 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Elegant glow (no neon) */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
              </span>

              <div
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4
              transition-all duration-300 group-hover:bg-accent/18 group-hover:scale-105"
              >
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="relative text-lg font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="relative text-sm text-accent font-medium mb-3 italic">
                {service.titleEs}
              </p>
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engagement types */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Engagement options include:
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Project-Based Delivery",
              "Agile Sprint Leadership",
              "Consulting & Advisory",
              "Part-Time PM Support",
            ].map((option, index) => (
              <span
                key={index}
                className="group relative inline-flex items-center justify-center rounded-full
                border border-foreground/12 bg-foreground/[0.03]
                px-4 py-2 text-xs font-semibold text-foreground
                shadow-sm transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-md hover:border-foreground/20"
              >
                {/* subtle highlight ring (elegant, not neon) */}
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-foreground/8 to-transparent blur-sm" />
                </span>

                <span className="relative">{option}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;