export default function MapCube(): JSX.Element {
  return (
    <object3D>
      <mesh scale={[0.5, 0.5, 0.5]} receiveShadow position-y={0.25}>
        <boxGeometry />
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
      <mesh rotation-x={(Math.PI * -1) / 2} receiveShadow>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial color={"lightblue"} />
      </mesh>
    </object3D>
  );
}
