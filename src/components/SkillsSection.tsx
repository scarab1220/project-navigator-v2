const skillCategories = [
  {
    title: "Project Leadership",
    titleEs: "Liderazgo de Proyectos",
    skills: [
      "Strategic Planning",
      "Stakeholder Management",
      "Executive Reporting",
      "Team Leadership",
      "Budget Management",
      "Risk Mitigation",
    ],
  },
  {
    title: "Agile Methodologies",
    titleEs: "Metodologías Ágiles",
    skills: [
      "Scrum Framework",
      "Kanban",
      "Sprint Planning",
      "Retrospectives",
      "Backlog Grooming",
      "Continuous Improvement",
    ],
  },
  {
    title: "Data & Analytics",
    titleEs: "Datos y Análisis",
    skills: [
      "KPI Development",
      "Dashboard Design",
      "Performance Metrics",
      "Data Visualization",
      "Reporting Automation",
      "Business Intelligence",
    ],
  },
  {
    title: "Technical Coordination",
    titleEs: "Coordinación Técnica",
    skills: [
      "SDLC Management",
      "QA Oversight",
      "Release Planning",
      "Vendor Management",
      "Integration Projects",
      "Infrastructure Coordination",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-background">
      {/* Aurora background (light, elegant) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-accent/14 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute top-56 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/14 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-foreground/6 via-accent/10 to-transparent blur-3xl" />
      </div>

      <div className="container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set developed through years of hands-on project delivery
            and team leadership across diverse industries.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm p-6 shadow-sm
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Elegant glow */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/6 to-transparent blur-sm" />
              </span>

              {/* Soft shimmer sweep (flashy pero elegante) */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/6 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              </span>

              <div className="relative">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-accent italic mb-4">
                  {category.titleEs}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="group/skill relative inline-flex items-center justify-center rounded-full
                      border border-foreground/12 bg-foreground/[0.03]
                      px-3 py-1.5 text-xs font-semibold text-foreground
                      shadow-sm transition-all duration-300
                      hover:-translate-y-0.5 hover:shadow-md hover:border-foreground/20"
                    >
                      {/* Micro glow elegante (no neon) */}
                      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100">
                        <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-foreground/8 to-transparent blur-sm" />
                      </span>

                      {/* Mini shimmer */}
                      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/8 to-transparent opacity-0 transition-all duration-700 group-hover/skill:left-[120%] group-hover/skill:opacity-100" />
                      </span>

                      <span className="relative">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-border/50 bg-background/70 backdrop-blur-sm shadow-sm">
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                Remote Collaboration Expert
              </p>
              <p className="text-xs text-muted-foreground">
                Proficient with Jira, Confluence, Asana, Slack, MS Teams, and other collaboration tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;