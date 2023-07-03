import { Point, Points,  } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { use } from 'react';
import * as THREE from 'three';

export default function Loading() {
  // Or a custom loading skeleton component
  let pointsList = [];
  useFrame(() => {
    // debugger


  return (
    <Canvas className="w-full h-full fixed">
      <Points>
        <pointsMaterial vertexColors />

        {new Array(1000).fill(null).map((_, i) => {
          const x = (Math.random() - 0.5) * 10;
          const y = (Math.random() - 0.5) * 10;
          const z = (Math.random() - 0.5) * 10;

          pointsList.push([x, y, z]);
          
          return (
            <Point
              key={i}
              position={[x, y, z]}
              color={
                new THREE.Color(
                  `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
                )
              }
              onPointerOver={() => {
                debugger
              }}
            />
          );
        })}
      </Points>
    </Canvas>
  );
}
