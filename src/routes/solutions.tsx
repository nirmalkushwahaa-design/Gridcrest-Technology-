import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  Gauge,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions â€” Integrated Digital Grid for Modern Utilities" },
      {
        name: "description",
        content:
          "Smart metering, HES, MDM and integrated utility platforms â€” one connected ecosystem from GridCrest.",
      },
      { property: "og:title", content: "Solutions â€” GridCrest" },
      {
        property: "og:description",
        content:
          "From intelligent smart metering to advanced data platforms and grid operations.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <OverviewStrip />
      <SolutionCards />
      <Architecture />
      <WhyGridcrest />
      <Impact />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Gridcrest Solutions
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
            Integrated digital grid solutions for{" "}
            <span style={{ color: "var(--brand-cyan)" }}>
              modern utilities.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From intelligent smart metering to advanced data platforms and grid
            operations, GridCrest delivers connected technologies that enable scalable,
            efficient, and future-ready utility infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" className="btn-primary">
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#architecture" className="btn-secondary">
              View Architecture
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <EcosystemArt />
        </div>
      </div>
    </section>
  );
}

function EcosystemArt() {
  const nodes = [
    { icon: Gauge, label: "Meters" },
    { icon: Network, label: "HES" },
    { icon: Database, label: "MDM" },
    { icon: BrainCircuit, label: "Intelligence" },
  ];
  return (
    <div className="relative h-full min-h-[360px] rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/60 to-surface-lavender/60 p-6">
      <div className="absolute inset-0 m-6 rounded-2xl border border-dashed border-border/70" />
      <div className="relative grid h-full grid-cols-2 gap-4">
        {nodes.map((n) => (
          <div
            key={n.label}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background/85 p-6 backdrop-blur"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
              <n.icon className="h-6 w-6" />
            </span>
            <div className="mt-4 text-sm font-semibold">{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverviewStrip() {
  const flow = ["Smart Metering", "Head End System", "Meter Data Management", "Integrated Platform"];
  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            One ecosystem
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            One ecosystem. Multiple intelligent layers.
          </h2>
          <p className="mt-5 text-muted-foreground">
            GridCrest solutions are designed to work together seamlessly â€” combining
            hardware, communication systems, data intelligence, and operational platforms
            into one connected utility ecosystem.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6">
          {flow.map((f, i) => (
            <div key={f} className="flex flex-1 items-center gap-3">
              <div className="rounded-xl bg-accent/10 px-4 py-3 text-sm font-display font-semibold text-foreground">
                {f}
              </div>
              {i < flow.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCards() {
  const cards = [
    {
      label: "Field Intelligence Layer",
      title: "Smart Metering",
      desc:
        "Advanced smart metering engineered for accurate measurement, remote accessibility and scalable utility deployments.",
      points: [
        "Intelligent energy monitoring",
        "Remote meter operations",
        "Utility-scale deployments",
        "Future-ready infrastructure",
      ],
      to: "/solutions/smart-meters",
      icon: Gauge,
    },
    {
      label: "Communication & Connectivity",
      title: "Head End System (HES)",
      desc:
        "A centralized communication platform that securely connects, monitors and manages millions of field devices in real time.",
      points: [
        "Secure communication",
        "Remote configuration",
        "Device monitoring",
        "Scalable architecture",
      ],
      to: "/solutions/hes",
      icon: Server,
    },
    {
      label: "Data Intelligence Layer",
      title: "Meter Data Management (MDM)",
      desc:
        "Transforming utility data into structured intelligence that enables smarter operations, analytics and decision-making.",
      points: [
        "Data validation",
        "Usage analytics",
        "Reporting intelligence",
        "High-volume processing",
      ],
      to: "/solutions/mdm",
      icon: Database,
    },
    {
      label: "Unified Digital Ecosystem",
      title: "Integrated Utility Platform",
      desc:
        "An integrated platform connecting smart devices, software systems, analytics and operational intelligence into one scalable ecosystem.",
      points: [
        "End-to-end visibility",
        "Interoperability",
        "AI-ready infrastructure",
        "Connected operations",
      ],
      to: "/solutions/architecture",
      icon: Layers,
    },
  ];
  return (
    <section id="solutions" className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Solution areas
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Four premium solution layers.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-6 w-6" />
              </span>
              <div className="mt-6 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <h3 className="mt-2 text-2xl font-display font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> {p}
                  </li>
                ))}
              </ul>
              <Link
                to={c.to}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent group-hover:gap-2.5 transition-all"
              >
                Explore {c.title} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    { tag: "FIELD LAYER", label: "Smart Metering" },
    { tag: "COMMUNICATION LAYER", label: "HES" },
    { tag: "DATA & INTELLIGENCE LAYER", label: "MDM" },
    { tag: "OPERATIONS LAYER", label: "OMS / DMS / SGOC" },
    { tag: "UTILITY DECISION LAYER", label: "Analytics / AI / Monitoring" },
  ];
  const traits = [
    { icon: Workflow, title: "Interoperable by design", body: "Built to integrate across evolving utility environments." },
    { icon: Network, title: "Scalable infrastructure", body: "From regional networks to millions of connected endpoints." },
    { icon: Sparkles, title: "Future-ready architecture", body: "Prepared for advanced analytics, AI and digital grid transformation." },
  ];
  return (
    <section id="architecture" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Ecosystem architecture
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Built as one connected utility ecosystem.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every GridCrest solution is designed to integrate seamlessly across the utility
            value chain â€” enabling connected operations, scalable intelligence and future-ready
            digital infrastructure.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {layers.map((l, i) => (
                <div
                  key={l.tag}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-to-r from-surface-cyan/50 to-surface-lavender/30 p-5"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {l.tag}
                    </div>
                    <div className="mt-1 text-lg font-display font-bold">{l.label}</div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">L{layers.length - i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 lg:col-span-5">
            {traits.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                <t.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-display font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyGridcrest() {
  const items = [
    { icon: Layers, title: "End-to-end capability", body: "Integrated hardware, software and operational platforms under one ecosystem." },
    { icon: ShieldCheck, title: "Utility-scale reliability", body: "Built for high-volume deployments and mission-critical infrastructure." },
    { icon: BrainCircuit, title: "Future-ready innovation", body: "Designed for evolving smart grid, AI and digital utility ecosystems." },
    { icon: Zap, title: "Manufacturing strength", body: "Backed by the engineering and manufacturing ecosystem of Kaynes." },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why GridCrest
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Why utilities choose GridCrest.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((i) => (
            <article key={i.title} className="rounded-3xl border border-border bg-card p-7">
              <i.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-lg font-display font-bold">{i.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const impact = [
    { title: "Operational efficiency", body: "Reduce manual processes through intelligent automation and remote operations." },
    { title: "Grid visibility", body: "Enable real-time monitoring and connected infrastructure intelligence." },
    { title: "Scalable deployments", body: "Support large-scale smart utility modernization initiatives." },
    { title: "Digital transformation", body: "Accelerate the transition toward intelligent utility ecosystems." },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Industry impact
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Delivering visible impact across utility networks.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impact.map((i) => (
            <div key={i.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-lg font-display font-bold">{i.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 text-center lg:p-16"
          style={{ background: "var(--gradient-cta)" }}
        >
          <h2 data-no-reveal className="relative mx-auto max-w-3xl text-balance text-4xl font-display font-bold leading-tight text-white lg:text-5xl">
            Powering the future of intelligent utilities.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Discover how GridCrest enables connected infrastructure, operational intelligence
            and scalable digital transformation for modern utilities.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/technology" className="btn-secondary">
              Explore technologies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
