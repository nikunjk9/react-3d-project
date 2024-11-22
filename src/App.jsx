import { useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stars from './Stars';


import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Canvas>
        <ambientLight intensity={1}/>
        <directionalLight position={[10, 10, 10]} intensity={1} />


        {/* Remove zoom property by false */}
        <OrbitControls enableZoom={false}/>

        {/* Load the Earth component */}
        <Suspense fallback={null}>
          <Earth/>
          <Stars /> 
        </Suspense>

        {/* Add environment lighting */}
        <Environment preset='night'/>
      </Canvas>

    </>
  )
}

export default App
