import { useState } from "react";
import { type Universe } from "../../lib/data";
import { CharacterSlideshow } from "../CharacterSlideshow";

interface GalaxySelectorProps {
  universe: Universe;
  onBack: () => void;
}

export const GalaxySelector = ({ universe, onBack }: GalaxySelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galaxies = universe.galaxies;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galaxies.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + galaxies.length) % galaxies.length
    );
  };

  const rotationAngle = -activeIndex * (360 / galaxies.length);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white overflow-hidden [perspective:1000px]">
      <div
        className="relative w-[300px] h-[450px] transition-transform duration-1000"
        style={{
          transform: `rotateY(${rotationAngle}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {galaxies.map((galaxy, index) => {
          const itemRotation = index * (360 / galaxies.length);
          const isActive = index === activeIndex;

          return (
            <div
              key={galaxy.id}
              className="absolute w-full h-full"
              style={{
                transform: `rotateY(${itemRotation}deg) translateZ(350px)`,
                boxShadow: isActive
                  ? "0 0 35px 5px rgba(0, 150, 255, 0.4)"
                  : "none",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                {/* 1. Character slideshow is back to provide the visuals */}
                <CharacterSlideshow
                  images={galaxy.iconicCharacters}
                  isActive={isActive}
                />

                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-black/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold">{galaxy.name}</h3>
                  <p className="text-white/80 text-sm mt-1">
                    {galaxy.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation and Universe Logo */}
      <div className="absolute bottom-10 text-center flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="px-5 py-2 bg-gray-700/50 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-gray-600/60 transition"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2 bg-gray-700/50 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-gray-600/60 transition"
          >
            Next
          </button>
        </div>
        <img
          src={universe.logoUrl}
          alt={`${universe.name} Logo`}
          className="w-20 h-auto opacity-50"
        />
        <button
          onClick={onBack}
          className="px-5 py-2 bg-gray-700/50 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-gray-600/60 transition"
        >
          Back to Universes
        </button>
      </div>
    </div>
  );
};
