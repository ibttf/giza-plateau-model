import { Cylinder } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { CarController } from "./CarController";
import { Text3D } from "@react-three/drei";
import { Pyramid } from "./Pyramid";
const scale = 0.2;
const pos_scale = 1.2;
export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* LIGHTS */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#ca8d16"}
      />
      {/* BACKGROUND */}
      <Pyramid
        scale={[115 * scale, 73 * scale, 115 * scale]}
        position={[0, -0.2, -80 * pos_scale]}
        rotation-y={1.25 * Math.PI}
      />
      {/* WORDS */}
      <>
        <Text3D
          position={[-35, 4, -90 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          This is the Pyramid of Khufu,
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-35, 3, -90 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          the second largest of the Giza Pyramids.
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-35, 2, -90 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          The pyramids are known for being almost exactly
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-35, 1, -90 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          aligned with the cardinal directions, to a tenth of a degree.
          <meshMatcapMaterial color="orange" />
        </Text3D>
      </>
      ;
      <Pyramid
        scale={[107.5 * scale, 72 * scale, 107.5 * scale]}
        position={[-70 * pos_scale, -0.2, -150 * pos_scale]}
        rotation-y={1.25 * Math.PI}
      />
      {/* WORDS */}
      <>
        <Text3D
          position={[-105 * pos_scale, 4, -160 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          This is the Pyramid of Khufu's son Khafre,
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-105 * pos_scale, 3, -160 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          the second biggest of the Giza Pyramids.
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-105 * pos_scale, 2, -160 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          The pyramids have an astonishingly square base perimeter,
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-105 * pos_scale, 1, -160 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          each side less than 0.1% off from each other.
          <meshMatcapMaterial color="orange" />
        </Text3D>
      </>
      <Pyramid
        scale={[52 * scale, 33 * scale, 52 * scale]}
        position={[-140 * pos_scale, -0.2, -220 * pos_scale]}
        rotation-y={1.25 * Math.PI}
      />
      {/* WORDS */}
      <>
        <Text3D
          position={[-175 * pos_scale, 4, -230 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          This is the Pyramid of Khafre's son Menkaure,
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-175 * pos_scale, 3, -230 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          the smallest of the Giza Pyramids.
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-175 * pos_scale, 2, -230 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          Although not 100% confirmed, the perimeter of the base divided by
          twice its height
          <meshMatcapMaterial color="orange" />
        </Text3D>

        <Text3D
          position={[-175 * pos_scale, 1, -230 * pos_scale]}
          scale={[0.5, 0.6, 0.5]}
          size={1}
          rotation={[0, 0, 0]}
          font={"/fonts/pixel.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          Gives a remarkably accurate estimate of pi.
          <meshMatcapMaterial color="orange" />
        </Text3D>
      </>
      <group position-y={-1}>
        {/* STAGE */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 1000]} />
          <Cylinder scale={[1000, 1, 1000]} receiveShadow>
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
