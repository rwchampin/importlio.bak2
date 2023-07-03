import { Canvas,  } from '@react-three/fiber'
import { Point } from '@react-three/drei'
export default function Loading() {
    // Or a custom loading skeleton component
    return (
      <Canvas className="w-full h-full fixed">

          <pointsMaterial vertexColors />

          {new Array(1000).fill(null).map((_, i) => {
            const x = (Math.random() - 0.5) * 10
            const y = (Math.random() - 0.5) * 10
            const z = (Math.random() - 0.5) * 10
            return ( 
            <Point
             key={i}
             position={[x, y, z]} 
             color={
              new THREE.Color(
                `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
              )
             }
             />
            )
          }
      </Canvas>
    )
  }