import { useGLTF } from "@react-three/drei";
import React, { forwardRef } from "react";

export const Phone = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("me/models/samsung_galaxy_s21_violet.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[Math.PI, 0, Math.PI]} scale={100}>
          <mesh
            geometry={nodes.Samsung_Galaxy_S21_Gold_0.geometry}
            material={materials.Gold}
            
          />
          <mesh
            geometry={nodes.Samsung_Galaxy_S21_Violet_0.geometry}
            material={materials.Violet}
          />
          <mesh
            geometry={nodes.Samsung_Galaxy_S21_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Samsung_Galaxy_S21_Antenna_0.geometry}
            material={materials.Antenna}
          />
        </group>
        <group rotation={[Math.PI, 0, Math.PI]} scale={0.48}>
          <mesh
            geometry={nodes.Camera_Wide_Angle_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Camera_Wide_Angle_Camera_0.geometry}
            material={materials.Camera}
          />
          <mesh
            geometry={nodes.Camera_Wide_Angle_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera_Wide_Angle_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Camera_Wide_Angle_Gold_0.geometry}
            material={materials.Gold}
          />
        </group>
        <group rotation={[Math.PI, 0, Math.PI]} scale={0.48}>
          <mesh
            geometry={nodes.Camera_Ultrawide_Angle_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Camera_Ultrawide_Angle_Camera_0.geometry}
            material={materials.Camera}
          />
          <mesh
            geometry={nodes.Camera_Ultrawide_Angle_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera_Ultrawide_Angle_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Camera_Ultrawide_Angle_Gold_0.geometry}
            material={materials.Gold}
          />
        </group>
        <group rotation={[0, 0, -Math.PI]} scale={0.18}>
          <mesh
            geometry={nodes.Camera_Front_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Camera_Front_Camera_0.geometry}
            material={materials.Camera}
          />
          <mesh
            geometry={nodes.Camera_Front_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera_Front_Lens_0.geometry}
            material={materials.Lens}
          />
        </group>
        <group rotation={[Math.PI, 0, Math.PI]} scale={0.48}>
          <mesh
            geometry={nodes.Camera_Teleobject_Frame_0.geometry}
            material={materials.Frame}
          />
          <mesh
            geometry={nodes.Camera_Teleobject_Camera_0.geometry}
            material={materials.Camera}
          />
          <mesh
            geometry={nodes.Camera_Teleobject_Glass_0.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Camera_Teleobject_Lens_0.geometry}
            material={materials.Lens}
          />
          <mesh
            geometry={nodes.Camera_Teleobject_Gold_0.geometry}
            material={materials.Gold}
          />
        </group>
        <mesh
          geometry={nodes.Display_Display_0.geometry}
          material={materials.Display}
          rotation={[Math.PI, 0, Math.PI]}
          scale={100}
        />
      </group>
    </group>
  );
});
