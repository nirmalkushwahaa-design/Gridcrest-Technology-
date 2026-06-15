import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EyebrowChip } from "@/components/ui/Chip";

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

      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2" style={{ minHeight: 450 }}>
        {/* ── Left: text ── */}
        <div className="py-16 lg:py-20">
          <EyebrowChip>{eyebrow}</EyebrowChip>

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

        {/* ── Right: illustration ── */}
        <div className="relative hidden lg:flex items-center justify-center py-10 animate-fade-in-soft">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[560px] h-auto object-contain select-none animate-float"
              draggable={false}
            />
          ) : (
            <div
              className="w-full rounded-3xl"
              style={{ height: 320, background: "#E5E7EB" }}
              role="img"
              aria-label={imageAlt}
            />
          )}
        </div>
      </div>
    </section>
  );
}
