import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAnimation } from "framer-motion";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import useButtons from "../../hooks/useButtons";

export default function Undead(): JSX.Element {
  const undeadModel = useGLTF("./models/undeadWithAnimGreen.glb");
  const { forward, backward, left, right, shift, jump } = useButtons();

  const { actions } = useAnimations(undeadModel.animations, undeadModel.scene);

  undeadModel.scene.scale.set(1, 1, 1);

  undeadModel.scene.traverse((obj) => {
    obj.castShadow = true;
  });
  const currentAction = useRef("");
  const controlRef = useRef<any>("");
  const camera = useThree((state) => state.camera);

  const updateCameraTarger = (moveX: number, moveZ: number) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;

    cameraTarget.x = undeadModel.scene.position.x;
    cameraTarget.y = undeadModel.scene.position.y + 2;
    cameraTarget.z = undeadModel.scene.position.z;

    if (controlRef.current) {
      //@ts-ignore
      controlRef.current.target = cameraTarget;
    }
  };

  useEffect(() => {
    let action = "";
    if (forward || backward || right || left) {
      action = "walkingAnimation";
      if (shift) {
        action = "runAnimation";
      }
      if (jump) {
        action = "jumpAnimation";
      }
    } else if (jump) {
      action = "jumpAnimation";
    } else {
      action = "idleAnimation";
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();

      currentAction.current = action;
    }
  }, [forward, backward, left, right, shift, jump]);

  // -----------------------------------
  let walkDirection = new THREE.Vector3();
  let rotateAngle = new THREE.Vector3(0, 1, 0);
  let rotateQuarterian = new THREE.Quaternion();
  let cameraTarget = new THREE.Vector3();

  const directionOffset = ({ forward, backward, left, right }: any) => {
    let directionOffset = 0;

    if (forward) {
      if (left) {
        directionOffset = Math.PI / 4;
      } else if (right) {
        directionOffset = -Math.PI / 4;
      }
    } else if (backward) {
      if (left) {
        directionOffset = Math.PI / 4 + Math.PI / 2;
      } else if (right) {
        directionOffset = -Math.PI / 4 - Math.PI / 2;
      } else {
        directionOffset = Math.PI;
      }
    } else if (left) {
      directionOffset = Math.PI / 2;
    } else if (right) {
      directionOffset = -Math.PI / 2;
    }

    return directionOffset;
  };

  // -----------------------------------
  useFrame((state, delta) => {
    if (
      currentAction.current === "runAnimation" ||
      currentAction.current === "walkingAnimation" ||
      currentAction.current === "jumpAnimation"
    ) {
      // undeadModel.scene.position.x += 0.01
      let angleYCameraDirection = Math.atan2(
        camera.position.x - undeadModel.scene.position.x,
        camera.position.z - undeadModel.scene.position.z
      );

      let newDirectionalOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });
      rotateQuarterian.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionalOffset
      );
      undeadModel.scene.quaternion.rotateTowards(rotateQuarterian, 0.2);

      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionalOffset);

      const velocity = currentAction.current === "runAnimation" ? 5 : 2;

      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;

      undeadModel.scene.position.x += moveX;
      undeadModel.scene.position.z += moveZ;

      updateCameraTarger(moveX, moveZ);
    }
  });

  return (
    <Suspense
      fallback={<p className="text-white text-5xl absolute">Loading...</p>}
    >
      <OrbitControls ref={controlRef} />
      <primitive
        object={undeadModel.scene}
        metallness={1}
        position={[0, 0.04, 0]}
      />
      ;
    </Suspense>
  );
}
