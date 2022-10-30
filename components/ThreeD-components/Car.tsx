import { Environment, useEnvironment, useGLTF } from "@react-three/drei";

export default function Car(): JSX.Element {
  const reflection = useEnvironment({
    files: "./hdri/night.hdr",
  });

  const car = useGLTF("./models/bugatti.glb");
  return (
    <>
      <Environment map={reflection} background={false} />

      <primitive object={car.scene} />
    </>
  );
}
