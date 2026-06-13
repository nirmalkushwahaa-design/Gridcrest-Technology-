import { useEffect, useRef, useState } from "react";

// State ID mappings
export const STATE_IDS: Record<string, string> = {
  "Gujarat":          "IN-GJ",
  "Kerala":           "IN-KL",
  "West Bengal":      "IN-WB",
  "Kolkata":          "IN-WB",
  "Uttar Pradesh":    "IN-UP",
  "Hyderabad":        "IN-TG",
  "Mysuru":           "IN-KA",
  "Bengaluru":        "IN-KA",
  "Chamarajanagar":   "IN-KA",
  "New Delhi":        "IN-DL",
  "Nagaland":         "IN-NL",
};

const MFG_STATES = new Set(["IN-TG", "IN-KA"]);                // purple
const RD_STATES  = new Set(["IN-WB", "IN-UP", "IN-NL"]);       // cyan
const OPS_STATES = new Set(["IN-KL", "IN-GJ", "IN-DL"]);      // amber

const COLOR_DEFAULT  = "#E5E7EB";   // light grey
const COLOR_MFG      = "#DDD0F7";   // light purple (resting mfg)
const COLOR_MFG_HL   = "#A258DA";   // purple (active mfg)
const COLOR_RD       = "#A8EDF5";   // light cyan (resting R&D)
const COLOR_RD_HL    = "#1DC0D2";   // cyan (active R&D)
const COLOR_OPS      = "#FEF3C7";   // light amber (resting ops)
const COLOR_OPS_HL   = "#F59E0B";   // amber (active ops)
const STROKE         = "#ffffff";

interface Props {
  /** location label being hovered from outside (e.g. "Gujarat") */
  activeLocation?: string | null;
  onStateHover?: (label: string | null) => void;
}

export default function IndiaMapInteractive({ activeLocation, onStateHover }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  // Load SVG
  useEffect(() => {
    fetch("/india-map.svg")
      .then((r) => r.text())
      .then((raw) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = raw;
        // Style the SVG to fill container
        const svgEl = containerRef.current.querySelector("svg");
        if (svgEl) {
          // ViewBox covers full mainland + NE states; islands hidden via CSS
          svgEl.setAttribute("viewBox", "0 0 612 696");
          svgEl.setAttribute("width", "100%");
          svgEl.setAttribute("height", "100%");
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgEl.style.maxWidth = "100%";
          svgEl.style.overflow = "hidden";
          svgEl.style.display = "block";
        }
        // Hide island territories
        ["IN-AN", "IN-LD"].forEach((id) => {
          const el = containerRef.current?.querySelector(`#${id}`) as SVGPathElement | null;
          if (el) el.style.display = "none";
        });

        // Apply base styles to all paths
        const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");
        paths.forEach((path) => {
          const id = path.getAttribute("id") ?? "";
          path.setAttribute("stroke", STROKE);
          path.setAttribute("stroke-width", "0.8");
          path.style.transition = "fill 0.25s ease";
          const isLoc = MFG_STATES.has(id) || RD_STATES.has(id) || OPS_STATES.has(id);
          path.style.cursor = isLoc ? "pointer" : "default";
          if (MFG_STATES.has(id)) {
            path.setAttribute("fill", COLOR_MFG);
          } else if (RD_STATES.has(id)) {
            path.setAttribute("fill", COLOR_RD);
          } else if (OPS_STATES.has(id)) {
            path.setAttribute("fill", COLOR_OPS);
          } else {
            path.setAttribute("fill", COLOR_DEFAULT);
          }
        });
        setSvgLoaded(true);
      });
  }, []);

  // Re-color whenever activeLocation changes
  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return;
    const activeId = activeLocation ? STATE_IDS[activeLocation] : null;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");
    paths.forEach((path) => {
      const id = path.getAttribute("id") ?? "";
      if (id === activeId) {
        const hl = MFG_STATES.has(id) ? COLOR_MFG_HL : RD_STATES.has(id) ? COLOR_RD_HL : COLOR_OPS_HL;
        path.setAttribute("fill", hl);
        path.setAttribute("stroke", hl);
        path.setAttribute("stroke-width", "1.5");
      } else if (MFG_STATES.has(id)) {
        path.setAttribute("fill", COLOR_MFG);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      } else if (RD_STATES.has(id)) {
        path.setAttribute("fill", COLOR_RD);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      } else if (OPS_STATES.has(id)) {
        path.setAttribute("fill", COLOR_OPS);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      } else {
        path.setAttribute("fill", COLOR_DEFAULT);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      }
    });
  }, [activeLocation, svgLoaded]);

  // Mouse handlers on SVG paths
  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return;
    const container = containerRef.current;

    const isLocationState = (id: string) =>
      MFG_STATES.has(id) || RD_STATES.has(id) || OPS_STATES.has(id);

    const handleOver = (e: MouseEvent) => {
      const path = (e.target as Element).closest("path") as SVGPathElement | null;
      if (!path) return;
      const id = path.getAttribute("id") ?? "";

      // Ignore grey (non-location) states completely
      if (!isLocationState(id)) return;

      const title = path.getAttribute("title") ?? id;
      const label = Object.entries(STATE_IDS).find(([, v]) => v === id)?.[0] ?? null;
      if (onStateHover) onStateHover(label);

      const isActive = (activeLocation && STATE_IDS[activeLocation] === id);
      if (!isActive) {
        const hl = MFG_STATES.has(id) ? COLOR_MFG_HL : RD_STATES.has(id) ? COLOR_RD_HL : COLOR_OPS_HL;
        path.setAttribute("fill", hl);
        path.setAttribute("stroke", hl);
        path.setAttribute("stroke-width", "1.5");
      }

      const rect = container.getBoundingClientRect();
      setTooltip({ text: title, x: (e as MouseEvent).clientX - rect.left, y: (e as MouseEvent).clientY - rect.top });
    };

    const handleOut = (e: MouseEvent) => {
      const path = (e.target as Element).closest("path") as SVGPathElement | null;
      if (!path) return;
      const id = path.getAttribute("id") ?? "";

      // Ignore grey (non-location) states completely
      if (!isLocationState(id)) return;

      const activeId = activeLocation ? STATE_IDS[activeLocation] : null;

      if (id !== activeId) {
        if (MFG_STATES.has(id)) {
          path.setAttribute("fill", COLOR_MFG);
        } else if (RD_STATES.has(id)) {
          path.setAttribute("fill", COLOR_RD);
        } else if (OPS_STATES.has(id)) {
          path.setAttribute("fill", COLOR_OPS);
        }
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      }

      if (onStateHover) onStateHover(null);
      setTooltip(null);
    };

    container.addEventListener("mouseover", handleOver);
    container.addEventListener("mouseout", handleOut);
    return () => {
      container.removeEventListener("mouseover", handleOver);
      container.removeEventListener("mouseout", handleOut);
    };
  }, [svgLoaded, activeLocation, onStateHover]);

  return (
    <div className="relative flex flex-col" style={{ height: "100%" }}>
      <div ref={containerRef} style={{ flex: 1, minHeight: 0 }} />
      {/* Legend overlay — bottom left */}
      <div className="absolute bottom-3 left-3 flex items-center gap-4 rounded-xl border border-border bg-white/80 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm shadow-sm">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#A258DA]" /> Manufacturing</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-accent" /> R&amp;D</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" /> Operations</span>
      </div>
      {tooltip && (
        <div
          className="pointer-events-none absolute z-20 rounded-lg border border-border bg-[#1A3A5C] px-3 py-1.5 text-xs font-medium text-white shadow-lg"
          style={{ left: tooltip.x + 12, top: tooltip.y - 8 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
