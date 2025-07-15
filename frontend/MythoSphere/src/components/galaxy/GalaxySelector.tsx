// src/components/galaxy/GalaxySelector.tsx

import { useState } from "react";
import { type Universe, type Galaxy } from "../../lib/data";
import { ScrollingRow } from "./scrollingrow";
import { GalaxyDetailModal } from "./GalaxyDetailModal";

interface GalaxySelectorProps {
  universe: Universe;
  onBack: () => void;
}

export const GalaxySelector = ({ universe, onBack }: GalaxySelectorProps) => {
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);

  const tvGalaxies = universe.galaxies
    .filter((galaxy) => galaxy.watch_type?.includes("tv"))
    .sort(
      (a, b) => parseInt(a.start_year || "0") - parseInt(b.start_year || "0")
    );

  const movieGalaxies = universe.galaxies
    .filter((galaxy) => galaxy.watch_type?.includes("movies"))
    .sort(
      (a, b) => parseInt(a.start_year || "0") - parseInt(b.start_year || "0")
    );

  {
    /*// Future Proofing
  const gameGalaxies = universe.galaxies
    .filter((galaxy) => galaxy.watch_type?.includes("games"))
    .sort(
      (a, b) => parseInt(a.start_year || "0") - parseInt(b.start_year || "0")
    );*/
  }

  const handleCardClick = (galaxy: Galaxy) => {
    setSelectedGalaxy(galaxy);
  };

  const handleCloseModal = () => {
    setSelectedGalaxy(null);
  };

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden flex flex-col">
      {/* Header */}
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

      {/* Main content area for the rows */}
      <div className="flex-grow flex flex-col justify-center gap-12 py-4">
        <ScrollingRow galaxies={tvGalaxies} onCardClick={handleCardClick} />

        <ScrollingRow galaxies={movieGalaxies} onCardClick={handleCardClick} />
      </div>
      {selectedGalaxy && (
        <GalaxyDetailModal galaxy={selectedGalaxy} onClose={handleCloseModal} />
      )}
    </div>
  );
};
