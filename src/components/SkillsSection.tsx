const skillCategories = [
  {
    title: "Advertising Platforms",
    skills: ["Meta Ads Manager", "Google Ads", "Instagram Ads", "Facebook Pixel", "Facebook SDK", "Google Display"],
  },
  {
    title: "Analytics & Tracking",
    skills: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Facebook CAPI", "Microsoft Clarity", "Data Studio"],
  },
  {
    title: "Strategy & Optimization",
    skills: ["A/B Testing", "Audience Segmentation", "Budget Optimization", "Retargeting", "Funnel Analysis", "CPA Reduction"],
  },
  {
    title: "Tools & Technology",
    skills: ["Conversions API", "Server-Side Tracking", "Marketing Automation", "Data Analysis", "Business Intelligence", "Growth Analytics"],
  },
  {
    title: "AI & Automation",
    skills: ["ChatGPT / Claude AI", "AI Audience Insights", "Predictive Analytics", "Automated Reporting", "AI Creative Analysis", "Prompt Engineering"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative section-divider">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tools & <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The platforms, tools, and AI systems I use to deliver data-driven growth across every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl glass">
              <h3 className="font-display font-semibold text-xs text-primary mb-5 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
