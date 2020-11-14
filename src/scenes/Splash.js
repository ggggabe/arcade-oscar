import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import {
  Canvas,
  useThree,
  useFrame
} from 'react-three-fiber'
import { Flex, Box } from '@react-three/flex'
import { HTML, Text } from 'drei'

function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree()

  return (
    <HTML
      portal={portal}
      style={{
      }}>
      <div className={className} style={style}>
        {children}
      </div>
    </HTML>
  )
}

const WowText = ({children, size=0.03}) => {
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 16)
  const ref = useRef()

  useEffect(() => {
    ref.current.rotation.y = -.73
  }, [ref])

  useFrame(() => {
  })

  return <mesh ref={ref} >
    <Text position={[-size, -size, .1]} anchorX='center' anchorY='middle' textAlign='left' fontSize={1.5 * scale} color="yellow" maxWidth={3*viewport.width/4}>
      {children}
    </Text>
    <Text position={[0,0,0]} anchorX='center' anchorY='middle' textAlign='left' fontSize={1.5 * scale} color="green" maxWidth={3*viewport.width/4}>
      {children}
    </Text>
    <Text position={[size, size, -.1]} anchorX='center' anchorY='middle' textAlign='left' fontSize={1.5 * scale} color="red" maxWidth={3*viewport.width/4}>
      {children}
    </Text>
  </mesh>

}


const Layout = () => {
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 16)
  const ref = useRef()
  console.log(viewport)

  return (
    <Flex
      position={[
        -viewport.width / 2,
        viewport.height / 2,
        0
      ]}
      size={[viewport.width, viewport.height, 0]}
    >
      <Box dir="row" width="100%" height="100%" align="center" justify="center">
        <Box centerAnchor>
          <WowText>
            OSCAR
          </WowText>
        </Box>
      </Box>
    </Flex>
  )
}

export default () => {
  return <Canvas gl={{ antialias: true }} camera={{fov: 90 }}>
    <Layout />
  </Canvas>
}
