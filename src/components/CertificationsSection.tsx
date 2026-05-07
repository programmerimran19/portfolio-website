import { Award, ExternalLink, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "April 2026",
    expiry: "April 2027",
    certId: "179330811",
    credentialUrl: "https://skillshop.credential.net/ede88aba-bcb1-4566-8e66-b8b1ed3c36dc",
  },
  {
    title: "AI-Powered Shopping Ads Certification",
    issuer: "Google",
    date: "April 2026",
    expiry: "April 2027",
    certId: "179222725",
    credentialUrl: "https://skillshop.credential.net/ff2167ec-ea91-43f7-b999-3b8ae0fb91b2",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "April 2026",
    expiry: "April 2027",
    certId: "179227342",
    credentialUrl: "https://skillshop.credential.net/f1fab758-b58b-4d8f-a653-6a5671bf4354",
  },
];

const researchPapers = [
  {
    title: "Prostate Cancer Detection from MRI Using Efficient Feature Extraction with Transfer Learning",
    journal: "Prostate Cancer (Wiley), 2024",
    description: "A review on deep learning and transfer learning approaches for prostate cancer detection using MRI imaging.",
    url: "https://onlinelibrary.wiley.com/doi/10.1155/2024/1588891",
  },
  {
    title: "Generative Adversarial Networks for Data Augmentation",
    journal: "Data Driven Approaches on Medical Imaging (Springer), 2023",
    description: "A book chapter on leveraging GANs for augmenting medical imaging datasets to improve model performance.",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-47772-0_8",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 relative section-divider">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Credentials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Google-certified expertise backed by peer-reviewed academic publications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {certifications.map((cert) => (
            <a
              key={cert.certId}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
              <div className="space-y-1 text-xs text-muted-foreground mb-4">
                <p>Issued: {cert.date}</p>
                <p>Expires: {cert.expiry}</p>
                <p className="font-mono text-[11px]">ID: {cert.certId}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group-hover:underline">
                Verify Credential <ExternalLink size={12} />
              </span>
            </a>
          ))}
        </div>

        {/* Research Papers */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-primary" />
            Published Research
          </h3>
          <div className="space-y-4">
            {researchPapers.map((paper, i) => (
              <a
                key={i}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl glass flex items-start gap-4 hover:border-primary/30 transition-all block"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-display font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors leading-snug">
                    {paper.title}
                  </h4>
                  <p className="text-sm text-primary mb-1">{paper.journal}</p>
                  <p className="text-xs text-muted-foreground mb-2">{paper.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium group-hover:underline">
                    Read Paper <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
