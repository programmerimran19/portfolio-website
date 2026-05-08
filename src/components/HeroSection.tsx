import { ArrowRight, MapPin } from "lucide-react";
import profileImg from "@/assets/imran-profile.jpeg";

const badgeRows = [
  ["Business Analyst", "GA4 Certified", "Business Intelligence", "Decision Intelligence"],
  ["Meta & Google Ads", "AI-Powered Analytics", "FB CAPI & GTM"],
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6 animate-fade-up">
              <MapPin size={14} className="text-primary" />
              <span>Dhaka, Bangladesh</span>
              <span className="mx-2 text-border">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for projects
              </span>
            </div>

            {/* Mobile/tablet profile photo */}
            <div className="flex lg:hidden justify-center mb-8 animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
                <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Programmer Imran"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <h1 className="font-display font-bold leading-[1.2] mb-4 animate-fade-up">
              <span className="block text-2xl sm:text-4xl lg:text-5xl">Business Analyst. Data Strategist.</span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl">AI-Driven Growth Architect.</span>
              <span className="block text-base sm:text-xl lg:text-2xl mt-2 text-gradient">
                From Data to Decisions. From Insights to Impact.
              </span>
            </h1>

            <div className="flex flex-col gap-2 mb-6 animate-fade-up">
              {badgeRows.map((row, rowIdx) => (
                <div key={rowIdx} className="flex flex-wrap gap-2">
                  {row.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/[0.1] text-primary font-medium border border-primary/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up-delay-1 text-justify">
              Bridging business complexity and data intelligence to deliver clear, measurable outcomes — 7+ years across Business Analysis, full-funnel analytics (GA4 + GTM + FB CAPI), and AI-powered strategy. Google Analytics Certified • Google Ads Search Certified • AI-Powered Ads Certified.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-2">
              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all glow-shadow hover:shadow-[0_0_80px_hsl(172_66%_50%_/_0.25)]"
              >
                Let's Work Together
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary/80 transition-all"
              >
                See Case Studies
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-up-delay-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Programmer Imran — AI-Driven Performance Marketer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
