import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
  Lightformer,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Coffe from "./Coffe";
import MacBook from "./MacBook";
import { Phone } from "./Phone";
import * as THREE from "three";
export default function CanvasPage() {
  const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;
  const mac = useRef(null);
  const coffe = useRef(null);
  const macObj = useRef(null);
  const phoneObj = useRef(null);
  const phone = useRef(null);
  const orb = useRef(null);
  const stars = useRef(null);
  useFrame((state) => {
    const { x } = state.mouse;
    orb.current.setAzimuthalAngle((-x / 12) * angleToRadians(45));
    orb.current.update();
    mac.current.rotateY(0.01);
    macObj.current.rotateY(0.015);
    phoneObj.current.rotateY(-0.015);
    mac.current.rotateX(0.007);
    macObj.current.add(mac.current);
    phoneObj.current.add(phone.current);
    phone.current.rotateY(0.02);
    phone.current.rotateZ(0.02);
  });

  return (
    <>
      <OrbitControls
     
        ref={orb}
        enableRotate={false}
        enableDamping={false}
        enablePan={false}
        enabled={false}
        enableZoom={false}
      />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={5}
            saturation={2}
            fade
            
            speed={2}
          />
          
      <PerspectiveCamera makeDefault position={[-2, 8, 10]} />
      <ambientLight color={"white"} intensity={0.5} />
      <directionalLight position={[4, -1, 2]} intensity={3.4} color="white" />
      <spotLight
        args={["#00ff40", 5, 12, angleToRadians(60), 0.4, 0.6]}
        position={[7, 1, 7]}
        castShadow
      />{" "}
      <spotLight
        args={["#0115eb", 4, 22, angleToRadians(60), 0.4]}
        position={[-12, 1, 4]}
        castShadow
      />
      <group castShadow position={[-3, -1, 2]}>
        <group castShadow>
          <MacBook
            ref={mac}
            position={[2, 3, 2]}
            rotation={[-12, 0.7, 0]}
            scale={0.6}
          />
          <Phone ref={phone} scale={9} position={[0, 1, 2]} />
          <Coffe
            rotation={[0, angleToRadians(55), 0]}
            scale={5}
            position={[0, 0, 0]}
            ref={coffe}
          />
          <mesh ref={macObj} position={[0, 0, 0]} />
          <mesh ref={phoneObj} position={[0, 0, 0]} />
        </group>
        <mesh receiveShadow rotation={[angleToRadians(-90), 0, 0]}>
          <planeGeometry args={[60, 10, 60, 10]} />
          <meshStandardMaterial
            metalness={0.5}
            roughness={0.9}
            color="#232323"
          />
        </mesh>
      </group>
    </>
  );
}
