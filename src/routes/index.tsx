import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { FilterChip, LabelChip, StaticChip } from "@/components/ui/Chip";
import solSmartMeterImg from "@/assets/sol-smart-meter.png";
import solCommunicationImg from "@/assets/sol-communication.png";
import solIntelligenceImg from "@/assets/sol-intelligence.png";
import solIntegratedImg from "@/assets/sol-integrated.png";
import {
  ArrowRight,
  BrainCircuit,
  Network,
  Factory,
  Calendar,
  Cpu,
  ShieldCheck,
  Layers,
} from "lucide-react";
import IndiaMapInteractive from "@/components/IndiaMapInteractive";
import { CtaBanner } from "@/components/CtaBanner";
import logoUGVCL from "@/assets/logo-ugvcl.svg";
import logoCESC from "@/assets/logo-cesc.svg";
import logoKSEB from "@/assets/logo-kseb.svg";
import logoWBSEDCL from "@/assets/logo-wbsedcl.svg";
import heroImg from "@/assets/hero-ecosystem.png";
import utilitiesImg from "@/assets/utilities.jpg";
import governmentImg from "@/assets/government.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GridCrest — One Platform. Complete Grid Intelligence." },
      {
        name: "description",
        content:
          "GridCrest brings together smart meters, communication networks, data platforms, and operational intelligence to help utilities improve reliability, efficiency, and customer service.",
      },
      { property: "og:title", content: "GridCrest — One Platform. Complete Grid Intelligence." },
      {
        property: "og:description",
        content:
          "From the physical field layer to cloud-level intelligence — GridCrest is built and engineered to work as one system.",
      },
    ],
  }),
  component: Index,
});

const solutions = [
  {
    tag: "FIELD",
    title: "Next-Gen Smart Meters",
    img: solSmartMeterImg,
    text: "Precision-engineered smart meters designed for accurate measurement, reliable performance, and future-ready utility operations.",
    color: "cyan",
  },
  {
    tag: "COMMUNICATION",
    title: "Flexible Communications",
    img: solCommunicationImg,
    text: "A communication-agnostic architecture supporting RF Mesh, Cellular, NB-IoT, PLC, and BLE to ensure seamless connectivity across diverse deployment environments.",
    color: "lavender",
  },
  {
    tag: "ANANTYA",
    title: "Anantya Unified Intelligence Platform",
    img: solIntelligenceImg,
    text: "A comprehensive software ecosystem integrating HES, MDM, WFM, consumer engagement, analytics, and operational intelligence into a single platform.",
    color: "cyan",
  },
  {
    tag: "INTEGRATED",
    title: "Anantya Services",
    img: solIntegratedImg,
    text: "End-to-end AMISP and utility transformation services that help utilities improve efficiency, enhance reliability, and deliver measurable business outcomes.",
    color: "lavender",
  },
];

const differentiators = [
  {
    icon: Layers,
    title: "Integrated by Design",
    text: "Devices, communications, software, and services engineered to work together as a unified ecosystem.",
    bg: "bg-surface-cyan",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence at Scale",
    text: "Convert billions of data points into operational visibility, actionable insights, and business value.",
    bg: "bg-surface-lavender",
  },
  {
    icon: Network,
    title: "Connectivity Without Constraints",
    text: "Support for RF Mesh, Cellular, NB-IoT, PLC, BLE, and hybrid communication networks across diverse utility environments.",
    bg: "bg-surface-cyan",
  },
  {
    icon: Cpu,
    title: "Semiconductor to Services",
    text: "Backed by Kaynes Group's expertise in electronics manufacturing and semiconductor innovation, delivering control, quality, and reliability across the entire value chain.",
    bg: "bg-surface-lavender",
  },
  {
    icon: ShieldCheck,
    title: "Execution You Can Trust",
    text: "Proven expertise in delivering complex utility programs—from planning and deployment to ongoing operations and managed services.",
    bg: "bg-surface-cyan",
  },
];

const MILESTONES = [
  { year: "2019",    title: "Founded",              text: "Establishment of Iskraemeco India Private Limited. Operations begin with a single employee." },
  { year: "2020",    title: "First Office & Lab",   text: "Core founding team joins. First office in Kolkata. First meter testing lab built in a residential bedroom." },
  { year: "2020-21", title: "Regulatory Readiness", text: "Regulatory approvals and technical capability building across key utility verticals." },
  { year: "2021",    title: "First Major Order",    text: "First major smart metering order secured from WBSEDCL." },
  { year: "2022",    title: "Power Grid Win",        text: "Major project secured from Power Grid Corporation of India." },
  { year: "2022-24", title: "Rapid Expansion",      text: "Rapid organisational growth and large-scale project expansion across India." },
  { year: "2024-25", title: "Kaynes Acquisition",   text: "Strategic acquisition by Kaynes Technologies, enabling industrial-scale manufacturing." },
  { year: "2025-26", title: "GridCrest Launch",     text: "Rebranding and launch of GridCrest — one ecosystem, every layer of the grid.", active: true },
];

const utilityPartners = [
  { name: "UGVCL",    logo: logoUGVCL },
  { name: "KSEB",     logo: logoKSEB },
  { name: "CESC",     logo: logoCESC },
  { name: "WBSEDCL", logo: logoWBSEDCL },
];

function Index() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-cyan/40 to-background" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-in-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              From Field to Intelligence
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              One Platform. <br />
              <span style={{ color: "var(--brand-cyan)" }}>
                Complete Grid Intelligence.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              GridCrest brings together smart meters, communication networks, data platforms, and
              operational intelligence to help utilities improve reliability, efficiency, and customer service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solutions" className="hover-pop inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-[var(--shadow-card)] transition hover:brightness-95 text-center font-semibold">
                Explore Solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { prefix: "", target: 2, suffix: "M+", decimals: 0, l: "Meters Deployed" },
                { prefix: "", target: 4, suffix: "", decimals: 0, l: "Factories (2 under construction)" },
                { prefix: "", target: 5, suffix: "L+", decimals: 0, l: "Monthly Production" },
                { prefix: "", target: 2500, suffix: "+", decimals: 0, l: "Employees" },
              ].map((s, i) => (
                <div key={s.l} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <div className="text-2xl font-bold text-accent md:text-3xl">
                    <CountUp prefix={s.prefix} target={s.target} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground whitespace-nowrap">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block animate-fade-in-soft">
            <div className="absolute inset-0 -z-10 mx-auto h-72 w-72 rounded-full bg-primary/30 blur-3xl md:h-96 md:w-96 animate-float" />
            <img
              src={heroImg}
              alt="GridCrest connected smart grid ecosystem with smart meters, towers, solar, and data centers"
              width={1024}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto w-full max-w-xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel>SOLUTIONS & SERVICES</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
          One Ecosystem. Endless Possibilities.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          GridCrest combines intelligent devices, adaptive communications, digital platforms, and domain
          expertise to help utilities accelerate their transformation journey.
        </p>

        {/* Pipeline tabs */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {["FIELD", "COMMUNICATION", "ANANTYA", "INTEGRATED"].map((tag, i) => (
            <div key={tag} className="flex items-center gap-2">
              <button
                onClick={() => setActiveSolution(i)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeSolution === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
              {i < 3 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutions.map((s, i) => {
            const active = i === activeSolution;
            return (
              <button
                key={s.title}
                onClick={() => setActiveSolution(i)}
                className={`group hover-lift flex gap-5 rounded-2xl border bg-card p-4 text-left shadow-[var(--shadow-card)] transition ${
                  active ? "border-primary/50 ring-1 ring-primary/30" : "border-border"
                }`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="shrink-0 object-contain select-none"
                  style={{ width: 160, height: 160 }}
                  draggable={false}
                />
                <div className="flex-1">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                      s.color === "cyan" ? "text-primary" : "text-accent"
                    }`}
                  >
                    {s.tag}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-y border-border/60 bg-secondary py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by Leading Utilities
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {utilityPartners.map((p) => (
              <div key={p.name} className="opacity-70 transition-all duration-300 hover:opacity-100">
                <img src={p.logo} alt={p.name} className="h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GRIDCREST */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <SectionLabel align="left">OUR EDGE</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
          <p className="text-sm text-muted-foreground md:text-base">
            Built on deep utility expertise, proven technology, and end-to-end execution capabilities
            to deliver measurable outcomes for utilities.
          </p>
        </div>

        <ScrollTrack className="mt-10">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`hover-lift flex w-72 shrink-0 flex-col rounded-2xl ${d.bg} p-6`}
              >
                <Icon className="h-10 w-10 text-accent" />
                <h3 className="mt-5 text-base font-semibold leading-tight">{d.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.text}</p>
              </div>
            );
          })}
        </ScrollTrack>
      </section>

      {/* INDUSTRY — hidden */}
      <section className="mx-auto max-w-7xl px-6 py-20 hidden">
        <SectionLabel>RELEVANCE LAYER</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
          Built for Your Industry
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <IndustryCard
            img={utilitiesImg}
            tag="ELECTRICITY · WATER · GAS"
            title="Utilities"
            text="Purpose-built AMI for electric, water and gas utilities — covering smart metering, MDM, advanced operations & analytics, and reliable customer experience."
            cta="Explore Utilities"
          />
          <IndustryCard
            img={governmentImg}
            tag="RDSS · REVAMP · SMART CITIES"
            title="Government / Smart Programs"
            text="Government deployments for RDSS, REVAMP, and Smart Cities Mission — end-to-end deployment in line with state and program criteria for a faster public roll-out."
            cta="Explore Government Programs"
          />
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>ENGINEERING & MANUFACTURING EXCELLENCE</SectionLabel>
          <h2 className="mx-auto mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl whitespace-nowrap">
            From Semiconductor to Services. Built for Scale.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            GridCrest combines utility domain expertise with the engineering and manufacturing
            capabilities of Kaynes Group, creating a unique foundation for delivering reliable,
            scalable, and future-ready utility solutions.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "Manufacturing at Scale",
                text: "Advanced manufacturing facilities and quality-driven processes supporting large-scale smart meter and utility technology deployments.",
              },
              {
                icon: Cpu,
                title: "Engineering-Led Innovation",
                text: "Dedicated hardware, firmware, and software teams working together to develop utility-grade solutions designed for long-term performance.",
              },
              {
                icon: ShieldCheck,
                title: "Backed by Kaynes Group",
                text: "Leveraging decades of expertise in electronics manufacturing, industrial engineering, and supply chain excellence to ensure dependable delivery and support.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                <card.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/manufacturing" className="btn-primary">
              Explore Manufacturing
            </Link>
            <a href="https://www.kaynestechnology.co.in/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Kaynes Group ↗
            </a>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <MilestonesSection />

      {/* PRESENCE */}
      <PresenceSection />

      {/* CTA */}
      <CtaBanner
        eyebrow="GET STARTED"
        title="Building the Connected Utility of Tomorrow"
        description="From intelligent devices and communication networks to utility platforms and managed services, GridCrest delivers integrated solutions for modern utility operations."
        primary={{ label: "Explore Solutions", to: "/solutions" }}
        secondary={{ label: "Talk to Our Experts", to: "/contact" }}
      />

    </div>
  );
}

const projectLocations = ["Gujarat", "Kerala", "West Bengal", "Kolkata", "New Delhi"];
const manufacturingSites  = ["Hyderabad", "Mysuru", "Chamarajanagar"];

function MilestonesSection() {
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
    <section className="py-20">
      <div className="text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Milestones</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">Our Journey</h2>
        <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
          From a regional metering company to a global smart-grid force — every year, a new chapter.
        </p>
      </div>

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
                  <div className="flex items-center">
                    <div
                      className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-8 ${
                        isActive
                          ? "bg-primary ring-primary/10"
                          : isPastOrActive
                          ? "bg-accent/10 ring-accent/5"
                          : "bg-secondary ring-secondary/5"
                      }`}
                    >
                      {isActive ? (
                        <svg className="h-3.5 w-3.5 text-primary-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                        </svg>
                      ) : (
                        <svg className={`h-3.5 w-3.5 ${isPastOrActive ? "text-accent" : "text-muted-foreground"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    {!isLast && (
                      <div
                        className="h-px w-full opacity-30"
                        style={{ background: i < activeIndex ? "var(--color-accent)" : "var(--color-border)" }}
                      />
                    )}
                  </div>

                  <div className="mt-4 pe-6">
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

function PresenceSection() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="relative bg-background py-24" style={{ overflow: "clip" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our Reach
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              Pan-India Presence,<br />
              <span style={{ color: "var(--brand-cyan)" }} className="whitespace-nowrap">Global Ambitions</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              From remote North-East deployments to coastal utilities — GridCrest is
              delivering intelligent grid infrastructure across India's most demanding
              programs, with global expansion on the horizon.
            </p>

            <div className="mt-10 space-y-7">
              {/* Project Locations */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#9761E6]" />
                <div>
                  <p className="text-sm font-semibold text-[#9761E6]">Project Locations</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {projectLocations.map((loc) => (
                      <FilterChip
                        key={loc}
                        as="span"
                        active={activeLocation === loc}
                        color="orange"
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                      >
                        {loc}
                      </FilterChip>
                    ))}
                  </div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#1DC0D2]" />
                <div>
                  <p className="text-sm font-semibold text-[#1DC0D2]">Manufacturing Sites</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {manufacturingSites.map((loc) => (
                      <FilterChip
                        key={loc}
                        as="span"
                        active={activeLocation === loc}
                        color="pink"
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                      >
                        {loc}
                      </FilterChip>
                    ))}
                    <LabelChip color="pink">+2 new factories planned</LabelChip>
                  </div>
                </div>
              </div>

              {/* 2026 & Beyond */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-border" />
                <div>
                  <p className="text-sm font-semibold text-foreground">2026 &amp; Beyond</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Global expansion into Europe, Americas and Africa
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Europe", "Americas", "Africa"].map((r) => (
                      <StaticChip key={r}>{r}</StaticChip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: India map */}
          <div className="hidden lg:flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
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

function ScrollTrack({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseLeave = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={trackRef}
      className={`flex gap-4 overflow-x-auto pb-4 select-none ${className}`}
      style={{ cursor: "grab" }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}


function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  const display =
    target >= 1000
      ? Math.round(count).toLocaleString()
      : decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

function SectionLabel({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] text-accent ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

function IndustryCard({
  img,
  tag,
  title,
  text,
  cta,
}: {
  img: string;
  tag: string;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <article className="hover-lift overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          width={800}
          height={512}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <span className="absolute right-4 top-4 rounded-md bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{text}</p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
        >
          {cta} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
