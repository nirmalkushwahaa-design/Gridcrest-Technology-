import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { EyebrowChip, StaticChip } from "@/components/ui/Chip";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Compass,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  PlayCircle,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the Future of Intelligent Energy" },
      {
        name: "description",
        content:
          "Join the team building tomorrow's grid. Engineering, manufacturing, operations and product roles across India.",
      },
      { property: "og:title", content: "Careers — GridCrest" },
      {
        property: "og:description",
        content: "Work on technology shaping the future of energy and sustainability.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <WhyGridcrest />
      <Stories />
      <Beyond />
      <Growth />
      <OpenRoles />
      <CtaBanner
        eyebrow="JOIN US"
        title="Don't See Your Role? Tell Us Anyway."
        description="We're always meeting future teammates. Share your story and we'll be in touch — we're building the next generation of grid technology."
        primary={{ label: "Send Your CV", href: "mailto:careers@gridcrest.tech" }}
        secondary={{ label: "About GridCrest", to: "/company" }}
      />
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <EyebrowChip><Sparkles className="h-3.5 w-3.5 text-accent" /> Careers</EyebrowChip>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-display font-bold leading-[1.05] lg:text-[64px]">
          Join the team building{" "}
          <span style={{ color: "var(--brand-cyan)" }}>
            tomorrow's grid.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Work on technology shaping the future of energy, infrastructure and
          sustainability — alongside engineers, makers and operators across India.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#open-roles" className="btn-primary">
            View open roles <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#culture" className="btn-secondary">
            Explore culture
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyGridcrest() {
  const items = [
    { icon: Lightbulb, title: "Innovation-driven work", body: "Build firmware, systems and platforms that move the grid forward." },
    { icon: Globe2, title: "Large-scale impact", body: "Your work reaches millions of homes and critical infrastructure." },
    { icon: Rocket, title: "Fast-growing ecosystem", body: "A company scaling alongside the world's energy transition." },
    { icon: Compass, title: "Cross-functional opportunities", body: "Hardware meets software meets operations — every day." },
    { icon: Building2, title: "Industrial + software", body: "Rare exposure to integrated manufacturing and product development." },
    { icon: Heart, title: "Global ambitions", body: "Made in India, designed for the world's utility networks." },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why GridCrest
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Build something that matters.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((i) => (
            <article
              key={i.title}
              className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <i.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-6 text-lg font-display font-bold">{i.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  const stories = [
    { name: "Ananya · Firmware", role: "Embedded systems", quote: "Shipping firmware that runs on millions of meters teaches you discipline you can't get anywhere else." },
    { name: "Rahul · Platform", role: "Backend engineering", quote: "We design for utility-scale from day one — every choice is measured in real consequences." },
    { name: "Meera · Operations", role: "Deployment lead", quote: "Walking a substation after a successful rollout is the most rewarding part of the job." },
  ];
  return (
    <section id="culture" className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Employee stories
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            Voices from across GridCrest.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.name} className="flex flex-col rounded-3xl border border-border bg-card p-7">
              <PlayCircle className="h-6 w-6 text-accent" />
              <blockquote className="mt-6 text-base text-foreground/90">"{s.quote}"</blockquote>
              <div className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-display font-bold">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  const tiles = [
    { title: "Team off-sites", area: "lg:col-span-2 lg:row-span-2", grad: "from-surface-cyan to-surface-lavender" },
    { title: "Hack weeks", area: "", grad: "from-surface-lavender to-surface-cyan" },
    { title: "Music & culture", area: "", grad: "from-surface-cyan to-surface-lavender" },
    { title: "Celebrations", area: "lg:col-span-2", grad: "from-surface-lavender to-surface-cyan" },
    { title: "Volunteering", area: "", grad: "from-surface-cyan to-surface-lavender" },
    { title: "Sports days", area: "", grad: "from-surface-lavender to-surface-cyan" },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Work beyond work
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            The moments between the milestones.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.title}
              className={`flex min-h-[160px] items-end rounded-3xl border border-border bg-gradient-to-br ${t.grad} p-5 ${t.area}`}
            >
              <div className="text-sm font-display font-bold text-foreground">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Growth() {
  const steps = [
    { icon: GraduationCap, title: "Learn", body: "Structured ramp-up, mentorship and certifications." },
    { icon: Compass, title: "Stretch", body: "Cross-domain projects across hardware, software, ops." },
    { icon: Users, title: "Lead", body: "Lead engineers, programs and large customer deployments." },
    { icon: Rocket, title: "Build", body: "Ship products and platforms that scale to millions." },
  ];
  return (
    <section className="border-b border-border/60 bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Growth & learning
          </div>
          <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
            A career pathway, not just a job.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Step {i + 1}
              </div>
              <s.icon className="mt-3 h-6 w-6 text-accent" />
              <h3 className="mt-5 text-base font-display font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenRoles() {
  const roles = [
    { title: "Senior Firmware Engineer", dept: "Engineering", loc: "Bengaluru" },
    { title: "Platform Engineer (Java / Kotlin)", dept: "Engineering", loc: "Bengaluru" },
    { title: "Data Engineer — MDM", dept: "Data", loc: "Bengaluru" },
    { title: "Manufacturing Engineer", dept: "Operations", loc: "Hyderabad" },
    { title: "Field Deployment Lead", dept: "Operations", loc: "Pan-India" },
    { title: "Product Manager — HES", dept: "Product", loc: "Bengaluru" },
  ];
  return (
    <section id="open-roles" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Open positions
            </div>
            <h2 className="mt-3 text-balance text-4xl font-display font-bold leading-tight lg:text-5xl">
              Roles open right now.
            </h2>
          </div>
          <div className="flex gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <StaticChip>All teams</StaticChip>
            <StaticChip>India</StaticChip>
          </div>
        </div>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {roles.map((r) => (
            <a
              key={r.title}
              href="mailto:careers@gridcrest.tech"
              className="group flex items-center justify-between gap-4 p-6 transition hover:bg-secondary/60"
            >
              <div className="flex items-center gap-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-display font-bold">{r.title}</div>
                  <div className="text-xs text-muted-foreground">{r.dept}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
                  <MapPin className="h-4 w-4" /> {r.loc}
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

