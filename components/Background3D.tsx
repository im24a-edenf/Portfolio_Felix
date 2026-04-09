import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Icosahedron, Octahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

// Materials created once — reused every frame instead of reallocated
const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: '#94A3B8',
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});

const accentMaterial = new THREE.MeshBasicMaterial({
  color: '#E11D48',
  wireframe: true,
  transparent: true,
  opacity: 0.6,
});

// Fix for missing R3F types in JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      fog: any;
      ambientLight: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        group: any;
        fog: any;
        ambientLight: any;
      }
    }
  }
}

const Mechanism: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const floatingGeoRef = useRef<THREE.Group>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => { scrollYRef.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollProgress = scrollYRef.current * 0.0005;

    if (groupRef.current) {
      // General group rotation based on scroll
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, scrollProgress * 1.5, 0.05);
      groupRef.current.rotation.x = 0.2 + THREE.MathUtils.lerp(groupRef.current.rotation.x, scrollProgress * 0.5, 0.05);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.05 + scrollProgress;
      ring1Ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.1 - scrollProgress * 1.2;
      ring2Ref.current.rotation.y = Math.cos(t * 0.2) * 0.2;
    }

    if (ring3Ref.current) {
        ring3Ref.current.rotation.x = t * 0.05;
        ring3Ref.current.rotation.y = t * 0.05;
    }
    
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2;
      coreRef.current.rotation.z = t * 0.1;
    }

    if(floatingGeoRef.current) {
      floatingGeoRef.current.rotation.y = scrollProgress * 2;
    }
  });

  return (
    // Increased scale from 1.5 to 2.8 for dominance
    <group ref={groupRef} position={[3, 0, 0]} scale={2.8}>
      {/* Primary Large Ring */}
      <Torus ref={ring1Ref} args={[3.5, 0.03, 16, 100]} material={wireframeMaterial} />
      
      {/* Secondary Angled Ring */}
      <Torus ref={ring2Ref} args={[2.8, 0.03, 16, 80]} rotation={[1, 0, 0]} material={wireframeMaterial} />

      {/* Tertiary Vertical Ring for complexity */}
      <Torus ref={ring3Ref} args={[4.2, 0.01, 16, 120]} rotation={[0, 1.5, 0]} material={wireframeMaterial} />

      {/* The Core Mechanism */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
         <Icosahedron ref={coreRef} args={[1, 1]} material={wireframeMaterial} />
         <Icosahedron args={[0.85, 0]} material={accentMaterial} />
      </Float>

      {/* Floating Geometric Constellations */}
      <group ref={floatingGeoRef}>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
           <Octahedron position={[-4, 3, -2]} args={[0.5]} material={wireframeMaterial} />
        </Float>
        <Float speed={1} rotationIntensity={2} floatIntensity={1}>
           <Octahedron position={[-3, -4, 2]} args={[0.3]} material={wireframeMaterial} />
        </Float>
      </group>
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none opacity-80">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Updated Fog color to match new Navy #0F172A */}
        <fog attach="fog" args={['#0F172A', 5, 20]} />
        <ambientLight intensity={0.8} />
        <Mechanism />
      </Canvas>
      {/* Vignette overlay to fade edges - updated color */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F172A_100%)] pointer-events-none" />
    </div>
  );
};

export default Background3D;