// src/components/TimelineOverviewItem.tsx
import { useInView } from "react-intersection-observer";
import { type Galaxy, type Universe } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  galaxy: Galaxy;
  universe: Universe;
}

export const TimelineOverviewItem = ({ galaxy, universe }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const showOverview = inView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: inView ? 1 : 0.5, scale: inView ? 1 : 0.95 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 text-white rounded-2xl shadow-2xl w-[80%] max-w-3xl px-6 py-4 overflow-hidden"
    >
      <h2 className="text-xl font-bold mb-1">{galaxy.name}</h2>
      <p className="text-sm text-blue-400">
        Universe: {universe.name} | {galaxy.start_year}–{galaxy.end_year}
      </p>

      <AnimatePresence>
        {showOverview && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-gray-300 text-base">
              {galaxy.overview || "No overview available."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
