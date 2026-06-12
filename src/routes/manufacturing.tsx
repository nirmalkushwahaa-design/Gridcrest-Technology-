import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";
import { EyebrowChip, FilterChip, LabelChip } from "@/components/ui/Chip";
import IndiaMapInteractive from "@/components/IndiaMapInteractive";
import {
  CheckCircle2,
  Factory,
  Globe2,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  FlaskConical,
  Wrench,
  Package,
  Settings,
} from "lucide-react";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing & Ecosystem — GridCrest" },
      {
        name: "description",
        content:
          "GridCrest combines advanced manufacturing, intelligent engineering, and a robust supply chain ecosystem to deliver reliable smart energy solutions at scale.",
      },
      { property: "og:title", content: "Manufacturing & Ecosystem — GridCrest" },
      {
        property: "og:description",
        content: "Engineering the future of intelligent energy infrastructure.",
      },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <ManufacturingScale />
      <IntegratedEcosystem />
      <ReliabilityEngineering />
      <QualityCompliance />
      <NationwidePresence />
      <KaynesEcosystem />
      <CtaBanner
        eyebrow="PARTNER WITH US"
        title="Partner with a Manufacturing Ecosystem Built for Scale"
        description="Whether you're deploying smart metering programs, modernizing utility operations, or building intelligent infrastructure, GridCrest delivers the manufacturing capability, engineering expertise, and ecosystem support required for long-term success."
        primary={{ label: "Talk to Our Team", to: "/contact" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-white" style={{ minHeight: 450 }}>
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.9 0.02 250 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.02 250 / 0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 20% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.06 200 / 0.3) 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2" style={{ minHeight: 450 }}>
        {/* Left: text */}
        <div className="py-16 lg:py-20">
          <EyebrowChip>Manufacturing &amp; Ecosystem</EyebrowChip>
          <h1 className="mt-6 text-balance text-5xl font-display font-bold leading-[1.05] tracking-tight lg:text-[58px]">
            Engineering the Future of{" "}
            <span style={{ color: "var(--brand-cyan)" }}>
              Intelligent Energy Infrastructure
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            GridCrest combines advanced manufacturing, intelligent engineering, and a robust supply
            chain ecosystem to deliver reliable smart energy solutions at scale. Backed by the
            strength of the Kaynes ecosystem, we integrate hardware, software, and operational
            excellence to support the evolving needs of utilities, governments, and infrastructure
            providers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#manufacturing-scale" className="btn-primary">
              Explore Manufacturing
            </a>
            <a href="https://www.kaynestechnology.co.in/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Kaynes Ecosystem
            </a>
          </div>
        </div>

        {/* Right: placeholder */}
        <div className="hidden lg:flex items-center justify-center py-10">
          <div className="w-full rounded-3xl" style={{ height: 320, background: "#E5E7EB" }} />
        </div>
      </div>
    </section>
  );
}

/* ─── MANUFACTURING AT SCALE ─────────────────────────────────────────────── */
const HIGHLIGHTS = [
  { value: "5 Lakh+", label: "Smart Meters Manufactured Monthly" },
  { value: "10,000+", label: "Meters Produced Daily" },
  { value: "2", label: "Operational Manufacturing Facilities" },
  { value: "2", label: "New Facilities Planned" },
  { value: "2M+", label: "Smart Meter Endpoints Deployed" },
  { value: "2,500+", label: "Professionals Across India" },
];

function ManufacturingScale() {
  return (
    <section id="manufacturing-scale" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Manufacturing at Scale
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Built for Growth.{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Designed for Reliability.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              GridCrest operates advanced manufacturing facilities capable of producing more than
              5 lakh smart electricity meters every month, supporting large-scale deployments
              across India.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our manufacturing operations are designed to meet the highest standards of quality,
              precision, and reliability while ensuring rapid scalability for future demand.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <div className="text-2xl font-display font-bold" style={{ color: "var(--brand-cyan)" }}>
                  {h.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground leading-snug">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── INTEGRATED ECOSYSTEM ───────────────────────────────────────────────── */
const ECOSYSTEM_ITEMS = [
  { icon: Cpu, label: "Electronics Manufacturing Services (EMS)" },
  { icon: Layers, label: "PCB Manufacturing" },
  { icon: Zap, label: "Semiconductor Ecosystem" },
  { icon: Settings, label: "Product Engineering" },
  { icon: FlaskConical, label: "Testing & Validation" },
  { icon: Wrench, label: "Tool Room & Mould Development" },
  { icon: Package, label: "Supply Chain Management" },
];

function IntegratedEcosystem() {
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Integrated Manufacturing Ecosystem
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              More Than{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Meter Manufacturing</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              GridCrest benefits from a deeply integrated manufacturing ecosystem that enables
              greater control over quality, supply chain resilience, and product innovation.
            </p>
            <p className="mt-4 text-muted-foreground">
              Through the Kaynes ecosystem, we leverage capabilities across multiple domains —
              allowing faster innovation, improved reliability, and reduced dependency on
              fragmented supply chains.
            </p>
          </div>

          {/* Right: capability list */}
          <div className="grid gap-3 sm:grid-cols-2">
            {ECOSYSTEM_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RELIABILITY ENGINEERING ────────────────────────────────────────────── */
const RELIABILITY_ITEMS = [
  "Product Reliability Testing",
  "Environmental Validation",
  "Electrical Safety Testing",
  "Performance Verification",
  "Communication Validation",
  "Long-Term Lifecycle Assurance",
];

function ReliabilityEngineering() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Reliability Engineering
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Designed for{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Mission-Critical Infrastructure</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every GridCrest product is engineered to operate reliably in challenging field
              conditions across urban, rural, industrial, and utility environments.
            </p>
            <p className="mt-4 text-muted-foreground">
              The result is infrastructure designed to support utility operations for years while
              adapting to future technology requirements.
            </p>
          </div>

          {/* Right: checklist */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <p className="font-display font-semibold">Our engineering and validation processes focus on:</p>
            </div>
            <ul className="mt-6 space-y-3">
              {RELIABILITY_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── QUALITY & COMPLIANCE ───────────────────────────────────────────────── */
const QUALITY_ITEMS = [
  "Product Certification Compliance",
  "Quality Management Processes",
  "Utility Industry Standards",
  "Metering Standards",
  "Safety & Environmental Requirements",
  "Continuous Quality Monitoring",
];

function QualityCompliance() {
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: checklist */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <p className="font-display font-semibold">Key compliance areas:</p>
            </div>
            <ul className="mt-6 space-y-3">
              {QUALITY_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Quality &amp; Compliance
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Built to{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Global Standards</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              GridCrest products are developed and manufactured in compliance with
              industry-recognised standards and regulatory requirements.
            </p>
            <p className="mt-4 text-muted-foreground">
              Quality is embedded throughout the product lifecycle — from design and manufacturing
              to deployment and field operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── NATIONWIDE PRESENCE ────────────────────────────────────────────────── */
const MFG_SITES    = ["Hyderabad", "Mysuru"];
const PROJECT_LOCS = ["Kerala", "Gujarat"];

function NationwidePresence() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="border-b border-border/60 py-24" style={{ overflow: "clip" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">

          {/* LEFT: text + chips */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Nationwide Presence
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Manufacturing, Engineering &amp; Project Execution{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Across India</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              GridCrest maintains a growing national footprint supporting manufacturing,
              R&amp;D, project execution, and customer engagement.
            </p>

            <div className="mt-10 space-y-7">
              {/* Manufacturing Sites */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#A258DA]" />
                <div>
                  <p className="text-sm font-semibold text-[#A258DA]">Manufacturing Sites</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {MFG_SITES.map((loc) => (
                      <FilterChip
                        key={loc}
                        as="span"
                        active={activeLocation === loc}
                        color="purple"
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                      >
                        {loc}
                      </FilterChip>
                    ))}
                    <LabelChip color="purple">+2 new facilities planned</LabelChip>
                  </div>
                </div>
              </div>

              {/* R&D Centers */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-semibold text-accent">R&amp;D Centers</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: "Kolkata", state: "West Bengal" },
                      { label: "Noida", state: "Uttar Pradesh" },
                    ].map((loc) => (
                      <FilterChip
                        key={loc.label}
                        as="span"
                        active={activeLocation === loc.state}
                        color="cyan"
                        onMouseEnter={() => setActiveLocation(loc.state)}
                        onMouseLeave={() => setActiveLocation(null)}
                      >
                        {loc.label}
                      </FilterChip>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Operations */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#F59E0B]" />
                <div>
                  <p className="text-sm font-semibold text-[#D97706]">Project Operations</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PROJECT_LOCS.map((loc) => (
                      <FilterChip
                        key={loc}
                        as="span"
                        active={activeLocation === loc}
                        color="amber"
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                      >
                        {loc}
                      </FilterChip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: India map */}
          <div className="flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
            <IndiaMapInteractive
              activeLocation={activeLocation}
              onStateHover={(label) => setActiveLocation(label)}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── KAYNES ECOSYSTEM ───────────────────────────────────────────────────── */
const KAYNES_CAPABILITIES = [
  { icon: Zap, label: "Faster Product Development" },
  { icon: Factory, label: "Large-Scale Manufacturing Capability" },
  { icon: Globe2, label: "Supply Chain Stability" },
  { icon: Settings, label: "Engineering Excellence" },
  { icon: Cpu, label: "Future Technology Readiness" },
];

function KaynesEcosystem() {
  return (
    <section id="kaynes-ecosystem" className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Powered by the Kaynes Ecosystem
            </p>
            <h2 className="mt-4 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Manufacturing Strength Behind{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Every GridCrest Solution</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              As part of the Kaynes ecosystem, GridCrest benefits from one of India's strongest
              technology manufacturing networks.
            </p>
            <p className="mt-4 text-muted-foreground">
              Together, GridCrest and Kaynes are building the foundation for the next generation
              of intelligent energy infrastructure.
            </p>
            <a
              href="https://www.kaynestechnology.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-8 inline-flex"
            >
              Visit Kaynes Group
            </a>
          </div>

          {/* Right: capabilities */}
          <div className="space-y-3">
            {KAYNES_CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <cap.icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
