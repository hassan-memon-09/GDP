// ✅ Enhanced Landing with 360° 3D Image (Box) & Typing Animation
import React, { Suspense } from "react";
import illustration from "../assets/img/illustration/illustration-16.webp";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import * as THREE from "three";

// 🎯 3D Rotating Box Image Component
const RotatingImage = () => {
  const texture = useTexture(illustration);
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[3, 2, 0.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// ✨ Stars Animation Background
const Starfield = () => {
  const starGeo = new THREE.BufferGeometry();
  const starCount = 2000;
  const positions = [];

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = -Math.random() * 200;
    positions.push(x, y, z);
  }

  starGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });

  return <points geometry={starGeo} material={starMaterial} />;
};

const Landing = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* 🎆 3D Stars Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas style={{ background: "black" }} camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Starfield />
          </Suspense>
        </Canvas>
      </div>

      {/* 💫 Foreground Content */}
      <section className="relative z-10 bg-darkBg/80 backdrop-blur-sm text-gold py-24 px-6 md:px-20 lg:px-32 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center border border-gold rounded-full px-4 py-2 text-sm font-medium bg-darkBg/70">
              <i className="bi bi-bell mr-2 text-gold" />
              Innovative Solutions
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Accelerating business growth",
                    "With immersive 3D & animation",
                    "Empowering digital experiences"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="text-softGold text-base md:text-lg">
              We help brands scale with animation, interactivity and immersive
              design tailored to elevate your digital presence.
            </p>

            <a
              href="#"
              className="inline-block bg-gold text-black font-semibold py-3 px-6 rounded-md hover:bg-deepGold transition"
            >
              Discover More
            </a>
          </motion.div>

          {/* Right 3D Box Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 h-[300px] w-full"
          >
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <RotatingImage />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
            </Canvas>
          </motion.div>
        </div>

        {/* 🌟 Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: "bi-gear",
              title: "Rapid Deployment",
              desc: "Delivering fast and reliable animation and dev services.",
            },
            {
              icon: "bi-window",
              title: "Advanced Security",
              desc: "Securely crafted systems with advanced monitoring.",
            },
            {
              icon: "bi-headset",
              title: "Dedicated Support",
              desc: "Always-on support for smooth experiences.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-shadowBlack p-6 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-3xl mb-4">
                <i className={`bi ${item.icon}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-softGold text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;