"use client";

import { motion } from "framer-motion";
import DotGrid from '@/components/backgrounds/Background';
import AboutMeSection from "@/components/AboutMeAndExperience";
import ProjectsSection from "@/components/PersonalProjects";
import TechStackSection from "@/components/TechStack";
import ContactMeSection from "@/components/ContactMe";
import GooeyNav from "@/components/ui/GooeyNav";

const items = [
  { label: "Hello", href: "#hello" },
  { label: "About Me", href: "#aboutme" },
  { label: "Experiences", href: "#aboutme" },
  { label: "Projects", href: "#projects" },
  { label: "TechStack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      {/* Full background */}
      <section id="hello" className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center bg-black/40">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi! I am Çağan
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-chalk"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Engineer, Tech Enthusiast, Lifelong Learner, Art Lover
          </motion.p>
        </div>
      </section>

      <AboutMeSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactMeSection />
    </main>
  );
}