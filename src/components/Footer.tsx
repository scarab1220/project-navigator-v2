import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-dark py-10 px-6">
      {/* Subtle aurora accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-navy-light/25 blur-3xl" />
      </div>

      {/* Premium top border */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="container-narrow relative">
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
              className="group relative inline-flex items-center justify-center rounded-lg p-2
              text-primary-foreground/60 transition-all duration-300
              hover:text-gold hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              {/* Glow */}
              <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-px rounded-lg bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm" />
              </span>

              <Linkedin className="relative w-5 h-5" />
            </a>

            <a
              href="https://github.com/scarab1220"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-lg p-2
              text-primary-foreground/60 transition-all duration-300
              hover:text-gold hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              {/* Glow */}
              <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute -inset-px rounded-lg bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-sm" />
              </span>

              <Github className="relative w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Optional tiny note (si quieres) */}
        <p className="mt-6 text-center text-xs text-primary-foreground/40">
          Built with React + Vite • Designed for clarity and outcomes
        </p>
      </div>
    </footer>
  );
};

export default Footer;