import { useState } from "react";
import { type Universe } from "../../lib/data";
import { CharacterSlideshow } from "../CharacterSlideshow";

interface UniverseSelectorProps {
  universes: Universe[];
  onSelectUniverse: (universe: Universe) => void;
}

export const UniverseSelector = ({
  universes,
  onSelectUniverse,
}: UniverseSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % universes.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + universes.length) % universes.length
    );
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white overflow-hidden">
      {/* The list container no longer rotates. It's just a stage. */}
      <div className="relative w-full h-[600px] [perspective:1000px]">
        {universes.map((universe, index) => {
          /* This block of code is determining the styles for each card in the slideshow based on its
          position relative to the active card. Here's a breakdown of what each part is doing: */
          const isActive = index === activeIndex;
          const isPrev =
            index === (activeIndex - 1 + universes.length) % universes.length;
          const isNext = index === (activeIndex + 1) % universes.length;
          const isNextNext = index === (activeIndex + 2) % universes.length;

          let transform = "";
          let opacity = 0;
          let zIndex = 0;
          let filter = "blur(10px)";

          // Apply styles based on the card's state
          if (isActive) {
            transform = "translateX(0) translateZ(0)";
            opacity = 1;
            zIndex = 10;
            filter = "blur(0px)";
          } else if (isPrev) {
            // The previous item moves to the left and fades out
            transform = "translateX(-80%) translateZ(-400px)";
            opacity = 0.4;
            zIndex = 5;
            filter = "blur(8px)";
          } else if (isNext) {
            // The next item is to the right, slightly smaller and blurred
            transform = "translateX(60%) translateZ(-200px)";
            opacity = 0.8;
            zIndex = 8;
            filter = "blur(4px)";
          } else if (isNextNext) {
            // The item after 'next' is further to the right and more faded
            transform = "translateX(110%) translateZ(-400px)";
            opacity = 0.4;
            zIndex = 5;
            filter = "blur(8px)";
          } else {
            // Hide all other cards
            transform = "translateX(0) translateZ(-800px)";
            opacity = 0;
            zIndex = 0;
          }

          return (
            <div
              key={universe.id}
              className="absolute w-[70vw] max-w-[700px] h-[600px] transition-all duration-700 ease-in-out"
              style={{
                transform,
                opacity,
                zIndex,
                filter,
                // Position the div in the center of the container
                top: "50%",
                left: "50%",
                marginLeft: "-35vw", // Half of width
                marginTop: "-300px", // Half of height
              }}
              onClick={() => isActive && onSelectUniverse(universe)}
            >
              <div className="relative w-full h-full flex flex-col justify-end p-16 rounded-2xl shadow-2xl overflow-hidden bg-gray-900">
                <CharacterSlideshow
                  images={universe.iconicCharacters}
                  isActive={isActive}
                />
                <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="relative z-10 text-white">
                  <img
                    src={universe.logoUrl}
                    alt={`${universe.name} Logo`}
                    className="w-40 h-auto mb-4"
                  />
                  <p className="mt-2 text-base max-w-lg opacity-90">
                    {universe.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-16 z-20 flex gap-4">
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
    </div>
  );
};
