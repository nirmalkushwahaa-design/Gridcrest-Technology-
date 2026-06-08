import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";

type NewsItem = {
  slug: string;
  date: string;
  category: string;
  headline: string;
  summary: string;
};

const NEWS: NewsItem[] = [
  {
    slug: "gridcrest-expands-hes-platform",
    date: "May 20, 2026",
    category: "Product",
    headline: "GridCrest expands HES platform to support 25 million endpoints",
    summary:
      "New horizontally scalable architecture brings sub-second telemetry to one of the largest deployments in South Asia.",
  },
  {
    slug: "kaynes-manufacturing-partnership",
    date: "May 08, 2026",
    category: "Partnership",
    headline: "Deepened partnership with Kaynes adds two new manufacturing lines",
    summary:
      "Additional capacity dedicated to smart meter and communication-module assembly comes online in Q3 2026.",
  },
  {
    slug: "smart-program-go-live",
    date: "Apr 22, 2026",
    category: "Deployment",
    headline: "Statewide smart-metering program goes live ahead of schedule",
    summary:
      "Joint utility-government initiative reaches 1.2 million live endpoints, with MDM integration validated end-to-end.",
  },
  {
    slug: "iso-27001-recertification",
    date: "Apr 03, 2026",
    category: "Compliance",
    headline: "GridCrest cloud platform receives ISO 27001:2022 recertification",
    summary:
      "Renewed certification covers HES, MDM and analytics workloads operated for utility customers.",
  },
  {
    slug: "leadership-hire",
    date: "Mar 18, 2026",
    category: "Company",
    headline: "Veteran utilities executive joins GridCrest as Chief Commercial Officer",
    summary:
      "Three decades of experience across DISCOM modernization and AMI rollouts in India and Southeast Asia.",
  },
  {
    slug: "open-protocol-contribution",
    date: "Mar 02, 2026",
    category: "Standards",
    headline: "GridCrest contributes reference implementation to open smart-grid protocol",
    summary:
      "Released under a permissive license to accelerate interoperability across vendors and utilities.",
  },
];

export const Route = createFileRoute("/insight/news")({
  head: () => ({
    meta: [
      { title: "News â€” GridCrest" },
      {
        name: "description",
        content:
          "The latest press releases, deployments and company milestones from GridCrest.",
      },
      { property: "og:title", content: "News â€” GridCrest" },
      { property: "og:description", content: "The latest from GridCrest." },
      { property: "og:url", content: "https://gridcrest-canvas-craft.lovable.app/insight/news" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://gridcrest-canvas-craft.lovable.app/insight/news" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-surface-cyan/40">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Insight
          </div>
          <h1 className="reveal-text mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-3xl">
            News &amp; press from GridCrest
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Product launches, large-format deployments, partnerships and company milestones.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8 space-y-4">
          {NEWS.map((n) => (
            <article
              key={n.slug}
              className="reveal-area group rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>{n.date}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-accent text-[10px]">
                  {n.category}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                {n.headline}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.summary}</p>
              <Link
                to="/insight/news"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[var(--brand-navy-hover)] transition-colors"
              >
                Read release
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>

        <aside className="mt-8 lg:mt-0 lg:col-span-4">
          <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-surface-cyan to-surface-lavender p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Media
            </div>
            <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
              Press &amp; media inquiries
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              For interviews, briefings, photography or background on GridCrest, reach out to our
              communications team.
            </p>
            <a
              href="mailto:press@gridcrest.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-navy)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-navy-hover)]"
            >
              <Mail className="h-4 w-4" /> press@gridcrest.com
            </a>
            <div className="mt-6 border-t border-border/50 pt-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Brand assets
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Logos, photography and brand guidelines available on request.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <CtaBanner
        eyebrow="STAY UPDATED"
        title="Be the first to hear what we're building"
        description="Subscribe to receive new releases and program announcements directly."
        primary={{ label: "Subscribe", to: "/contact" }}
        secondary={{ label: "Talk to our team", to: "/contact" }}
      />
    </main>
  );
}
