import { Megaphone, Search, LineChart, Settings, PieChart, Zap, BarChart3, Brain } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    desc: "High-converting Facebook & Instagram ad campaigns — from audience targeting to creative optimization.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting"],
  },
  {
    icon: Search,
    title: "Google Ads Campaigns",
    desc: "Search, Display & App Promotion campaigns driving downloads and conversions at minimal CPA.",
    tags: ["Search Ads", "App Campaigns", "Display"],
  },
  {
    icon: Settings,
    title: "GA4 & GTM Setup",
    desc: "Complete analytics stack with conversion tracking, custom events, and server-side Conversions API.",
    tags: ["GA4", "GTM", "FB CAPI"],
  },
  {
    icon: LineChart,
    title: "Campaign Optimization",
    desc: "Lower your cost per acquisition and improve ROAS through continuous data-driven optimization.",
    tags: ["A/B Testing", "Budget Scaling", "CPA Reduction"],
  },
  {
    icon: PieChart,
    title: "Performance Dashboards",
    desc: "Custom Looker Studio & GA4 dashboards for real-time performance visibility and reporting.",
    tags: ["Looker Studio", "Live Reports", "KPI Tracking"],
  },
  {
    icon: Zap,
    title: "Ads Account Audit",
    desc: "Find what's wasting your budget with a comprehensive account review and actionable plan.",
    tags: ["Account Review", "Budget Analysis", "Action Plan"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Reporting",
    desc: "End-to-end analytics setup, custom event tracking, and executive-level reporting dashboards that reveal what's actually driving growth.",
    tags: ["GA4", "Looker Studio", "Custom Dashboards"],
  },
  {
    icon: Brain,
    title: "AI-Powered Growth Strategy",
    desc: "Using AI and data modeling to identify growth opportunities, forecast campaign performance, and build scalable marketing systems.",
    tags: ["AI Tools", "Audience Intelligence", "Forecasting"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative section-divider">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I Can <span className="text-gradient">Do For You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From paid media and analytics to AI-powered strategy — end-to-end growth solutions for modern businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover:animate-pulse-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/[0.08] text-primary/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
