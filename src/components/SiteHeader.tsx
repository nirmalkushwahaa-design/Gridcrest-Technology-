import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/gridcrest-logo.svg";

const NAV_ITEMS = [
  { label: "Solutions", to: "/solutions" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Company", to: "/company" },
  { label: "Insight", to: "/insight/" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[300] w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" style={{ WebkitTextFillColor: "inherit" }}>
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="GridCrest" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-stretch gap-1 self-stretch">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className="inline-flex items-center text-sm font-display font-semibold transition-colors"
                style={{ padding: "22px 15px", color: "var(--nav-default)" }}
                onMouseEnter={e => { if (!(e.currentTarget as HTMLElement).dataset.status) (e.currentTarget as HTMLElement).style.color = "var(--brand-cyan)"; }}
                onMouseLeave={e => { if (!(e.currentTarget as HTMLElement).dataset.status) (e.currentTarget as HTMLElement).style.color = "var(--nav-default)"; }}
                activeProps={{
                  className: "inline-flex items-center justify-between text-sm font-display font-semibold transition-colors",
                  style: {
                    padding: "22px 15px",
                    flex: "1 0 0",
                    borderBottom: "1px solid var(--brand-cyan)",
                    background: "var(--nav-active-gradient)",
                    color: "var(--brand-navy)",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://www.linkedin.com/company/gridcrestindia/jobs/" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm [&::after]:hidden">
              Careers
            </a>
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
      </header>

      {/* Mobile full-screen menu — outside header so fixed positioning works correctly */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[250] flex flex-col pt-16"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Nav links — centered */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-4 text-2xl font-display font-semibold transition-colors"
                style={{ color: "var(--nav-default)" }}
                activeProps={{
                  className: "w-full text-center py-4 text-2xl font-display font-semibold transition-colors",
                  style: { color: "var(--brand-cyan)" },
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA pinned to bottom */}
          <div className="px-6 pb-10">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-base"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
