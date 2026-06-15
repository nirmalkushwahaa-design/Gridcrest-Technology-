import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import milestoneActiveImg from "@/assets/milestone-active.svg";
import aboutHeroImg from "@/assets/about-hero.png";
import React, { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  Globe,
  Handshake,
  Layers,
  Lightbulb,
  Radio,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "About GridCrest — Engineering the Future of Utility Intelligence" },
      {
        name: "description",
        content:
          "GridCrest Technologies delivers integrated smart metering solutions across devices, communications, software platforms, and managed services — backed by the Kaynes Group.",
      },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        eyebrow="About GridCrest"
        title="Engineering the Future of"
        titleAccent="Utility Intelligence"
        description="GridCrest Technologies is a utility technology company delivering integrated smart metering solutions across devices, communications, software platforms, and managed services. Backed by the engineering and manufacturing strength of the Kaynes Group."
        primary={{ label: "Explore Solutions", to: "/solutions" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
        image={aboutHeroImg}
        imageAlt="GridCrest ecosystem overview"
      />
      <AboutGridCrest />
      <WhyGridCrest />
      <KaynesGroup />
      <CoreCapabilities />
      <OurJourney />
      <MissionVisionValues />
      <PeopleAndCulture />
      <CtaBanner
        eyebrow="LET'S BUILD THE FUTURE TOGETHER"
        title="Partnering for Smarter Utilities"
        description="Whether you're a utility looking to modernize operations, a technology partner exploring collaboration opportunities, or a professional interested in joining our journey, we'd love to hear from you."
        primary={{ label: "Talk to Our Experts", to: "/contact" }}
        secondary={{ label: "Become a Partner", to: "/contact" }}
      />
    </main>
  );
}

/* ─── 2. ABOUT GRIDCREST ────────────────────────────────────────────────────── */
function AboutGridCrest() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              About GridCrest
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Built for Modern Utilities
            </h2>
          </div>
          <div className="space-y-5 text-base text-muted-foreground leading-relaxed lg:col-span-8 lg:pt-1">
            <p>
              The utility industry is undergoing a fundamental transformation driven by
              digital technologies, connected infrastructure, and data-driven decision making.
            </p>
            <p>
              GridCrest was founded with a singular focus: helping utilities unlock the full
              value of digital transformation.
            </p>
            <p>
              We combine smart metering technology, communication infrastructure, enterprise
              software, analytics, and operational services into one integrated ecosystem
              designed specifically for utility environments.
            </p>
            <p>
              Our solutions support utilities throughout their transformation journey — from
              meter deployment and data collection to operational intelligence and consumer
              engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. WHY UTILITIES CHOOSE GRIDCREST ─────────────────────────────────────── */
const WHY_CARDS = [
  {
    icon: Layers,
    title: "One Partner. Complete Stack.",
    body: "Smart meters, communication modules, utility platforms, analytics, and managed services under one ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Open by Design",
    body: "Built on industry standards including DLMS/COSEM, IS 15959, IS 16444, and IEC 61968 CIM to ensure seamless integration across utility environments.",
  },
  {
    icon: Lightbulb,
    title: "Utility-Focused Innovation",
    body: "Purpose-built solutions designed specifically for utility operations, deployment realities, and evolving business requirements.",
  },
  {
    icon: Zap,
    title: "Scalable by Design",
    body: "Engineered to support utility-scale deployments, high-volume data processing, and mission-critical operations.",
  },
  {
    icon: Cpu,
    title: "Semiconductor to Services",
    body: "Backed by Kaynes Group capabilities spanning electronics manufacturing, engineering, software, and field services.",
  },
];

function WhyGridCrest() {
  return (
    <section className="border-b border-border/60 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          What Makes Us Different
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Why Utilities Choose GridCrest
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {WHY_CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`reveal-area rounded-2xl border border-border bg-card p-7 ${i === 4 ? "sm:col-span-2 xl:col-span-1" : ""}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. KAYNES GROUP ───────────────────────────────────────────────────────── */
const KAYNES_STRENGTHS = [
  { icon: TrendingUp, label: "30+ Years of Engineering Excellence" },
  { icon: Globe,      label: "Global Manufacturing Footprint" },
  { icon: Factory,    label: "Advanced Electronics Manufacturing" },
  { icon: Wrench,     label: "End-to-End Product Lifecycle Expertise" },
];

function KaynesGroup() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Powered by Kaynes Group
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              From Semiconductor to Services
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              GridCrest is part of the Kaynes Group ecosystem, a leading electronics
              manufacturing and engineering organization with decades of experience
              delivering technology solutions across critical industries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This unique foundation allows us to combine software innovation with
              manufacturing excellence, supply chain resilience, and large-scale delivery
              capabilities.
            </p>
            <a
              href="https://www.kaynestechnology.co.in/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-7 inline-flex"
            >
              Visit Kaynes Group <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Key Strengths
            </p>
            {KAYNES_STRENGTHS.map((s) => (
              <div key={s.label} className="reveal-area flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-sm">{s.label}</span>
                <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-accent" />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. CORE CAPABILITIES ──────────────────────────────────────────────────── */
const CAPABILITIES = [
  {
    icon: Gauge,
    title: "Smart Metering",
    body: "Standards-compliant smart metering solutions designed for reliable measurement, remote operations, and large-scale deployments.",
  },
  {
    icon: Radio,
    title: "Communications",
    body: "Flexible connectivity through RF Mesh, Cellular, BLE, and interoperable communication technologies.",
  },
  {
    icon: Server,
    title: "Utility Platforms",
    body: "Comprehensive software solutions including HES, MDM, Prepayment, Analytics, Workforce Management, and Consumer Engagement.",
  },
  {
    icon: BrainCircuit,
    title: "Data & Intelligence",
    body: "Advanced analytics, operational insights, SLA monitoring, AI/ML-driven intelligence, and decision support.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    body: "Leveraging the Kaynes ecosystem for product engineering, electronics manufacturing, quality assurance, and scalable production of utility-grade technologies.",
  },
  {
    icon: Settings2,
    title: "Managed Services",
    body: "Deployment, operations, maintenance, and utility transformation services supporting the complete AMI lifecycle.",
  },
];

function CoreCapabilities() {
  return (
    <section className="border-b border-border/60 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Core Capabilities
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
          Deep Expertise Across the Utility Value Chain
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          GridCrest combines domain knowledge, engineering excellence, and digital
          innovation to deliver solutions across every layer of the smart metering ecosystem.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="reveal-area rounded-2xl border border-border bg-card p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. OUR JOURNEY (milestones) ───────────────────────────────────────────── */
const MILESTONES = [
  { year: "2019",    title: "Founded",             text: "Establishment of Iskraemeco India Private Limited. Operations begin with a single employee." },
  { year: "2020",    title: "First Office & Lab",  text: "Core founding team joins. First office in Kolkata. First meter testing lab built in a residential bedroom." },
  { year: "2020–21", title: "Regulatory Readiness",text: "Regulatory approvals and technical capability building across key utility verticals." },
  { year: "2021",    title: "First Major Order",   text: "First major smart metering order secured from WBSEDCL." },
  { year: "2022",    title: "Power Grid Win",       text: "Major project secured from Power Grid Corporation of India." },
  { year: "2022–24", title: "Rapid Expansion",     text: "Rapid organisational growth and large-scale project expansion across India." },
  { year: "2024–25", title: "Kaynes Acquisition",  text: "Strategic acquisition by Kaynes Technologies, enabling industrial-scale manufacturing." },
  { year: "2025–26", title: "GridCrest Launch",    text: "Rebranding and launch of GridCrest — one ecosystem, every layer of the grid.", active: true },
];

function OurJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX;
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = scrollLeft.current - (e.pageX - startX.current);
  };

  const activeIndex = MILESTONES.findIndex((m) => m.active);

  return (
    <section className="border-b border-border/60 bg-white py-20">
      {/* Heading */}
      <div className="text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Milestones</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">Our Journey</h2>
        <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
          From a regional metering company to a global smart-grid force — every year, a new chapter.
        </p>
      </div>

      {/* Horizontal scrollable timeline */}
      <div className="mt-14" style={{ overflowX: "clip" }}>
        <div
          ref={trackRef}
          className="overflow-x-auto select-none"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: "max(2.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
            paddingRight: "max(2.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
          } as React.CSSProperties}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <ol className="flex items-start" style={{ width: "max-content" }}>
            {MILESTONES.map((m, i) => {
              const isPastOrActive = i <= activeIndex;
              const isActive = !!m.active;
              const isLast = i === MILESTONES.length - 1;

              return (
                <li key={m.year} className="relative w-56 shrink-0">
                  {/* Dot + connector line row */}
                  <div className="flex items-center">
                    {/* Icon circle */}
                    <div
                      className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-8 ${
                        isActive
                          ? "bg-primary ring-primary/10"
                          : isPastOrActive
                          ? "bg-accent/10 ring-accent/5"
                          : "bg-secondary ring-secondary/5"
                      }`}
                    >
                      <svg
                        className={`h-3.5 w-3.5 ${isActive ? "text-primary-foreground" : isPastOrActive ? "text-accent" : "text-muted-foreground"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                      </svg>
                    </div>
                    {/* Connecting line */}
                    {!isLast && (
                      <div
                        className="h-px w-full opacity-30"
                        style={{ background: i < activeIndex ? "var(--color-accent)" : "var(--color-border)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="mt-4 pe-6">
                    {/* Year badge */}
                    <time
                      className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold ${
                        isActive
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : isPastOrActive
                          ? "border-accent/30 bg-accent/8 text-accent"
                          : "border-border bg-secondary text-muted-foreground"
                      }`}
                    >
                      {m.year}
                    </time>
                    <h3 className="my-2 text-sm font-semibold text-foreground">{m.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. MISSION, VISION & CORE VALUES ──────────────────────────────────────── */
const CORE_VALUES = [
  { icon: Lightbulb,  label: "Innovation",    body: "Continuously pushing boundaries to deliver breakthrough solutions for utility transformation." },
  { icon: ShieldCheck,label: "Integrity",     body: "Committed to transparency, accountability, and the highest standards in everything we deliver." },
  { icon: Sparkles,   label: "Excellence",    body: "Pursuing quality and precision across engineering, software, services, and customer outcomes." },
  { icon: Users,      label: "Collaboration", body: "Working across disciplines, ecosystems, and geographies to solve complex utility challenges." },
  { icon: TrendingUp, label: "Impact",        body: "Driving measurable improvement in how utilities operate, deliver services, and serve communities." },
];

function MissionVisionValues() {
  return (
    <section className="border-b border-border/60 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Purpose</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Mission, Vision &amp; Values
          </h2>
        </div>
        {/* Mission & Vision */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal-area rounded-2xl border border-border bg-card p-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Target className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Mission</p>
            <h3 className="mt-2 text-2xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
              Our Mission
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To deliver integrated smart metering solutions that help utilities build
              intelligent, efficient, and resilient operations — combining devices,
              communications, platforms, and services into one seamless ecosystem.
            </p>
          </div>

          <div className="reveal-area rounded-2xl border border-border bg-card p-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vision</p>
            <h3 className="mt-2 text-2xl font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>
              Our Vision
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To be the leading integrated utility technology partner — enabling utilities
              worldwide to achieve full digital transformation through open, scalable, and
              intelligent smart metering ecosystems.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Core Values</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight">
            What We Stand For
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {CORE_VALUES.map((v) => (
              <div key={v.label} className="reveal-area rounded-2xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>{v.label}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. PEOPLE & CULTURE ───────────────────────────────────────────────────── */
const CULTURE_PILLARS = [
  { icon: Lightbulb,  label: "Innovation",    body: "Encouraging new ideas and continuous improvement." },
  { icon: Handshake,  label: "Ownership",     body: "Empowering individuals to take responsibility and drive outcomes." },
  { icon: Users,      label: "Collaboration", body: "Working across disciplines to solve complex utility challenges." },
  { icon: TrendingUp, label: "Growth",        body: "Investing in learning, development, and professional excellence." },
];

function PeopleAndCulture() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              People &amp; Culture
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Life at GridCrest
            </h2>
            <p className="mt-2 text-lg font-semibold text-foreground">
              Building Technology. Empowering People.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At GridCrest, we bring together utility experts, engineers, product
              innovators, and technology professionals who are passionate about solving
              complex challenges for modern utilities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We foster a culture of innovation, ownership, collaboration, and continuous
              learning — creating an environment where individuals can grow while delivering
              meaningful impact.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
            >
              Explore Opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">
              {CULTURE_PILLARS.map((p) => (
                <div key={p.label} className="reveal-area rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold" data-no-reveal style={{ WebkitTextFillColor: "inherit" }}>{p.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
