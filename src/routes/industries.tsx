import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { EyebrowChip, NavChip } from "@/components/ui/Chip";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Battery,
  Building2,
  Cpu,
  Factory,
  Gauge,
  Globe,
  Landmark,
  Leaf,
  LineChart,
  Network,
  Shield,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Powering Utilities, Governments & Future Energy" },
      {
        name: "description",
        content:
          "GridCrest delivers scalable smart-grid technologies for utilities, government programs and next-generation digital infrastructure ecosystems.",
      },
      { property: "og:title", content: "Industries — GridCrest" },
      {
        property: "og:description",
        content:
          "Scalable smart-grid technologies for utilities, governments, smart cities and future energy ecosystems.",
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Overview />
      <Utilities />
      <Government />
      <SmartCities />
      <FutureEnergy />
      <Impact />
      <CtaBanner
        eyebrow="GET STARTED"
        title="Building the Next Generation of Intelligent Infrastructure."
        description="Partner with GridCrest to modernise utilities, infrastructure systems and future-ready energy ecosystems."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}

/* ---------- 4.1 Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 70% 30%, black, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <EyebrowChip><Globe className="h-3.5 w-3.5 text-accent" /> Industries</EyebrowChip>
          <h1 className="mt-6 text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
            Powering industries through{" "}
            <span style={{ color: "var(--brand-cyan)" }}>
              intelligent grid infrastructure.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            GridCrest delivers scalable smart-grid technologies for utilities, government
            programs and next-generation digital infrastructure ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to our team
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <WorldGrid />
        </div>
      </div>
    </section>
  );
}

function WorldGrid() {
  return (
    <div className="relative rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/60 to-surface-lavender/60 p-8 shadow-[var(--shadow-card)]">
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Live infrastructure map
      </div>
      <div className="relative mt-6 aspect-square overflow-hidden rounded-2xl border border-border bg-background/70">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.13 200 / 0.6), transparent 30%), radial-gradient(circle at 60% 60%, oklch(0.62 0.18 290 / 0.5), transparent 35%), radial-gradient(circle at 80% 25%, oklch(0.78 0.13 200 / 0.5), transparent 25%)",
          }}
        />
        {[
          { t: "22%", l: "18%" },
          { t: "55%", l: "62%" },
          { t: "28%", l: "78%" },
          { t: "70%", l: "30%" },
          { t: "40%", l: "45%" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_oklch(0.62_0.18_290/0.25)]"
            style={{
              top: p.t,
              left: p.l,
              animation: `pulse-soft 2.2s ${i * 0.4}s ease-in-out infinite`,
            }}
          />
        ))}
        <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border bg-background/85 p-3 backdrop-blur">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">5 active programs</span>
            <span className="inline-flex items-center gap-1.5 text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 4.2 Overview ---------- */
function Overview() {
  const cards = [
    {
      icon: Zap,
      title: "Utilities & Power Distribution",
      body: "Smart metering, grid intelligence, analytics and scalable operational platforms for modern utility transformation.",
      stat: "10M+ endpoints",
    },
    {
      icon: Landmark,
      title: "Government & National Infrastructure",
      body: "Reliable, scalable platforms for public-sector modernization and nationwide smart-grid initiatives.",
      stat: "Multi-state ready",
    },
    {
      icon: Building2,
      title: "Smart Cities & Urban Infrastructure",
      body: "Integrated digital infrastructure for connected cities, intelligent energy management and operational visibility.",
      stat: "Edge to cloud",
    },
    {
      icon: Leaf,
      title: "Future Energy Ecosystems",
      body: "Built for EV infrastructure, renewable integration and the digital grid operations of tomorrow.",
      stat: "AI-native",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sectors we support
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Industries we support.
          </h2>
          <p className="mt-4 text-muted-foreground">
            GridCrest technologies are designed to support large-scale infrastructure
            modernization — across power distribution, smart governance and digital
            energy transformation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-display font-bold">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.body}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                  {c.stat}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4.3 Utilities ---------- */
function Utilities() {
  const items = [
    {
      icon: Gauge,
      title: "Scalable Smart Metering",
      body: "Support deployments across millions of connected endpoints with reliable data acquisition and operational consistency.",
    },
    {
      icon: BarChart3,
      title: "Grid Visibility",
      body: "Real-time monitoring, analytics and actionable intelligence across distribution networks.",
    },
    {
      icon: LineChart,
      title: "Operational Efficiency",
      body: "Reduce outages, improve response times and optimize utility workflows through integrated digital systems.",
    },
    {
      icon: Network,
      title: "Integrated Platforms",
      body: "Connect hardware, communication systems and software platforms within a unified operational ecosystem.",
    },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Utilities
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Built for modern utilities.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Utilities need more than smart meters. They need intelligent infrastructure
            that improves visibility, scalability, reliability and long-term grid
            performance.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-background p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Control room
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-muted-foreground">
              {["Load", "Outages", "Voltage", "DR events", "Tamper", "Comms"].map((m) => (
                <div key={m} className="rounded-lg border border-border bg-card px-2 py-2 font-semibold">
                  {m}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {[40, 65, 55, 80, 45, 70, 60, 90, 75, 55, 85, 95].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map((i) => (
              <article
                key={i.title}
                className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <i.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-display font-bold">{i.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4.4 Government ---------- */
function Government() {
  const blocks = [
    {
      icon: Globe,
      title: "Nationwide Scale Readiness",
      body: "Architected for high-volume deployments and distributed infrastructure environments across regions and states.",
    },
    {
      icon: Network,
      title: "Standards & Interoperability",
      body: "Built with ecosystem integration in mind — supporting evolving smart-grid architectures and industry protocols.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable Operations",
      body: "System reliability, secure infrastructure practices and operational resilience for critical environments.",
    },
    {
      icon: Cpu,
      title: "Future-Ready Infrastructure",
      body: "Designed to evolve alongside emerging grid technologies and intelligent infrastructure initiatives.",
    },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Government & smart programs
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Supporting national infrastructure transformation.
          </h2>
          <p className="mt-5 text-muted-foreground">
            GridCrest solutions are designed to align with large-scale modernization
            programs that demand reliability, interoperability, scalability and long-term
            operational continuity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blocks.map((b, i) => (
            <article
              key={b.title}
              className="relative rounded-3xl border border-border bg-card p-7"
            >
              <div className="text-xs font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <b.icon className="mt-4 h-6 w-6 text-accent" />
              <h3 className="mt-5 text-lg font-display font-bold">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4.5 Smart Cities ---------- */
function SmartCities() {
  const chips = [
    "Smart Energy Monitoring",
    "Urban Infrastructure Analytics",
    "EV Infrastructure Support",
    "Renewable Energy Integration",
    "Intelligent Operations Centers",
  ];
  return (
    <section className="border-b border-border/60 bg-gradient-to-b from-background to-surface-cyan/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Smart cities & infrastructure
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Enabling smarter urban infrastructure.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From connected energy systems to intelligent infrastructure operations,
            GridCrest helps build digitally connected environments with scalable,
            interoperable technologies.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          {chips.map((c) => (
            <NavChip key={c}>{c}</NavChip>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4.6 Future Energy ---------- */
function FutureEnergy() {
  const features = [
    { icon: Cpu, label: "AI & Analytics Ready" },
    { icon: Network, label: "Digital Grid Operations" },
    { icon: Globe, label: "Cloud & Edge Architecture" },
    { icon: Leaf, label: "Renewable Integration" },
    { icon: Battery, label: "EV Ecosystem Compatibility" },
    { icon: BarChart3, label: "Intelligent Monitoring" },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Future energy ecosystem
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Designed for the future of energy.
          </h2>
          <p className="mt-5 text-muted-foreground">
            GridCrest is building platforms that evolve with the changing energy
            landscape — supporting AI-driven operations, digital twins, advanced
            analytics and intelligent grid ecosystems.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-[var(--shadow-card)]"
              >
                <f.icon className="h-5 w-5 text-accent" />
                <div className="mt-6 text-sm font-semibold">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4.7 Impact ---------- */
function Impact() {
  const stats = [
    { v: "Millions", l: "Smart-meter capabilities" },
    { v: "Large-scale", l: "Infrastructure readiness" },
    { v: "Integrated", l: "Hardware + software expertise" },
    { v: "Advanced", l: "Manufacturing ecosystem" },
  ];
  return (
    <section className="border-b border-border/60 bg-gradient-to-br from-surface-cyan/40 to-surface-lavender/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Deployment impact
            </div>
            <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Visible impact across infrastructure ecosystems.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Factory className="h-3.5 w-3.5 text-accent" /> Backed by Kaynes manufacturing
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl border border-border bg-background p-7">
              <div className="text-4xl font-display font-bold lg:text-5xl">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

