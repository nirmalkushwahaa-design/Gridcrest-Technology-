import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Btn =
  | { label: string; to: string; href?: never }
  | { label: string; href: string; to?: never };

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  primary?: Btn;
  secondary?: Btn;
  image: string;
  imageAlt?: string;
}

function HeroBtn({ btn, variant }: { btn: Btn; variant: "primary" | "secondary" }) {
  const cls = variant === "primary" ? "btn-primary" : "btn-secondary";
  if (btn.href) {
    return (
      <a href={btn.href} className={cls}>
        {btn.label} {variant === "primary" && <ArrowRight className="h-4 w-4" />}
      </a>
    );
  }
  return (
    <Link to={btn.to!} className={cls}>
      {btn.label} {variant === "primary" && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  primary,
  secondary,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 bg-white"
      style={{ minHeight: 450 }}
    >
      {/* Subtle grid backdrop */}
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

      {/* Soft cyan glow top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.06 200 / 0.35) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2" style={{ minHeight: 450 }}>
        {/* ── Left: text ── */}
        <div className="py-16 lg:py-20">
          <span className="inline-flex items-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
            {eyebrow}
          </span>

          <h1 className="mt-6 max-w-xl text-balance text-5xl font-display font-bold leading-[1.05] tracking-tight lg:text-[58px]">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span style={{ color: "var(--brand-cyan)" }}>{titleAccent}</span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && <HeroBtn btn={primary} variant="primary" />}
              {secondary && <HeroBtn btn={secondary} variant="secondary" />}
            </div>
          )}
        </div>

        {/* ── Right: illustration placeholder ── */}
        <div className="hidden lg:flex items-center justify-center py-10">
          <div
            className="w-full rounded-3xl"
            style={{ height: 320, background: "#E5E7EB" }}
            role="img"
            aria-label={imageAlt}
          />
        </div>
      </div>
    </section>
  );
}
