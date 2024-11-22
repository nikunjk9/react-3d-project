import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Stars() {
  const starsRef = useRef();

  const generateStars = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  };

  const starPositions = generateStars(1000);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          itemSize={3}
          count={starPositions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        color="#ffffff"
        sizeAttenuation
        transparent
      />
    </points>
  );
}

export default Stars;
