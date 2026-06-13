import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import heroSolutions from "@/assets/solutions-hero.png";
import meterMe280 from "@/assets/meter-me280.png";
import meterMt260 from "@/assets/meter-mt260.png";
import meterMt360 from "@/assets/meter-mt360.png";
import meterMt490 from "@/assets/meter-mt490.png";
import anantaHes from "@/assets/anantya-hes.png";
import anantaMdm from "@/assets/anantya-mdm.png";
import anantaAnalytics from "@/assets/anantya-analytics.png";
import anantaConsumer from "@/assets/anantya-consumer.png";
import anantaSynkra from "@/assets/anantya-synkra.png";
import anantaWfm from "@/assets/anantya-wfm.png";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Layers,
  Network,
  Radio,
  Server,
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
      <EcosystemChips />
      <SolutionPortfolio />
      <EcosystemArchitecture />
      <WhyGridCrest />
      <SolutionsCta />
    </main>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <PageHero
      eyebrow="Solutions"
      title="From Meter to Intelligence."
      titleAccent="One Unified Ecosystem."
      description="GridCrest delivers an integrated portfolio of smart meters, communication technologies, software platforms, and managed services designed to help utilities build intelligent, efficient, and resilient operations."
      primary={{ label: "Explore Products", href: "#portfolio" }}
      secondary={{ label: "Talk to Us", to: "/contact" }}
      image={heroSolutions}
      imageAlt="GridCrest Solutions"
    />
  );
}

/* ─── ECOSYSTEM CHIPS ───────────────────────────────────────────────────────── */
const ECOSYSTEM_CHIPS = [
  { label: "Smart Meters",      href: "#smart-meters",     id: "smart-meters"     },
  { label: "Communications",    href: "#communications",   id: "communications"   },
  { label: "Digital Platforms", href: "#software",         id: "software"         },
  { label: "Managed Services",  href: "#managed-services", id: "managed-services" },
];

function EcosystemChips() {
  const [visible, setVisible]   = useState(true);
  const [activeId, setActiveId] = useState("smart-meters");

  // Hide when Why GridCrest section enters view
  useEffect(() => {
    const target = document.getElementById("why-gridcrest");
    if (!target) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  // Highlight active chip based on scroll position
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ECOSYSTEM_CHIPS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky top-16 z-40 flex justify-center py-4 px-6 pointer-events-none">
      <nav
        className="pointer-events-auto flex flex-wrap items-center justify-center gap-4 px-5 py-5"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(16px) saturate(1.8)",
          WebkitBackdropFilter: "blur(16px) saturate(1.8)",
          borderRadius: 100,
        }}
      >
        {ECOSYSTEM_CHIPS.map((c) => {
          const isActive = activeId === c.id;
          return (
            <a
              key={c.label}
              href={c.href}
              className="shrink-0 transition-all"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 16px",
                borderRadius: 24,
                border: "none",
                background: isActive ? "rgba(0,229,255,0.08)" : "transparent",
                boxShadow: isActive
                  ? "0px 4px 12px 0px rgba(48,163,176,0.2)"
                  : "none",
                color: isActive ? "#1A3A5C" : "#888",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              {c.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

/* ─── SOLUTION PORTFOLIO ────────────────────────────────────────────────────── */
const METERS = [
  {
    id: "ME280",
    label: "ME 280",
    subtitle: "Single Phase",
    img: meterMe280,
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
    img: meterMt260,
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
    img: meterMt360,
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
    img: meterMt490,
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

const SOFTWARE = [
  {
    tag: "Head End System",
    name: "Anantya HES",
    fullName: "Anantya Head End System",
    icon: Server,
    img: anantaHes,
    desc: "A unified device management platform for electricity, water, and gas meters. Designed to manage millions of connected endpoints with support for push, pull, and scheduled reads across multiple communication technologies.",
    highlights: [
      "Supports 50+ meter manufacturers", "DLMS compliant",
      "RF Mesh, Cellular & NB-IoT", "Cloud & On-Premise deployment",
      "Advanced key management system",
    ],
  },
  {
    tag: "Meter Data Management",
    name: "Anantya MDM",
    fullName: "Anantya Meter Data Management",
    icon: DatabaseZap,
    img: anantaMdm,
    desc: "Enterprise-grade meter data processing platform that enables validation, estimation, editing, tariff management, prepaid operations, and billing determinant calculations.",
    highlights: [
      "Asset Management", "VEE Processing",
      "Smart Tariff Engine", "Prepaid Services",
      "Omnichannel Payments", "1M+ Monthly Recharges",
    ],
  },
  {
    tag: "Analytics",
    name: "Anantya Analytics",
    fullName: "Anantya Reporting & Analytics",
    icon: BarChart3,
    img: anantaAnalytics,
    desc: "Advanced analytics platform providing operational intelligence, energy auditing, transformer health monitoring, SLA tracking, and AI-driven insights.",
    highlights: [
      "Energy Audit", "DT & Feeder Analytics",
      "Reliability Indices", "AI & ML Modules",
      "SLA Monitoring", "Solar Efficiency Analysis",
    ],
  },
  {
    tag: "Consumer App",
    name: "Anantya Consumer",
    fullName: "Anantya Consumer Application",
    icon: Smartphone,
    img: anantaConsumer,
    desc: "A digital self-service platform that enables consumers to monitor consumption, make payments, raise service requests, and access energy insights in real time.",
    highlights: [
      "Real-Time Usage Tracking", "Mobile App (iOS & Android)",
      "Multi-Payment Support", "Complaint Management",
      "Rooftop Solar Estimation", "100K+ Registered Users",
    ],
  },
  {
    tag: "Field Operations",
    name: "Anantya Synkra",
    fullName: "Anantya Synkra",
    icon: Wrench,
    img: anantaSynkra,
    desc: "A field operations platform designed for meter commissioning, maintenance, diagnostics, and operational support activities. Compatible with any DLMS-compliant meter.",
    highlights: [
      "BLE & Optical Communication", "Read / Write Operations",
      "Offline Mode", "Role-Based Access Control",
      "Field Diagnostics",
    ],
  },
  {
    tag: "Workforce Management",
    name: "Anantya WFM",
    fullName: "Anantya Workforce Management",
    icon: Users,
    img: anantaWfm,
    desc: "A digital workforce platform that streamlines deployment, operations, maintenance, inspections, surveys, and service management activities.",
    highlights: [
      "Digital Work Orders", "Consumer Surveys",
      "DT Surveys", "Geo-tagging",
      "Warehouse Management", "Quality Control Workflows",
    ],
  },
];

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

function SolutionPortfolio() {
  const [active, setActive] = useState(METERS[0].id);
  const meter = METERS.find((m) => m.id === active)!;

  return (
    <section id="portfolio" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Solution Portfolio
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Solutions Across the Utility Value Chain
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          From intelligent field devices and communication networks to enterprise software
          and managed services, GridCrest delivers an integrated portfolio designed for
          modern utility operations.
        </p>

        {/* ── Smart Meters ── */}
        <div id="smart-meters" className="mt-16 scroll-mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Smart Meters</p>
          <h3 className="mt-2 text-2xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
            Smart Meters Built for India's Grid
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Designed for long-term deployment across residential, commercial, industrial, and utility
            environments — with interoperability, reliability, and future-ready communication.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="grid lg:grid-cols-[580px_1fr]">
              <div className="flex flex-col items-center justify-center gap-4 border-b border-border bg-[#f4f8fc] p-8 lg:border-b-0 lg:border-r">
                <div className="flex h-[500px] w-[500px] items-center justify-center rounded-2xl bg-white shadow-sm border border-border/50">
                  <img src={meter.img} alt={meter.label} className="h-full w-full object-contain p-6 select-none" draggable={false} />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{meter.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{meter.subtitle}</p>
                </div>
              </div>
              <div className="p-8 lg:p-10">
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
                <div className="mt-8">
                  <h3 className="text-base font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>Technical Specifications</h3>
                  <div className="mt-3 divide-y divide-border rounded-xl border border-border overflow-hidden">
                    {meter.specs.map((s) => (
                      <div key={s.key} className="flex items-center justify-between px-5 py-3 text-sm">
                        <span className="text-muted-foreground">{s.key}</span>
                        <span className="font-mono font-medium text-foreground">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="text-base font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>Standard Features</h3>
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
        </div>

        {/* ── Communications ── */}
        <div id="communications" className="mt-10 scroll-mt-24 rounded-3xl border border-border bg-gradient-to-br from-surface-cyan/40 to-surface-lavender/30 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Communications</p>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Radio className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
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

        {/* ── Digital Platforms ── */}
        <div id="software" className="mt-16 scroll-mt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Digital Platforms</p>
          <h3 className="mt-2 text-2xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
            Anantya — The Intelligent Platform Suite
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Six purpose-built platforms covering every distinct layer of utility operations,
            designed to work together as a single interoperable ecosystem.
          </p>

          <div className="mt-8 space-y-6">
            {SOFTWARE.map((s, i) => {
              const imgRight = i % 2 !== 0;
              return (
                <article key={s.name} className="overflow-hidden rounded-3xl">
                  <div className="grid lg:grid-cols-2">
                    <div
                      className={`flex min-h-[500px] items-center justify-center bg-gradient-to-br ${SW_GRADIENTS[i]} overflow-hidden ${(s as any).img ? "" : "p-12"} ${imgRight ? "lg:order-2" : ""}`}
                    >
                      <div className="flex flex-col items-center gap-5">
                        {(s as any).img ? (
                          <img src={(s as any).img} alt={s.name} className="w-full h-full object-contain select-none" draggable={false} />
                        ) : (
                          <>
                            <span className={`flex h-20 w-20 items-center justify-center rounded-2xl ${SW_ICON_COLORS[i]}`}>
                              <s.icon className="h-10 w-10" />
                            </span>
                            <p className="text-lg font-bold text-foreground/70">{s.name}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className={`flex flex-col justify-center p-8 lg:p-10 ${imgRight ? "lg:order-1" : ""}`}>
                      <h3 className="text-2xl font-bold tracking-tight" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>{s.fullName}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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

        {/* ── Managed Services ── */}
        <div id="managed-services" className="mt-16 scroll-mt-24 rounded-3xl border border-border bg-card p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Managed Services</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
                End-to-End Program Management
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Beyond technology, GridCrest delivers turnkey smart metering programs —
                handling deployment, operations, maintenance, and performance management
                so utilities can focus on outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Project Management", "Meter Installation",
                "Network Operations", "Field Maintenance",
                "SLA-Based Delivery", "24×7 NOC Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ECOSYSTEM ARCHITECTURE ────────────────────────────────────────────────── */
const ARCH_CARDS = [
  {
    title: "Standards-Based",
    body: "DLMS/COSEM, IS 15959, IEC 61968 CIM",
    icon: Layers,
  },
  {
    title: "Technology Agnostic",
    body: "Compatible with multiple meter vendors and communication technologies",
    icon: Network,
  },
  {
    title: "Enterprise Ready",
    body: "Deployable on-premise, cloud, or hybrid environments",
    icon: Server,
  },
];

function EcosystemArchitecture() {
  return (
    <section className="border-b border-border/60 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Ecosystem Architecture
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Designed for Interoperability
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Built on open standards and modular architecture, GridCrest solutions integrate
          seamlessly with existing utility systems, communication networks, and metering
          infrastructure.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ARCH_CARDS.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8">
              <c.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY GRIDCREST ─────────────────────────────────────────────────────────── */
const WHY_ITEMS = [
  {
    icon: Layers,
    title: "Complete Smart Metering Ecosystem",
    body: "From smart meters and communication modules to HES, MDM, analytics, and field operations, every component is designed to work together seamlessly.",
  },
  {
    icon: BrainCircuit,
    title: "Proven Utility Expertise",
    body: "Built by teams with deep experience in smart metering, AMI deployments, utility operations, and large-scale digital transformation programs.",
  },
  {
    icon: Zap,
    title: "Scalable by Design",
    body: "Engineered to support millions of endpoints, high-volume data processing, and growing utility requirements without compromising performance.",
  },
  {
    icon: Cpu,
    title: "Semiconductor to Services",
    body: "Backed by the engineering, manufacturing, software, and managed service capabilities of the Kaynes Group ecosystem.",
  },
];

function WhyGridCrest() {
  return (
    <section id="why-gridcrest" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Why GridCrest
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Built for Utility Success
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Beyond technology, GridCrest combines utility expertise, proven execution, and a
          complete solution portfolio to help utilities achieve measurable outcomes.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SOLUTIONS CTA ─────────────────────────────────────────────────────────── */
export function SolutionsCta() {
  return (
    <div>
      <CtaBanner
        eyebrow="GET STARTED"
        title="One Partner. Complete Smart Metering Ecosystem."
        description="Discover how GridCrest can help you deploy, manage, and scale smart metering programs with confidence. We are expanding our Global Network."
        primary={{ label: "Request Demo", to: "/contact" }}
        secondary={{ label: "Contact Sales", to: "/contact" }}
      />
      <div className="flex justify-center pb-16 -mt-6">
        <p className="text-sm text-muted-foreground">
          Interested in partnering with us?{" "}
          <Link to="/contact" className="font-semibold text-accent hover:underline inline-flex items-center gap-1">
            Become a Partner <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </div>
  );
}
