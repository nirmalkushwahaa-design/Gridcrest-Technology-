import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/gridcrest-logo.svg";

type MenuColumn = {
  heading: string;
  items: { label: string; to: string; description?: string }[];
};

type MegaMenu = {
  key: string;
  label: string;
  href?: string;
  intro?: { title: string; text: string; to: string };
  columns: MenuColumn[];
};

const MENUS: MegaMenu[] = [
  {
    key: "solution",
    label: "Solution",
    intro: {
      title: "One ecosystem, every layer of the grid",
      text: "From silicon to dashboard — purpose-built infrastructure for the modern energy network.",
      to: "/solutions",
    },
    columns: [
      {
        heading: "Smart Metering",
        items: [
          { label: "Smart Meters", to: "/solutions/smart-meters" },
          { label: "Communication Modules", to: "/solutions/communication-modules" },
          { label: "HES (Head End System)", to: "/solutions/hes" },
          { label: "MDM (Meter Data Management)", to: "/solutions/mdm" },
        ],
      },
      {
        heading: "Integrated Platform",
        items: [
          { label: "End-to-end Architecture", to: "/solutions/architecture" },
          { label: "Interoperability", to: "/solutions/interoperability" },
          { label: "AI / Analytics / Digital Twin", to: "/solutions/intelligence" },
        ],
      },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    intro: {
      title: "Built for the people who run the grid",
      text: "Utilities, governments and programs that need reliability at national scale.",
      to: "/industries",
    },
    columns: [
      {
        heading: "Sectors",
        items: [
          { label: "Power Utilities", to: "/industries/power-utilities" },
          { label: "Government Programs", to: "/industries/government" },
        ],
      },
    ],
  },
  {
    key: "technology",
    label: "Technology",
    href: "/technology",
    columns: [],
  },
  {
    key: "company",
    label: "Company",
    intro: {
      title: "About GridCrest",
      text: "A manufacturing-backed technology company building the backbone of smart energy.",
      to: "/company",
    },
    columns: [
      {
        heading: "Company Overview",
        items: [
          { label: "Vision, Mission, Positioning", to: "/company/overview" },
          { label: "Leadership Team", to: "/company/leadership" },
        ],
      },
      {
        heading: "Manufacturing & Ecosystem",
        items: [
          { label: "Manufacturing Overview", to: "/manufacturing" },
          { label: "Culture & People", to: "/company/culture" },
          { label: "Relationship with Kaynes", to: "/company/kaynes" },
        ],
      },
      {
        heading: "Investor / Governance",
        items: [
          { label: "Vision & Growth", to: "/company/investors" },
          { label: "Leadership Communication", to: "/company/governance" },
        ],
      },
      {
        heading: "Careers",
        items: [
          { label: "Why Join GridCrest", to: "/careers" },
          { label: "Culture & Growth", to: "/careers/culture" },
          { label: "Employee Stories", to: "/careers/stories" },
        ],
      },
    ],
  },
  {
    key: "insight",
    label: "Insight",
    intro: {
      title: "Ideas shaping the modern grid",
      text: "News, updates and long-form thinking from the GridCrest team and our partners.",
      to: "/insight/news",
    },
    columns: [
      {
        heading: "Newsroom",
        items: [
          { label: "News", to: "/insight/news" },
          { label: "Updates", to: "/insight/updates" },
          { label: "Insights", to: "/insight/articles" },
        ],
      },
    ],
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    columns: [],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img src={logoUrl} alt="GridCrest" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleLeave}>
          {MENUS.map((menu) =>
            menu.href ? (
              <Link
                key={menu.key}
                to={menu.href}
                onMouseEnter={() => setOpen(null)}
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-display font-semibold text-foreground/80 hover:text-[#A258DA] transition-colors"
              >
                {menu.label}
              </Link>
            ) : (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => handleEnter(menu.key)}
              >
                <button
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-display font-semibold text-foreground/80 hover:text-[#A258DA] transition-colors",
                    open === menu.key && "text-[#A258DA]",
                  )}
                  aria-expanded={open === menu.key}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      open === menu.key && "rotate-180",
                    )}
                  />
                </button>
              </div>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="btn-primary text-sm">
            Talk to us
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega panel */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full hidden lg:block border-t border-border/60 bg-background shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={handleLeave}
        >
          <div className="mx-auto max-w-7xl px-6 py-10">
            <MegaPanel menu={MENUS.find((m) => m.key === open)!} onNavigate={() => setOpen(null)} />
          </div>
        </div>
      )}

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {MENUS.map((menu) => (
              <div key={menu.key}>
                {menu.href ? (
                  <Link
                    to={menu.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-display font-semibold uppercase tracking-widest text-foreground"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      {menu.label}
                    </div>
                    <div className="space-y-4">
                      {menu.columns.map((col) => (
                        <div key={col.heading}>
                          <div className="text-sm font-semibold mb-2">{col.heading}</div>
                          <ul className="space-y-1.5">
                            {col.items.map((it) => (
                              <li key={it.to}>
                                <Link
                                  to={it.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {it.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  const hasIntro = !!menu.intro;
  return (
    <div
      className={cn(
        "grid gap-10",
        hasIntro ? "grid-cols-12" : "grid-cols-1",
      )}
    >
      {hasIntro && (
        <div className="col-span-4">
          <div className="rounded-2xl bg-gradient-to-br from-surface-cyan to-surface-lavender p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                {menu.label}
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                {menu.intro!.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{menu.intro!.text}</p>
            </div>
            <Link
              to={menu.intro!.to}
              onClick={onNavigate}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
            >
              Explore <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
      <div
        className={cn(
          "grid gap-8",
          hasIntro ? "col-span-8 grid-cols-2 lg:grid-cols-2" : "grid-cols-3",
        )}
      >
        {menu.columns.map((col) => (
          <div key={col.heading}>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {col.heading}
            </div>
            <ul className="space-y-3">
              {col.items.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    onClick={onNavigate}
                    className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-[#A258DA] transition-colors"
                  >
                    {it.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
