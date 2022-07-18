import React, { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import stripesImage from "../images/stripes.webp";

function Cylinder(props) {
  const ref = useRef();
  const speed = 0.008;
  const tilt = -0.05;
  const base = new THREE.TextureLoader().load(stripesImage);

  useFrame((state, delta) => {
    ref.current.rotation.y += speed;
  });

  return (
    <group {...props} ref={ref}>
      <mesh rotation={[(90 * Math.PI) / 180, tilt, 0]}>
        <torusGeometry args={[5.2, 1.3, 2, 300]} />
        <meshToonMaterial color={"#045cfc"} map={base} />
      </mesh>
    </group>
  );
}

function Sphere(props) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[3.5, 64, 32]} />
      <meshStandardMaterial
        color={"#2421ab"}
        roughness={0.6}
        metalness={0.4}
        envMapIntensity={2.9}
      />
    </mesh>
  );
}

function ThreeDee(props) {
  const x = 0;
  const y = -4.5;
  const z = -18;
  const [zoom, setZoom] = useState(1.5);

  useLayoutEffect(() => {
    const width = document.body.clientWidth;

    if (width < 600) return setZoom(0.4);
    if (width < 900) return setZoom(0.6);
  }, []);

  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        zoom={zoom}
        fov={50}
        near={1}
        rotation={[-0.25, 0, 0]}
        {...props}
      ></PerspectiveCamera>
      <fog attach="fog" color="#ff7b9b" near={8} far={50} />
      <ambientLight intensity={0.7} />
      <directionalLight
        color="#045cfc"
        position={[-15, 10, 10]}
        intensity={1.5}
      />
      <directionalLight
        color="#045cfc"
        position={[20, 5, -15]}
        intensity={0.3}
      />
      <Sphere position={[x, y, z]} />
      <Cylinder position={[x, y, z]} />
      <Environment preset="night" />
    </Canvas>
  );
}

export default ThreeDee;
