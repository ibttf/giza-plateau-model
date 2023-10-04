import {
  Cylinder,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import {
  CylinderCollider,
  RigidBody,
  CuboidCollider,
} from "@react-three/rapier";
import { CarController } from "./CarController";
import { Text3D } from "@react-three/drei";
import { Pyramid } from "./Pyramid";
import { Desert } from "./Desert";
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />
      {/* BACKGROUND */}
      <RigidBody colliders={false} type="fixed" name="void">
        <Desert position={[0, -1.5, 0]} />
        <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
      </RigidBody>

      <Pyramid
        scale={[4.608, 2.932, 4.608]}
        position={[0, -0.5, -20]}
        rotation-y={1.25 * Math.PI}
      />
      {/* <Desert scale={[100, 1, 100]} position={[0, -0.5, 0]} /> */}
      <Pyramid
        scale={[4.31, 2.87, 4.31]}
        position={[-12, -0.5, -26]}
        rotation-y={1.4 * Math.PI}
      />
      <Pyramid
        scale={[2.068, 1.31, 2.068]}
        position={[-18, -0.5, -34]}
        rotation-y={Math.PI}
      />
      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 100]} />
          <Cylinder scale={[100, 1, 100]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>

        {/* WORDS */}
        <Text3D
          position={[-8, 2, -4]}
          scale={[1, 1.5, 1]}
          size={1}
          maxWidth={100}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          The Giza Plateau
          <meshMatcapMaterial color="orange" />
        </Text3D>
        {/* WORDS */}
        <Text3D
          position={[-5, 0.5, -4]}
          scale={[0.5, 0.5, 0.5]}
          size={1}
          maxWidth={100}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          A 3D Render By Roy Lee
          <meshMatcapMaterial color="orange" />
        </Text3D>
        {/* CHARACTER */}
        <CarController />
      </group>
    </>
  );
};
