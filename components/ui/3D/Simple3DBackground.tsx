"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
    </mesh>
  );
}

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.5;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.5} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

function FloatingTorus({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.02 * speed;
    meshRef.current.rotation.z += 0.01 * speed;
    meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
  });
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.3, 8, 16]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} wireframe />
    </mesh>
  );
}

function Simple3DScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <FloatingCube position={[-3, 1, -2]} color="#3b82f6" speed={0.8} />
      <FloatingSphere position={[3, -1, -3]} color="#8b5cf6" speed={1.2} />
      <FloatingTorus position={[-2, -2, -1]} color="#06b6d4" speed={1.0} />
      <FloatingCube position={[2, 2, -4]} color="#f59e0b" speed={0.6} />
      <FloatingSphere position={[-4, -1, -3]} color="#ef4444" speed={0.9} />
      <FloatingTorus position={[4, 0, -2]} color="#10b981" speed={1.1} />
    </>
  );
}

export default function Simple3DBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 1]}
        gl={{ antialias: false, powerPreference: "low-power" }}
        frameloop="demand"
      >
        <Simple3DScene />
      </Canvas>
    </div>
  );
}


