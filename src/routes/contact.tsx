import { createFileRoute } from "@tanstack/react-router";
import contactHeroImg from "@/assets/contact-hero.webp";
import contactEmailImg from "@/assets/contact-email.webp";
import contactPhoneImg from "@/assets/contact-phone.webp";
import { CtaBanner } from "@/components/CtaBanner";
import { EyebrowChip, CategoryChip } from "@/components/ui/Chip";
import { useState } from "react";
import IndiaMapInteractive from "@/components/IndiaMapInteractive";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Globe2,
  Handshake,
  Mail,
  MessageSquare,
  Newspaper,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GridCrest — Let's Build the Future Grid Together" },
      {
        name: "description",
        content:
          "Reach out for partnerships, business inquiries, technology discussions or career opportunities.",
      },
      { property: "og:title", content: "Contact — GridCrest" },
      {
        property: "og:description",
        content: "Talk to our team about smart-grid programs, deployments and partnerships.",
      },
    ],
  }),
  component: ContactPage,
});

const CATEGORIES = [
  { key: "business", label: "Business inquiry", icon: Briefcase },
  { key: "partnerships", label: "Partnerships", icon: Handshake },
  { key: "tech", label: "Technology discussion", icon: MessageSquare },
  { key: "media", label: "Media", icon: Newspaper },
  { key: "careers", label: "Careers", icon: Users },
  { key: "investor", label: "Investor relations", icon: TrendingUp },
];

function ContactPage() {
  const [category, setCategory] = useState("business");
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <FormAndInfo category={category} selected={category} onSelect={setCategory} />
      <Offices />
      <Reach />
      <CtaBanner
        eyebrow="LET'S TALK"
        title="Let's Build Your Smart Metering Programme"
        description="Connect with our team to discuss your utility's requirements, timelines and smart metering strategy."
        primary={{ label: "Get in Touch", href: "#top" }}
        secondary={{ label: "Explore Solutions", to: "/solutions" }}
      />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: 450 }}>
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
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.06 200 / 0.35) 0%, transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2" style={{ minHeight: 450 }}>
        {/* Left: text */}
        <div className="py-16 lg:py-20">
          <EyebrowChip><Sparkles className="h-3.5 w-3.5 text-accent" /> Contact</EyebrowChip>
          <h1 className="mt-6 max-w-xl text-balance text-5xl font-display font-bold leading-[1.05] tracking-tight lg:text-[58px]">
            Let's build the future grid{" "}
            <span style={{ color: "var(--brand-cyan)" }}>together.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Reach out for partnerships, business inquiries, technology discussions or
            career opportunities. We typically respond within one business day.
          </p>
        </div>

        {/* Right: hero image */}
        <div className="hidden lg:flex items-center justify-center py-10">
          <img
            src={contactHeroImg}
            alt="GridCrest contact illustration"
            className="w-full max-w-[560px] h-auto object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

function Categories({ selected, onSelect }: { selected: string; onSelect: (k: string) => void }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent">
        Inquiry categories
      </div>
      <h2 className="mt-2 text-2xl font-display font-bold">
        What can we help with?
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <CategoryChip
            key={c.key}
            active={selected === c.key}
            icon={c.icon}
            onClick={() => onSelect(c.key)}
          >
            {c.label}
          </CategoryChip>
        ))}
      </div>
    </div>
  );
}

function FormAndInfo({ category, selected, onSelect }: { category: string; selected: string; onSelect: (k: string) => void }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 space-y-6">
        <div>
          <Categories selected={selected} onSelect={onSelect} />
          <ContactForm category={category} />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InfoCard
            title="Email"
            img={contactEmailImg}
            lines={["sales@gridcrest.io"]}
            href="mailto:sales@gridcrest.io"
          />
          <InfoCard
            title="Phone"
            img={contactPhoneImg}
            lines={["334 531 2573", "Mon – Fri · 9:30am – 6:30pm IST"]}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, img, lines, href }: { title: string; img: string; lines: string[]; href?: string }) {
  return (
    <div className="reveal-area rounded-2xl border border-border bg-card p-4 flex items-center gap-5">
      <img
        src={img}
        alt=""
        className="shrink-0 object-contain select-none"
        style={{ width: 140, height: 140 }}
        draggable={false}
      />
      <div>
        <p className="text-lg font-semibold text-foreground mb-2">{title}</p>
        <div className="space-y-2 text-base text-foreground/85">
          {lines.map((l) => (
            href ? (
              <a key={l} href={href} className="hover:text-accent transition-colors">{l}</a>
            ) : (
              <div key={l}>{l}</div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm({ category }: { category: string }) {
  const [sent, setSent] = useState(false);
  const label = CATEGORIES.find((c) => c.key === category)?.label ?? "Business inquiry";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] lg:p-10"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
        <Clock className="h-3.5 w-3.5" /> Replies in &lt; 1 business day
      </div>
      <h2 className="mt-3 text-3xl font-display font-bold">Tell us about your program</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Inquiry type:{" "}
        <span className="font-semibold text-foreground">{label}</span>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Ananya Sharma" required />
        <Field label="Company" name="org" placeholder="State utility / agency" />
        <Field label="Email" name="email" type="email" placeholder="you@utility.com" required />
        <Field label="Role" name="role" placeholder="Program Director" />
      </div>

      <div className="mt-5">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Share your scale, timelines and constraints…"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={sent}>
          {sent ? (
            <>
              Sent <CheckCircle2 className="h-4 w-4" />
            </>
          ) : (
            <>
              Send message <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <span className="text-xs text-muted-foreground">
          By submitting you agree to our privacy practices.
        </span>
      </div>
    </form>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function Offices() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="py-20" style={{ overflow: "clip" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">

          {/* LEFT: text + chips */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Locations
            </div>
            <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Where to find us.
            </h2>
            <p className="mt-4 text-muted-foreground">
              GridCrest operates across India — from headquarters and manufacturing
              plants to R&amp;D centres and regional program offices.
            </p>

            <div className="mt-10 space-y-7">
              {/* Project Locations */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#9761E6]" />
                <div>
                  <p className="text-sm font-semibold text-[#9761E6]">Project Locations</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Gujarat", "Kerala", "West Bengal", "Kolkata", "New Delhi"].map((loc) => (
                      <span
                        key={loc}
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          activeLocation === loc
                            ? "border-[#9761E6] bg-[#9761E6] text-white"
                            : "border-border bg-white text-foreground hover:border-[#9761E6]/50 hover:bg-[#9761E6]/10"
                        }`}
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Manufacturing Sites */}
              <div className="flex gap-5">
                <div className="mt-1 w-0.5 shrink-0 self-stretch rounded-full bg-[#1DC0D2]" />
                <div>
                  <p className="text-sm font-semibold text-[#1DC0D2]">Manufacturing Sites</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Hyderabad", "Mysuru", "Chamarajanagar"].map((loc) => (
                      <span
                        key={loc}
                        onMouseEnter={() => setActiveLocation(loc)}
                        onMouseLeave={() => setActiveLocation(null)}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                          activeLocation === loc
                            ? "border-[#1DC0D2] bg-[#1DC0D2] text-white"
                            : "border-border bg-white text-foreground hover:border-[#1DC0D2]/50 hover:bg-[#1DC0D2]/10"
                        }`}
                      >
                        {loc}
                      </span>
                    ))}
                    <span className="rounded-full border border-[#1DC0D2]/40 bg-[#1DC0D2]/10 px-3 py-1 text-xs font-medium text-[#1DC0D2]">
                      +2 new factories planned
                    </span>
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

function Reach() {
  const items = [
    { value: "12+", label: "States served" },
    { value: "Pan-India", label: "Deployment coverage" },
    { value: "Roadmap", label: "International expansion" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Global presence
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Deployment reach.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Built in India for utilities everywhere. Active programs across the country,
            with an international roadmap in motion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:col-span-7">
          {items.map((i) => (
            <div key={i.label} className="rounded-3xl border border-border bg-card p-6">
              <div className="text-xl font-display font-bold">{i.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

