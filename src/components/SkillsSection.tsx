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
    <section className="section-padding bg-background">
      <div className="container-narrow">
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
            <div key={index} className="card-professional">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-accent italic mb-4">
                {category.titleEs}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-primary/5 rounded-lg border border-primary/10">
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
