interface IProps{
    color:string
}

export default function Ground({color}:IProps):JSX.Element {
  return (
    <mesh rotation-x={Math.PI*-1/2} receiveShadow>
    <planeBufferGeometry args={[1000,1000]}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}