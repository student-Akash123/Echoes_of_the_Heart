import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';

// Extend Three.js materials
extend({ PointsMaterial: THREE.PointsMaterial });

interface EmotionData {
  id: string;
  emotion: 'joy' | 'hope' | 'longing' | 'passion' | 'sadness';
  message: string;
  excerpt: string;
  position: [number, number, number];
  timestamp: Date;
}

interface StarProps {
  position: [number, number, number];
  emotion: EmotionData['emotion'];
  data: EmotionData;
  onClick: (data: EmotionData) => void;
  onHover: (data: EmotionData | null) => void;
}

const emotionColors = {
  joy: '#FFD700',      // Golden
  hope: '#00BFFF',     // Cyan
  longing: '#9966CC',  // Violet
  passion: '#FF69B4',  // Pink
  sadness: '#4682B4'   // Steel Blue
};

function EmotionalStar({ position, emotion, data, onClick, onHover }: StarProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      meshRef.current.scale.setScalar(hovered ? pulse * 1.5 : pulse);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => onClick(data)}
      onPointerOver={() => {
        setHovered(true);
        onHover(data);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial
        color={emotionColors[emotion]}
        emissive={emotionColors[emotion]}
        emissiveIntensity={hovered ? 0.8 : 0.3}
        transparent
        opacity={0.8}
      />
      {hovered && (
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {data.excerpt}
        </Text>
      )}
    </mesh>
  );
}

function FloatingStars({ emotions, onStarClick, onStarHover }: {
  emotions: EmotionData[];
  onStarClick: (data: EmotionData) => void;
  onStarHover: (data: EmotionData | null) => void;
}) {
  return (
    <>
      {emotions.map((emotion) => (
        <EmotionalStar
          key={emotion.id}
          position={emotion.position}
          emotion={emotion.emotion}
          data={emotion}
          onClick={onStarClick}
          onHover={onStarHover}
        />
      ))}
    </>
  );
}

interface Galaxy3DProps {
  emotions: EmotionData[];
  onStarClick: (data: EmotionData) => void;
  onStarHover: (data: EmotionData | null) => void;
}

export function Galaxy3D({ emotions, onStarClick, onStarHover }: Galaxy3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4682B4" />
        
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
        
        <FloatingStars 
          emotions={emotions}
          onStarClick={onStarClick}
          onStarHover={onStarHover}
        />
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}