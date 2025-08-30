import { useEffect, useState } from "react";
import { CharacterSlideshow } from "../CharacterSlideshow";
import { type Universe, fetchUniverses } from "@/API/Flask_API";


interface UniverseSelectorProps {
  onSelectUniverse: (universe: Universe) => void;
}


export const UniverseSelector = ({
  onSelectUniverse,
}: UniverseSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [universes, setUniverses] = useState<Universe[] | null>(null);


  useEffect(() => {
    const getUniverses = async () => {
      const response = await fetchUniverses();
      if (response) {
        setUniverses(response);
      } else {
        console.log("Failed to acquire universes");
      }
    };
    getUniverses();
  }, []);


  const handleNext = () => {
    if (universes) setActiveIndex((prev) => (prev + 1) % universes.length);
  };


  const handlePrev = () => {
    if (universes)
      setActiveIndex((prev) => (prev - 1 + universes.length) % universes.length);
  };


  if (!universes)
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        Loading Universes...
      </div>
    );


  return (
    <div className="h-screen w-full flex flex-col justify-center items-center z-10">
      {/* Perspective container */}
      <div
        className="relative w-full h-[650px] flex justify-center items-center"
        style={{ perspective: 1200 }}
      >
        {/* 3D wrapper */}
        <div
          className="relative w-full h-full flex justify-center items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {universes.map((universe, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + universes.length) % universes.length;
            const isNext = index === (activeIndex + 1) % universes.length;
            const isNextNext = index === (activeIndex + 2) % universes.length;


            let translateX = 0;
            let translateZ = 0;
            let opacity = 1;
		        


            if (isActive) {
              translateX = 250;
              translateZ = 0;
              opacity = 1;
		  


            } else if (isPrev) {
              translateX = -70;
              translateZ = -60;
              opacity = 0.5;
		  
            } else if (isNext) {
              translateX = 500;
              translateZ = -60;
              opacity = 0.7;
              

            } else if (isNextNext) {
              translateX = 700;
              translateZ = -100;
              opacity = 0.4;
		 
		
            } else {
              translateX = 0;
              translateZ = -150;
              opacity = 0;

            }


            return (
              <div
                key={universe.id}
                className="absolute w-[80vw] max-w-[960px] h-[540px] transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px)`,
                  opacity,
                  top: "50%",
                  left: "50%",
                  marginLeft: "-40vw",
                  marginTop: "-270px",
                }}
                onClick={() => isActive && onSelectUniverse(universe)}
              >
                <div className="relative w-full h-full flex flex-col justify-end p-16 rounded-2xl shadow-2xl overflow-hidden bg-gray-900">
                  <CharacterSlideshow
                    images={universe.iconicCharacters}
                    isActive={isActive}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  <div className="relative z-10 text-white flex flex-col items-center">
                    <img
                      src={universe.logoUrl}
                      alt={`${universe.name} Logo`}
                      className="w-40 h-auto mb-4"
                    />
                    <p className="mt-2 text-base max-w-lg text-center opacity-90">
                      {universe.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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


