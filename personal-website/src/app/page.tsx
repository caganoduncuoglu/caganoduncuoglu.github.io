"use client";

import { motion } from "framer-motion";
import DotGrid from '@/components/backgrounds/Background';
import AboutMeSection from "@/components/AboutMeAndExperience";
import ProjectsSection from "@/components/PersonalProjects";
import TechStackSection from "@/components/TechStack";
import ContactMeSection from "@/components/ContactMe";
import GooeyNav from "@/components/ui/GooeyNav";
import StarBorder from "@/components/ui/StarBorder";
import { FaArrowDown } from "react-icons/fa";
import BlurText from "@/components/ui/BlurText";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ChromaGrid from "@/components/ui/ChromaGrid";

const items = [
  { label: "Hello", href: "#hello" },
  { label: "About Me", href: "#aboutme" },
  { label: "Experiences", href: "#aboutme" },
  { label: "Projects", href: "#projects" },
  { label: "TechStack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

const carditem = [
  {
    image: "/avatar.png",
    borderColor: "#a51ddbff",
    gradient: "linear-gradient(145deg, #d73bf6ff, #000)"
  }
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
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ height: '500px', position: 'relative' }}>
              <ChromaGrid
                items={carditem}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </motion.h1>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BlurText
              text="Hi! I'm Çağan"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold mb-4 font-serif"
            />

          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-chalk"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <BlurText
              text="Software Engineer, Tech Enthusiast, Lifelong Learner, Art Lover"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl font-chalk"
            />
          </motion.p>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1.5, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <StarBorder
                as="button"
                className="custom-class"
                color="magenta"
                speed="5s"
              >

                <a
                  href="/melik-cagan-oduncuoglu-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 text-lg md:text-md font-light">
                    <FaArrowDown />
                    Resume
                  </div>
                </a>

              </StarBorder>

            </div>
          </motion.div>

        </div>

      </section>

      <AboutMeSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactMeSection />
    </main>
  );
}