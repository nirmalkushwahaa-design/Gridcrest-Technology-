import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Gauge,
  MessagesSquare,
  BarChart3,
  LayoutGrid,
  HandHeart,
  BrainCircuit,
  Network,
  Factory,
  Calendar,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";
import IndiaMapInteractive from "@/components/IndiaMapInteractive";
import logoUGVCL from "@/assets/logo-ugvcl.svg";
import logoCESC from "@/assets/logo-cesc.svg";
import logoKSEB from "@/assets/logo-kseb.svg";
import logoWBSEDCL from "@/assets/logo-wbsedcl.svg";
import heroImg from "@/assets/hero-ecosystem.png";
import utilitiesImg from "@/assets/utilities.jpg";
import governmentImg from "@/assets/government.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import gridcrestLogo from "@/assets/gridcrest-logo.svg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GridCrest — One Ecosystem. Every Layer of the Grid." },
      {
        name: "description",
        content:
          "Field-tested. Cloud-connected. GridCrest unites every layer of the modern energy network — metering, communication, intelligence, and platform.",
      },
      { property: "og:title", content: "GridCrest — One Ecosystem. Every Layer of the Grid." },
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
    icon: Gauge,
    text: "Purpose-built AMI for electricity, water and gas — covering smart metering, MDM, advanced data analytics, and connectivity across regions.",
    color: "cyan",
  },
  {
    tag: "COMMUNICATION",
    title: "Communication & Control",
    icon: MessagesSquare,
    text: "Communication-ready meter networks built for reliability, scalability, and seamless data sync across distributed networks.",
    color: "lavender",
  },
  {
    tag: "ANANTYA",
    title: "Anantya Intelligence",
    icon: BarChart3,
    text: "Cloud-native analytics for AMI, MDM and beyond — turning raw operational data into clear decisions, faster.",
    color: "cyan",
  },
  {
    tag: "INTEGRATED",
    title: "Integrated Platform",
    icon: LayoutGrid,
    text: "Modular, configurable, and connected by design — one platform for every layer of the grid.",
    color: "lavender",
  },
] as const;

const differentiators = [
  {
    icon: HandHeart,
    title: "End-to-End Ownership",
    text: "From silicon to dashboard, we design, build and service every layer ourselves.",
    bg: "bg-surface-cyan",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence-First Design",
    text: "Every device ships analytics-ready — data is a primary product, not a side effect.",
    bg: "bg-surface-lavender",
  },
  {
    icon: Network,
    title: "Protocol-Agnostic Communication",
    text: "RF, cellular, PLC, LoRa — meet utilities where their networks already are.",
    bg: "bg-surface-cyan",
  },
  {
    icon: Factory,
    title: "Manufacturing Backbone",
    text: "Backed by Kaynes Group's 30-year industrial backbone — providing supply-chain depth, traceability and cross-sector scale few infra start-ups can match.",
    bg: "bg-surface-lavender",
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
              One Ecosystem. <br />
              <span style={{ color: "var(--brand-cyan)" }}>
                Every Layer of the Grid.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              From the physical field to cloud-level intelligence in one place — GridCrest connects
              every node of the modern energy network.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solutions" className="hover-pop inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground shadow-[var(--shadow-card)] transition hover:brightness-95 text-center font-semibold">
                Explore Solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { prefix: "", target: 2, suffix: "M+", decimals: 0, l: "Meters Deployed" },
                { prefix: "₹", target: 600, suffix: "Cr+", decimals: 0, l: "Annual Revenue" },
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
          A Connected Ecosystem, Not Isolated Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          From the physical field layer to cloud-level intelligence — every GridCrest module is
          designed to work as one system.
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
            const Icon = s.icon;
            const active = i === activeSolution;
            return (
              <button
                key={s.title}
                onClick={() => setActiveSolution(i)}
                className={`group hover-lift flex gap-5 rounded-2xl border bg-card p-6 text-left shadow-[var(--shadow-card)] transition ${
                  active ? "border-primary/50 ring-1 ring-primary/30" : "border-border"
                }`}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                    s.color === "cyan" ? "bg-surface-cyan" : "bg-surface-lavender"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${s.color === "cyan" ? "text-primary" : "text-accent"}`}
                  />
                </div>
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

      {/* WHY GRIDCREST */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <SectionLabel align="left">WHY GRIDCREST</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What Makes Us Different
            </h2>
          </div>
          <p className="text-sm text-muted-foreground md:text-base">
            Clear advantages, not generic claims. Each differentiator is rooted in capabilities that
            translate to measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`hover-lift flex flex-col rounded-2xl ${d.bg} p-6`}
              >
                <Icon className="h-10 w-10 text-accent" />
                <h3 className="mt-5 text-base font-semibold leading-tight">{d.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.text}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-foreground"
                >
                  Explore More <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRY — hidden for phase 1 */}
      <section className="mx-auto max-w-7xl px-6 py-20 hidden">
        <SectionLabel>RELEVANCE LAYER</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
          Built for Your Industry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Sectoral solutions, purpose-built for the operational realities of electric, water and gas
          utilities — not retrofit from generic platforms.
        </p>

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
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={manufacturingImg}
              alt="Engineer with clipboard inside GridCrest manufacturing facility"
              width={800}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-md bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
              Made in India
            </span>
            <span className="absolute bottom-4 right-4 rounded-md bg-background/90 px-3 py-1 text-xs font-medium text-foreground">
              ISO Certified
            </span>
          </div>
          <div>
            <SectionLabel align="left">MANUFACTURING & INDUSTRIAL</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Real Infrastructure. Industrial Strength.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are backed by a deep-rooted manufacturing facility, an ISO-certified production
              process and the full data &amp; depth of the Kaynes Group ecosystem.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "State-of-the-Art Manufacturing",
                  text: "ISO 9001-aligned facility with 10+ certified production lines, capable of delivering 600K+ units per quarter.",
                },
                {
                  title: "Kaynes Group Ecosystem",
                  text: "Backed by Kaynes Group's 30-year industrial backbone — providing supply chain depth, traceability, and cross-sector scale few can match.",
                },
                {
                  title: "In-House R&D & Testing",
                  text: "Embedded hardware and firmware engineering teams with a fully in-house ISO 9001:2015 certified lab.",
                },
              ].map((b) => (
                <div key={b.title} className="border-l-2 border-primary pl-4">
                  <h4 className="text-sm font-semibold">{b.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95">
                Explore Our Capabilities
              </button>
              <a href="https://www.kaynestechnology.co.in/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-secondary">
                Kaynes Group ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionLabel>OUR JOURNEY</SectionLabel>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold tracking-tight md:text-4xl">
          Milestones
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          From a regional metering company to a global smart-grid force — every year, a new chapter.
        </p>

        <MilestonesTrack />
      </section>

      {/* PRESENCE */}
      <PresenceSection />

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-20 text-center shadow-[var(--shadow-cta)]" style={{ background: "var(--gradient-cta)" }}>
          <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            ENGAGEMENT
          </p>
          <h2 data-no-reveal className="relative mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Transform Your Grid?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
            Whether you're modernizing an existing network or building a smart grid from the ground
            up — GridCrest has the platform, the hardware, and the expertise to deliver.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90">
              Explore Solutions
            </button>
            <button className="rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Talk to our Team
            </button>
          </div>
          <p className="relative mt-8 text-xs uppercase tracking-[0.22em] text-white/70">
            ◆ Become a Partner
          </p>
          <p className="relative mt-2 text-xs text-white/60">
            Join our growing network of utility &amp; integration partners.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const projectLocations = ["Gujarat", "Kerala", "West Bengal", "Nagaland", "Delhi"];
const manufacturingSites  = ["Hyderabad", "Mysuru"];
const utilityPartners = [
  { name: "UGVCL",    logo: logoUGVCL },
  { name: "KSEB",     logo: logoKSEB },
  { name: "CESC",     logo: logoCESC },
  { name: "WBSEDCL", logo: logoWBSEDCL },
];


function PresenceSection() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const allLocations = [
    ...projectLocations.map((l) => ({ label: l, type: "project" as const })),
    ...manufacturingSites.map((l) => ({ label: l, type: "mfg" as const })),
  ];

  return (
    <section className="relative bg-background py-24" style={{ overflow: "clip" }}>

      <div className="mx-auto max-w-7xl px-6">
        {/* TOP: content + map */}
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
                      <span
                        key={loc}
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          activeLocation === loc
                            ? "border-accent bg-accent text-white"
                            : "border-border bg-secondary text-foreground hover:border-accent/50 hover:bg-accent/10"
                        }`}
                      >
                        {loc}
                      </span>
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
                      <span
                        key={loc}
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          activeLocation === loc
                            ? "border-[#A258DA] bg-[#A258DA] text-white"
                            : "border-border bg-secondary text-foreground hover:border-[#A258DA]/50 hover:bg-[#A258DA]/10"
                        }`}
                      >
                        {loc}
                      </span>
                    ))}
                    <span className="rounded-full border border-[#A258DA]/30 bg-[#A258DA]/8 px-3 py-1 text-xs font-medium text-[#A258DA]">
                      +2 new factories planned
                    </span>
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
                      <span
                        key={r}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trusted by */}
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Trusted by Leading Utilities
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-6">
                  {utilityPartners.map((p) => (
                    <div key={p.name} className="opacity-80 transition-all duration-300 hover:opacity-100">
                      <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: India map — sized to match left column */}
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

function MilestonesTrack() {
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
      className="mt-12 flex gap-4 overflow-x-auto pb-2 select-none"
      style={{ cursor: "grab" }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {milestones.map((m) => (
        <div
          key={m.year}
          className={`flex min-h-[160px] w-56 shrink-0 flex-col rounded-2xl p-5 transition ${
            m.active
              ? "bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
              : "bg-surface-lavender"
          }`}
        >
          {m.active && <Calendar className="mb-2 h-4 w-4" />}
          <div
            className={`text-2xl font-bold ${
              m.active ? "text-primary-foreground" : "text-accent"
            }`}
          >
            {m.year}
          </div>
          <p
            className={`mt-2 text-xs leading-snug ${
              m.active ? "text-primary-foreground/90" : "text-muted-foreground"
            }`}
          >
            {m.text}
          </p>
        </div>
      ))}
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
            // ease out cubic
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

function Logo() {
  return (
    <img src={gridcrestLogo} alt="GridCrest" className="h-12 w-auto" />
  );
}

function Header() {
  const items = ["Solutions", "Industries", "Technology", "Company", "Insights"];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((i) => (
            <a
              key={i}
              href="#"
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {i}
            </a>
          ))}
        </nav>
        <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-95">
          Contact Us
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-cyan/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            End-to-end smart grid infrastructure: from the field to the cloud, in one connected
            ecosystem.
          </p>
        </div>
        <FooterCol
          title="Solutions"
          links={[
            "Smart Metering",
            "Communication & Control (HES)",
            "Meter Data Management (MDM)",
            "Integrated Platform",
            "Technology Overview",
          ]}
        />
        <FooterCol
          title="Company"
          links={["About GridCrest", "Manufacturing", "Leadership", "Careers", "News & Press"]}
        />
        <FooterCol
          title="Resources"
          links={["Blog & Insights", "Utilities", "Government / Smart Programs", "Technical Docs", "Contact Us"]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground">
          <p>© 2025 GridCrest. All rights reserved. A Kaynes Technology Group Company.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
            <div className="flex items-center gap-3">
              <Linkedin className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
              <Mail className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
