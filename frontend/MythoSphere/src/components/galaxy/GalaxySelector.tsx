import { useState, useEffect, useRef } from "react";
import { type Universe } from "../../lib/data";
import { GalaxyCard } from "./galaxycard";

interface GalaxySelectorProps {
  universe: Universe;
  onBack: () => void;
}

export const GalaxySelector = ({ universe, onBack }: GalaxySelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const galaxies = universe.galaxies;
  const activeGalaxy = galaxies[activeIndex];

  useEffect(() => {
    const activeItem = carouselRef.current?.children[
      activeIndex
    ] as HTMLElement;
    activeItem?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const backgroundImageUrl =
    activeGalaxy.bckGrdImg || activeGalaxy.iconicCharacters[0];

  return (
    // The component is now a single, relative container that fills the screen
    <div className="h-screen w-full bg-black relative overflow-hidden">
      {/* Main Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImageUrl}
          alt={activeGalaxy.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Header with a higher z-index to ensure it's clickable */}
      <header className="absolute top-0 left-0 w-full z-40 p-8 flex justify-between items-center">
        <img
          src={universe.logoUrl}
          alt={`${universe.name} Logo`}
          className="w-24 h-auto opacity-70"
        />
        <button
          onClick={onBack}
          className="text-white/60 hover:text-white transition font-semibold"
        >
          Back to Universes
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-xl p-8 md:p-16">
          <h2 className="text-4xl md:text-7xl font-black text-white my-4">
            {activeGalaxy.name}
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            {activeGalaxy.description}
          </p>
        </div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="absolute bottom-0 left-0 w-full z-30 px-4 md:px-8">
        <div
          ref={carouselRef}
          className="flex gap-4 p-4 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {galaxies.map((galaxy, index) => (
            <GalaxyCard
              key={galaxy.id}
              galaxy={galaxy}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
