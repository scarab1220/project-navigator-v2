import { LayoutDashboard, GitBranch, ClipboardCheck, BarChart3, Workflow, Shield } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Technical Project Management",
    titleEs: "Gestión de Proyectos Técnicos",
    description: "End-to-end delivery of software and digital transformation projects. From requirements gathering to deployment and beyond.",
  },
  {
    icon: GitBranch,
    title: "Agile Delivery Coordination",
    titleEs: "Coordinación de Entregas Ágiles",
    description: "Scrum and Kanban implementation. Sprint planning, retrospectives, and continuous improvement for development teams.",
  },
  {
    icon: Workflow,
    title: "Software Project Planning",
    titleEs: "Planificación de Proyectos de Software",
    description: "Roadmap development, resource allocation, risk assessment, and milestone tracking for complex technical initiatives.",
  },
  {
    icon: BarChart3,
    title: "KPI & Performance Dashboards",
    titleEs: "Dashboards de KPI y Desempeño",
    description: "Data-driven reporting and visualization. Executive dashboards that provide actionable insights for decision-makers.",
  },
  {
    icon: LayoutDashboard,
    title: "IT Project Coordination",
    titleEs: "Coordinación de Proyectos de TI",
    description: "Cross-functional team alignment, vendor management, and infrastructure project oversight.",
  },
  {
    icon: Shield,
    title: "Quality Assurance Oversight",
    titleEs: "Supervisión de Control de Calidad",
    description: "Process improvement, testing coordination, and quality gate management to ensure deliverable excellence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services & Engagement Options
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models tailored to your project needs — from short-term consulting 
            to long-term project leadership.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-professional group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-3 italic">
                {service.titleEs}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
              <span key={index} className="skill-tag">
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
