import { type GalaxySummary, type Galaxy } from "@/API/Flask_API";
import { CharacterSlideshow } from "../CharacterSlideshow";

interface GalaxyCardProps {
  galaxy: GalaxySummary | Galaxy;
  onClick?: () => void;
  isActive: boolean;
}

export const GalaxyCard = ({ galaxy, isActive, onClick }: GalaxyCardProps) => (
  <button
    onClick={onClick}
    className="flex-shrink-0 w-52 h-72 rounded-xl overflow-hidden relative transition-all duration-300 border-2 border-transparent filter brightness-75 hover:brightness-100 hover:border-white/20 hover:scale-105"
  >
    <CharacterSlideshow images={galaxy.iconicCharacters} isActive={isActive} />
    <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
      <h4 className="text-white text-base font-bold truncate">{galaxy.name}</h4>
    </div>
  </button>
);
