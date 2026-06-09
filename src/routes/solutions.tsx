import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import heroSolutions from "@/assets/hero-solutions.svg";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cpu,
  DatabaseZap,
  Gauge,
  Layers,
  MonitorSmartphone,
  Radio,
  Server,
  Settings2,
  Smartphone,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — GridCrest" },
      {
        name: "description",
        content:
          "Smart meters, communication modules, HES, MDM, analytics, consumer apps and workforce management — one connected utility ecosystem from GridCrest.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <SmartMeters />
      <SoftwarePlatforms />
      <IntegratedPlatform />
      <CtaBanner
        eyebrow="GET STARTED"
        title="Ready to Modernise Your Utility Operations?"
        description="Discover how GridCrest's integrated ecosystem delivers operational efficiency, data intelligence and scalable transformation for modern utilities."
        primary={{ label: "Explore Smart Meters", href: "#smart-meters" }}
        secondary={{ label: "Talk to Our Team", to: "/contact" }}
      />
    </main>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <PageHero
      eyebrow="Solutions"
      title="Intelligent infrastructure for"
      titleAccent="modern utilities."
      description="From smart metering hardware to advanced software platforms — GridCrest delivers a connected, interoperable ecosystem built for scalable utility modernisation."
      primary={{ label: "Explore Products", href: "#smart-meters" }}
      secondary={{ label: "Software Platforms", href: "#software" }}
      image={heroSolutions}
      imageAlt="GridCrest Solutions"
    />
  );
}

/* ─── SECTION 1: SMART METERS ───────────────────────────────────────────────── */
const METERS = [
  {
    id: "ME280",
    label: "ME 280",
    subtitle: "Single Phase",
    specs: [
      { key: "Wiring",          value: "1-phase 2-wire, Direct" },
      { key: "Voltage",         value: "240V (L-N)" },
      { key: "Current Ratings", value: "5-30A / 5-60A / 10-60A" },
      { key: "Accuracy",        value: "Class 1.0" },
      { key: "Compliance",      value: "IS 16444, IS 15959" },
    ],
    features: [
      "IP54 Protection", "DLMS/COSEM Protocol",
      "BLE Connectivity", "Multi Communication",
      "Double Insulation", "4-Season TOU",
      "Hot Swappable Module", "Recyclable Design",
    ],
  },
  {
    id: "MT260",
    label: "MT 260",
    subtitle: "Three Phase",
    specs: [
      { key: "Wiring",          value: "3-phase 4-wire, Direct" },
      { key: "Voltage",         value: "3×240V / 415V (L-L)" },
      { key: "Current Ratings", value: "5-10A / 10-60A / 20-100A" },
      { key: "Accuracy",        value: "Class 1.0" },
      { key: "Compliance",      value: "IS 16444, IS 15959" },
    ],
    features: [
      "AMI / RDSS Ready", "Net Metering Support",
      "Solar Integration", "DLMS/COSEM Protocol",
      "Smart Grid Compatible", "RF Mesh / 4G / NB-IoT",
      "Hot Swappable NIC", "Remote Disconnect",
    ],
  },
  {
    id: "MT360",
    label: "MT 360",
    subtitle: "Three Phase CT Operated",
    specs: [
      { key: "Wiring",          value: "3-phase 4-wire, CT Operated" },
      { key: "Voltage",         value: "3×63.5V / 110V" },
      { key: "Current Input",   value: "1A / 5A (Secondary)" },
      { key: "Accuracy",        value: "Class 0.5S" },
      { key: "Compliance",      value: "IS 16444, IEC 62052" },
    ],
    features: [
      "DT Monitoring", "Energy Audit",
      "Loss Analysis", "DLMS/COSEM Protocol",
      "Utility Grade Metering", "Demand Measurement",
      "Power Quality Analysis", "Event Logging",
    ],
  },
  {
    id: "MT490",
    label: "MT 490",
    subtitle: "Three Phase CT-VT Operated",
    specs: [
      { key: "Wiring",          value: "3-phase 4-wire, CT-VT Operated" },
      { key: "Voltage Input",   value: "3×63.5V / 110V (VT secondary)" },
      { key: "Current Input",   value: "1A / 5A (CT secondary)" },
      { key: "Accuracy",        value: "Class 0.2S" },
      { key: "Compliance",      value: "IS 16444, IEC 62053-22" },
    ],
    features: [
      "High Accuracy Metering", "Utility & Industrial Grade",
      "VT + CT Operated", "DLMS/COSEM Protocol",
      "Advanced Power Quality", "Harmonics Measurement",
      "Tamper Detection", "Multi-tariff Support",
    ],
  },
];

function SmartMeters() {
  const [active, setActive] = useState(METERS[0].id);
  const meter = METERS.find((m) => m.id === active)!;

  return (
    <section id="smart-meters" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Product Portfolio
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Smart Meters Built for India's Grid
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Designed for long-term deployment across residential, commercial, industrial, and
          utility environments — with interoperability, reliability, and future-ready
          communication technologies.
        </p>

        {/* product viewer */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[340px_1fr]">

            {/* LEFT — product image */}
            <div className="flex flex-col items-center justify-center gap-4 border-b border-border bg-[#f4f8fc] p-10 lg:border-b-0 lg:border-r">
              <div className="flex h-52 w-52 items-center justify-center rounded-2xl bg-white shadow-sm border border-border/50">
                <Gauge className="h-24 w-24 text-accent/30" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{meter.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{meter.subtitle}</p>
              </div>
            </div>

            {/* RIGHT — specs */}
            <div className="p-8 lg:p-10">
              {/* tabs */}
              <div className="flex flex-wrap gap-2">
                {METERS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActive(m.id)}
                    className={`rounded-lg border px-5 py-2 text-sm font-semibold transition-all ${
                      active === m.id
                        ? "border-accent bg-accent text-white shadow-sm"
                        : "border-border bg-background text-foreground hover:bg-secondary"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* specs table */}
              <div className="mt-8">
                <h3 className="text-base font-bold">Technical Specifications</h3>
                <div className="mt-3 divide-y divide-border rounded-xl border border-border overflow-hidden">
                  {meter.specs.map((s) => (
                    <div key={s.key} className="flex items-center justify-between px-5 py-3 text-sm">
                      <span className="text-muted-foreground">{s.key}</span>
                      <span className="font-mono font-medium text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* features */}
              <div className="mt-7">
                <h3 className="text-base font-bold">Standard Features</h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                  {meter.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Modules */}
        <div className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/40 to-surface-lavender/30 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Radio className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">
                Communication Modules{" "}
                <span className="font-normal text-muted-foreground">(NIC Cards)</span>
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Hot-swappable communication modules enable seamless connectivity across
                RF Mesh, 4G, NB-IoT, BLE, and dual-SIM networks. Designed for
                interoperability and future upgrades without replacing the meter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["RF Mesh", "4G / LTE", "NB-IoT", "BLE", "Dual-SIM", "Hot-Swap"].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background/80 px-3 py-2.5 text-sm font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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

/* ─── SECTION 2: SOFTWARE PLATFORMS ────────────────────────────────────────── */
const SOFTWARE = [
  {
    tag: "Head End System",
    name: "Anantya HES",
    fullName: "Anantya Head End System",
    icon: Server,
    desc: "A unified device management platform for electricity, water, and gas meters. Designed to manage millions of connected endpoints with support for push, pull, and scheduled reads across multiple communication technologies.",
    highlights: [
      "Supports 50+ meter manufacturers",
      "DLMS compliant",
      "RF Mesh, Cellular & NB-IoT",
      "Cloud & On-Premise deployment",
      "Advanced key management system",
    ],
  },
  {
    tag: "Meter Data Management",
    name: "Anantya MDM",
    fullName: "Anantya Meter Data Management",
    icon: DatabaseZap,
    desc: "Enterprise-grade meter data processing platform that enables validation, estimation, editing, tariff management, prepaid operations, and billing determinant calculations.",
    highlights: [
      "Asset Management",
      "VEE Processing",
      "Smart Tariff Engine",
      "Prepaid Services",
      "Omnichannel Payments",
      "1M+ Monthly Recharges",
    ],
  },
  {
    tag: "Analytics",
    name: "Anantya Analytics",
    fullName: "Anantya Reporting & Analytics",
    icon: BarChart3,
    desc: "Advanced analytics platform providing operational intelligence, energy auditing, transformer health monitoring, SLA tracking, and AI-driven insights.",
    highlights: [
      "Energy Audit",
      "DT & Feeder Analytics",
      "Reliability Indices",
      "AI & ML Modules",
      "SLA Monitoring",
      "Solar Efficiency Analysis",
    ],
  },
  {
    tag: "Consumer App",
    name: "Anantya Consumer",
    fullName: "Anantya Consumer Application",
    icon: Smartphone,
    desc: "A digital self-service platform that enables consumers to monitor consumption, make payments, raise service requests, and access energy insights in real time.",
    highlights: [
      "Real-Time Usage Tracking",
      "Mobile App (iOS & Android)",
      "Multi-Payment Support",
      "Complaint Management",
      "Rooftop Solar Estimation",
      "100K+ Registered Users",
    ],
  },
  {
    tag: "Field Operations",
    name: "Anantya Synkra",
    fullName: "Anantya Synkra",
    icon: Wrench,
    desc: "A field operations platform designed for meter commissioning, maintenance, diagnostics, and operational support activities. Compatible with any DLMS-compliant meter.",
    highlights: [
      "BLE & Optical Communication",
      "Read / Write Operations",
      "Offline Mode",
      "Role-Based Access Control",
      "Field Diagnostics",
    ],
  },
  {
    tag: "Workforce Management",
    name: "Anantya WFM",
    fullName: "Anantya Workforce Management",
    icon: Users,
    desc: "A digital workforce platform that streamlines deployment, operations, maintenance, inspections, surveys, and service management activities.",
    highlights: [
      "Digital Work Orders",
      "Consumer Surveys",
      "DT Surveys",
      "Geo-tagging",
      "Warehouse Management",
      "Quality Control Workflows",
    ],
  },
];

/* Gradient palettes per software for the image block */
const SW_GRADIENTS = [
  "from-cyan-50 to-sky-100",
  "from-violet-50 to-purple-100",
  "from-indigo-50 to-blue-100",
  "from-teal-50 to-emerald-100",
  "from-amber-50 to-orange-100",
  "from-rose-50 to-pink-100",
];
const SW_ICON_COLORS = [
  "text-cyan-600 bg-cyan-100",
  "text-violet-600 bg-violet-100",
  "text-indigo-600 bg-indigo-100",
  "text-teal-600 bg-teal-100",
  "text-amber-600 bg-amber-100",
  "text-rose-600 bg-rose-100",
];

function SoftwarePlatforms() {
  return (
    <section id="software" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Software Platforms
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Software Platforms
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          Six purpose-built platforms — each covering a distinct layer of utility operations —
          that work together as the Anantya intelligent ecosystem.
        </p>

        <div className="mt-14 space-y-6">
          {SOFTWARE.map((s, i) => {
            const imgRight = i % 2 !== 0;
            const grad = SW_GRADIENTS[i];
            const iconCls = SW_ICON_COLORS[i];
            return (
              <article
                key={s.name}
                className="overflow-hidden rounded-3xl"
              >
                <div className={`grid lg:grid-cols-2 ${imgRight ? "" : ""}`}>
                  {/* IMAGE BLOCK */}
                  <div
                    className={`flex min-h-[280px] items-center justify-center bg-gradient-to-br ${grad} p-12 ${imgRight ? "lg:order-2" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-5">
                      <span className={`flex h-20 w-20 items-center justify-center rounded-2xl ${iconCls}`}>
                        <s.icon className="h-10 w-10" />
                      </span>
                      <p className="text-lg font-bold text-foreground/70">{s.name}</p>
                    </div>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className={`flex flex-col justify-center p-8 lg:p-10 ${imgRight ? "lg:order-1" : ""}`}>
                    <h3 className="text-2xl font-bold tracking-tight">{s.fullName}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-6">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: INTEGRATED PLATFORM ───────────────────────────────────────── */
function IntegratedPlatform() {
  const layers = [
    { icon: Gauge, label: "Smart Meters", color: "bg-cyan-50 text-cyan-700 border-cyan-200" },
    { icon: Radio, label: "Communication Modules", color: "bg-sky-50 text-sky-700 border-sky-200" },
    { icon: Server, label: "Head End System (HES)", color: "bg-violet-50 text-violet-700 border-violet-200" },
    { icon: DatabaseZap, label: "Meter Data Management", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { icon: BarChart3, label: "Reporting & Analytics", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
    { icon: Smartphone, label: "Consumer Application", color: "bg-teal-50 text-teal-700 border-teal-200" },
    { icon: Wrench, label: "Anantya Synkra", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { icon: Users, label: "Workforce Management", color: "bg-amber-50 text-amber-700 border-amber-200" },
  ];

  const outcomes = [
    { icon: Zap, title: "Operational Efficiency", body: "Reduce manual processes through intelligent automation and remote operations." },
    { icon: MonitorSmartphone, title: "Real-Time Visibility", body: "Enable end-to-end monitoring across field devices, data platforms and operations." },
    { icon: Cpu, title: "Data-Driven Decisions", body: "Transform raw meter data into actionable intelligence at every level of the utility." },
    { icon: Layers, title: "Scalable & Interoperable", body: "Deploy across millions of endpoints with open standards and modular architecture." },
  ];

  return (
    <section id="platform" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Integrated Platform
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          One Intelligent Ecosystem Across Every Layer of the Grid
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          GridCrest combines smart meters, communication infrastructure, HES, MDM,
          analytics, consumer engagement, and workforce management into a single
          interoperable ecosystem. This integrated approach enables utilities to achieve
          operational efficiency, data-driven decision making, and scalable digital
          transformation.
        </p>

        {/* layer grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {layers.map((l, i) => (
            <div
              key={l.label}
              className={`flex flex-col items-center gap-3 rounded-2xl border p-5 text-center text-sm font-semibold ${l.color}`}
            >
              <l.icon className="h-6 w-6" />
              {l.label}
              {i < layers.length - 1 && (
                <ArrowRight className="h-3 w-3 rotate-90 opacity-40 sm:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* connector visual */}
        <div className="my-8 flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            Single interoperable ecosystem
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* outcomes */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((o) => (
            <div key={o.title} className="rounded-2xl border border-border bg-card p-6">
              <o.icon className="h-5 w-5 text-accent" />
              <h3 className="mt-4 text-base font-bold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

