import { BarChart3, Brain, FileText, TrendingUp } from "lucide-react";
import profileImg from "@/assets/imran-profile.jpeg";

const features = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Custom BI dashboards and KPI frameworks that transform raw data into executive-level insights for smarter business decisions.",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    desc: "AI-powered frameworks that connect data signals to real business actions — turning analytics into competitive advantage.",
  },
  {
    icon: FileText,
    title: "Business Analysis",
    desc: "End-to-end BA delivery — requirement gathering, user stories, SRS, WBS, and Agile sprint execution that aligns teams and drives results.",
  },
  {
    icon: TrendingUp,
    title: "Full-Funnel Analytics",
    desc: "GA4 + GTM + FB CAPI tracking architecture — complete attribution from first click to final conversion, zero data gaps.",
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
              Where Business Strategy <br />
              <span className="text-gradient">Meets Data Intelligence.</span>
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
              I'm Imran — a Business Analyst and AI-driven data specialist with 7+ years of experience turning complex business problems into clear, measurable outcomes across eCommerce, EdTech, and SaaS platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I bridge the gap between business needs and technical execution — from requirement gathering, user story writing, and SRS documentation to Business Intelligence dashboards, Decision Intelligence frameworks, and full-funnel analytics architecture (GA4 + GTM + FB CAPI). Every recommendation I make is backed by data, every strategy built to scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as Business Analyst at Smart Sohay and Amar iSchool — applying AI-powered analytics, Agile methodologies, and performance marketing to drive measurable growth across digital platforms.
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
