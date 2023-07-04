"use client";
import React, { useEffect, useRef } from 'react';
import { Canvas as R3FCanvas, extend } from '@react-three/fiber';
import gsap from 'gsap';
import { OrbitControls } from '@react-three/drei';

extend({R3FCanvas})
const Canvas = ({ children }) => {
    const r3fCanvasRef = useRef(null);
    const twoDCanvasRef = useRef(null);

    useEffect(() => {
        // R3F Initialization
        const initR3F = () => {
            // Perform your Three.js scene, camera, and renderer setup here
            // Example: const scene = new THREE.Scene();
            // Example: const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            // Example: const renderer = new THREE.WebGLRenderer({ canvas: r3fCanvasRef.current });

            // Start rendering your R3F content
        };

        initR3F();

        // 2D Canvas Rendering
        const render2D = () => {
            const ctx = twoDCanvasRef.current.getContext('2d');

            // Perform your 2D rendering logic here
            // Example: ctx.fillStyle = 'red';
            // Example: ctx.fillRect(0, 0, twoDCanvasRef.current.width, twoDCanvasRef.current.height);

            // Start rendering your 2D content
        };

        render2D();

        // Event listeners for user interaction
        const handleR3FInteraction = (event) => {
            // Handle user interaction on the R3F canvas
        };

        const handle2DInteraction = (event) => {
            // Handle user interaction on the 2D canvas
        };

        // Attach event listeners
        r3fCanvasRef.current.addEventListener('click', handleR3FInteraction);
        twoDCanvasRef.current.addEventListener('click', handle2DInteraction);

        // Cleanup
        // return () => {
        //     r3fCanvasRef.current.removeEventListener('click', handleR3FInteraction);
        //     twoDCanvasRef.current.removeEventListener('click', handle2DInteraction);
        // };
    }, []);

    return (
        <div className='fixed h-screen w-screen top-0 left-0 right-0 bottom-0 z-0'>
            <R3FCanvas
            onCreated={(c) => {
                // c.gl.setClearColor('white')
                gsap.to(c.gl.domElement, { 
                    duration: 1, 
                    opacity: 1 ,
                    ease: 'power3.inOut'
                })
            }}
            className="w-full h-full bg-cyan-400"
            shadows={true}
            // dpr={window.devicePixelRatio}
                ref={r3fCanvasRef}
                id="r3f-canvas"
                camera={{ position: [0, 0, -5], fov: 75 }}
            >
                <OrbitControls />
                <ambientLight 
                    color={0xff0000}
                    intensity={0.5}
                />
                <pointLight 
                    color={0xf8f8f8}
                    position={[10, 10, 10]}
                    intensity={1.5}
                />
                <mesh position={[0,0,5]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
                {/* {children} */}
            </R3FCanvas>
            <canvas ref={twoDCanvasRef} id="2d-canvas" />
        </div>
    );
};

export default Canvas;
