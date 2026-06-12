import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";
import { FilterChip } from "@/components/ui/Chip";

type UpdateType = "Product" | "Program" | "Partnership";
type Update = {
  id: string;
  date: string;
  type: UpdateType;
  title: string;
  body: string;
};

const UPDATES: Update[] = [
  {
    id: "u-12",
    date: "May 22, 2026",
    type: "Product",
    title: "HES 4.2 released with adaptive polling",
    body: "Adaptive polling cuts WAN traffic by up to 38% on dense deployments while preserving real-time event latency for critical meters.",
  },
  {
    id: "u-11",
    date: "May 14, 2026",
    type: "Program",
    title: "Pilot expanded to two additional DISCOMs",
    body: "Following successful onboarding in the first three circles, the smart-metering pilot now extends to two additional distribution companies.",
  },
  {
    id: "u-10",
    date: "May 02, 2026",
    type: "Partnership",
    title: "New SI partner certified in Southeast Asia",
    body: "Regional systems integrator completes the GridCrest implementation certification program â€” expanding our delivery footprint.",
  },
  {
    id: "u-09",
    date: "Apr 19, 2026",
    type: "Product",
    title: "MDM analytics workbench now in early access",
    body: "Self-serve query interface for utility data teams, with templated KPIs for AT&C losses, voltage profile and outage analytics.",
  },
  {
    id: "u-08",
    date: "Apr 06, 2026",
    type: "Program",
    title: "Operator training program crosses 500 engineers",
    body: "Joint program with our utility partners has now certified over 500 field and control-room engineers on the GridCrest platform.",
  },
  {
    id: "u-07",
    date: "Mar 21, 2026",
    type: "Partnership",
    title: "Joint reference design with leading SoC vendor",
    body: "Co-developed reference design for next-generation communication modules â€” optimized for cost, security and field upgradability.",
  },
];

const FILTERS: ("All" | UpdateType)[] = ["All", "Product", "Program", "Partnership"];

export const Route = createFileRoute("/insight/updates")({
  head: () => ({
    meta: [
      { title: "Updates â€” GridCrest" },
      {
        name: "description",
        content:
          "Product, program and partnership updates from GridCrest â€” what shipped, what's live and what's next.",
      },
      { property: "og:title", content: "Updates â€” GridCrest" },
      {
        property: "og:description",
        content: "Product, program and partnership updates from GridCrest.",
      },
      {
        property: "og:url",
        content: "https://gridcrest-canvas-craft.lovable.app/insight/updates",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://gridcrest-canvas-craft.lovable.app/insight/updates" },
    ],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = filter === "All" ? UPDATES : UPDATES.filter((u) => u.type === filter);

  return (
    <main className="bg-background">
      <section className="border-b border-border bg-surface-cyan/40">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Insight
          </div>
          <h1 className="reveal-text mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-3xl">
            Product, program &amp; partnership updates
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A running log of what's shipped, what's live in the field and the partnerships
            shaping our roadmap.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <FilterChip
              key={f}
              active={filter === f}
              color="navy"
              onClick={() => setFilter(f)}
            >
              {f}
            </FilterChip>
          ))}
        </div>

        <ol className="relative mt-10 border-l border-border pl-6 md:pl-10 space-y-8">
          {visible.map((u) => (
            <li key={u.id} className="reveal-area relative">
              <span className="absolute -left-[33px] md:-left-[49px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-2.5 py-1 font-medium">{u.date}</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold uppercase tracking-wider text-accent">
                  {u.type}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                {u.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner
        eyebrow="ROADMAP"
        title="Want a deeper look at what we're shipping?"
        description="Book a quarterly briefing with our product team for a guided walkthrough of the roadmap."
        primary={{ label: "Request a briefing", to: "/contact" }}
        secondary={{ label: "Explore solutions", to: "/solutions" }}
      />
    </main>
  );
}
