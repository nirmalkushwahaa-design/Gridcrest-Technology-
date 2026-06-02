import { Link } from "@tanstack/react-router";

export function CtaBanner({
  eyebrow = "ENGAGEMENT",
  title = "Ready to Transform Your Grid?",
  description = "Whether you're modernizing an existing network or building a smart grid from the ground up — GridCrest has the platform, the hardware, and the expertise to deliver.",
  primary = { label: "Explore Solutions", to: "/solutions" },
  secondary = { label: "Talk to our Team", to: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="px-6 pb-20">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-20 text-center shadow-[var(--shadow-cta)]"
        style={{ background: "var(--gradient-cta)" }}
      >
        <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
          {eyebrow}
        </p>
        <h2 className="relative mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-white/85">{description}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={primary.to}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A3A5C] transition hover:bg-white/90"
          >
            {primary.label}
          </Link>
          <Link
            to={secondary.to}
            className="rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
