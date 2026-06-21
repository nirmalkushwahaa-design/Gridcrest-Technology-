import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const GridWorld = lazy(() => import("@/components/GridWorld"));

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "GridCrest — The Grid World" },
      {
        name: "description",
        content:
          "An interactive 3D journey through the GridCrest smart grid ecosystem — from field meters to the Anantya intelligence platform.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "#050e1a",
        overflow: "hidden",
      }}
    >
      {/* Back button */}
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 110 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 18px",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            color: "rgba(255,255,255,0.85)",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
            transition: "background 0.2s",
          }}
        >
          ← GridCrest
        </Link>
      </div>

      {/* Title badge */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 110,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "5px 14px",
            background: "rgba(29,192,210,0.12)",
            border: "1px solid rgba(29,192,210,0.3)",
            borderRadius: 999,
            color: "#1DC0D2",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          The Grid World
        </span>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 110,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            margin: 0,
          }}
        >
          Scroll to explore
        </p>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ opacity: 0.35 }}>
          <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="white" />
          <circle cx="8" cy="6" r="2" fill="white">
            <animate
              attributeName="cy"
              values="6;16;6"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Three.js canvas */}
      <Suspense fallback={
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.3)",
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}>
          Loading world…
        </div>
      }>
        <GridWorld />
      </Suspense>
    </div>
  );
}
