import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useRef } from "react";
import { Controls } from "../App";
import Character from "./Car";
import * as THREE from "three";

const JUMP_FORCE = 10;
const MOVEMENT_SPEED = 3;
const MAX_VEL = 10; // 3 times of MOVEMENT_SPEED

export const CarController = () => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
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

  let acceleration = 1;

  useFrame((state) => {
    const linvel = rigidbody.current.linvel();

    if (resetPressed) {
      rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
      rigidbody.current.setLinvel(vec3({ x: 0, y: 0, z: 0 }));
    }

    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    if (rightPressed && linvel.x < MAX_VEL) linvel.x += MOVEMENT_SPEED;
    if (leftPressed && linvel.x > -MAX_VEL) linvel.x -= MOVEMENT_SPEED;
    if (backPressed && linvel.z < MAX_VEL) linvel.z += MOVEMENT_SPEED;
    if (forwardPressed && linvel.z > -MAX_VEL) linvel.z -= MOVEMENT_SPEED;

    rigidbody.current.setLinvel(linvel); // Directly setting the linear velocity

    const angle = Math.atan2(linvel.x, linvel.z);
    targetQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
    character.current.quaternion.slerp(targetQuaternion, 0.1);

    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );
    state.camera.position.x = characterWorldPosition.x;
    state.camera.position.z = characterWorldPosition.z + 14;
    state.camera.lookAt(characterWorldPosition.x, 0, characterWorldPosition.z);
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
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "void")
            rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }));
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
