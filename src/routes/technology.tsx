import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import heroTechnology from "@/assets/hero-technology.svg";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers,
  LineChart,
  Lock,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Built for the Future of Intelligent Grids" },
      {
        name: "description",
        content:
          "Smart meters, communication, HES, MDM, AI, cloud and edge — the GridCrest technology stack.",
      },
      { property: "og:title", content: "Technology — GridCrest" },
      {
        property: "og:description",
        content:
          "Hardware, software, analytics and scalable infrastructure — one unified ecosystem.",
      },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Pillars />
      <Architecture />
      <Interop />
      <Security />
      <Intelligence />
      <CloudEdge />
      <Metrics />
      <CtaBanner
        eyebrow="TECHNOLOGY"
        title="Ready to Deploy Smarter Grid Technology?"
        description="Talk to the GridCrest engineering team about your utility's requirements — from smart metering to full AMI deployment."
        primary={{ label: "Talk to Our Team", to: "/contact" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}

function Hero() {
  return (
    <PageHero
      eyebrow="Technology"
      title="Built for the future of"
      titleAccent="intelligent grids."
      description="From smart meters to grid intelligence platforms, GridCrest combines hardware, software, analytics and scalable infrastructure into one unified ecosystem."
      primary={{ label: "Explore Architecture", href: "#architecture" }}
      secondary={{ label: "View Solutions", to: "/solutions" }}
      image={heroTechnology}
      imageAlt="GridCrest Technology Stack"
    />
  );
}

function Pillars() {
  const pillars = [
    { icon: Gauge, title: "Smart meter intelligence", body: "Edge-capable measurement and control across electricity, water and gas." },
    { icon: Network, title: "Communication infrastructure", body: "RF mesh, cellular and PLC — engineered for distributed networks." },
    { icon: Server, title: "HES & MDM platforms", body: "Acquisition, validation and management of high-volume utility data." },
    { icon: BrainCircuit, title: "AI & analytics engine", body: "Predictive insight, anomaly detection and digital twin simulation." },
    { icon: Workflow, title: "Grid operations intelligence", body: "Outages, voltage, DR events and distribution-level decisioning." },
    { icon: Cloud, title: "Cloud & edge computing", body: "Run workloads where they make sense — substation, DC or cloud." },
    { icon: ShieldCheck, title: "Cybersecurity framework", body: "Roots of trust, end-to-end encryption and compliance controls." },
    { icon: Layers, title: "Interoperability standards", body: "DLMS / COSEM, IEC 61968 / 61970, CIM and open APIs." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Technology pillars
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            What we engineer for.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-base font-display font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    { icon: Cpu, label: "Smart meters", note: "Field edge devices" },
    { icon: Network, label: "Communication", note: "RF mesh · cellular · PLC" },
    { icon: Server, label: "HES", note: "Acquisition & control" },
    { icon: Database, label: "MDM", note: "Validation · estimation · editing" },
    { icon: BrainCircuit, label: "Analytics engine", note: "AI · forecasting · digital twin" },
    { icon: LineChart, label: "Grid operations centre", note: "OMS · DMS · SGOC" },
    { icon: Cloud, label: "Cloud infrastructure", note: "Hybrid · scalable" },
  ];
  return (
    <section id="architecture" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            System architecture
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            End-to-end digital grid flow.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every layer — from silicon to dashboard — engineered to interoperate at
            national scale.
          </p>
        </div>
        <div className="mt-12 space-y-3">
          {layers.map((l, i) => (
            <div
              key={l.label}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-mono text-muted-foreground">L{i + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <l.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-display font-bold">{l.label}</div>
                  <div className="text-sm text-muted-foreground">{l.note}</div>
                </div>
              </div>
              <span className="hidden text-xs font-semibold uppercase tracking-widest text-muted-foreground md:inline">
                Production-ready
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Interop() {
  const items = ["DLMS / COSEM", "IEC 61968 / 61970", "CIM", "MQTT", "REST · gRPC", "OAuth 2.0 · OIDC", "Kafka", "Webhooks"];
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Interoperability & standards
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Plugs into the utility you already run.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Standards-aligned and integration-friendly — connect to billing, GIS, SCADA,
            outage, customer and analytics systems without rip and replace.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/60 to-surface-lavender/60 p-8">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {items.map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-background/85 p-4 text-center text-xs font-semibold uppercase tracking-widest text-foreground/80 backdrop-blur"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  const items = [
    { icon: Lock, title: "Encryption", body: "End-to-end encryption from meter to cloud." },
    { icon: ShieldCheck, title: "Compliance", body: "Aligned with critical infrastructure protection frameworks." },
    { icon: Network, title: "Secure communication", body: "Mutual TLS, signed firmware and rotating keys." },
    { icon: LineChart, title: "Monitoring & diagnostics", body: "Telemetry, audit trails and reliability engineering." },
  ];
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Cybersecurity & reliability
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Engineered to protect critical infrastructure.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((i) => (
            <article key={i.title} className="rounded-3xl border border-border bg-card p-6">
              <i.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-base font-display font-bold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intelligence() {
  const caps = [
    "Predictive analytics",
    "Demand forecasting",
    "Fault detection",
    "Digital twin",
    "Grid optimisation",
    "Loss & theft detection",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            AI, analytics & digital twin
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Operational intelligence, built in.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Turn grid data into action — from anomaly detection and forecasting to
            simulation and optimisation across the network.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3">
            {caps.map((c) => (
              <div key={c} className="rounded-2xl border border-border bg-card p-5 text-sm font-medium">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CloudEdge() {
  return (
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Cloud & edge infrastructure
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Deploy at any scale.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { icon: Cloud, title: "Cloud deployment", body: "Multi-region, elastic and managed." },
            { icon: Server, title: "Hybrid architecture", body: "Run inside your DC where required." },
            { icon: Cpu, title: "Edge intelligence", body: "Substation and meter-level compute." },
          ].map((i) => (
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

function Metrics() {
  const metrics = [
    { value: "Millions", label: "Endpoints supported" },
    { value: "99.99%", label: "Platform uptime target" },
    { value: "<1s", label: "Command response" },
    { value: "24×7", label: "Operations capability" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Technology impact
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Capability translated into outcomes.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-3xl border border-border bg-card p-7">
              <div className="text-4xl font-display font-bold">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

