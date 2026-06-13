import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import gridcrestLogo from "@/assets/gridcrest-logo.svg";

const NAV = [
  {
    heading: "Solutions",
    links: [
      { label: "Smart Meters", to: "/solutions" },
      { label: "Network Interface Cards (NIC)", to: "/solutions" },
      { label: "Anantya HES", to: "/solutions" },
      { label: "Anantya MDM", to: "/solutions" },
      { label: "Anantya Prepayment Engine", to: "/solutions" },
      { label: "Anantya Reporting & Analytics", to: "/solutions" },
      { label: "Anantya WFM", to: "/solutions" },
      { label: "Anantya Synkra", to: "/solutions" },
      { label: "Anantya Consumer App", to: "/solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About GridCrest", to: "/company" },
      { label: "Manufacturing & Ecosystem", to: "/manufacturing" },
      { label: "Kaynes Partnership", to: "/company/kaynes" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog & Insights", to: "/insight/" },
      { label: "Case Studies", to: "/insight/" },
      { label: "Technical Resources", to: "/insight/" },
      { label: "FAQs", to: "/contact" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={gridcrestLogo} alt="GridCrest" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              One ecosystem for modern utilities—connecting devices, data, operations, and intelligence.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Made in India · Backed by Kaynes Group
            </div>
            {/* Social */}
            <a
              href="https://www.linkedin.com/company/gridcrestindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "#0A66C2" }}
            >
              <span>Connect with us on</span>
              <span className="flex items-center gap-1.5 font-bold">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </span>
            </a>
          </div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.heading}>
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
                style={{ color: "var(--color-foreground)", WebkitTextFillColor: "var(--color-foreground)" }}
              >
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} GridCrest Technology Pvt. Ltd. All rights reserved. A Kaynes Technology Group Company.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <a href="mailto:sales@gridcrest.io" className="hover:text-foreground transition-colors">sales@gridcrest.io</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
