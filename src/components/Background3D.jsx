import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


/* =========================================
   BRAIN LOBE
========================================= */

function BrainLobe({ position, scale, rotation = [0, 0, 0], tech = false }) {
  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <sphereGeometry args={[1, 32, 24]} />

      <meshStandardMaterial
        color={tech ? "#7d35c9" : "#b78ae9"}
        emissive={tech ? "#451078" : "#5c2388"}
        emissiveIntensity={tech ? 0.7 : 0.35}
        roughness={0.55}
        metalness={tech ? 0.55 : 0.15}
        wireframe={tech}
      />
    </mesh>
  );
}


/* =========================================
   BRAIN
========================================= */

function Brain() {
  const brain = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (brain.current) {
      brain.current.rotation.y =
        Math.sin(t * 0.3) * 0.12;

      brain.current.rotation.x =
        Math.sin(t * 0.2) * 0.035;
    }
  });


  return (
    <group
      ref={brain}
      position={[1.9, 0.15, 0]}
      scale={0.92}
    >

      {/* ================================
          LEFT / ORGANIC HALF
      ================================= */}

      <group position={[-0.45, 0, 0]}>

        <BrainLobe
          position={[-0.25, 0.5, 0]}
          scale={[0.75, 0.62, 0.72]}
        />

        <BrainLobe
          position={[-0.7, 0.35, 0]}
          scale={[0.55, 0.58, 0.65]}
        />

        <BrainLobe
          position={[-0.72, -0.2, 0]}
          scale={[0.62, 0.65, 0.68]}
        />

        <BrainLobe
          position={[-0.25, -0.48, 0]}
          scale={[0.7, 0.5, 0.68]}
        />

        <BrainLobe
          position={[0.05, 0.05, 0.05]}
          scale={[0.58, 0.8, 0.65]}
        />

      </group>


      {/* ================================
          RIGHT / CYBER HALF
      ================================= */}

      <group position={[0.45, 0, 0]}>

        <BrainLobe
          tech
          position={[0.25, 0.5, 0]}
          scale={[0.75, 0.62, 0.72]}
        />

        <BrainLobe
          tech
          position={[0.7, 0.35, 0]}
          scale={[0.55, 0.58, 0.65]}
        />

        <BrainLobe
          tech
          position={[0.72, -0.2, 0]}
          scale={[0.62, 0.65, 0.68]}
        />

        <BrainLobe
          tech
          position={[0.25, -0.48, 0]}
          scale={[0.7, 0.5, 0.68]}
        />

        <BrainLobe
          tech
          position={[-0.05, 0.05, 0.05]}
          scale={[0.58, 0.8, 0.65]}
        />

      </group>


      {/* ================================
          CENTRAL BRAIN DIVISION
      ================================= */}

      <mesh
        position={[0, 0, 0.68]}
        rotation={[0, 0, 0]}
      >
        <boxGeometry args={[0.035, 1.65, 0.025]} />

        <meshBasicMaterial
          color="#d8b8ff"
          toneMapped={false}
        />
      </mesh>


      {/* ================================
          NEURAL NODES
      ================================= */}

      <NeuralNode position={[-0.75, 0.45, 0.72]} />
      <NeuralNode position={[-0.4, 0.05, 0.78]} />
      <NeuralNode position={[-0.7, -0.35, 0.7]} />

      <NeuralNode position={[0.7, 0.45, 0.72]} />
      <NeuralNode position={[0.42, 0.02, 0.8]} />
      <NeuralNode position={[0.72, -0.32, 0.7]} />


      {/* ================================
          MOVING SPARKS
      ================================= */}

      <EnergySpark delay={0} />
      <EnergySpark delay={1.4} reverse />
      <EnergySpark delay={2.6} />


      {/* ================================
          PARTICLES
      ================================= */}

      <Sparkles
        count={70}
        scale={[3.8, 3.2, 2.5]}
        size={1.6}
        speed={0.25}
        color="#cdb0ff"
      />

    </group>
  );
}


/* =========================================
   NEURAL NODE
========================================= */

function NeuralNode({ position }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ref.current) {
      const pulse =
        1 + Math.sin(t * 4 + position[0]) * 0.25;

      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.045, 16, 16]} />

      <meshBasicMaterial
        color="#e1caff"
        toneMapped={false}
      />
    </mesh>
  );
}


/* =========================================
   SPARK TRAVELLING THROUGH BRAIN
========================================= */

function EnergySpark({
  delay = 0,
  reverse = false,
}) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t =
      (clock.getElapsedTime() + delay) % 3;

    let progress = t / 3;

    if (reverse) {
      progress = 1 - progress;
    }

    const x = THREE.MathUtils.lerp(
      -0.8,
      0.8,
      progress
    );

    const y =
      Math.sin(progress * Math.PI * 3) * 0.45;

    const z = 0.9;

    if (ref.current) {
      ref.current.position.set(x, y, z);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 16, 16]} />

      <meshBasicMaterial
        color="#f0ddff"
        toneMapped={false}
      />
    </mesh>
  );
}


/* =========================================
   BACKGROUND
========================================= */

function Background3D() {
  return (
    <div className="background-3d">

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}

        dpr={[1, 1.6]}

        gl={{
          antialias: true,
          alpha: true,
        }}
      >

        <ambientLight intensity={0.6} />

        <pointLight
          position={[3, 2, 4]}
          intensity={5}
          color="#a855f7"
        />

        <pointLight
          position={[-2, 1, 3]}
          intensity={2}
          color="#d8b8ff"
        />

        <Brain />

      </Canvas>

    </div>
  );
}

export default Background3D;
