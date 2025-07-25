// src/components/galaxy/GalaxyDetailModal.tsx

import { useState, useEffect } from "react";
import { type Galaxy } from "../../lib/data";
import { GalaxyCard } from "./GalaxyCard";
import { motion } from "framer-motion";

interface ModalProps {
  galaxy: Galaxy;
  onClose: () => void;
  onViewTimeline: () => void;
}

export const GalaxyDetailModal = ({
  galaxy,
  onClose,
  onViewTimeline,
}: ModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsShowing(true), 50);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* This container holds the card and details. We stop propagation to prevent closing the modal when clicking inside it. */}
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`
          flex flex-col md:flex-row items-center gap-8 p-8 transition-all duration-300 ease-out
          ${isShowing ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* The selected Galaxy Card */}
        <motion.div layoutId={`galaxy-card-${galaxy.id}`} className="w-56 h-80">
          <GalaxyCard galaxy={galaxy} isActive={true} onClick={() => {}} />
        </motion.div>

        {/* The Details Section */}
        <div className="max-w-md text-white text-center md:text-left">
          <p className="text-white/80 uppercase tracking-widest">
            {galaxy.start_year} - {galaxy.end_year || "Present"}
          </p>
          <h2 className="text-5xl font-black my-2">{galaxy.name}</h2>
          <p className="text-white/70">{galaxy.description}</p>
          <button
            onClick={onViewTimeline}
            className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors"
          >
            View Timeline
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
