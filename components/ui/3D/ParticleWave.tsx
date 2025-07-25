"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function WaveParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 100;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        positions[index] = (i - count / 2) * 0.1;
        positions[index + 1] = 0;
        positions[index + 2] = (j - count / 2) * 0.1;
      }
    }
    return positions;
  }, [count]);

  const colors = useMemo(() => {
    const colors = new Float32Array(count * count * 3);
    for (let i = 0; i < count * count; i++) {
      colors[i * 3] = Math.random() * 0.5 + 0.5; // R
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5; // G
      colors[i * 3 + 2] = 1; // B
    }
    return colors;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const index = (i * count + j) * 3;
          const x = (i - count / 2) * 0.1;
          const z = (j - count / 2) * 0.1;
          
          positions[index + 1] = Math.sin(
            Math.sqrt(x * x + z * z) * 10 + state.clock.elapsedTime * 2
          ) * 0.5;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={meshRef} position={[0, -2, -5]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        vertexColors 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

function SpirallingSpheres() {
  const groupRef = useRef<THREE.Group>(null);
  
  const spheres = useMemo(() => {
    const spheres = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 8;
      const radius = 3;
      const y = (i - 25) * 0.2;
      
      spheres.push({
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ] as [number, number, number],
        color: `hsl(${(i / 50) * 360}, 70%, 60%)`,
        scale: Math.random() * 0.5 + 0.5
      });
    }
    return spheres;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[8, 0, -5]}>
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position} scale={sphere.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color={sphere.color} 
            emissive={sphere.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingRings() {
  const ringsRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    const rings = [];
    for (let i = 0; i < 5; i++) {
      rings.push({
        position: [0, i * 2 - 4, -8] as [number, number, number],
        rotation: [0, 0, 0] as [number, number, number],
        scale: 1 + i * 0.5,
        color: `hsl(${240 + i * 30}, 70%, 60%)`
      });
    }
    return rings;
  }, []);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.x = state.clock.elapsedTime * (0.5 + index * 0.2);
        ring.rotation.z = state.clock.elapsedTime * (0.3 + index * 0.1);
        ring.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5 + (index * 2 - 4);
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {rings.map((ring, index) => (
        <mesh key={index} position={ring.position} scale={ring.scale}>
          <torusGeometry args={[1, 0.1, 16, 32]} />
          <meshStandardMaterial 
            color={ring.color}
            emissive={ring.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, 0, -5]} intensity={0.5} color="#8b5cf6" />
      
      <WaveParticles />
      <SpirallingSpheres />
      <FloatingRings />
    </>
  );
}

export default function ParticleWave() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
