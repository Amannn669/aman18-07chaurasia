
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface TechBallProps {
  text: string;
  initialPosition: [number, number, number];
}

const TechBall = ({ text, initialPosition }: TechBallProps) => {
  const ref = useRef<THREE.Group>(null!);
  const initialVec = useMemo(() => new THREE.Vector3(...initialPosition), [initialPosition]);
  const targetPosition = useMemo(() => new THREE.Vector3(...initialPosition), [initialPosition]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const mousePos = state.pointer;
    const worldMouse = new THREE.Vector3(mousePos.x * state.viewport.width / 2, mousePos.y * state.viewport.height / 2, 0);

    const dist = ref.current.position.distanceTo(worldMouse);
    
    targetPosition.copy(initialVec);

    if (dist < 2.5) {
      const direction = ref.current.position.clone().sub(worldMouse).normalize();
      const pushDistance = (2.5 - dist) * 1.0;
      targetPosition.add(direction.multiplyScalar(pushDistance));
    }

    ref.current.position.lerp(targetPosition, 0.1);
    ref.current.lookAt(state.camera.position);
    ref.current.rotation.z += delta * 0.05;
  });

  return (
    <group ref={ref} position={initialPosition}>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="white" roughness={0.2} metalness={0.8} />
      </mesh>
      <Text
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="middle"
        material-fog={false}
      >
        {text}
      </Text>
    </group>
  );
};

export default TechBall;
