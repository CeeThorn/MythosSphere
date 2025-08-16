// src/components/TimelinePage.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { universes, type Universe } from "../lib/data";
import { TimelineCard } from "./TimelineCard";

export default function TimelinePage() {
  const { galaxyId } = useParams<{ galaxyId: string }>();

  const universe = universes.find((u) =>
    u.galaxies.some((g) => g.id === galaxyId)
  );

  if (!universe) {
    return (
      <div className="p-8 text-red-500">
        Universe not found for galaxy ID: <strong>{galaxyId}</strong>
      </div>
    );
  }

  const galaxies = universe.galaxies;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative py-10 px-4 bg-black min-h-screen text-white">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform -translate-x-1/2"></div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {galaxies.map((g, idx) => (
          <TimelineCard
            key={g.id}
            galaxy={g}
            universeName={universe.name}
            isOverview={hoveredIndex === idx}
            alignRight={idx % 2 === 0}
            refCallback={() => null}
            dataIndex={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}
