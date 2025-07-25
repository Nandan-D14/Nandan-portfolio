"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Simple rotating wireframe sphere
function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 20, 20]} />
      <meshBasicMaterial 
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Simple floating ring
function FloatingRing() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.5, 0.1, 8, 16]} />
      <meshBasicMaterial 
        color="#8b5cf6"
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <RotatingSphere />
      <FloatingRing />
    </>
  );
}

export default function Profile3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
