import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { Experience } from "./components/Experience";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  reset: "reset",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.reset, keys: ["Reset", "KeyR"] },
    ],
    []
  );
  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={["#dbecfb"]} />
        <fog attach="fog" args={["#dbecfb", 90, 400]} />
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
