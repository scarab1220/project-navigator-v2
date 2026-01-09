import { Linkedin, Github, ExternalLink } from "lucide-react";

const LinksSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-2 block">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Profiles
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            View my professional background and explore examples of my technical understanding 
            and team collaboration.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-professional group flex items-center gap-4 hover:border-[#0A66C2]/40"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#0A66C2] flex items-center justify-center">
              <Linkedin className="w-7 h-7 text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-foreground group-hover:text-[#0A66C2] transition-colors flex items-center gap-2">
                LinkedIn Profile
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional experience & endorsements
              </p>
            </div>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/scarab1220"
            target="_blank"
            rel="noopener noreferrer"
            className="card-professional group flex items-center gap-4 hover:border-[#24292F]/40"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#24292F] flex items-center justify-center">
              <Github className="w-7 h-7 text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-foreground group-hover:text-[#24292F] transition-colors flex items-center gap-2">
                GitHub Profile
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Technical understanding & collaboration
              </p>
            </div>
          </a>
        </div>
        
        {/* Trust note */}
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          These profiles demonstrate my ability to communicate with technical teams 
          and understand solution architectures — not a developer portfolio.
        </p>
      </div>
    </section>
  );
};

export default LinksSection;
