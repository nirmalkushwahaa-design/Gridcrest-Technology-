import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

const FEATURED: Article = {
  slug: "ai-grid-orchestration",
  title: "From Smart Meters to AI-Orchestrated Grids: The Next Decade",
  excerpt:
    "How machine learning, digital twins and real-time telemetry are quietly reshaping the way utilities run distribution networks — and what operators need to do now to stay ahead.",
  category: "Perspective",
  date: "May 12, 2026",
  readTime: "9 min read",
};

const ARTICLES: Article[] = [
  {
    slug: "interoperability-matters",
    title: "Why Interoperability Is the Real Smart-Meter Battle",
    excerpt:
      "Single-vendor lock-in is the silent tax on every utility modernization program. A look at how open standards change the economics.",
    category: "Engineering",
    date: "May 02, 2026",
    readTime: "6 min read",
  },
  {
    slug: "digital-twin-distribution",
    title: "Digital Twins for Distribution: Beyond the Buzzword",
    excerpt:
      "A practical framework for utilities evaluating digital twin platforms — what to measure, what to ignore, and what to pilot first.",
    category: "Insight",
    date: "Apr 24, 2026",
    readTime: "7 min read",
  },
  {
    slug: "dlms-cosem-deep-dive",
    title: "A Field Engineer's Guide to DLMS / COSEM",
    excerpt:
      "Protocol fundamentals, common pitfalls, and the integration patterns that keep HES deployments stable at scale.",
    category: "Engineering",
    date: "Apr 11, 2026",
    readTime: "11 min read",
  },
  {
    slug: "demand-response-india",
    title: "Demand Response in India: What's Actually Working",
    excerpt:
      "Lessons from three large-format DR programs and what they tell us about the next wave of grid flexibility.",
    category: "Industry",
    date: "Mar 30, 2026",
    readTime: "8 min read",
  },
  {
    slug: "cyber-hardening-amr",
    title: "Cyber-Hardening AMR Networks Without Slowing Rollout",
    excerpt:
      "A pragmatic threat model for advanced metering infrastructure — and the controls that actually move the needline.",
    category: "Security",
    date: "Mar 18, 2026",
    readTime: "10 min read",
  },
  {
    slug: "manufacturing-resilience",
    title: "Manufacturing Resilience: Building the Backbone of Smart Energy",
    excerpt:
      "Behind the scenes of the Kaynes-backed manufacturing footprint that powers GridCrest hardware shipments.",
    category: "Company",
    date: "Mar 04, 2026",
    readTime: "5 min read",
  },
];

export const Route = createFileRoute("/insight/articles")({
  head: () => ({
    meta: [
      { title: "Insights — GridCrest" },
      {
        name: "description",
        content:
          "Long-form perspectives on smart metering, grid intelligence and the modernization of energy infrastructure.",
      },
      { property: "og:title", content: "Insights — GridCrest" },
      {
        property: "og:description",
        content: "Perspectives on the future of energy infrastructure from the GridCrest team.",
      },
      {
        property: "og:url",
        content: "https://gridcrest-canvas-craft.lovable.app/insight/articles",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://gridcrest-canvas-craft.lovable.app/insight/articles",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-surface-cyan/40">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Insight
          </div>
          <h1 className="reveal-text mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-3xl">
            Insights &amp; perspectives on the modern grid
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Long-form writing from the GridCrest team and our partners — on grid intelligence,
            smart metering, manufacturing, and the policy shaping it all.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="reveal-area grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-surface-cyan to-surface-lavender" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
              Featured · {FEATURED.category}
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {FEATURED.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{FEATURED.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {FEATURED.date}
              </span>
              <span>{FEATURED.readTime}</span>
            </div>
            <Link
              to="/insight/articles"
              className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground hover:text-[#165AA3] transition-colors"
            >
              Read article
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.slug}
              className="reveal-area hover-lift overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-surface-cyan to-surface-lavender" />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {a.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
                <Link
                  to="/insight/articles"
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[#165AA3] transition-colors"
                >
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {["1", "2", "3", "→"].map((p, i) => (
            <button
              key={p}
              className={`h-9 w-9 rounded-full border text-sm transition-colors ${
                i === 0
                  ? "border-[#1A3A5C] bg-[#1A3A5C] text-white"
                  : "border-border text-muted-foreground hover:border-[#165AA3] hover:text-[#165AA3]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      <CtaBanner
        eyebrow="STAY IN THE LOOP"
        title="Get new insights in your inbox"
        description="One concise email a month with our newest writing on smart energy infrastructure. No spam, ever."
        primary={{ label: "Subscribe", to: "/contact" }}
        secondary={{ label: "Talk to our team", to: "/contact" }}
      />
    </main>
  );
}
