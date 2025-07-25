"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Text, RoundedBox } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Interactive 3D Logo/Text
function Interactive3DText() {
  const textRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (textRef.current) {
      // Smooth rotation based on mouse position
      textRef.current.rotation.x = THREE.MathUtils.lerp(
        textRef.current.rotation.x,
        mousePosition.y * 0.5,
        0.05
      );
      textRef.current.rotation.y = THREE.MathUtils.lerp(
        textRef.current.rotation.y,
        mousePosition.x * 0.5,
        0.05
      );
      
      // Floating animation
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={textRef}>
        <Text
          font="/fonts/inter-bold.woff"
          fontSize={1.2}
          color="#3b82f6"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0]}
        >
          NANDAN
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.3}
          />
        </Text>
        <Text
          font="/fonts/inter-bold.woff"
          fontSize={0.8}
          color="#8b5cf6"
          anchorX="center"
          anchorY="middle"
          position={[0, -1.5, 0]}
        >
          DEVELOPER
          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.7}
            roughness={0.3}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </Text>
      </group>
    </Float>
  );
}

// Animated holographic cards
function HolographicCard({ position, rotation, text, color }: {
  position: [number, number, number];
  rotation: [number, number, number];
  text: string;
  color: string;
}) {
  const cardRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      cardRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={cardRef} position={position} rotation={rotation}>
        <RoundedBox args={[2, 1.2, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color={color}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </RoundedBox>
        <Text
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

// DNA Helix Animation
function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const spheres = [];
  for (let i = 0; i < 20; i++) {
    const y = (i - 10) * 0.3;
    const angle1 = (i * Math.PI) / 5;
    const angle2 = angle1 + Math.PI;
    
    spheres.push(
      <mesh key={`sphere1-${i}`} position={[Math.cos(angle1) * 1.5, y, Math.sin(angle1) * 1.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.5} />
      </mesh>
    );
    
    spheres.push(
      <mesh key={`sphere2-${i}`} position={[Math.cos(angle2) * 1.5, y, Math.sin(angle2) * 1.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.5} />
      </mesh>
    );
  }

  return (
    <group ref={helixRef} position={[6, 0, -3]}>
      {spheres}
    </group>
  );
}

// 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 5, 0]} intensity={1} color="#3b82f6" />

      {/* Interactive 3D Text */}
      <Interactive3DText />

      {/* Holographic Cards */}
      <HolographicCard
        position={[-4, 2, -2]}
        rotation={[0, 0.5, 0]}
        text="REACT"
        color="#61dafb"
      />
      <HolographicCard
        position={[4, -1, -2]}
        rotation={[0, -0.5, 0]}
        text="THREE.JS"
        color="#3b82f6"
      />
      <HolographicCard
        position={[-3, -2, -3]}
        rotation={[0, 0.8, 0]}
        text="NEXT.JS"
        color="#000000"
      />
      <HolographicCard
        position={[3, 2.5, -1]}
        rotation={[0, -0.8, 0]}
        text="TYPESCRIPT"
        color="#3178c6"
      />

      {/* DNA Helix */}
      <DNAHelix />
    </>
  );
}

export default function InteractiveModel() {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <Scene />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
