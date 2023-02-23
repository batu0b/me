import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const MacBook = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("me/models/macbook_air_m2.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Aluminum_-_Anodized_Glossy_Grey_keyboard.jpg"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Glass_-_Heavy_Color"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Plastic_-_Translucent_Matte_Gray"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Acrylic_Clear}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Bronze_-_Polished"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Rubber_-_Soft"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Steel_-_Satin"]}
        />
      </group>
    </group>
  );
});

export default MacBook;
