import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Globe2,
  Handshake,
  Mail,
  MapPin,
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
      <Categories selected={category} onSelect={setCategory} />
      <FormAndInfo category={category} />
      <Offices />
      <Reach />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.02 250 / 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" /> Contact
        </span>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
          Let's build the future grid{" "}
          <span style={{ color: "var(--brand-cyan)" }}>
            together.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Reach out for partnerships, business inquiries, technology discussions or
          career opportunities. We typically respond within one business day.
        </p>
      </div>
    </section>
  );
}

function Categories({ selected, onSelect }: { selected: string; onSelect: (k: string) => void }) {
  return (
    <section className="border-b border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">
          Inquiry categories
        </div>
        <h2 className="mt-3 text-balance text-3xl font-display font-bold lg:text-4xl">
          What can we help with?
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {CATEGORIES.map((c) => {
            const active = selected === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => onSelect(c.key)}
                className={`rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-accent bg-accent/5 shadow-[var(--shadow-card)]"
                    : "border-border bg-card hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <c.icon className={`h-5 w-5 ${active ? "text-accent" : "text-foreground/70"}`} />
                <div className="mt-4 text-sm font-display font-semibold">{c.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FormAndInfo({ category }: { category: string }) {
  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm category={category} />
        </div>
        <div className="space-y-5 lg:col-span-5">
          <InfoCard
            icon={Mail}
            title="Email"
            lines={["hello@gridcrest.tech", "partnerships@gridcrest.tech"]}
          />
          <InfoCard
            icon={Phone}
            title="Phone"
            lines={["+91 80 4000 0000", "Mon – Fri · 9:30am – 6:30pm IST"]}
          />
          <InfoCard
            icon={Newspaper}
            title="Press & analysts"
            lines={["press@gridcrest.tech"]}
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
          <Icon className="h-5 w-5" />
        </span>
        <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
      </div>
      <div className="mt-4 space-y-1 text-sm text-foreground/85">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
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
  const offices = [
    { city: "Bengaluru", country: "India", note: "HQ · Engineering & operations", type: "Headquarters" },
    { city: "Hyderabad", country: "India", note: "Manufacturing facility", type: "Manufacturing" },
    { city: "Mysuru", country: "India", note: "Integration & testing", type: "Manufacturing" },
    { city: "New Delhi", country: "India", note: "Programs & public sector", type: "Regional office" },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Locations
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Where to find us.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {offices.map((o) => (
            <article
              key={o.city}
              className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {o.type}
              </div>
              <span className="mt-3 grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-display font-bold">{o.city}</h3>
              <div className="text-sm text-muted-foreground">{o.country}</div>
              <div className="mt-4 flex items-center gap-2 text-xs text-foreground/80">
                <Building2 className="h-3.5 w-3.5 text-accent" /> {o.note}
              </div>
            </article>
          ))}
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
    <section className="border-b border-border/60 py-20">
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
              <Globe2 className="h-5 w-5 text-accent" />
              <div className="mt-5 text-3xl font-display font-bold">{i.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 text-center lg:p-16"
          style={{ background: "var(--gradient-cta)" }}
        >
          <h2 data-no-reveal className="relative mx-auto max-w-3xl text-balance text-4xl font-display font-bold leading-tight text-white lg:text-5xl">
            Ready to transform energy infrastructure?
          </h2>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#top" className="btn-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/solutions" className="btn-secondary">
              Explore solutions
            </a>
            <a href="/company/kaynes" className="btn-secondary">
              Partner with GridCrest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
