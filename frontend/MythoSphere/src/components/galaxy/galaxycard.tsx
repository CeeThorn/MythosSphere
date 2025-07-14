// src/components/galaxy/GalaxyCard.tsx

import { type Galaxy } from "../../lib/data";
import { CharacterSlideshow } from "../CharacterSlideshow";

interface GalaxyCardProps {
  galaxy: Galaxy;
  isActive: boolean;
  onClick: () => void;
}

export const GalaxyCard = ({ galaxy, isActive, onClick }: GalaxyCardProps) => (
  <button
    onClick={onClick}
    className={`
      flex-shrink-0 w-40 h-56 rounded-lg overflow-hidden relative transition-all duration-500
      ${
        isActive
          ? "filter brightness-125"
          : "filter brightness-50 hover:brightness-75"
      }
    `}
  >
    <CharacterSlideshow images={galaxy.iconicCharacters} isActive={isActive} />
    <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
      <h4 className="text-white text-sm font-semibold truncate">
        {galaxy.name}
      </h4>
    </div>
  </button>
);
