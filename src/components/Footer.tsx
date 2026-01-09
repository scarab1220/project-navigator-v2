import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark py-8 px-6">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Oscar Noe Abarca Navas. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/oscar-abarca-a1ba4a88/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/scarab1220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
