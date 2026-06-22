"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

const TECH_COLORS = ["#b6ff00", "#a855f7", "#22d3ee", "#f472b6", "#fbbf24", "#34d399"];

function TechCube() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.25;
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={innerRef}>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshStandardMaterial
            color="#111118"
            metalness={0.9}
            roughness={0.15}
            wireframe
          />
        </mesh>
      </Float>
      <mesh>
        <boxGeometry args={[1.6, 1.6, 1.6]} />
        <MeshDistortMaterial
          color="#b6ff00"
          metalness={0.6}
          roughness={0.2}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

function Particles({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const c = new THREE.Color(TECH_COLORS[i % TECH_COLORS.length]);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return col;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#b6ff00" />
      <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#a855f7" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#ffffff" />
      <TechCube />
      <Particles />
      <Stars radius={50} depth={30} count={2000} factor={3} saturation={0} fade speed={0.5} />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-bg/80" />
    </div>
  );
}
