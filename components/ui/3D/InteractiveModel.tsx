"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Float, Text, RoundedBox } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Interactive3DText() {
  const textRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: (e.clientX / window.innerWidth) * 2 - 1, y: -(e.clientY / window.innerHeight) * 2 + 1 });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(function animate() {
      if (textRef.current) {
        textRef.current.rotation.x = THREE.MathUtils.lerp(textRef.current.rotation.x, mouse.y * 0.5, 0.05);
        textRef.current.rotation.y = THREE.MathUtils.lerp(textRef.current.rotation.y, mouse.x * 0.5, 0.05);
      }
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(id);
  }, [mouse]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={textRef}>
        <Text fontSize={1.2} color="#3b82f6" anchorX="center" anchorY="middle">
          NANDAN
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} emissive="#1e40af" emissiveIntensity={0.3} />
        </Text>
        <Text fontSize={0.8} position={[0, -1.5, 0]} color="#8b5cf6" anchorX="center" anchorY="middle">
          DEVELOPER
          <meshStandardMaterial color="#8b5cf6" metalness={0.7} roughness={0.3} emissive="#7c3aed" emissiveIntensity={0.2} />
        </Text>
      </group>
    </Float>
  );
}

function HolographicCard({ position, rotation, text, color }: { position: [number, number, number]; rotation: [number, number, number]; text: string; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} transparent opacity={0.8} emissive={color} emissiveIntensity={0.2} />
        </RoundedBox>
        <Text fontSize={0.3} color="white" anchorX="center" anchorY="middle" position={[0, 0, 0.06]}>
          {text}
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Interactive3DText />
      <HolographicCard position={[-4, 2, -2]} rotation={[0, 0.5, 0]} text="REACT" color="#61dafb" />
      <HolographicCard position={[4, -1, -2]} rotation={[0, -0.5, 0]} text="THREE.JS" color="#3b82f6" />
      <HolographicCard position={[-3, -2, -3]} rotation={[0, 0.8, 0]} text="NEXT.JS" color="#000000" />
      <HolographicCard position={[3, 2.5, -1]} rotation={[0, -0.8, 0]} text="TYPESCRIPT" color="#3178c6" />
    </>
  );
}

export default function InteractiveModel() {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <Scene />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}


