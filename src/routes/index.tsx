import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
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
import milestoneActiveImg from "@/assets/milestone-active.svg";
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
    title: "Smart Meter",
    img: solSmartMeterImg,
    text: "Purpose-built AMI for electricity, water and gas — covering smart metering, MDM, advanced data analytics, and connectivity across regions.",
    color: "cyan",
  },
  {
    tag: "COMMUNICATION",
    title: "Communication & Control",
    img: solCommunicationImg,
    text: "Communication-ready meter networks built for reliability, scalability, and seamless data sync across distributed networks.",
    color: "lavender",
  },
  {
    tag: "ANANTYA",
    title: "Anantya Intelligence",
    img: solIntelligenceImg,
    text: "Cloud-native analytics for AMI, MDM and beyond — turning raw operational data into clear decisions, faster.",
    color: "cyan",
  },
  {
    tag: "INTEGRATED",
    title: "Integrated Platform",
    img: solIntegratedImg,
    text: "Modular, configurable, and connected by design — one platform for every layer of the grid.",
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

const milestones = [
  { year: "2019", text: "Establishment of Iskraemeco India Private Limited. Operations begin with a single employee." },
  { year: "2020", text: "Core founding team joins. First office in Kolkata. First meter testing lab built in a residential bedroom." },
  { year: "2020–21", text: "Regulatory approvals and technical capability building across key utility verticals." },
  { year: "2021", text: "First major smart metering order secured from WBSEDCL." },
  { year: "2022", text: "Major project secured from Power Grid Corporation of India." },
  { year: "2022–24", text: "Rapid organisational growth and large-scale project expansion across India." },
  { year: "2024–25", text: "Strategic acquisition by Kaynes Technologies, enabling industrial-scale manufacturing." },
  { year: "2025–26", text: "Rebranding and launch of GridCrest — one ecosystem, every layer of the grid.", active: true },
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
                { prefix: "", target: 2, suffix: "", decimals: 0, l: "Factories (2 under construction)" },
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
          <div className="relative animate-fade-in-soft">
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
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
                    Explore More <ArrowRight className="h-3 w-3" />
                  </span>
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
            <SectionLabel align="left">WHY GRIDCREST</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Why GridCrest
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
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
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
      <section className="border-y border-border/60 bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>OUR JOURNEY</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
            Milestones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            From a regional metering company to a global smart-grid force — every year, a new chapter.
          </p>
          <MilestonesTrack />
        </div>
      </section>

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

const projectLocations = ["Gujarat", "Kerala", "West Bengal", "Nagaland", "Delhi"];
const manufacturingSites  = ["Hyderabad", "Mysuru"];


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
              Pan-India Presence,{" "}
              <span style={{ color: "var(--brand-cyan)" }}>Global Ambitions</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              From remote North-East deployments to coastal utilities — GridCrest is
              delivering intelligent grid infrastructure across India's most demanding
              programs, with global expansion on the horizon.
            </p>

            <div className="mt-10 space-y-7">
              {/* Project Locations */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-semibold text-accent">Project Locations</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {projectLocations.map((loc) => (
                      <FilterChip
                        key={loc}
                        as="span"
                        active={activeLocation === loc}
                        color="cyan"
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
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#A258DA]" />
                <div>
                  <p className="text-sm font-semibold text-[#A258DA]">Manufacturing Sites</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {manufacturingSites.map((loc) => (
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
                    <LabelChip color="purple">+2 new factories planned</LabelChip>
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

function MilestonesTrack() {
  const CARD_W = 300;
  const PEEK   = 28;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const [containerW, setContainerW] = useState(1200);

  // Track container width so the inner strip is always the right size
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerW(el.offsetWidth);
    const ro = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // JS-based "sticky left" — CSS sticky doesn't work inside overflow-x containers
  const onScroll = useCallback(() => {
    const sl = containerRef.current?.scrollLeft ?? 0;
    milestones.forEach((_, i) => {
      const card = cardRefs.current[i];
      if (!card) return;
      const push = sl - (i * CARD_W - i * PEEK);
      card.style.transform = push > 0 ? `translateX(${push}px)` : "";
    });
  }, []);

  // Drag-to-scroll
  const dragging  = useRef(false);
  const startX    = useRef(0);
  const scrollAt  = useRef(0);
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current  = e.pageX;
    scrollAt.current = containerRef.current?.scrollLeft ?? 0;
    if (containerRef.current) containerRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !containerRef.current) return;
    e.preventDefault();
    containerRef.current.scrollLeft = scrollAt.current - (e.pageX - startX.current) * 1.2;
  };

  // inner width: enough to scroll all (n-1) cards into their stack position
  const innerWidth = (milestones.length - 1) * CARD_W + containerW;

  return (
    <div
      ref={containerRef}
      className="mt-12 overflow-x-auto pb-2 select-none"
      style={{ cursor: "grab" }}
      onScroll={onScroll}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className="flex" style={{ width: innerWidth }}>
        {milestones.map((m, i) => (
          <div
            key={m.year}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="shrink-0"
            style={{ zIndex: i + 1, width: CARD_W }}
          >
            <div
              className={`flex flex-col justify-between rounded-2xl border p-6 ${
                m.active
                  ? "bg-primary text-primary-foreground border-primary shadow-[var(--shadow-card)]"
                  : "bg-card border-border"
              }`}
              style={{ minHeight: 220 }}
            >
              {m.active ? (
                <>
                  <div>
                    <div className="text-2xl font-bold text-primary-foreground">{m.year}</div>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/90">{m.text}</p>
                  </div>
                  <img
                    src={milestoneActiveImg}
                    alt="GridCrest milestone"
                    className="mt-4 h-16 w-auto self-start object-contain"
                    draggable={false}
                  />
                </>
              ) : (
                <>
                  <div className="text-2xl font-bold text-accent">{m.year}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
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
