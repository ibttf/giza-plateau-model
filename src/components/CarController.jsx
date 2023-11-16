import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useRef } from "react";
import { Controls } from "../App";
import Character from "./Car";
import * as THREE from "three";

const MOVEMENT_SPEED = 10;
const MAX_VEL = 20;

export const CarController = () => {
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const resetPressed = useKeyboardControls((state) => state[Controls.reset]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const rigidbody = useRef();
  const isOnFloor = useRef(true);
  const character = useRef();
  const targetQuaternion = new THREE.Quaternion();

  useFrame((state) => {
    const linvel = rigidbody.current.linvel();

    if (resetPressed) {
      rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
      rigidbody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
      isOnFloor.current = true;
    }

    if (rightPressed || leftPressed || backPressed || forwardPressed) {
      const acceleration = vec3();

      if (rightPressed && linvel.x < MAX_VEL) acceleration.x += MOVEMENT_SPEED;
      if (leftPressed && linvel.x > -MAX_VEL) acceleration.x -= MOVEMENT_SPEED;
      if (backPressed && linvel.z < MAX_VEL) acceleration.z += MOVEMENT_SPEED;
      if (forwardPressed && linvel.z > -MAX_VEL)
        acceleration.z -= MOVEMENT_SPEED;

      const damping = 1; // Adjust this value for desired damping effect
      linvel.x = linvel.x * damping + acceleration.x;
      linvel.z = linvel.z * damping + acceleration.z;

      // Check if the character is moving to avoid excessive rotation
      if (linvel.x !== 0 || linvel.z !== 0) {
        const angle = Math.atan2(linvel.x, linvel.z);
        targetQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
        character.current.quaternion.slerp(targetQuaternion, 0.1);
      }
    }

    rigidbody.current.setLinvel(linvel);
    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );

    const circle1Center = new THREE.Vector3(10, 0, -80); // Example circle 1 center
    const circle1Radius = 40; // Example circle 1 radius

    const circle2Center = new THREE.Vector3(-70, 0, -170); // Example circle 2 center
    const circle2Radius = 35; // Example circle 2 radius

    const circle3Center = new THREE.Vector3(-170, 0, -260); // Example circle 2 center
    const circle3Radius = 20; // Example circle 2 radius

    const distanceToCircle1 = characterWorldPosition.distanceTo(circle1Center);
    const distanceToCircle2 = characterWorldPosition.distanceTo(circle2Center);
    const distanceToCircle3 = characterWorldPosition.distanceTo(circle3Center);

    // Remove existing circles
    state.scene.children = state.scene.children.filter(
      (child) => !(child instanceof THREE.Mesh && child.name === "circle")
    );

    if (distanceToCircle1 < circle1Radius) {
      // Logic for circle 1
      state.camera.zoom = 0.5; // Set the desired zoom level for circle 1
      state.camera.updateProjectionMatrix();
      state.camera.position.x = characterWorldPosition.x;
      state.camera.position.z = characterWorldPosition.z + 30;
      state.camera.position.y = characterWorldPosition.y + 3;
    } else if (distanceToCircle2 < circle2Radius) {
      // Logic for circle 2
      state.camera.zoom = 0.7; // Set the desired zoom level for circle 2
      state.camera.updateProjectionMatrix();
      state.camera.position.x = characterWorldPosition.x;
      state.camera.position.z = characterWorldPosition.z + 20;
      state.camera.position.y = characterWorldPosition.y + 3;
    } else if (distanceToCircle3 < circle3Radius) {
      // Logic for circle 2
      state.camera.zoom = 0.8; // Set the desired zoom level for circle 2
      state.camera.updateProjectionMatrix();
      state.camera.position.x = characterWorldPosition.x;
      state.camera.position.z = characterWorldPosition.z + 20;
      state.camera.position.y = characterWorldPosition.y + 3;
    } else {
      // Default logic outside circles
      state.camera.zoom = 0.9; // Default zoom level
      state.camera.updateProjectionMatrix();
      state.camera.position.x = characterWorldPosition.x;
      state.camera.position.z = characterWorldPosition.z + 15;
      state.camera.position.y = characterWorldPosition.y + 3;

      // Adjust the lookAt target only when the character is moving
      if (linvel.x !== 0 || linvel.z !== 0) {
        state.camera.lookAt(
          characterWorldPosition.x,
          0,
          characterWorldPosition.z
        );
      }
    }
  });

  return (
    <group>
      <RigidBody
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, -0.5, 0]} />
        <group ref={character}>
          <Character scale={[4, 4, 4]} />
        </group>
      </RigidBody>
    </group>
  );
};
