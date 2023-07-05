"use client";
import { Backdrop, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
export default function CanvasManager() {
  return (
    <Canvas>
        <OrbitControls />
        <ambientLight intensity={10} />
        <Backdrop
            floor={0.25} // Stretches the floor segment, 0.25 by default
            segments={20} // Mesh-resolution, 20 by default
        >
            <meshStandardMaterial color="#353540" />
        </Backdrop>
    </Canvas>
  );
}
