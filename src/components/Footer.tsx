import { Linkedin, Facebook, ExternalLink, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg font-bold text-gradient">Programmer Imran</span>
            <span className="text-xs text-muted-foreground">AI-Driven Performance Marketer & Data Analytics Specialist</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/programmerimran62/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="https://www.linkedin.com/in/alimran62/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://wa.me/8801521412857" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            <a href="https://www.upwork.com/freelancers/~018a0ad419394dc43b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Upwork"><ExternalLink size={16} /></a>
          </div>

          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Programmer Imran. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
