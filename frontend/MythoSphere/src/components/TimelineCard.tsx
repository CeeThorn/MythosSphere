// src/components/TimelineCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { type Galaxy } from "../lib/data";

interface TimelineCardProps {
  galaxy: Galaxy;
  universeName: string;
  isOverview: boolean;
  alignRight: boolean;
  refCallback: (el: HTMLDivElement | null) => void;
  dataIndex: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function TimelineCard({
  galaxy,
  universeName,
  isOverview,
  alignRight,
  refCallback,
  dataIndex,
  onMouseEnter,
  onMouseLeave,
}: TimelineCardProps) {
  return (
    <div
      ref={refCallback}
      data-index={dataIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="mb-12 w-full flex flex-col items-center"
    >
      <Card
        className={`transition-all duration-500 ease-in-out bg-gray-900 text-white ${
          isOverview ? "scale-105 shadow-lg border-blue-500 border-2" : "scale-100 shadow"
        } ${alignRight ? "ml-auto" : "mr-auto"} max-w-md`}
      >
        <CardContent className="p-4">
          <h3 className="text-xl font-bold">{galaxy.name}</h3>
          <p className="text-sm text-gray-400">{universeName}</p>
          <p className="text-sm text-gray-400">
            {galaxy.start_year} – {galaxy.end_year || "Present"}
          </p>
          {galaxy.iconicCharacters.length > 0 && (
            <img
              src={galaxy.iconicCharacters[0]}
              alt={`${galaxy.name} Iconic`}
              className="mt-2 w-full h-48 object-cover rounded-lg"
            />
          )}
          {isOverview && galaxy.description && (
            <p className="mt-4 text-gray-300 transition-opacity duration-300 ease-in opacity-100">
              {galaxy.description}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
