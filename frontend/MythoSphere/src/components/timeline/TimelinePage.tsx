// src/components/timeline/TimelinePage.tsx

import { useRef } from "react";
import { type Galaxy } from "../../lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { GalaxyCard } from "../galaxy/GalaxyCard";

interface TimelinePageProps {
  galaxy: Galaxy;
  onBack: () => void;
}

export const TimelinePage = ({ galaxy, onBack }: TimelinePageProps) => {
  const scrollRef = useRef(null);

  // useScroll will track the scroll progress of the element linked to scrollRef
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"], // Track from the very top to the very bottom
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 600]);

  const detailsOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <motion.div
      className="bg-neutral-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header remains the same */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-20">
        <h1 className="text-4xl font-bold">{galaxy.name} Timeline</h1>
        <button
          onClick={onBack}
          className="text-white/60 hover:text-white transition font-semibold"
        >
          Back to Galaxies
        </button>
      </header>

      {/* This is a sticky container that holds our animated elements */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* The timeline track */}
        <div className="absolute w-1 h-[600px] bg-white/10 rounded-full" />

        {/* The animated card. We apply the transformed Y position to it. */}
        <motion.div style={{ y: cardY }} className="relative">
          <motion.div
            layoutId={`galaxy-card-${galaxy.id}`}
            className="w-40 h-56"
          >
            <GalaxyCard galaxy={galaxy} isActive={true} onClick={() => {}} />
          </motion.div>
        </motion.div>

        {/* The details section that fades in */}
        <motion.div
          style={{ opacity: detailsOpacity }} // 👈 Apply the fade-in animation
          className="absolute max-w-md text-white left-1/2 ml-32 p-8"
        >
          <h2 className="text-5xl font-black my-2">{galaxy.name}</h2>
          <p className="text-white/70">{galaxy.description}</p>
        </motion.div>
      </div>

      {/* SCROLL CONTAINER: A tall, empty div that defines the scrollable area */}
      <div ref={scrollRef} className="h-[200vh] w-full"></div>
    </motion.div>
  );
};
