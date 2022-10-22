import { CameraOrbitController } from "../utils/CameraOrbitController";
import Box from "./ThreeD-components/Box";

export default function MainThree(): JSX.Element {
  return (
    <>
      <ambientLight />
      <CameraOrbitController />
      <pointLight position={[5, 5, 5]} />
      <directionalLight intensity={1} color={"red"} position={[0, 0, 1]} />
      <axesHelper args={[-10]} />
      <axesHelper args={[10]} />
      <Box />
    </>
  );
}
