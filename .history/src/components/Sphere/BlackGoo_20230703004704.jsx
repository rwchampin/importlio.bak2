"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Icosahedron } from "@react-three/drei";

function MainSphere({ material }) {
    const main = useRef();
    // main sphere rotates following the mouse position
    useFrame(({ clock, mouse }) => {
      main.current.rotation.z = clock.getElapsedTime();
      main.current.rotation.y = THREE.MathUtils.lerp(
        main.current.rotation.y,
        mouse.x * Math.PI,
        0.1
      );
      main.current.rotation.x = THREE.MathUtils.lerp(
        main.current.rotation.x,
        mouse.y * Math.PI,
        0.1
      );
    });
    return (
      <Icosahedron
        args={[1, 4]}
        ref={main}
        material={material}
        position={[0, 0, 0]}
      />
    );
  }
  