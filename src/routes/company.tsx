import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Cpu,
  Factory,
  Gauge,
  Layers,
  LineChart,
  Network,
  Plus,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "About GridCrest — Building the Digital Backbone of Modern Utilities" },
      {
        name: "description",
        content:
          "GridCrest combines smart metering, scalable software platforms and manufacturing excellence to power the transition to intelligent, data-driven utilities.",
      },
      { property: "og:title", content: "About GridCrest" },
      {
        property: "og:description",
        content:
          "A manufacturing-backed technology company building the digital backbone of modern utilities.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Overview />
      <VisionMission />
      <Leadership />
      <Culture />
      <Kaynes />
      <Metrics />
      <ClosingCTA />
    </main>
  );
}

/* ---------- 1. Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <GridBackdrop />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> About GridCrest
          </span>
          <h1 className="mt-6 text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
            Building the digital backbone of{" "}
            <span style={{ color: "var(--brand-cyan)" }}>
              modern utilities.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            GridCrest delivers integrated smart-grid technologies — intelligent metering,
            digital platforms and scalable grid intelligence — engineered to work as one
            connected system.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Partner with us
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <EcosystemFlow />
        </div>
      </div>
    </section>
  );
}

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(to right, oklch(0.9 0.02 250 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.02 250 / 0.6) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
      }}
    />
  );
}

function EcosystemFlow() {
  const nodes = [
    { label: "Meter", icon: Gauge },
    { label: "HES", icon: Network },
    { label: "MDM", icon: Layers },
    { label: "OMS", icon: LineChart },
    { label: "DMS", icon: Cpu },
    { label: "SGOC", icon: Building2 },
  ];
  return (
    <div className="relative rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/60 to-surface-lavender/60 p-6 shadow-[var(--shadow-card)]">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Live grid ecosystem
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            style={{ animation: `pulse-soft 3s ${i * 0.3}s ease-in-out infinite` }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
              <n.icon className="h-4.5 w-4.5" />
            </span>
            <div>
              <div className="text-sm font-semibold">{n.label}</div>
              <div className="text-[11px] text-muted-foreground">Online</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-2xl border border-dashed border-border bg-background/60 p-4 text-xs text-muted-foreground">
        <span>Meter → HES → MDM → OMS → DMS → SGOC</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Data flowing
        </span>
      </div>
    </div>
  );
}

/* ---------- 2. Company Overview ---------- */
function Overview() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            About GridCrest
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Integrated smart-grid intelligence for the future of utilities.
          </h2>
        </div>
        <div className="space-y-5 text-base text-muted-foreground lg:col-span-7 lg:pt-2">
          <p>
            GridCrest combines advanced smart metering infrastructure, scalable software
            platforms and manufacturing excellence to help utilities transition toward
            intelligent, data-driven energy ecosystems.
          </p>
          <p>
            Built with deep integration across hardware, software, analytics and
            operations, GridCrest enables utilities to scale reliably — from initial
            deployment all the way to full grid intelligence.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <ArchitectureStack />
      </div>
    </section>
  );
}

function ArchitectureStack() {
  const stack = [
    { label: "Smart Metering", icon: Gauge, color: "from-surface-cyan to-transparent" },
    { label: "Communication", icon: Network, color: "from-surface-cyan to-transparent" },
    { label: "HES", icon: Layers, color: "from-surface-lavender to-transparent" },
    { label: "MDM", icon: Layers, color: "from-surface-lavender to-transparent" },
    { label: "OMS / DMS", icon: LineChart, color: "from-surface-lavender to-transparent" },
    { label: "SGOC", icon: Building2, color: "from-surface-lavender to-transparent" },
  ];
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm font-semibold">One connected architecture</div>
        <div className="text-xs text-muted-foreground">Hover a layer to learn more</div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {stack.map((s) => (
          <div
            key={s.label}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b ${s.color} p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]`}
          >
            <s.icon className="h-5 w-5 text-accent" />
            <div className="mt-8 text-sm font-semibold">{s.label}</div>
            <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 3. Vision / Mission / Positioning ---------- */
function VisionMission() {
  const cards = [
    {
      tag: "Vision",
      title: "Vision",
      body: "To accelerate the evolution of intelligent, resilient and sustainable utility infrastructure — globally.",
      icon: Target,
    },
    {
      tag: "Mission",
      title: "Mission",
      body: "To build scalable smart-grid platforms that integrate hardware, software, analytics and manufacturing into one connected ecosystem.",
      icon: Layers,
    },
    {
      tag: "Why GridCrest",
      title: "Positioning",
      body: "A future-ready digital grid company combining deep utility expertise with vertically integrated manufacturing strength.",
      icon: Sparkles,
    },
  ];
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background to-surface-lavender/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Invisible technology.{" "}
            <span className="relative">
              <span style={{ color: "var(--brand-cyan)" }}>
                Visible impact.
              </span>
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-[var(--gradient-cta)] opacity-80"
              />
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                {c.tag}
              </div>
              <c.icon className="mt-4 h-7 w-7 text-foreground/80" />
              <h3 className="mt-5 text-2xl font-display font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.body}</p>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1 bg-[var(--gradient-cta)] opacity-0 transition group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Leadership ---------- */
function Leadership() {
  const team = [
    {
      name: "Ramesh Iyer",
      role: "Chief Executive Officer",
      blurb: "Two decades scaling digital infrastructure across utility programs.",
      initials: "RI",
    },
    {
      name: "Priya Nair",
      role: "Chief Technology Officer",
      blurb: "Architecting AI-driven platforms for grid operations.",
      initials: "PN",
    },
    {
      name: "Arjun Patel",
      role: "Chief Operating Officer",
      blurb: "Manufacturing-led delivery at national scale.",
      initials: "AP",
    },
    {
      name: "Maya Krishnan",
      role: "Chief Product Officer",
      blurb: "Building software utilities trust to run daily operations.",
      initials: "MK",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Leadership
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Leadership driving transformation.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Experienced leaders across energy, manufacturing, software and digital
            infrastructure — shaping the next generation of intelligent utilities.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-40 w-full place-items-center rounded-2xl bg-gradient-to-br from-surface-cyan to-surface-lavender text-3xl font-display font-bold text-foreground/70">
                {p.initials}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <div className="text-sm text-accent">{p.role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
              <button
                aria-label="Expand bio"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-foreground/70 transition group-hover:bg-accent group-hover:text-accent-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Culture & People ---------- */
function Culture() {
  const tiles = [
    { label: "Engineering", h: "h-56" },
    { label: "Factory floor", h: "h-72" },
    { label: "Innovation lab", h: "h-48" },
    { label: "Site visit", h: "h-64" },
    { label: "Operations", h: "h-52" },
    { label: "Team off-site", h: "h-60" },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Culture & People
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            People powering the future grid.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From engineering and manufacturing to innovation and operations, GridCrest is
            built by teams shaping the future of utility transformation.
          </p>
          <Link
            to="/careers"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:gap-2.5 transition-all"
          >
            Life at GridCrest <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="columns-2 gap-4 md:columns-3">
            {tiles.map((t) => (
              <div
                key={t.label}
                className={`mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-cyan/70 to-surface-lavender/70 ${t.h} relative`}
              >
                <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-foreground/60">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Kaynes ---------- */
function Kaynes() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Kaynes ecosystem
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Powered by the Kaynes ecosystem.
          </h2>
          <p className="mt-5 text-muted-foreground">
            GridCrest operates within the broader strength of the Kaynes ecosystem —
            combining advanced electronics manufacturing, semiconductor capabilities and
            large-scale engineering expertise.
          </p>
          <p className="mt-4 text-muted-foreground">
            This integration enables reliability, scalability and long-term execution
            capability across smart-grid deployments.
          </p>
          <a
            href="https://www.kaynestechnology.com"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary mt-7"
          >
            Visit Kaynes <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Relationship
            </div>
            <div className="mt-6 space-y-3">
              {[
                { icon: Factory, label: "Kaynes Manufacturing", note: "Electronics, semiconductors, large-scale engineering" },
                { icon: Layers, label: "GridCrest Platforms", note: "Smart metering, HES, MDM, intelligence" },
                { icon: Building2, label: "Utility Transformation", note: "Reliable, scalable, future-ready deployments" },
              ].map((row, i, arr) => (
                <div key={row.label}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{row.label}</div>
                      <div className="text-xs text-muted-foreground">{row.note}</div>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="my-1 ml-7 h-5 w-px bg-gradient-to-b from-accent/60 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Metrics ---------- */
function Metrics() {
  const stats = [
    { v: "10M+", l: "Smart devices addressable" },
    { v: "Multi-state", l: "Deployment programs" },
    { v: "Integrated", l: "Manufacturing ecosystem" },
    { v: "Future-ready", l: "Grid platforms" },
  ];
  return (
    <section className="border-b border-border/60 bg-gradient-to-br from-surface-cyan/40 to-surface-lavender/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Scale you can verify.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for enterprise-scale deployments — across utilities, governments and
            national infrastructure programs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl border border-border bg-background p-7">
              <div className="text-4xl font-display font-bold text-foreground lg:text-5xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Closing CTA ---------- */
function ClosingCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] p-10 text-center lg:p-16" style={{ background: "var(--gradient-cta)" }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }} aria-hidden />
          <h2 data-no-reveal className="relative mx-auto max-w-3xl text-balance text-4xl font-display font-bold leading-tight text-white lg:text-5xl">
            Ready to build the future grid?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Explore GridCrest's integrated smart-grid solutions and digital utility
            platforms.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact us
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white hover:text-white/80">
              Partner with us <Users className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
