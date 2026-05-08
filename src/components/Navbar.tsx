import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const hashLinks = [
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Case Studies", hash: "#results" },
  { label: "Certifications", hash: "#certifications" },
  { label: "Skills", hash: "#skills" },
];

const linkClass =
  "text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-primary after:transition-all hover:after:w-full";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // On non-home pages, prefix hash links with "/" so they navigate home first
  const href = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg shadow-background/50" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-display text-xl font-bold text-gradient"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Programmer Imran
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {hashLinks.map((link) => (
            <a key={link.hash} href={href(link.hash)} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a href={href("#contact")} className={linkClass}>
            Contact
          </a>
          <Link
            to="/cv"
            className="border border-primary/60 text-primary px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(172_66%_50%_/_0.15)]"
          >
            Profile
          </Link>
          <a
            href={href("#contact")}
            className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity hover:shadow-[0_0_30px_hsl(172_66%_50%_/_0.2)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong px-6 pt-4 pb-6 space-y-4 border-t border-border/50">
          {hashLinks.map((link) => (
            <a
              key={link.hash}
              href={href(link.hash)}
              onClick={() => setOpen(false)}
              className="block text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/cv"
            onClick={() => setOpen(false)}
            className="block text-primary font-semibold hover:text-foreground transition-colors py-1"
          >
            Profile
          </Link>
          <a
            href={href("#contact")}
            onClick={() => setOpen(false)}
            className="block text-muted-foreground hover:text-foreground transition-colors py-1"
          >
            Contact
          </a>
          <a
            href={href("#contact")}
            onClick={() => setOpen(false)}
            className="block bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
