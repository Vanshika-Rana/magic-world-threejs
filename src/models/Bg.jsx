import React from 'react'
import bgScene from "../assets/3d/sky.glb"
import { useGLTF } from '@react-three/drei'
const Bg = () => {
    const bg = useGLTF(bgScene)
  return (
    <mesh>
      <primitive object={bg.scene} />
    </mesh>
  )
}

export default Bg
