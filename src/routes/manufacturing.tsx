import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Cpu,
  Factory,
  FlaskConical,
  Globe2,
  Layers,
  MapPin,
  Microchip,
  Plane,
  Radar,
  ShieldCheck,
  Sparkles,
  Train,
  Wrench,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing & Ecosystem — Built at Industrial Scale" },
      {
        name: "description",
        content:
          "Advanced manufacturing, precision engineering and the strength of the Kaynes ecosystem.",
      },
      { property: "og:title", content: "Manufacturing & Ecosystem — GridCrest" },
      {
        property: "og:description",
        content: "Built at industrial scale — manufacturing the future of smart grids.",
      },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Capabilities />
      <Scale />
      <Certifications />
      <Kaynes />
      <SupplyChain />
      <MadeInIndia />
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> Manufacturing & Ecosystem
        </span>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
          Manufacturing the future of{" "}
          <span className="bg-[var(--gradient-hero-text)] bg-clip-text text-transparent">
            smart grids.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Powered by advanced manufacturing, precision engineering and the strength of
          the Kaynes ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#capabilities" className="btn-primary">
            See capabilities <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="btn-secondary">
            Talk to manufacturing
          </Link>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    { icon: Factory, title: "Smart meter manufacturing", body: "Mass production lines purpose-built for utility-grade meters." },
    { icon: Layers, title: "Integrated production", body: "PCBA, assembly, calibration and validation in one flow." },
    { icon: FlaskConical, title: "Testing & validation", body: "Functional, environmental and reliability test infrastructure." },
    { icon: Cpu, title: "EMS capabilities", body: "Electronics manufacturing services for the broader ecosystem." },
    { icon: Wrench, title: "Robotics & automation", body: "Automated handling, dispense, optical inspection and SMT." },
    { icon: Microchip, title: "Tool room & moulding", body: "In-house tooling, plastics and precision engineering." },
    { icon: Radar, title: "Reliability engineering", body: "Accelerated life testing and failure analysis labs." },
    { icon: ShieldCheck, title: "Quality systems", body: "Closed-loop quality from incoming parts to outgoing units." },
  ];
  return (
    <section id="capabilities" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Manufacturing capabilities
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Built at industrial scale.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {caps.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <c.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-base font-display font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scale() {
  const sites = [
    { city: "Hyderabad", note: "Primary facility · smart metering" },
    { city: "Kerala", note: "Expansion · integrated production" },
    { city: "West Bengal", note: "Expansion · regional reach" },
  ];
  const stats = [
    { v: "Millions", l: "Annual production capacity" },
    { v: "3", l: "Manufacturing sites" },
    { v: "Pan-India", l: "Deployment readiness" },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Scale & infrastructure
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Deployment-ready scale.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            {sites.map((s) => (
              <div
                key={s.city}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-base font-display font-bold">{s.city}</div>
                    <div className="text-sm text-muted-foreground">{s.note}</div>
                  </div>
                </div>
                <Factory className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-5">
            {stats.map((s) => (
              <div key={s.l} className="rounded-3xl border border-border bg-card p-6">
                <div className="text-3xl font-display font-bold">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = ["ISO 9001", "ISO 14001", "ISO 27001", "IEC 62052", "IEC 62053", "DLMS / COSEM", "BIS", "Safety standards"];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Certifications & quality
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Compliance & reliability, demonstrated.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {certs.map((c) => (
            <div
              key={c}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-semibold"
            >
              <Award className="h-5 w-5 text-accent" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kaynes() {
  const nodes = [
    { icon: Microchip, label: "Semiconductor" },
    { icon: Cpu, label: "PCB manufacturing" },
    { icon: Layers, label: "OSAT" },
    { icon: Wrench, label: "Embedded systems" },
    { icon: Plane, label: "Aerospace & defence" },
    { icon: Train, label: "Railway & industrial" },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            The Kaynes ecosystem
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Backed by an industrial ecosystem.
          </h2>
          <p className="mt-5 text-muted-foreground">
            GridCrest is reinforced by Kaynes' deep manufacturing and engineering
            capability across semiconductors, electronics and mission-critical systems.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {nodes.map((n) => (
            <div
              key={n.label}
              className="rounded-3xl border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <n.icon className="h-6 w-6" />
              </span>
              <div className="mt-4 text-sm font-display font-semibold">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupplyChain() {
  const items = [
    { title: "Vendor partnerships", body: "Long-standing relationships across silicon, sensors and connectivity." },
    { title: "Critical infrastructure capability", body: "Sourcing engineered for mission-critical, high-volume programs." },
    { title: "Mission-critical expertise", body: "Manufacturing for energy, defence, aerospace and industrial sectors." },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Supply chain strength
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            A resilient global supply chain.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((i) => (
            <article key={i.title} className="rounded-3xl border border-border bg-card p-7">
              <Zap className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-lg font-display font-bold">{i.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MadeInIndia() {
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Made in India for the world
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            An Indian manufacturing story, built for global utilities.
          </h2>
          <p className="mt-5 text-muted-foreground">
            From precision engineering to export-ready production lines, GridCrest is
            building the manufacturing backbone of the smart-grid era — at home, and at
            global scale.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-6">
          {[
            { icon: Globe2, label: "Export readiness" },
            { icon: Factory, label: "Industrial scale" },
            { icon: ShieldCheck, label: "Compliance built in" },
            { icon: Sparkles, label: "Future-ready lines" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/60 to-surface-lavender/60 p-6"
            >
              <t.icon className="h-6 w-6 text-foreground/70" />
              <div className="mt-6 text-sm font-display font-bold">{t.label}</div>
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
          <h2 className="relative mx-auto max-w-3xl text-balance text-4xl font-display font-bold leading-tight text-white lg:text-5xl">
            Manufacturing partnerships at scale.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            From smart meters to integrated systems — let's discuss your production
            programme.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to manufacturing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/company/kaynes" className="btn-secondary">
              The Kaynes ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
