"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function DigitalRain() {
  const groupRef = useRef<THREE.Group>(null);
  
  const chars = useMemo(() => {
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const drops = [];
    
    for (let i = 0; i < 50; i++) {
      const column = [];
      for (let j = 0; j < 20; j++) {
        column.push({
          char: characters[Math.floor(Math.random() * characters.length)],
          position: [
            (i - 25) * 0.5,
            10 - j * 0.5,
            Math.random() * -10 - 2
          ] as [number, number, number],
          opacity: Math.random(),
          speed: Math.random() * 0.05 + 0.01
        });
      }
      drops.push(column);
    }
    
    return drops;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((column, i) => {
        column.children.forEach((char, j) => {
          char.position.y -= chars[i][j].speed;
          
          if (char.position.y < -10) {
            char.position.y = 10;
            chars[i][j].char = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'[
              Math.floor(Math.random() * 73)
            ];
          }
          
          // Fade effect
          const material = (char as any).material;
          if (material) {
            material.opacity = Math.max(0, 1 - (10 - char.position.y) / 15);
          }
        });
      });
    }
  });

  return (
    <group ref={groupRef}>
      {chars.map((column, i) => (
        <group key={i}>
          {column.map((drop, j) => (
            <Text
              key={j}
              position={drop.position}
              fontSize={0.3}
              color="#00ff00"
              anchorX="center"
              anchorY="middle"
            >
              {drop.char}
              <meshBasicMaterial 
                transparent 
                opacity={drop.opacity}
                color="#00ff00"
              />
            </Text>
          ))}
        </group>
      ))}
    </group>
  );
}

function HolographicGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      gridRef.current.position.y = -5 + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  const gridLines = useMemo(() => {
    const lines = [];
    const size = 20;
    const divisions = 20;
    
    for (let i = 0; i <= divisions; i++) {
      const alpha = i / divisions;
      const pos = (alpha - 0.5) * size;
      
      // Horizontal lines
      lines.push({
        start: [-size/2, 0, pos],
        end: [size/2, 0, pos],
        color: `hsl(${180 + alpha * 60}, 70%, 50%)`
      });
      
      // Vertical lines
      lines.push({
        start: [pos, 0, -size/2],
        end: [pos, 0, size/2],
        color: `hsl(${180 + alpha * 60}, 70%, 50%)`
      });
    }
    
    return lines;
  }, []);

  return (
    <group ref={gridRef} position={[0, -5, -5]}>
      {gridLines.map((line, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...line.start),
          new THREE.Vector3(...line.end)
        ]);
        
        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial color={line.color} transparent opacity={0.6} />
          </line>
        );
      })}
    </group>
  );
}

function CyberCube() {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      cubeRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <mesh ref={cubeRef} position={[-8, 0, -3]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#00ffff"
        emissive="#004444"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
}

function NeonSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      sphereRef.current.position.x = 8 + Math.sin(state.clock.elapsedTime) * 2;
      sphereRef.current.position.y = Math.cos(state.clock.elapsedTime * 1.5) * 1;
    }
  });

  return (
    <mesh ref={sphereRef} position={[8, 0, -4]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color="#ff0080"
        emissive="#440022"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-5, 0, 0]} intensity={1} color="#ff0080" />
      
      <DigitalRain />
      <HolographicGrid />
      <CyberCube />
      <NeonSphere />
    </>
  );
}

export default function MatrixRain() {
  return (
    <div className="fixed inset-0 -z-30 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
