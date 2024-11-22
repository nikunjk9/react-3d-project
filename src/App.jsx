import { useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {
  return (
    <div className="app-container">
      {/* Nebula effect */}
      <div className="nebula"></div>
      
      {/* Multi-layered stars background */}
      <div className="stars-background"></div>
      
      {/* Canvas containing the Earth */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.01} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
          />
          
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          
          <Environment preset='night' />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
