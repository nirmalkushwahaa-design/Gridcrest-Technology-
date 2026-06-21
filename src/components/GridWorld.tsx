import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  useScroll,
  Stars,
  Float,
  Sparkles,
  Line,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// ─── Ground ───────────────────────────────────────────────────────────────────

function Ground() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, -25]}>
      <planeGeometry args={[150, 110]} />
      <meshToonMaterial color="#091726" />
    </mesh>
  );
}

// ─── Building block ───────────────────────────────────────────────────────────

function Building({
  position,
  w = 1.5,
  h = 4,
  d = 1.5,
  color = "#112a4a",
}: {
  position: [number, number, number];
  w?: number;
  h?: number;
  d?: number;
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, h / 2, 0]} castShadow>
        <boxGeometry args={[w, h, d]} />
        <meshToonMaterial color={color} />
      </mesh>
      {/* Top accent ledge */}
      <mesh position={[0, h + 0.06, 0]}>
        <boxGeometry args={[w + 0.12, 0.12, d + 0.12]} />
        <meshToonMaterial color="#1a3a5c" />
      </mesh>
      {/* Window rows (emissive boxes) */}
      {Array.from({ length: Math.floor(h / 1.2) }).map((_, row) =>
        Array.from({ length: Math.floor(w) }).map((__, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[
              (col - Math.floor(w) / 2 + 0.5) * 0.8,
              0.8 + row * 1.2,
              d / 2 + 0.01,
            ]}
          >
            <boxGeometry args={[0.25, 0.35, 0.01]} />
            <meshBasicMaterial
              color={Math.random() > 0.3 ? "#1DC0D2" : "#9761E6"}
              transparent
              opacity={0.6 + Math.random() * 0.4}
            />
          </mesh>
        )),
      )}
    </group>
  );
}

// ─── City block (cluster of buildings) ────────────────────────────────────────

const BLOCK_CONFIGS: Array<{
  pos: [number, number, number];
  w: number;
  h: number;
  d: number;
  color: string;
}> = [
  { pos: [0, 0, 0], w: 1.8, h: 6, d: 1.8, color: "#112a4a" },
  { pos: [2.6, 0, 0.4], w: 1.2, h: 4, d: 1.2, color: "#0f2540" },
  { pos: [-1.6, 0, 2.1], w: 2, h: 5, d: 1.5, color: "#152e50" },
  { pos: [1.1, 0, -2.2], w: 1.5, h: 7, d: 1.5, color: "#0d2238" },
  { pos: [-2.6, 0, -0.6], w: 1.2, h: 3, d: 1.2, color: "#132840" },
  { pos: [0.5, 0, 3.2], w: 1, h: 2.5, d: 1, color: "#0e2640" },
];

function CityBlock({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {BLOCK_CONFIGS.map((b, i) => (
        <Building key={i} position={b.pos} w={b.w} h={b.h} d={b.d} color={b.color} />
      ))}
    </group>
  );
}

// ─── Smart meters (small boxes near start) ────────────────────────────────────

const METER_POSITIONS: [number, number, number][] = [
  [-3, 0, 2], [4, 0, 3], [0, 0, 6], [-5, 0, 5], [6, 0, 0],
  [2, 0, 8], [-2, 0, 9], [7, 0, 6],
];

function SmartMeters() {
  return (
    <>
      {METER_POSITIONS.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.35, 0.7, 0.18]} />
            <meshToonMaterial color="#0d2a42" />
          </mesh>
          <mesh position={[0, 0.6, 0.1]}>
            <boxGeometry args={[0.2, 0.18, 0.02]} />
            <meshBasicMaterial color="#1DC0D2" />
          </mesh>
        </group>
      ))}
    </>
  );
}

// ─── Communication tower ──────────────────────────────────────────────────────

function CommTower({ position }: { position: [number, number, number] }) {
  const blinkRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta * 2.5;
    if (blinkRef.current) {
      const mat = blinkRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.4 + 0.6 * Math.abs(Math.sin(t.current));
    }
  });

  return (
    <group position={position}>
      {/* Main shaft — tapered hexagonal prism */}
      <mesh position={[0, 8, 0]}>
        <cylinderGeometry args={[0.18, 0.55, 16, 6]} />
        <meshToonMaterial color="#1a3456" />
      </mesh>
      {/* Crossbars */}
      {[6, 9.5, 13].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation-z={Math.PI / 2}>
          <boxGeometry args={[5.5, 0.12, 0.12]} />
          <meshToonMaterial color="#1a3456" />
        </mesh>
      ))}
      {/* Diagonal braces */}
      {[-1.5, 1.5].map((x, i) => (
        <mesh
          key={i}
          position={[x * 0.5, 10, 0]}
          rotation-z={(i === 0 ? 1 : -1) * 0.35}
        >
          <boxGeometry args={[0.08, 5, 0.08]} />
          <meshToonMaterial color="#152e50" />
        </mesh>
      ))}
      {/* Antenna */}
      <mesh position={[0, 17.2, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 2.5, 4]} />
        <meshBasicMaterial color="#9761E6" />
      </mesh>
      {/* Blink light */}
      <mesh ref={blinkRef} position={[0, 18.6, 0]}>
        <sphereGeometry args={[0.16, 6, 6]} />
        <meshBasicMaterial color="#9761E6" transparent opacity={1} />
      </mesh>
      <pointLight position={[0, 18, 0]} intensity={3} color="#9761E6" distance={12} />
    </group>
  );
}

// ─── Central Anantya Hub ──────────────────────────────────────────────────────

function DataHub({ position }: { position: [number, number, number] }) {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);
  const coreWire = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (r1.current) r1.current.rotation.y += delta * 0.5;
    if (r2.current) r2.current.rotation.z += delta * 0.35;
    if (r3.current) r3.current.rotation.x += delta * 0.22;
    if (coreWire.current) coreWire.current.rotation.y += delta * 0.12;
  });

  return (
    <group position={position}>
      {/* Platform base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[4, 5, 1, 8]} />
        <meshToonMaterial color="#0d2238" />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[3, 4, 0.2, 8]} />
        <meshBasicMaterial color="#1DC0D2" transparent opacity={0.25} />
      </mesh>

      {/* Floating core */}
      <Float speed={1.4} floatIntensity={0.7} rotationIntensity={0.05}>
        <group position={[0, 4, 0]}>
          {/* Solid fill to occlude back wireframe */}
          <mesh>
            <icosahedronGeometry args={[1.4, 1]} />
            <meshBasicMaterial color="#06111f" />
          </mesh>
          {/* Wireframe overlay */}
          <mesh ref={coreWire}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshBasicMaterial color="#1DC0D2" wireframe />
          </mesh>
          {/* Inner glow sphere */}
          <mesh>
            <sphereGeometry args={[0.9, 16, 16]} />
            <meshBasicMaterial color="#1DC0D2" transparent opacity={0.15} />
          </mesh>
        </group>
      </Float>

      {/* Orbital rings */}
      <mesh ref={r1} position={[0, 4, 0]}>
        <torusGeometry args={[2.4, 0.055, 8, 80]} />
        <meshBasicMaterial color="#1DC0D2" />
      </mesh>
      <mesh ref={r2} position={[0, 4, 0]} rotation-x={Math.PI / 3}>
        <torusGeometry args={[3.2, 0.04, 8, 80]} />
        <meshBasicMaterial color="#9761E6" />
      </mesh>
      <mesh ref={r3} position={[0, 4, 0]} rotation-x={-Math.PI / 5}>
        <torusGeometry args={[4, 0.03, 8, 80]} />
        <meshBasicMaterial color="#1DC0D2" transparent opacity={0.55} />
      </mesh>

      {/* Vertical energy beam */}
      <mesh position={[0, 10, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 12, 6]} />
        <meshBasicMaterial color="#1DC0D2" transparent opacity={0.3} />
      </mesh>

      {/* Lights + particles */}
      <pointLight position={[0, 4, 0]} intensity={12} color="#1DC0D2" distance={30} />
      <pointLight position={[0, 4, 0]} intensity={4} color="#9761E6" distance={20} />
      <Sparkles count={100} scale={12} size={2} speed={0.5} color="#1DC0D2" />
    </group>
  );
}

// ─── Data stream (arc + flowing packets) ──────────────────────────────────────

function DataStream({
  from,
  to,
  color = "#1DC0D2",
  speed = 0.2,
  count = 3,
  arcHeight = 6,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color?: string;
  speed?: number;
  count?: number;
  arcHeight?: number;
}) {
  const curve = useMemo(() => {
    const mid = new THREE.Vector3(
      (from[0] + to[0]) / 2,
      Math.max(from[1], to[1]) + arcHeight,
      (from[2] + to[2]) / 2,
    );
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...from),
      mid,
      new THREE.Vector3(...to),
    );
  }, [from, to, arcHeight]);

  const linePoints = useMemo(() => curve.getPoints(64), [curve]);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const tRef = useRef(0);
  const offsets = useMemo(
    () => Array.from({ length: count }, (_, i) => i / count),
    [count],
  );

  useFrame((_, delta) => {
    tRef.current += delta * speed * 0.08;
    offsets.forEach((offset, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;
      const pt = curve.getPoint((tRef.current + offset) % 1);
      mesh.position.copy(pt);
    });
  });

  return (
    <group>
      <Line points={linePoints} color={color} lineWidth={1.2} transparent opacity={0.35} />
      {offsets.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.14, 6, 6]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

// ─── Scroll-driven camera ─────────────────────────────────────────────────────

function CameraRig() {
  const scroll = useScroll();
  const { camera } = useThree();

  const camPath = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 4, 16),      // t=0 : entrance
        new THREE.Vector3(-5, 6, 4),     // t=0.25
        new THREE.Vector3(3, 10, -12),   // t=0.5 : over towers
        new THREE.Vector3(-2, 14, -28),  // t=0.75
        new THREE.Vector3(0, 20, -36),   // t=1 : aerial of hub
      ]),
    [],
  );

  const lookPath = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-8, 5, -15),
        new THREE.Vector3(0, 3, -28),
        new THREE.Vector3(0, 1, -42),
        new THREE.Vector3(0, 4, -48),
      ]),
    [],
  );

  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const t = scroll.offset;
    const pos = camPath.getPoint(t);
    const target = lookPath.getPoint(t);
    camera.position.lerp(pos, 0.07);
    look.lerp(target, 0.07);
    camera.lookAt(look);
  });

  return null;
}

// ─── Full scene ───────────────────────────────────────────────────────────────

function Scene() {
  return (
    <>
      <CameraRig />

      {/* Lighting */}
      <ambientLight intensity={0.2} color="#1a3060" />
      <directionalLight position={[20, 40, 10]} intensity={0.35} color="#b0ccff" />

      <Ground />
      <SmartMeters />

      {/* City blocks */}
      <CityBlock position={[-11, 0, -7]} />
      <CityBlock position={[9, 0, -5]} />
      <CityBlock position={[-9, 0, -22]} />
      <CityBlock position={[9, 0, -21]} />

      {/* Comm towers */}
      <CommTower position={[-11, 0, -32]} />
      <CommTower position={[11, 0, -34]} />

      {/* Anantya hub */}
      <DataHub position={[0, 0, -48]} />

      {/* Data streams: neighborhoods → towers */}
      <DataStream from={[-11, 0, -7]} to={[-11, 17, -32]} color="#1DC0D2" speed={0.28} count={3} arcHeight={8} />
      <DataStream from={[9, 0, -5]} to={[11, 17, -34]} color="#9761E6" speed={0.22} count={3} arcHeight={8} />

      {/* districts → towers */}
      <DataStream from={[-9, 0, -22]} to={[-11, 17, -32]} color="#1DC0D2" speed={0.32} count={2} arcHeight={5} />
      <DataStream from={[9, 0, -21]} to={[11, 17, -34]} color="#9761E6" speed={0.26} count={2} arcHeight={5} />

      {/* towers → hub */}
      <DataStream from={[-11, 17, -32]} to={[0, 4, -48]} color="#1DC0D2" speed={0.4} count={4} arcHeight={10} />
      <DataStream from={[11, 17, -34]} to={[0, 4, -48]} color="#9761E6" speed={0.35} count={4} arcHeight={10} />

      {/* cross-link towers */}
      <DataStream from={[-11, 15, -32]} to={[11, 15, -34]} color="#ffffff" speed={0.18} count={2} arcHeight={4} />

      <Stars radius={100} depth={60} count={4000} factor={3} saturation={0.4} fade speed={0.4} />
    </>
  );
}

// ─── Scroll-progress tracker (for HTML overlay labels) ───────────────────────

function ScrollTracker({ onProgress }: { onProgress: (t: number) => void }) {
  const scroll = useScroll();
  useFrame(() => onProgress(scroll.offset));
  return null;
}

// ─── Section label definitions ───────────────────────────────────────────────

const SECTIONS = [
  { threshold: 0, label: "Field Layer", sub: "Smart meters collecting real-time consumption data" },
  { threshold: 0.3, label: "Communications", sub: "RF Mesh and cellular networks carrying the data upward" },
  { threshold: 0.65, label: "Anantya Intelligence", sub: "One unified platform — from raw data to grid insight" },
];

// ─── Root export ──────────────────────────────────────────────────────────────

export default function GridWorld() {
  const [progress, setProgress] = useState(0);
  const activeSection = useMemo(() => {
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      if (progress >= SECTIONS[i].threshold) return i;
    }
    return 0;
  }, [progress]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 4, 16], fov: 58, near: 0.1, far: 350 }}
        gl={{ antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#050e1a"]} />
        <fog attach="fog" args={["#050e1a", 50, 140]} />

        <ScrollControls pages={4} damping={0.2}>
          <Suspense fallback={null}>
            <Scene />
            <ScrollTracker onProgress={setProgress} />
          </Suspense>
        </ScrollControls>

        <EffectComposer>
          <Bloom intensity={1.8} luminanceThreshold={0.08} luminanceSmoothing={0.85} />
        </EffectComposer>
      </Canvas>

      {/* Section label overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 40,
          pointerEvents: "none",
          transition: "opacity 0.6s ease",
        }}
      >
        {SECTIONS.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              opacity: activeSection === i ? 1 : 0,
              transform: activeSection === i ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#1DC0D2",
                marginBottom: 6,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {s.label}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 280,
                lineHeight: 1.5,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {s.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          width: 2,
          height: 120,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: `${progress * 100}%`,
            background: "linear-gradient(to bottom, #1DC0D2, #9761E6)",
            borderRadius: 999,
            transition: "height 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}
