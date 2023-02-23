import React, { forwardRef, useRef } from "react";
import { Text, useGLTF } from "@react-three/drei";

const Coffe = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("me/models/cof.glb");
  return (
    <group {...props} ref={ref} dispose={null}>
      <group position={[0.02, 0.05, 0.01]} scale={0.29}>
        <mesh geometry={nodes.Object_4.geometry} material={materials[".001"]}>
          <meshStandardMaterial color={"#272727"} metalness={0.7} roughness={0.1} />
        </mesh>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.material}
          position={[0, 2.73, 0]}
          scale={[0.92, 0.25, 0.92]}
        >
          <meshStandardMaterial color={"#242424"} metalness={0.7} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
});

export default Coffe;
