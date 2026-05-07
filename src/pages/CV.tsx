import { useState } from "react";
import { BarChart2, Briefcase, Download, Eye, Upload, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase, CV_BUCKET } from "@/lib/supabase";

// ─── CV metadata ───────────────────────────────────────────────────────────────
// Upload the actual PDF files to Supabase Dashboard > Storage > cv-files bucket:
//   • analytics-cv.pdf       → Analytics & Tracking CV
//   • business-analyst-cv.pdf → Business Analyst CV

const CV_CONFIGS = [
  {
    key: "analytics",
    filename: "analytics-cv.pdf",
    title: "Analytics & Tracking Specialist",
    subtitle: "GA4 · GTM · FB CAPI · Server-Side",
    description:
      "Best for analytics, tracking setup, MarTech, and data infrastructure roles.",
    tags: ["GA4", "GTM", "FB CAPI", "Looker Studio", "Server-Side"],
    Icon: BarChart2,
    successMsg: "✓ Analytics CV updated successfully!",
  },
  {
    key: "business",
    filename: "business-analyst-cv.pdf",
    title: "Business Analyst",
    subtitle: "eCommerce · SaaS · Agile · Product",
    description:
      "Best for BA, product analyst, and eCommerce platform roles.",
    tags: ["Agile", "SRS", "WBS", "eCommerce", "Stakeholder Mgmt"],
    Icon: Briefcase,
    successMsg: "✓ Business Analyst CV updated successfully!",
  },
] as const;

type CVKey = (typeof CV_CONFIGS)[number]["key"];
type UploadState = "idle" | "uploading" | "success" | "error";

// ─── Component ─────────────────────────────────────────────────────────────────

const CV = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewLabel, setPreviewLabel] = useState<string>("");
  const [iframeLoading, setIframeLoading] = useState(false);
  const [uploadState, setUploadState] = useState<Record<CVKey, UploadState>>({
    analytics: "idle",
    business: "idle",
  });

  const getPublicUrl = (filename: string) => {
    const { data } = supabase.storage.from(CV_BUCKET).getPublicUrl(filename);
    return data.publicUrl;
  };

  const handlePreview = (filename: string, title: string) => {
    setIframeLoading(true);
    setPreviewLabel(title);
    setPreviewUrl(getPublicUrl(filename));
    // Scroll to preview area
    setTimeout(() => {
      document.getElementById("cv-preview")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleDownload = async (filename: string) => {
    const url = getPublicUrl(filename);
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank");
    }
  };

  const handleUpload = async (
    file: File,
    filename: string,
    key: CVKey
  ) => {
    setUploadState((prev) => ({ ...prev, [key]: "uploading" }));
    const { error } = await supabase.storage
      .from(CV_BUCKET)
      .upload(filename, file, { upsert: true, contentType: "application/pdf" });
    setUploadState((prev) => ({
      ...prev,
      [key]: error ? "error" : "success",
    }));
  };

  // Shared nav link class to match site style
  const linkClass =
    "text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-primary after:transition-all hover:after:w-full";

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="container max-w-5xl">

          {/* ── Section 1: Header ─────────────────────────────────────────── */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              MY RESUMES
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Download My{" "}
              <span className="text-gradient">CV</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Choose the version that matches your hiring need. Preview online or
              download as PDF.
            </p>
          </div>

          {/* ── Section 2: CV Cards ───────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {CV_CONFIGS.map((cv) => (
              <div key={cv.key} className="glass rounded-2xl p-8 flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center mb-5">
                  <cv.Icon size={22} className="text-primary" />
                </div>

                {/* Title & subtitle */}
                <h2 className="font-display text-xl font-bold mb-1">{cv.title}</h2>
                <p className="text-primary text-sm font-medium mb-3">{cv.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                  {cv.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePreview(cv.filename, cv.title)}
                    className="flex-1 inline-flex items-center justify-center gap-2 glass text-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:border-primary/30 transition-all"
                  >
                    <Eye size={15} />
                    Preview CV
                  </button>
                  <button
                    onClick={() => handleDownload(cv.filename)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Download size={15} />
                    Download PDF ↓
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Section 3: PDF Preview ────────────────────────────────────── */}
          <div id="cv-preview" className="glass rounded-2xl p-6 mb-12">
            {!previewUrl ? (
              <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                Click &quot;Preview CV&quot; on either card above to view it here
              </div>
            ) : (
              <>
                {/* Preview header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm font-medium">
                    Previewing: {previewLabel}
                  </span>
                  <button
                    onClick={() => setPreviewUrl(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close preview"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Loading spinner */}
                {iframeLoading && (
                  <div className="flex items-center justify-center h-20 mb-2">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* PDF iframe */}
                <iframe
                  key={previewUrl}
                  src={previewUrl}
                  className="w-full rounded-xl border border-border/50 h-[500px] md:h-[700px]"
                  title={previewLabel}
                  onLoad={() => setIframeLoading(false)}
                />
              </>
            )}
          </div>

          {/* ── Section 4: Upload ─────────────────────────────────────────── */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-1">Update CV Files</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Upload new versions to replace the current files.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {CV_CONFIGS.map((cv) => (
                <div
                  key={cv.key}
                  className="rounded-xl border border-border/50 p-5 bg-background/30"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <cv.Icon size={16} className="text-primary" />
                    <p className="font-medium text-sm">{cv.title}</p>
                  </div>

                  <label className="block">
                    <input
                      type="file"
                      accept="application/pdf"
                      className="block w-full text-sm text-muted-foreground
                        file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0
                        file:text-sm file:font-medium file:bg-primary/10 file:text-primary
                        hover:file:bg-primary/20 cursor-pointer mb-3"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleUpload(file, cv.filename, cv.key as CVKey);
                      }}
                    />
                  </label>

                  {/* Upload status */}
                  {uploadState[cv.key as CVKey] === "uploading" && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin inline-block" />
                      Uploading...
                    </p>
                  )}
                  {uploadState[cv.key as CVKey] === "success" && (
                    <p className="text-sm text-primary">{cv.successMsg}</p>
                  )}
                  {uploadState[cv.key as CVKey] === "error" && (
                    <p className="text-sm text-red-400">
                      ✕ Upload failed. Check your Supabase bucket policy and try again.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CV;
