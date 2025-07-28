import { type Universe, type Galaxy } from "../../lib/data";
import { useState, useEffect, useRef } from "react";

interface UniverseDetailsProps {
  universe: Universe;
}

export default function UniverseDetails({ universe }: UniverseDetailsProps) {
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(universe.galaxies.length).fill(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = -1;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (
        closestIndex !== -1 &&
        universe.galaxies[closestIndex] !== selectedGalaxy
      ) {
        setSelectedGalaxy(universe.galaxies[closestIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [universe.galaxies, selectedGalaxy]);

  return (
    <div className="px-4 py-8">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={universe.logoUrl}
          alt={`${universe.name} logo`}
          className="w-16 h-16 object-contain"
        />
        <div>
          <h2 className="text-3xl font-bold">{universe.name}</h2>
          <p className="text-gray-600">{universe.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {universe.galaxies.map((galaxy, index) => {
          const imageSrc =
            galaxy.iconicCharacters && galaxy.iconicCharacters.length > 0
              ? galaxy.iconicCharacters[0]
              : "/placeholder.png"; // fallback image

          return (
            <div
              key={galaxy.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transition-transform duration-500 ${
                selectedGalaxy?.id === galaxy.id
                  ? "scale-105 shadow-lg bg-blue-100"
                  : "bg-white"
              } p-4 rounded-lg cursor-pointer flex flex-col items-center`}
            >
              <img
                src={imageSrc}
                alt={`${galaxy.name} representative`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{galaxy.name}</h3>
              <p className="text-gray-600 italic">Universe: {universe.name}</p>
              <p className="text-gray-500">
                {galaxy.start_year} - {galaxy.end_year || "Present"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
