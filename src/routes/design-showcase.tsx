import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Layers,
  Zap,
  Eye,
  Palette,
  Type,
  Sparkles,
  Activity,
  TrendingUp,
  Code2,
  Atom,
  MousePointer2,
  Star,
  CheckCircle,
  Grid3x3,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { FilterChip, LabelChip, StaticChip, EyebrowChip } from "@/components/ui/Chip";
import GlassSurface from "@/components/GlassSurface";

export const Route = createFileRoute("/design-showcase")({
  head: () => ({
    meta: [
      { title: "Design Showcase — Gridcrest Technology" },
      {
        name: "description",
        content:
          "A cinematic showcase of Gridcrest Technology's design system — glass, motion, color, and precision at every layer.",
      },
    ],
  }),
  component: DesignShowcase,
});

/* ─────────────────────────── data ─────────────────────────── */
const chartData = [
  { month: "Jan", value: 24, prev: 18 },
  { month: "Feb", value: 38, prev: 25 },
  { month: "Mar", value: 31, prev: 29 },
  { month: "Apr", value: 52, prev: 34 },
  { month: "May", value: 45, prev: 40 },
  { month: "Jun", value: 67, prev: 45 },
  { month: "Jul", value: 73, prev: 52 },
  { month: "Aug", value: 85, prev: 60 },
  { month: "Sep", value: 91, prev: 71 },
  { month: "Oct", value: 88, prev: 79 },
  { month: "Nov", value: 96, prev: 85 },
  { month: "Dec", value: 100, prev: 90 },
];

const brandPalette = [
  { name: "Brand Cyan", hex: "#1DC0D2", var: "--brand-cyan", use: "Primary actions" },
  { name: "Brand Navy", hex: "#1A3A5C", var: "--brand-navy", use: "Text & headers" },
  { name: "Navy Hover", hex: "#165AA3", var: "--brand-navy-hover", use: "Interactive" },
  { name: "Cyan Light", hex: "#DBFBFF", var: "--brand-cyan-light", use: "Highlights" },
  { name: "Purple Accent", hex: "#9761E6", var: "--accent", use: "Labels, accents" },
  { name: "Purple Deep", hex: "#A258DA", var: "text-title", use: "Section titles" },
];

const principles = [
  {
    icon: Eye,
    title: "Clarity First",
    sub: "Signal over noise.",
    desc: "Every element earns its place. Visual hierarchy guides the eye with intention — no decoration without function.",
    color: "#1DC0D2",
  },
  {
    icon: Zap,
    title: "Motion with Purpose",
    sub: "Animation is communication.",
    desc: "Every transition conveys state. From scroll reveals to micro-interactions — motion tells the story before words do.",
    color: "#A258DA",
  },
  {
    icon: Layers,
    title: "Depth & Material",
    sub: "Glass. Blur. Shadow.",
    desc: "Layers of light and transparency create spatial relationships that feel physical — real surfaces in digital space.",
    color: "#9761E6",
  },
];

const glassFeatures = [
  { label: "Chromatic Aberration", icon: Atom },
  { label: "SVG Displacement Maps", icon: Grid3x3 },
  { label: "Backdrop Blur", icon: Layers },
  { label: "Saturation Boost", icon: Palette },
  { label: "Inset Highlights", icon: Star },
  { label: "Dynamic Shadows", icon: Activity },
];

/* ─────────────────────────── root ─────────────────────────── */
function DesignShowcase() {
  return (
    <div className="overflow-x-hidden bg-background">
      <HeroSection />
      <PrinciplesSection />
      <ColorSystemSection />
      <TypographySection />
      <GlassDepthSection />
      <ComponentShowcase />
      <DataVizSection />
      <GlassTicker />
      <FinalCta />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — dark, cinematic, glass panel center stage
═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050c14" }}
    >
      {/* Mesh gradient blobs */}
      <MeshBlobs />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,192,210,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,192,210,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          <EyebrowChip className="mb-8 border-white/10 bg-white/5 text-white/60 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Design Showcase · Gridcrest Technology
          </EyebrowChip>

          <h1
            className="font-display font-black text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            data-no-reveal
          >
            Design is our
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #1DC0D2 0%, #9761E6 50%, #A258DA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              native language.
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-lg text-white/50 leading-relaxed">
            Every pixel, transition, and surface is engineered with intention.
            This showcase demonstrates the visual craft behind Gridcrest's design system.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#glass" className="btn-primary">
              Explore Glass Effects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#components" className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/80 hover:text-white transition-colors">
              View Components
            </a>
          </div>
        </div>

        {/* Floating glass cards */}
        <div className="mt-20 relative">
          <HeroGlassPreview />
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="h-8 w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function MeshBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-15%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(29,192,210,0.35) 0%, transparent 70%)",
          animation: "blob-a 18s ease-in-out infinite",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(162,88,218,0.28) 0%, transparent 70%)",
          animation: "blob-b 22s ease-in-out infinite",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "-5%",
          left: "25%",
          background: "radial-gradient(circle, rgba(151,97,230,0.2) 0%, transparent 70%)",
          animation: "blob-c 16s ease-in-out infinite",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          top: "40%",
          left: "40%",
          background: "radial-gradient(circle, rgba(29,192,210,0.15) 0%, transparent 70%)",
          animation: "blob-d 14s ease-in-out infinite",
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

function HeroGlassPreview() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Main center glass panel */}
      <div
        className="relative mx-auto rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(40px) saturate(2)",
          WebkitBackdropFilter: "blur(40px) saturate(2)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(29,192,210,0.08)",
          maxWidth: 680,
          padding: "2px",
        }}
      >
        {/* Shimmer border */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(29,192,210,0.3), transparent 40%, rgba(162,88,218,0.3) 80%, transparent)",
            WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "inherit",
          }}
        />

        <div className="p-8">
          {/* Top bar mock */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />
            <div
              className="ml-auto flex-1 max-w-48 h-6 rounded-md"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            />
          </div>

          {/* Mini chart */}
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData.slice(0, 8)}>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1DC0D2" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#1DC0D2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#1DC0D2" strokeWidth={2} fill="url(#heroGrad)" dot={false} />
                <Area type="monotone" dataKey="prev" stroke="#9761E6" strokeWidth={1.5} fill="none" dot={false} strokeDasharray="4 3" strokeOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Uptime", val: "99.9%", color: "#1DC0D2" },
              { label: "Meters", val: "2M+", color: "#9761E6" },
              { label: "Accuracy", val: "±0.5%", color: "#A258DA" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-xl font-bold font-display" style={{ color: s.color }}>
                  {s.val}
                </div>
                <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side floating cards */}
      <div
        className="absolute -left-16 top-12 hidden lg:block rounded-2xl p-4"
        style={{
          background: "rgba(29,192,210,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(29,192,210,0.2)",
          boxShadow: "0 12px 40px rgba(29,192,210,0.15)",
          width: 140,
          animation: "float-y 7s ease-in-out infinite",
        }}
      >
        <Activity className="h-5 w-5 text-cyan-400 mb-2" />
        <div className="text-white text-sm font-semibold">Live Feed</div>
        <div className="text-white/40 text-xs mt-0.5">42 events/s</div>
        <div className="mt-2 h-1 rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full" style={{ background: "#1DC0D2" }} />
        </div>
      </div>

      <div
        className="absolute -right-16 top-20 hidden lg:block rounded-2xl p-4"
        style={{
          background: "rgba(162,88,218,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(162,88,218,0.2)",
          boxShadow: "0 12px 40px rgba(162,88,218,0.15)",
          width: 140,
          animation: "float-y 9s ease-in-out infinite 1s",
        }}
      >
        <TrendingUp className="h-5 w-5 text-purple-400 mb-2" />
        <div className="text-white text-sm font-semibold">Efficiency</div>
        <div className="text-2xl font-bold font-display mt-1" style={{ color: "#A258DA" }}>
          +38%
        </div>
      </div>

      <div
        className="absolute -right-12 bottom-8 hidden lg:block rounded-2xl p-4"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          width: 150,
          animation: "float-y 8s ease-in-out infinite 2s",
        }}
      >
        <CheckCircle className="h-4 w-4 mb-2" style={{ color: "#1DC0D2" }} />
        <div className="text-white/70 text-xs">All systems</div>
        <div className="text-white text-sm font-semibold mt-0.5">Operational</div>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-2 rounded-full"
              style={{ background: i < 7 ? "#1DC0D2" : "rgba(255,255,255,0.15)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DESIGN PRINCIPLES
═══════════════════════════════════════════════════════════════ */
function PrinciplesSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#080f1a" }}>
      <MeshBlobs />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            Philosophy
          </EyebrowChip>
          <h2
            className="text-white font-display font-black leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            data-no-reveal
          >
            Three principles.
            <br />
            <span style={{ color: "#1DC0D2" }}>Infinite possibilities.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: `rgba(255,255,255,0.03)`,
                  backdropFilter: "blur(32px) saturate(1.8)",
                  WebkitBackdropFilter: "blur(32px) saturate(1.8)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-3xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 0 0, ${p.color}22, transparent 70%)`,
                  }}
                />

                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    boxShadow: `0 0 24px ${p.color}20`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: p.color }} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: p.color }}>
                  {p.sub}
                </p>
                <h3 className="text-xl font-bold font-display text-white mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{p.desc}</p>

                {/* Bottom border glow on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COLOR SYSTEM
═══════════════════════════════════════════════════════════════ */
function ColorSystemSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="colors"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080f1a 0%, #0d1520 50%, #080f1a 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
              <Palette className="h-3 w-3" /> Color System
            </EyebrowChip>
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              data-no-reveal
            >
              OKLCH color science
              <br />
              meets brand precision.
            </h2>
            <p className="mt-6 text-white/50 leading-relaxed">
              Every color is defined in perceptual OKLCH — the modern color space that
              ensures consistent lightness, predictable chroma shifts, and accessible
              contrast ratios across the entire palette.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {[
                { label: "Perceptual Lightness", val: "OKLCH" },
                { label: "WCAG 2.1 AA+", val: "All semantic colors" },
                { label: "Dark mode", val: "Fully supported" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-white/40">{item.label}</span>
                  <span
                    className="rounded-full px-3 py-0.5 text-xs font-semibold"
                    style={{
                      background: "rgba(29,192,210,0.12)",
                      border: "1px solid rgba(29,192,210,0.25)",
                      color: "#1DC0D2",
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {brandPalette.map((c) => (
              <div
                key={c.name}
                className="group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: hovered === c.name ? `0 0 40px ${c.hex}40` : "none",
                  transform: hovered === c.name ? "scale(1.03) translateY(-2px)" : "scale(1)",
                }}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="h-24 w-full transition-all duration-300"
                  style={{
                    background: c.hex,
                    filter: hovered === c.name ? "brightness(1.1)" : "brightness(1)",
                  }}
                />
                <div className="p-3">
                  <div className="text-xs font-semibold text-white/90">{c.name}</div>
                  <div className="text-xs text-white/40 font-mono mt-0.5">{c.hex}</div>
                  <div className="text-xs text-white/30 mt-1">{c.use}</div>
                </div>
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${c.hex}15, transparent 70%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Semantic token strip */}
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
            Semantic Tokens
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "background", color: "#fafafa", dark: true },
              { label: "foreground", color: "#2a2f3d" },
              { label: "primary", color: "#1DC0D2" },
              { label: "secondary", color: "#f5f6fb" },
              { label: "accent", color: "#9761E6" },
              { label: "muted", color: "#7a7e8c" },
              { label: "border", color: "#e8eaf0" },
              { label: "destructive", color: "#e5533a" },
              { label: "surface-cyan", color: "#f0fcfd" },
              { label: "surface-lavender", color: "#f4f0fd" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="h-3.5 w-3.5 rounded-full shrink-0"
                  style={{
                    background: t.color,
                    boxShadow: `0 0 8px ${t.color}80`,
                    border: t.dark ? "1px solid rgba(0,0,0,0.1)" : "none",
                  }}
                />
                <span className="text-xs font-mono text-white/60">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TYPOGRAPHY
═══════════════════════════════════════════════════════════════ */
function TypographySection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#060b12" }}
    >
      {/* Subtle blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(162,88,218,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            <Type className="h-3 w-3" /> Typography
          </EyebrowChip>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Display / Montserrat */}
          <div
            className="rounded-3xl p-8 lg:p-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="text-xs font-mono text-white/30 mb-4 flex items-center gap-3">
              <span
                className="rounded px-2 py-0.5"
                style={{ background: "rgba(29,192,210,0.1)", color: "#1DC0D2" }}
              >
                --font-display
              </span>
              Montserrat
            </div>

            <div className="space-y-3">
              {[
                { size: "7xl", px: "72px", weight: "Black 900", text: "Aa" },
                { size: "5xl", px: "48px", weight: "Bold 700", text: "Display" },
                { size: "3xl", px: "30px", weight: "SemiBold 600", text: "Section Header" },
                { size: "xl", px: "20px", weight: "Medium 500", text: "Subsection Title" },
                { size: "base", px: "16px", weight: "Regular 400", text: "Interface Label" },
              ].map((t) => (
                <div key={t.size} className="flex items-baseline gap-4">
                  <span
                    className="font-display text-white"
                    style={{ fontSize: t.px, fontWeight: t.weight.includes("Black") ? 900 : t.weight.includes("Bold") ? 700 : t.weight.includes("Semi") ? 600 : t.weight.includes("Medium") ? 500 : 400, lineHeight: 1.1 }}
                  >
                    {t.text}
                  </span>
                  <span className="text-xs text-white/25 font-mono shrink-0">{t.px} · {t.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Body / Inter */}
          <div
            className="rounded-3xl p-8 lg:p-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="text-xs font-mono text-white/30 mb-4 flex items-center gap-3">
              <span
                className="rounded px-2 py-0.5"
                style={{ background: "rgba(162,88,218,0.1)", color: "#A258DA" }}
              >
                --font-body
              </span>
              Inter
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs text-white/25 font-mono mb-1">Body / 16px</div>
                <p className="text-white/70 leading-relaxed text-base">
                  GridCrest brings together smart meters, communication networks, data platforms,
                  and operational intelligence to help utilities improve reliability and efficiency.
                </p>
              </div>
              <div>
                <div className="text-xs text-white/25 font-mono mb-1">Small / 14px</div>
                <p className="text-white/50 text-sm leading-relaxed">
                  From the physical field layer to cloud-level intelligence — engineered to
                  work as one unified system with semiconductor-to-services integration.
                </p>
              </div>
              <div>
                <div className="text-xs text-white/25 font-mono mb-1">Caption / 12px</div>
                <p className="text-white/35 text-xs leading-relaxed tracking-wide">
                  Technical specifications · Data metrics · System labels · Helper text
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                {["Aa", "Bb", "Cc", "Dd", "Ee", "Ff"].map((l) => (
                  <span key={l} className="text-2xl font-body text-white/20 font-light">{l}</span>
                ))}
                {["1", "2", "3", "4", "5"].map((n) => (
                  <span key={n} className="text-2xl font-body text-white/20">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scale ruler */}
        <div
          className="mt-10 rounded-2xl p-6 overflow-x-auto"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-end gap-4 min-w-max">
            {[
              { size: "10px", label: "xs" },
              { size: "12px", label: "sm" },
              { size: "14px", label: "base" },
              { size: "16px", label: "md" },
              { size: "18px", label: "lg" },
              { size: "20px", label: "xl" },
              { size: "24px", label: "2xl" },
              { size: "30px", label: "3xl" },
              { size: "36px", label: "4xl" },
              { size: "48px", label: "5xl" },
              { size: "60px", label: "6xl" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div
                  className="font-display font-bold text-white/80"
                  style={{ fontSize: s.size, lineHeight: 1 }}
                >
                  G
                </div>
                <span className="text-[9px] font-mono text-white/25">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GLASS DEPTH — star of the show
═══════════════════════════════════════════════════════════════ */
function GlassDepthSection() {
  const [intensity, setIntensity] = useState(50);
  const [blur, setBlur] = useState(24);

  return (
    <section
      id="glass"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0d1525 50%, #0a1020 100%)",
      }}
    >
      {/* Vivid blobs for the glass to distort over */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "5%",
            left: "5%",
            background: "radial-gradient(circle, rgba(29,192,210,0.55) 0%, rgba(29,192,210,0.2) 40%, transparent 70%)",
            filter: "blur(0)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "30%",
            right: "5%",
            background: "radial-gradient(circle, rgba(162,88,218,0.5) 0%, rgba(151,97,230,0.2) 40%, transparent 70%)",
            filter: "blur(0)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: "10%",
            left: "30%",
            background: "radial-gradient(circle, rgba(26,58,92,0.8) 0%, rgba(29,192,210,0.15) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            <Layers className="h-3 w-3" /> Glass System
          </EyebrowChip>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            data-no-reveal
          >
            Real glass. Real depth.
            <br />
            <span style={{ color: "#1DC0D2" }}>Not just blur.</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto">
            Our glass surfaces use SVG displacement maps and chromatic aberration to simulate
            true lens refraction — far beyond a simple CSS backdrop-filter.
          </p>
        </div>

        {/* Glass variant matrix */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Pure CSS glass */}
          <div
            className="relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(32px) saturate(2.2) brightness(1.1)",
              WebkitBackdropFilter: "blur(32px) saturate(2.2) brightness(1.1)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
            />
            <Layers className="h-6 w-6 mb-4" style={{ color: "#1DC0D2" }} />
            <h3 className="font-display font-bold text-white text-lg mb-2">Frosted Glass</h3>
            <p className="text-white/45 text-sm">Pure CSS backdrop-filter with high saturation boost and top-edge highlight.</p>
            <div className="mt-4 text-xs font-mono text-white/25">backdrop-filter: blur(32px)</div>
          </div>

          {/* Cyan tinted */}
          <div
            className="relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(29,192,210,0.08)",
              backdropFilter: "blur(24px) saturate(2)",
              WebkitBackdropFilter: "blur(24px) saturate(2)",
              border: "1px solid rgba(29,192,210,0.28)",
              boxShadow: "0 8px 40px rgba(29,192,210,0.18), inset 0 1px 0 rgba(29,192,210,0.25)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, transparent, rgba(29,192,210,0.6), transparent)" }}
            />
            <Atom className="h-6 w-6 mb-4" style={{ color: "#1DC0D2" }} />
            <h3 className="font-display font-bold text-white text-lg mb-2">Tinted Glass</h3>
            <p className="text-white/45 text-sm">Subtle cyan tint with matching border glow — creates depth without obscuring content.</p>
            <div className="mt-4 text-xs font-mono" style={{ color: "rgba(29,192,210,0.5)" }}>background: rgba(#1DC0D2, 0.08)</div>
          </div>

          {/* SVG displacement glass */}
          <div className="relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
            <GlassSurface
              width="100%"
              height="100%"
              borderRadius={24}
              brightness={60}
              opacity={0.85}
              blur={14}
              distortionScale={-200}
              redOffset={0}
              greenOffset={12}
              blueOffset={24}
              className="!rounded-3xl"
              style={{ padding: 0 }}
            >
              <div className="p-8 w-full text-left">
                <Code2 className="h-6 w-6 mb-4" style={{ color: "#A258DA" }} />
                <h3 className="font-display font-bold text-foreground text-lg mb-2">SVG Chromatic</h3>
                <p className="text-muted-foreground text-sm">
                  Displacement map + RGB channel splitting = true optical glass with chromatic aberration.
                </p>
                <div className="mt-4 text-xs font-mono text-muted-foreground/60">feDisplacementMap · feColorMatrix</div>
              </div>
            </GlassSurface>
          </div>
        </div>

        {/* Interactive glass playground */}
        <div
          className="relative rounded-3xl p-8 lg:p-12"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-2">Live Glass Playground</h3>
              <p className="text-white/45 text-sm mb-8">Drag the sliders to feel the glass respond.</p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-white/50 mb-2">
                    <span>Brightness</span>
                    <span className="font-mono">{intensity}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={90}
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: "#1DC0D2" }}
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/50 mb-2">
                    <span>Blur</span>
                    <span className="font-mono">{blur}px</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={60}
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: "#A258DA" }}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {glassFeatures.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.label}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <Icon className="h-3 w-3" />
                      {f.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live preview */}
            <div className="relative h-64 rounded-2xl overflow-hidden" style={{ background: "transparent" }}>
              {/* Colorful bg for glass to sit over */}
              <div className="absolute inset-0">
                <div
                  className="absolute w-48 h-48 rounded-full"
                  style={{
                    top: "-10%",
                    left: "-10%",
                    background: "radial-gradient(circle, #1DC0D2 0%, rgba(29,192,210,0.3) 50%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute w-40 h-40 rounded-full"
                  style={{
                    bottom: "-10%",
                    right: "-10%",
                    background: "radial-gradient(circle, #A258DA 0%, rgba(162,88,218,0.3) 50%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute w-32 h-32 rounded-full"
                  style={{
                    top: "30%",
                    right: "10%",
                    background: "radial-gradient(circle, #9761E6 0%, transparent 70%)",
                  }}
                />
              </div>
              {/* The glass card */}
              <div
                className="absolute inset-8 rounded-2xl flex items-center justify-center"
                style={{
                  background: `rgba(255,255,255,${intensity / 1200})`,
                  backdropFilter: `blur(${blur}px) saturate(1.8)`,
                  WebkitBackdropFilter: `blur(${blur}px) saturate(1.8)`,
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.2)",
                  transition: "backdrop-filter 0.1s",
                }}
              >
                <div className="text-center">
                  <div className="text-white font-display font-bold text-xl">Glass Surface</div>
                  <div className="text-white/50 text-sm mt-1">blur: {blur}px · brightness: {intensity}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT SHOWCASE
═══════════════════════════════════════════════════════════════ */
function ComponentShowcase() {
  const [activeChip, setActiveChip] = useState<string | null>("Utilities");

  return (
    <section
      id="components"
      className="relative py-32 overflow-hidden"
      style={{ background: "#070c16" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(29,192,210,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(162,88,218,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            <MousePointer2 className="h-3 w-3" /> Component Library
          </EyebrowChip>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            data-no-reveal
          >
            Built to interact.
            <br />
            <span style={{ color: "#A258DA" }}>Engineered to delight.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons */}
          <GlassCell title="Buttons" icon={Zap}>
            <div className="flex flex-col gap-3">
              <button className="btn-primary w-full">Primary Action</button>
              <button className="btn-secondary w-full">Secondary Action</button>
              <button className="btn-ghost w-full">Ghost Button</button>
              <div className="flex gap-2">
                <button
                  className="flex-1 rounded-full py-2.5 text-sm font-semibold text-white/70 transition-all hover:text-white hover:scale-105 active:scale-95"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Outline
                </button>
                <button
                  className="flex-1 rounded-full py-2.5 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                  style={{ background: "rgba(29,192,210,0.15)", border: "1px solid rgba(29,192,210,0.3)", color: "#1DC0D2" }}
                >
                  Tinted
                </button>
              </div>
            </div>
          </GlassCell>

          {/* Chips */}
          <GlassCell title="Chips & Tags" icon={Star}>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {["Utilities", "Smart Grid", "AMISP", "IoT"].map((tag) => (
                  <FilterChip
                    key={tag}
                    active={activeChip === tag}
                    color="cyan"
                    onClick={() => setActiveChip(tag === activeChip ? null : tag)}
                  >
                    {tag}
                  </FilterChip>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <LabelChip color="cyan">Cyan Label</LabelChip>
                <LabelChip color="purple">Purple</LabelChip>
                <LabelChip color="amber">Amber</LabelChip>
              </div>
              <div className="flex flex-wrap gap-2">
                <StaticChip>Static Tag</StaticChip>
                <StaticChip>Read-only</StaticChip>
                <StaticChip>v2.4.1</StaticChip>
              </div>
            </div>
          </GlassCell>

          {/* Badges */}
          <GlassCell title="Status Badges" icon={CheckCircle}>
            <div className="space-y-2">
              {[
                { label: "Operational", color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
                { label: "Processing", color: "#1DC0D2", bg: "rgba(29,192,210,0.1)" },
                { label: "Pending", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
                { label: "Warning", color: "#f97316", bg: "rgba(249,115,22,0.1)" },
                { label: "Critical", color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
                { label: "Archived", color: "#6b7280", bg: "rgba(107,114,128,0.1)" },
              ].map((b) => (
                <div key={b.label} className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{b.label}</span>
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold"
                    style={{ background: b.bg, color: b.color, border: `1px solid ${b.color}30` }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ background: b.color }}
                    />
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </GlassCell>

          {/* Motion demos */}
          <GlassCell title="Motion & Hover" icon={Activity} colSpan>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "hover-lift", cls: "hover-lift" },
                { label: "hover-pop", cls: "hover-pop" },
                { label: "animate-float", cls: "animate-float" },
                { label: "animate-fade-in-up", cls: "" },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div
                    className={`mx-auto mb-3 h-14 w-14 rounded-xl cursor-pointer ${m.cls}`}
                    style={{
                      background: "linear-gradient(135deg, rgba(29,192,210,0.2), rgba(162,88,218,0.2))",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <div className="text-xs font-mono text-white/35">{m.label}</div>
                </div>
              ))}
            </div>
          </GlassCell>

          {/* Input */}
          <GlassCell title="Form Elements" icon={Code2}>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-white/40 mb-1 block">Meter ID</label>
                <input
                  type="text"
                  placeholder="GC-24-00-001"
                  defaultValue=""
                  className="w-full rounded-xl px-4 py-2.5 text-sm font-mono text-white/80 outline-none placeholder:text-white/20 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.target.style.border = "1px solid rgba(29,192,210,0.5)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(29,192,210,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1 block">Location</label>
                <select
                  className="w-full rounded-xl px-4 py-2.5 text-sm text-white/80 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <option style={{ background: "#0a0e1a" }}>Gujarat</option>
                  <option style={{ background: "#0a0e1a" }}>Kerala</option>
                  <option style={{ background: "#0a0e1a" }}>West Bengal</option>
                </select>
              </div>
              <button className="btn-primary w-full">
                Submit <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </GlassCell>
        </div>
      </div>
    </section>
  );
}

function GlassCell({
  title,
  icon: Icon,
  children,
  colSpan = false,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  colSpan?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-6 ${colSpan ? "md:col-span-2" : ""}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px) saturate(1.6)",
        WebkitBackdropFilter: "blur(24px) saturate(1.6)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Icon className="h-4 w-4 text-white/40" />
        <span className="text-sm font-semibold text-white/60">{title}</span>
      </div>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DATA VISUALIZATION
═══════════════════════════════════════════════════════════════ */
function DataVizSection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#08101a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(29,192,210,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <EyebrowChip className="mb-6 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            Data Visualization
          </EyebrowChip>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            data-no-reveal
          >
            Data that tells a story.
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Meters", val: "2.0M", change: "+18%", color: "#1DC0D2" },
            { label: "Data Points / Day", val: "4.8B", change: "+31%", color: "#A258DA" },
            { label: "Uptime", val: "99.9%", change: "+0.2%", color: "#22c55e" },
            { label: "Monthly Production", val: "5L+", change: "+12%", color: "#9761E6" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="text-xs text-white/40 mb-1">{s.label}</div>
              <div
                className="text-2xl font-display font-black"
                style={{ color: s.color }}
              >
                {s.val}
              </div>
              <div
                className="mt-1 text-xs font-semibold"
                style={{ color: s.color }}
              >
                {s.change} YoY
              </div>
            </div>
          ))}
        </div>

        {/* Main chart */}
        <div
          className="rounded-3xl p-6 lg:p-10"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(32px) saturate(1.8)",
            WebkitBackdropFilter: "blur(32px) saturate(1.8)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 16px 64px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="font-display font-bold text-white text-xl">Deployment Growth</h3>
              <p className="text-white/40 text-sm mt-1">Smart meter installations · 2024</p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-4 rounded-full" style={{ background: "#1DC0D2" }} />
                <span className="text-white/50">Current Year</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="h-px w-4"
                  style={{ background: "#9761E6", borderTop: "2px dashed #9761E6" }}
                />
                <span className="text-white/50">Prior Year</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="mainGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1DC0D2" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#1DC0D2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="prevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9761E6" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#9761E6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
              <XAxis
                dataKey="month"
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(10,14,26,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  color: "white",
                }}
                labelStyle={{ color: "rgba(255,255,255,0.6)", marginBottom: 4 }}
              />
              <Area
                type="monotone"
                dataKey="prev"
                stroke="#9761E6"
                strokeWidth={1.5}
                strokeDasharray="5 3"
                fill="url(#prevGrad)"
                dot={false}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1DC0D2"
                strokeWidth={2.5}
                fill="url(#mainGrad)"
                dot={{ fill: "#1DC0D2", r: 4, strokeWidth: 2, stroke: "#0a0e1a" }}
                activeDot={{ r: 6, fill: "#1DC0D2", stroke: "#0a0e1a", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLLING TICKER
═══════════════════════════════════════════════════════════════ */
function GlassTicker() {
  const items = [
    "Glass Morphism",
    "Motion Design",
    "OKLCH Color Science",
    "Scroll-Driven Animations",
    "Micro-Interactions",
    "Responsive Grid Systems",
    "SVG Displacement Maps",
    "Data Visualization",
    "Design Tokens",
    "Component Architecture",
    "Accessibility First",
    "TypeScript",
  ];

  return (
    <div
      className="py-8 overflow-hidden"
      style={{
        background: "rgba(29,192,210,0.06)",
        borderTop: "1px solid rgba(29,192,210,0.15)",
        borderBottom: "1px solid rgba(29,192,210,0.15)",
      }}
    >
      <div className="animate-ticker flex gap-8 whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-sm font-semibold text-white/40">
            <span
              className="h-1.5 w-1.5 rounded-full shrink-0"
              style={{ background: i % 3 === 0 ? "#1DC0D2" : i % 3 === 1 ? "#A258DA" : "#9761E6" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════════════════════ */
function FinalCta() {
  return (
    <section
      className="relative py-40 overflow-hidden flex items-center justify-center"
      style={{ background: "#050c14" }}
    >
      <MeshBlobs />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className="inline-block rounded-3xl p-12 lg:p-16"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(40px) saturate(2)",
            WebkitBackdropFilter: "blur(40px) saturate(2)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 0 1px rgba(29,192,210,0.05)",
          }}
        >
          <EyebrowChip className="mb-8 border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Let's build something
          </EyebrowChip>

          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            data-no-reveal
          >
            Built to impress.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #1DC0D2, #9761E6, #A258DA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Designed to perform.
            </span>
          </h2>

          <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            Every component, interaction, and surface in this showcase reflects
            Gridcrest's commitment to exceptional digital craft.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="btn-primary">
              Explore Gridcrest <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white/70 hover:text-white transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
