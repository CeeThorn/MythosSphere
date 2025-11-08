import { useEffect, useState } from "react";
import { CharacterSlideshow } from "../CharacterSlideshow";
import type { Universe } from "@/API/Flask_API";
import { fetchUniverses } from "@/API/Flask_API";

interface UniverseSelectorProps {
  onSelectUniverse: (universe: Universe) => void;
}

export const UniverseSelector = ({
  onSelectUniverse,
}: UniverseSelectorProps) => {
  const [universes, setUniverses] = useState<Universe[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getUniverses = async () => {
      try {
        const data = await fetchUniverses();
        setUniverses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch universes", err);
        setUniverses([]);
      }
    };
    getUniverses();
  }, []);

  if (universes === null) {
    return (
      <div className="w-full py-2 px-2">
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-24 w-44 shrink-0 rounded-2xl bg-white/5 animate-pulse border border-white/10 sm:h-28 sm:w-52 md:h-32 md:w-60 lg:h-36 lg:w-72"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full py-2 px-2">
      <div
        className="relative flex items-stretch gap-3 overflow-x-auto snap-x snap-mandatory "
        onWheel={(e) => e.stopPropagation()}
      >
        {universes.map((u, index) => {
          const key = u.id;
          const title = u.name;
          const images = u.iconicCharacters;
          const logo = u.logoUrl;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectUniverse(u)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              aria-label={`Open ${title}`}
              className={[
                "relative shrink-0 snap-start",
                "h-24 w-44 sm:h-28 sm:w-52 md:h-32 md:w-60 lg:h-36 lg:w-72",
                "rounded-2xl overflow-hidden border border-white/10",
                "bg-black/40 hover:bg-white/5",
                "transition-[transform,box-shadow] duration-200",
                "hover:shadow-lg focus:shadow-lg focus:outline-none",
                activeIndex === index
                  ? "ring-2 ring-white/30"
                  : "ring-1 ring-white/10",
              ].join(" ")}
            >
              <div className="absolute inset-0">
                <CharacterSlideshow
                  images={images}
                  isActive={activeIndex === index}
                />
              </div>

              {title && (
                <div className="absolute inset-x-0 bottom-0 p-2 text-[11px] sm:text-xs text-white/90 bg-gradient-to-t from-black/60 to-transparent flex items-center gap-2">
                  {logo && (
                    <img
                      src={logo}
                      alt="logo"
                      className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                    />
                  )}
                  <span className="block truncate">{title}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
