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
};

const MFG_STATES = new Set(["IN-TG", "IN-KA"]);
const LOC_STATES = new Set(["IN-WB", "IN-KL", "IN-GJ", "IN-DL"]);

const COLOR_DEFAULT  = "#E5E7EB";
const COLOR_MFG      = "#B8EEF5";   // light cyan (resting sites)
const COLOR_MFG_HL   = "#1DC0D2";   // cyan (active sites)
const COLOR_LOC      = "#E0D0F9";   // light purple (resting locations)
const COLOR_LOC_HL   = "#9761E6";   // purple (active locations)
const STROKE         = "#ffffff";

type Category = "mfg" | "loc";

interface Props {
  activeLocation?: string | null;
  onStateHover?: (label: string | null) => void;
  categories?: Category[];
}

export default function IndiaMapInteractive({
  activeLocation,
  onStateHover,
  categories = ["mfg", "loc"],
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  const showMfg = categories.includes("mfg");
  const showLoc = categories.includes("loc");

  // Load SVG
  useEffect(() => {
    fetch("/india-map.svg")
      .then((r) => r.text())
      .then((raw) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = raw;
        const svgEl = containerRef.current.querySelector("svg");
        if (svgEl) {
          svgEl.setAttribute("viewBox", "0 0 612 696");
          svgEl.setAttribute("width", "100%");
          svgEl.setAttribute("height", "100%");
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svgEl.style.maxWidth = "100%";
          svgEl.style.overflow = "hidden";
          svgEl.style.display = "block";
        }
        ["IN-AN", "IN-LD"].forEach((id) => {
          const el = containerRef.current?.querySelector(`#${id}`) as SVGPathElement | null;
          if (el) el.style.display = "none";
        });

        const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");
        paths.forEach((path) => {
          const id = path.getAttribute("id") ?? "";
          path.setAttribute("stroke", STROKE);
          path.setAttribute("stroke-width", "0.8");
          path.style.transition = "fill 0.25s ease";
          const isLoc = (showMfg && MFG_STATES.has(id)) || (showLoc && LOC_STATES.has(id));
          path.style.cursor = isLoc ? "pointer" : "default";
          if (showMfg && MFG_STATES.has(id)) {
            path.setAttribute("fill", COLOR_MFG);
          } else if (showLoc && LOC_STATES.has(id)) {
            path.setAttribute("fill", COLOR_LOC);
          } else {
            path.setAttribute("fill", COLOR_DEFAULT);
          }
        });
        setSvgLoaded(true);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-color on activeLocation change
  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return;
    const activeId = activeLocation ? STATE_IDS[activeLocation] : null;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");
    paths.forEach((path) => {
      const id = path.getAttribute("id") ?? "";
      if (id === activeId) {
        const hl =
          (showMfg && MFG_STATES.has(id)) ? COLOR_MFG_HL :
          (showLoc && LOC_STATES.has(id))  ? COLOR_LOC_HL : COLOR_DEFAULT;
        path.setAttribute("fill", hl);
        path.setAttribute("stroke", hl);
        path.setAttribute("stroke-width", "1.5");
      } else if (showMfg && MFG_STATES.has(id)) {
        path.setAttribute("fill", COLOR_MFG);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      } else if (showLoc && LOC_STATES.has(id)) {
        path.setAttribute("fill", COLOR_LOC);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      } else {
        path.setAttribute("fill", COLOR_DEFAULT);
        path.setAttribute("stroke", STROKE);
        path.setAttribute("stroke-width", "0.8");
      }
    });
  }, [activeLocation, svgLoaded, showMfg, showLoc]);

  // Mouse handlers
  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return;
    const container = containerRef.current;

    const isLocationState = (id: string) =>
      (showMfg && MFG_STATES.has(id)) || (showLoc && LOC_STATES.has(id));

    const handleOver = (e: MouseEvent) => {
      const path = (e.target as Element).closest("path") as SVGPathElement | null;
      if (!path) return;
      const id = path.getAttribute("id") ?? "";
      if (!isLocationState(id)) return;

      const title = path.getAttribute("title") ?? id;
      const label = Object.entries(STATE_IDS).find(([, v]) => v === id)?.[0] ?? null;
      if (onStateHover) onStateHover(label);

      const isActive = (activeLocation && STATE_IDS[activeLocation] === id);
      if (!isActive) {
        const hl =
          (showMfg && MFG_STATES.has(id)) ? COLOR_MFG_HL : COLOR_LOC_HL;
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
      if (!isLocationState(id)) return;

      const activeId = activeLocation ? STATE_IDS[activeLocation] : null;
      if (id !== activeId) {
        if (showMfg && MFG_STATES.has(id)) {
          path.setAttribute("fill", COLOR_MFG);
        } else if (showLoc && LOC_STATES.has(id)) {
          path.setAttribute("fill", COLOR_LOC);
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
  }, [svgLoaded, activeLocation, onStateHover, showMfg, showLoc]);

  return (
    <div className="relative flex flex-col" style={{ height: "100%" }}>
      <div ref={containerRef} style={{ flex: 1, minHeight: 0 }} />
      {/* Legend */}
      <div className="absolute bottom-10 right-4 flex flex-col gap-1.5 rounded-xl border border-border bg-white/80 px-3 py-2.5 text-xs text-muted-foreground backdrop-blur-sm shadow-sm">
        {showMfg && <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#1DC0D2]" /> Manufacturing</span>}
        {showLoc && <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#9761E6]" /> Locations</span>}
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
