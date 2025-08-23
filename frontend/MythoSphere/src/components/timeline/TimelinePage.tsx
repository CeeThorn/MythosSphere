import { type Galaxy } from "@/API/Flask_API";
import { useState, useRef, useEffect } from "react";
import {
  useScroll,
  motion,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

interface TimelinePageProps {
  galaxy: Galaxy;
  onBack: () => void; // The function to go back to the previous screen
}
export const TimelinePage = ({ galaxy, onBack }: TimelinePageProps) => {
  // These determine exactly whats being measured
  // The div measured to determine the actions on scrolling down the page
  // For example at a specific percentage of the scroll down the page, it checks what item should be shown.
  // If we have 10 movies in the timeline and the user is 65% of the way down the page.
  // We would do 0.65 (scroll progress) × 10 (total movies) = 6.5
  // We round that down to 6. This means we should be showing the 7th movie in our list (since lists start at index 0).
  // The useEffect hook is like a helper that is always watching the measurement. As soon as the scroll percentage changes, this helper re-calculates the math and figures out the new movie index.
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: scrollContainerRef });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Keep current index in sync with scroll
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (latestValue) => {
      const numberOfItems = galaxy.media.length;
      const nextIndex = Math.min(
        Math.floor(latestValue * numberOfItems),
        numberOfItems - 1
      );
      setCurrentIndex(nextIndex);
    });
    return () => unsub();
  }, [scrollYProgress, galaxy.media.length]);

  // This is used so that when an item is clicked on the map it scrolls to the proper position
  // Computes a target Y using the container’s absolute position and total scrollable height, then calls window.scrollTo()
  const scrollToIndex = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // This is literally just finding where the div is respective to the viewport
    const totalHeight = scrollContainer.getBoundingClientRect().height; // absolute height in px
    const pageTop =
      window.scrollY + scrollContainer.getBoundingClientRect().top; // absolute page Y where the container begins
    // How far along the media array are we?
    const progress = index / galaxy.media.length;

    // How far can we actually scroll within this container?
    const scrollableWithin = totalHeight - window.innerHeight;
    const targetY = pageTop + scrollableWithin * progress;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  //Get the current media item based on the index from our state
  const currentMedia = galaxy.media[currentIndex];
  const tallHeight = `${galaxy.media.length * 200}vh`;

  // Listen for manual wheel/keyboard scroll outside the tracked area and gently snap the side map highlight
  useMotionValueEvent(scrollYProgress, "change", () => {
    /* no-op, index logic lives in useEffect above */
  });

  return (
    <div className="min-h-screen w-full bg-black text-white flex">
      <main className="flex-grow h-full relative">
        <button
          onClick={onBack}
          className="sticky top-8 left-8 z-50 text-white/60 hover:text-white transition font-semibold"
        >
          &larr; Back to Galaxies
        </button>

        {/* Fixed Media Card */}
        <div className="fixed top-1/2 left-[20%] -translate-y-1/2 w-[56%] max-w-2xl z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="fixed top-1/2 left-1/4 -translate-y-1/2 w-1/2 max-w-lg h-96 bg-gray-800 rounded-xl z-30 flex flex-col justify-center items-center text-center p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col gap-3 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  {currentMedia?.name}
                </h2>
                {currentMedia?.timeline_note && (
                  <p className="text-white/70 text-sm md:text-base">
                    {currentMedia.timeline_note}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="w-full"
          style={{ height: tallHeight }}
        >
          {/* Vertical line */}
          <div className="relative h-full">
            <div className="absolute left-[12%] top-0 w-px h-full bg-white/20" />

            {/* Dots for each media item */}
            {galaxy.media.map((item, idx) => {
              const topPercent = (idx / galaxy.media.length) * 100; // even spacing
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToIndex(idx)}
                  className="absolute -translate-x-1/2"
                  style={{ left: "12%", top: `${topPercent}%` }}
                >
                  <motion.span
                    className="block w-3 h-3 rounded-full"
                    initial={false}
                    animate={{
                      width: isActive ? 14 : 10,
                      height: isActive ? 14 : 10,
                      boxShadow: isActive
                        ? "0 0 12px rgba(255,255,255,0.7)"
                        : "none",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    style={{ background: isActive ? "#fff" : "#888" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Side Navigation (Timeline Map)
        This sidebar will show the users where they are in the timeline.
      */}
      <aside className="w-64 h-screen sticky top-0 bg-gray-900/50 p-4 border-l border-white/10 overflow-y-auto">
        <h3 className="font-bold text-lg mb-4">{galaxy.name} Timeline</h3>
        <ul className="space-y-1">
          {galaxy.media.map((item, index) => {
            const active = index === currentIndex;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToIndex(index)}
                  className={`w-full text-left py-2 px-2 rounded-md transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="text-sm font-semibold truncate">
                    {item.name}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
