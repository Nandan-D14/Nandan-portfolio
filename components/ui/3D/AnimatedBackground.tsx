"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Floating geometric shape component
function FloatingShape({ position, geometry, color, speed = 1 }: {
  position: [number, number, number];
  geometry: 'sphere' | 'box' | 'torus' | 'octahedron';
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return (
          <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.4}
              metalness={0.8}
            />
          </Sphere>
        );
      case 'box':
        return (
          <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
            <meshStandardMaterial
              color={color}
              metalness={0.7}
              roughness={0.2}
              emissive={color}
              emissiveIntensity={0.1}
            />
          </Box>
        );
      case 'torus':
        return (
          <Torus ref={meshRef} position={position} args={[0.5, 0.2, 16, 32]}>
            <meshStandardMaterial
              color={color}
              metalness={0.8}
              roughness={0.3}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Torus>
        );
      case 'octahedron':
        return (
          <Octahedron ref={meshRef} position={position} args={[0.6]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.2}
              speed={1.5}
              roughness={0.3}
              metalness={0.9}
            />
          </Octahedron>
        );
      default:
        return null;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {renderGeometry()}
    </Float>
  );
}

// Particle system for star field
function StarField() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation transparent opacity={0.8} />
    </points>
  );
}

// Animated wireframe sphere
function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -5]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

// Main 3D Scene
function Scene() {
  const shapes = useMemo(() => [
    { position: [-4, 2, -2] as [number, number, number], geometry: 'sphere' as const, color: '#3b82f6', speed: 1.2 },
    { position: [4, -1, -3] as [number, number, number], geometry: 'box' as const, color: '#8b5cf6', speed: 0.8 },
    { position: [-2, -2, -4] as [number, number, number], geometry: 'torus' as const, color: '#06b6d4', speed: 1.5 },
    { position: [3, 3, -1] as [number, number, number], geometry: 'octahedron' as const, color: '#f59e0b', speed: 1.0 },
    { position: [-5, -1, -5] as [number, number, number], geometry: 'sphere' as const, color: '#ef4444', speed: 0.9 },
    { position: [2, -3, -2] as [number, number, number], geometry: 'box' as const, color: '#10b981', speed: 1.3 },
  ], []);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      
      {/* Directional lighting */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      {/* Star field */}
      <StarField />
      
      {/* Wireframe sphere */}
      <WireframeSphere />
      
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
}

// Main component
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
