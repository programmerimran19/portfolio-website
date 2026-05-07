import { TrendingUp, Users, DollarSign, Download, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    icon: Users,
    badge: "Meta Ads",
    client: "EdTech Brand — Meta Ads",
    subtitle: "Course Sales Campaign | Feb–Apr 2026",
    highlight: "250+ Purchases",
    stats: [
      { label: "Total Spend", value: "$6,347" },
      { label: "Cost/Purchase", value: "$25.36" },
      { label: "Impressions", value: "20M" },
      { label: "People Reached", value: "6.28M" },
      { label: "CTR", value: "2.51%" },
      { label: "Campaigns", value: "80+" },
    ],
    methods: [
      "Audience segmentation — Custom, Lookalike & Interest-based targeting",
      "A/B testing of video & image creatives",
      "Budget optimization — scaling winners, pausing underperformers",
      "Full conversion tracking via Meta Pixel & GA4",
    ],
  },
  {
    icon: DollarSign,
    badge: "Meta Ads",
    client: "Restaurant Brand — Meta Ads",
    subtitle: "F&B Purchase Campaign | Feb–Apr 2026",
    highlight: "282 Purchases",
    stats: [
      { label: "Total Spend", value: "$1,660" },
      { label: "Cost/Purchase", value: "$5.89" },
      { label: "Impressions", value: "4.89M" },
      { label: "Reach", value: "1.91M" },
      { label: "CTR", value: "2.57%" },
      { label: "CPC", value: "$0.07" },
    ],
    methods: [
      "Multiple offer testing — 26pcs bucket, BOGO, Ramadan specials",
      "Engagement + Sales campaign combination for awareness & purchases",
      "Seasonal campaign strategy — Valentine's Day, Ramadan promotions",
      "Retargeting warm audiences for higher purchase intent",
    ],
  },
  {
    icon: Download,
    badge: "Google Ads",
    client: "EdTech Brand — Google Ads",
    subtitle: "App Promotion Campaign | Nov 2025–Apr 2026",
    highlight: "220K+ Downloads",
    stats: [
      { label: "Total Spend", value: "$4,479" },
      { label: "Cost/Install", value: "$0.02" },
      { label: "Total Clicks", value: "511K+" },
      { label: "Impressions", value: "15.83M" },
      { label: "Avg CTR", value: "3.07%" },
      { label: "Avg CPC", value: "$0.01" },
    ],
    methods: [
      "App promotion across Academic & Job categories",
      "Multiple campaign A/B testing — different creatives & audiences",
      "Budget optimization — scaling top performers, pausing low CTR",
      "Campaign structure consolidation for Google's ML optimization",
    ],
  },
  {
    icon: TrendingUp,
    badge: "Analytics",
    client: "EdTech Brand — Analytics Setup",
    subtitle: "GA4 + GTM + FB CAPI | Feb–Apr 2026",
    highlight: "326 Purchases Tracked",
    stats: [
      { label: "Sessions", value: "53K" },
      { label: "Active Users", value: "37K" },
      { label: "Events Tracked", value: "451K" },
      { label: "User Growth", value: "+44.3%" },
      { label: "Custom Events", value: "16+" },
      { label: "Clarity Users", value: "28K+" },
    ],
    methods: [
      "GA4 property with 16+ custom events for full funnel tracking",
      "GTM implementation — Facebook Pixel (client-side + server-side)",
      "FB Conversions API (server-side) for accurate purchase tracking",
      "Looker Studio custom dashboard for real-time reporting",
    ],
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-16 md:py-24 relative section-divider">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Case Studies</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real numbers from real campaigns. Every result here is backed by live dashboard data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="group p-6 sm:p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-subtle flex items-center justify-center">
                    <study.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base">{study.client}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{study.subtitle}</p>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/[0.08] text-primary font-medium">
                  {study.badge}
                </span>
              </div>

              {/* Highlight */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-subtle border border-primary/10">
                <div className="flex items-center gap-2">
                  <ArrowUpRight size={18} className="text-primary" />
                  <span className="font-display text-2xl font-bold text-gradient">{study.highlight}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-2 sm:p-3 rounded-lg bg-background/50">
                    <div className="text-sm sm:text-base font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Methods */}
              <div className="space-y-2">
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">What We Did</span>
                {study.methods.map((method) => (
                  <div key={method} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{method}</span>
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

export default ResultsSection;