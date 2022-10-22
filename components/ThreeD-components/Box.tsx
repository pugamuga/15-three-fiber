export default function Box(): JSX.Element {
  return (
    <>
      <mesh>
        <sphereGeometry args={[.65, 32, 16]} />

        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />

        <meshStandardMaterial color={"rgba(35,15,63)"} />
      </mesh>
    </>
  );
}
