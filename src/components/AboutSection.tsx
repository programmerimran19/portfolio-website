import { Brain, LineChart, Target, LayoutDashboard } from "lucide-react";
import profileImg from "@/assets/imran-profile.jpeg";

const features = [
  {
    icon: Brain,
    title: "AI-Augmented Strategy",
    desc: "Leveraging AI tools for audience intelligence, creative analysis, and predictive campaign decisions.",
  },
  {
    icon: LineChart,
    title: "Full-Funnel Analytics",
    desc: "GA4, GTM, FB CAPI — complete tracking architecture from first click to final conversion.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "Meta and Google Ads campaigns engineered for purchases, installs, and measurable ROI — not vanity metrics.",
  },
  {
    icon: LayoutDashboard,
    title: "Decision Intelligence",
    desc: "Custom Looker Studio dashboards and data models that turn raw numbers into clear business decisions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative section-divider">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">About Me</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Data Tells the Story. <br />
              <span className="text-gradient">I Help You Act on It.</span>
            </h2>

            {/* Mobile profile photo */}
            <div className="flex lg:hidden justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-primary opacity-20 blur-xl" />
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={profileImg}
                    alt="Programmer Imran"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              I'm Imran — an AI-driven performance marketer and data analytics specialist with 7+ years of experience managing $50K+ in paid media across Meta and Google Ads. I don't just run campaigns — I build intelligent systems that connect ad spend to real business outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My approach combines AI-powered decision-making, full-funnel analytics (GA4, GTM, FB CAPI), and performance marketing strategy to help brands scale with precision — not guesswork. From campaign architecture to custom dashboards, every decision is backed by data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Business Analyst at Smart Sohay and Amar iSchool, applying analytics and AI tools to drive measurable growth across EdTech and SaaS platforms.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.upwork.com/freelancers/~018a0ad419394dc43b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Upwork Profile
              </a>
              <a
                href="https://www.fiverr.com/users/imran62462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Fiverr Profile
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover:animate-pulse-glow"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
