const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "$50K+", label: "Ad Spend Managed" },
  { value: "652+", label: "Campaigns Analyzed" },
  { value: "220K+", label: "App Downloads" },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-20 relative section-divider">
      <div className="container">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center relative">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
