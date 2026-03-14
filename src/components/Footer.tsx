import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Dayesh Late. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/dayeshlate" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/dayeshlate" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:dayesh@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
