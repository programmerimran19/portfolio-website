import { Mail, ExternalLink, Linkedin, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative section-divider">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Scale Your Business with Data & AI</span>?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Let's discuss how I can help you build smarter campaigns, implement full-funnel analytics, and make every decision backed by data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://www.upwork.com/freelancers/~018a0ad419394dc43b"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-shadow hover:shadow-[0_0_80px_hsl(172_66%_50%_/_0.25)]"
            >
              <ExternalLink size={18} />
              Hire Me on Upwork
            </a>
            <a
              href="https://wa.me/8801521412857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary/30 transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://www.facebook.com/programmerimran62/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/in/alimran62/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://wa.me/8801521412857" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="mailto:contact.imran00@gmail.com" className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all" aria-label="Email"><Mail size={18} /></a>
          </div>

          <a
            href="mailto:contact.imran00@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-6"
          >
            <Mail size={14} />
            contact.imran00@gmail.com
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            Prefer a quick chat? Reach out on WhatsApp or message me on Upwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
