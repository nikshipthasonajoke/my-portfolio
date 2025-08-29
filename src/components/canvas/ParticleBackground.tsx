import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import * as noise from "@chriscourses/perlin-noise";

// This is the main component that renders the canvas and particles
export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <Stars />
    </Canvas>
  );
}

// This component handles the logic for the animated stars/particles
function Stars() {
  const ref = useRef<any>();
  // CORRECTED LINE: Explicitly typed useState to resolve the error.
  const [sphere] = useState<Float32Array>(() => inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array);

  // This will store the original positions of the particles
  const originalPositions = useMemo(() => new Float32Array(sphere), [sphere]);

  // This hook runs on every single frame (like a game loop)
  useFrame((state, delta) => {
    if (!ref.current) return;

    const time = state.clock.getElapsedTime();
    const positions = ref.current.geometry.attributes.position.array;

    // Animate each particle
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      const z = originalPositions[i + 2];

      const perlin = noise(x * 0.5 + time * 0.1, y * 0.5 + time * 0.1, z * 0.5);

      positions[i] += Math.sin(time) * perlin * 0.001;
      positions[i + 1] += Math.cos(time) * perlin * 0.001;
      positions[i + 2] += perlin * 0.001;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    ref.current.rotation.x += delta / 10;
    ref.current.rotation.y += delta / 20;
  });

  return (
    <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}