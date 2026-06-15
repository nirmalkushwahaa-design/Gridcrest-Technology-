import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import heroInsight from "@/assets/insight-hero.png";

type Tag = "News" | "Blog" | "Highlights";

type InsightItem = {
  slug: string;
  date: string;
  author: string;
  tag: Tag;
  title: string;
  description: string;
  image: string;
};

const INSIGHTS: InsightItem[] = [
  {
    slug: "gridcrest-expands-hes-platform",
    date: "20 May 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "GridCrest expands HES platform to support 25 million endpoints",
    description:
      "New horizontally scalable architecture brings sub-second telemetry to one of the largest smart metering deployments in South Asia, setting a new benchmark for utility-grade reliability.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
  {
    slug: "kaynes-manufacturing-partnership",
    date: "08 May 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "Deepened partnership with Kaynes adds two new manufacturing lines",
    description:
      "Additional capacity dedicated to smart meter and communication-module assembly comes online in Q3 2026, enabling GridCrest to scale to 5 lakh units per month and meet surging demand.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
  },
  {
    slug: "smart-program-go-live",
    date: "22 Apr 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "Statewide smart-metering program goes live ahead of schedule",
    description:
      "Joint utility-government initiative reaches 1.2 million live endpoints, with MDM integration validated end-to-end. The rollout completes 3 weeks ahead of the contractual deadline.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
  },
  {
    slug: "ai-grid-orchestration",
    date: "12 Apr 2026",
    author: "Anantya Intelligence Team",
    tag: "Blog",
    title: "From Smart Meters to AI-Orchestrated Grids: The Next Decade",
    description:
      "How machine learning, digital twins and real-time telemetry are quietly reshaping the way utilities run distribution networks — and what operators need to do now to stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    slug: "iso-27001-recertification",
    date: "03 Apr 2026",
    author: "GridCrest Team",
    tag: "News",
    title: "GridCrest cloud platform receives ISO 27001:2022 recertification",
    description:
      "Renewed certification covers HES, MDM and analytics workloads operated for utility customers, reinforcing GridCrest's commitment to data security and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop",
  },
  {
    slug: "interoperability-matters",
    date: "02 Apr 2026",
    author: "Engineering Team",
    tag: "Blog",
    title: "Why Interoperability Is the Real Smart-Meter Battle",
    description:
      "Single-vendor lock-in is the silent tax on every utility modernization program. A deep look at how open standards change the economics of large-scale AMI deployments across India.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
  },
  {
    slug: "leadership-hire",
    date: "18 Mar 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "Veteran utilities executive joins GridCrest as Chief Commercial Officer",
    description:
      "Three decades of experience across DISCOM modernization and AMI rollouts in India and Southeast Asia. The hire signals GridCrest's intent to accelerate its commercial expansion in 2026.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  },
  {
    slug: "digital-twin-distribution",
    date: "24 Mar 2026",
    author: "Engineering Team",
    tag: "Blog",
    title: "Digital Twins for Distribution: Beyond the Buzzword",
    description:
      "A practical framework for utilities evaluating digital twin platforms — what to measure, what to ignore, and what to pilot first to ensure a return on investment within 18 months.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop",
  },
  {
    slug: "wbsedcl-milestone",
    date: "10 Mar 2026",
    author: "GridCrest Team",
    tag: "Highlights",
    title: "WBSEDCL deployment crosses 500,000 active smart meters",
    description:
      "GridCrest's flagship deployment with West Bengal State Electricity Distribution Company reaches a major milestone, delivering real-time energy data to over half a million households and businesses.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop",
  },
];

const TAG_COLORS: Record<Tag, string> = {
  News: "bg-blue-50 text-blue-700 border border-blue-200",
  Blog: "bg-violet-50 text-violet-700 border border-violet-200",
  Highlights: "bg-amber-50 text-amber-700 border border-amber-200",
};

export const Route = createFileRoute("/insight/")({
  head: () => ({
    meta: [
      { title: "Insight — GridCrest" },
      {
        name: "description",
        content: "News, posts and highlights from GridCrest — the latest in smart metering, grid intelligence and company milestones.",
      },
    ],
  }),
  component: InsightPage,
});

function InsightPage() {
  const [activeTag, setActiveTag] = useState<Tag | "All">("All");

  const filtered = activeTag === "All"
    ? INSIGHTS
    : INSIGHTS.filter((i) => i.tag === activeTag);

  return (
    <main className="bg-background">
      {/* Hero */}
      <PageHero
        eyebrow="Insight"
        title="Ideas, updates &"
        titleAccent="stories."
        description="News, perspectives and milestones from the GridCrest team — covering smart metering, grid intelligence, deployments and company growth."
        image={heroInsight}
        imageAlt="GridCrest Insight"
      />

      {/* Filter chips */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap gap-2">
            {(["All", "News", "Blog", "Highlights"] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              to="/insight/$slug"
              params={{ slug: item.slug }}
              className="group flex flex-col"
            >
              <article className="flex flex-col h-full">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Meta */}
                <div className="mt-4 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground">
                    {item.author} · {item.date}
                  </p>

                  {/* Title */}
                  <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h2>

                  {/* Description — 3 lines */}
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tag */}
                  <div className="mt-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${TAG_COLORS[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        eyebrow="GET IN TOUCH"
        title="Have a story or partnership enquiry?"
        description="Reach out to the GridCrest team for press, collaboration, or to learn more about our deployments across India."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}
