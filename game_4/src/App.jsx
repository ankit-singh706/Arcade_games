import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import {
    Html,
    Environment,
    useGLTF,
    ContactShadows,
    OrbitControls,
} from '@react-three/drei'
import * as THREE from 'three'

import './App.css'
import Arcade from './Arcade'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Canvas camera={{ position: [1, 200, 740]}}>
            <Suspense fallback={null}>
                {/* <ambientLight intensity={1.5} /> */}
                <group position={[0, -200, -100]}>
                    <Arcade />
                </group>
                <Environment preset='city' />
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

export default App
