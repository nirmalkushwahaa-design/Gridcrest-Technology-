import { type ReactNode } from "react";

/* ─── Chip variants ──────────────────────────────────────────────────────────
 *
 *  eyebrow   — hero section label pill (white bg, muted text, uppercase)
 *  filter    — interactive toggle chip (xs, active=cyan or custom color)
 *  category  — larger interactive chip with optional icon (contact categories)
 *  label     — static coloured badge (purple by default, pass color prop)
 *  nav       — hoverable link chip (industry/feature navigation)
 *  static    — plain non-interactive tag (muted, no hover)
 *
 * ─────────────────────────────────────────────────────────────────────────── */

type Color = "cyan" | "purple" | "amber" | "navy";

interface ChipBase {
  children: ReactNode;
  className?: string;
}

/* ── 1. Eyebrow ── */
export function EyebrowChip({ children, className = "" }: ChipBase) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}

/* ── 2. Filter (interactive toggle) ── */
interface FilterChipProps extends ChipBase {
  active?: boolean;
  color?: Color;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  as?: "button" | "span";
}

const COLOR_ACTIVE: Record<Color, string> = {
  cyan:   "border-accent bg-accent text-white",
  purple: "border-[#A258DA] bg-[#A258DA] text-white",
  amber:  "border-[#F59E0B] bg-[#F59E0B] text-white",
  navy:   "border-[var(--brand-navy)] bg-[var(--brand-navy)] text-white",
};
const COLOR_INACTIVE: Record<Color, string> = {
  cyan:   "border-border bg-secondary text-foreground hover:border-accent/50 hover:bg-accent/10",
  purple: "border-border bg-secondary text-foreground hover:border-[#A258DA]/50 hover:bg-[#A258DA]/10",
  amber:  "border-border bg-secondary text-foreground hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10",
  navy:   "border-border text-muted-foreground hover:border-[var(--brand-navy)] hover:text-[var(--brand-navy)]",
};

export function FilterChip({
  children,
  active = false,
  color = "cyan",
  onClick,
  onMouseEnter,
  onMouseLeave,
  as: Tag = "button",
  className = "",
}: FilterChipProps) {
  return (
    <Tag
      {...(Tag === "button" ? { type: "button" as const } : {})}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
        active ? COLOR_ACTIVE[color] : COLOR_INACTIVE[color]
      } ${onClick || onMouseEnter ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ── 3. Category (larger, icon + label, used in contact form) ── */
interface CategoryChipProps extends ChipBase {
  active?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

export function CategoryChip({ children, active = false, icon: Icon, onClick, className = "" }: CategoryChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border bg-card text-foreground/70 hover:border-accent/50 hover:text-accent"
      } ${className}`}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {children}
    </button>
  );
}

/* ── 4. Label (static coloured badge) ── */
interface LabelChipProps extends ChipBase {
  color?: Color;
}

const LABEL_STYLES: Record<Color, string> = {
  cyan:   "border-accent/30 bg-accent/8 text-accent",
  purple: "border-[#A258DA]/30 bg-[#A258DA]/8 text-[#A258DA]",
  amber:  "border-[#F59E0B]/30 bg-[#F59E0B]/8 text-[#D97706]",
  navy:   "border-[var(--brand-navy)]/30 bg-[var(--brand-navy)]/8 text-[var(--brand-navy)]",
};

export function LabelChip({ children, color = "purple", className = "" }: LabelChipProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium ${LABEL_STYLES[color]} ${className}`}
    >
      {children}
    </span>
  );
}

/* ── 5. Nav chip (hoverable link chip) ── */
export function NavChip({ children, className = "" }: ChipBase) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/85 transition hover:border-accent/60 hover:text-accent ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/* ── 6. Static chip (plain, no interaction) ── */
export function StaticChip({ children, className = "" }: ChipBase) {
  return (
    <span
      className={`rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
