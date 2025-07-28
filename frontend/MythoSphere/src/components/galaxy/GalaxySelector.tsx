// src/components/galaxy/GalaxySelector.tsx

import { useState, useEffect } from "react";
import { ScrollingRow } from "./ScrollingRow";
import { GalaxyDetailModal } from "./GalaxyDetailModal";
import type { Universe, Galaxy, GalaxySummary } from "@/API/Flask_API";
import { fetchGalaxiesForUniverse, fetchGalaxy } from "@/API/Flask_API";

interface GalaxySelectorProps {
  universe: Universe;
  onBack: () => void;
  onTimelineSelect: (galaxy: Galaxy) => void;
}

type GroupedGalaxies = {
  [decade: string]: GalaxySummary[];
};

export const GalaxySelector = ({
  universe,
  onBack,
  onTimelineSelect,
}: GalaxySelectorProps) => {
  const [galaxies, setGalaxies] = useState<GalaxySummary[] | null>(null);
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);

  useEffect(() => {
    const getGalaxies = async () => {
      setGalaxies(null);
      const response = await fetchGalaxiesForUniverse(universe.id);

      if (response) {
        setGalaxies(response);
      }
    };

    getGalaxies();
  }, [universe.id]);

  const handleCardClick = async (galaxy: GalaxySummary) => {
    const fullGalaxyDetails = await fetchGalaxy(universe.id, galaxy.id);
    if (fullGalaxyDetails) {
      setSelectedGalaxy(fullGalaxyDetails);
    }
  };

  const handleCloseModal = () => {
    setSelectedGalaxy(null);
  };

  const groupGalaxiesByDecade = (
    galaxies: GalaxySummary[]
  ): GroupedGalaxies => {
    return galaxies.reduce((acc, galaxy) => {
      const year = parseInt(galaxy.start_year || "2000");
      const decade = Math.floor(year / 10) * 10;
      const decadeKey = `${decade}s`;

      if (!acc[decadeKey]) {
        acc[decadeKey] = [];
      }
      acc[decadeKey].push(galaxy);
      return acc;
    }, {} as GroupedGalaxies);
  };

  //Replace with loading screen later on
  if (!galaxies) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        Loading Galaxies for {universe.name}...
      </div>
    );
  }

  const groupedGalaxies = groupGalaxiesByDecade(galaxies);
  // Sort the decades so they appear in chronological order (e.g., 1990s, 2000s, 2010s)
  const sortedDecades = Object.keys(groupedGalaxies).sort();

  return (
    <div className="h-screen w-full bg-black relative overflow-y-auto flex flex-col">
      {/* Header */}
      <header className="sticky top-0 left-0 w-full z-40 p-8 flex justify-between items-center">
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

      <div className="flex-grow flex flex-col gap-8 px-4 pt-16 md:px-12 py-8">
        {sortedDecades.map((decade) => (
          <div key={decade}>
            <h2 className="text-3xl font-bold text-white/80 mb-4 pl-4">
              {decade}
            </h2>
            <ScrollingRow
              galaxies={groupedGalaxies[decade]}
              onCardClick={handleCardClick}
            />
          </div>
        ))}
      </div>

      {selectedGalaxy && (
        <GalaxyDetailModal
          galaxy={selectedGalaxy}
          onClose={handleCloseModal}
          onViewTimeline={() => onTimelineSelect(selectedGalaxy)}
        />
      )}
    </div>
  );
};
