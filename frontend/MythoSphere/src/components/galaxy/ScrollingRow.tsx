import { useState, useRef, useLayoutEffect } from "react";
import { type GalaxySummary } from "@/API/Flask_API";
import { GalaxyCard } from "./GalaxyCard";

interface ScrollingRowProps {
  galaxies: GalaxySummary[];
  onCardClick: (galaxy: GalaxySummary) => void;
}

export const ScrollingRow = ({ galaxies, onCardClick }: ScrollingRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  /* The `useLayoutEffect` hook in the provided code snippet is used to observe changes in the size of
  the row element containing the galaxies. Here's a breakdown of what it does: */
  useLayoutEffect(() => {
    const rowElement = rowRef.current;
    if (!rowElement) return;

    const observer = new ResizeObserver(() => {
      setIsScrollable(rowElement.scrollWidth > rowElement.clientWidth);
    });

    observer.observe(rowElement);
    return () => observer.disconnect();
  }, [galaxies]);

  const handleNav = (direction: "next" | "prev") => {
    const row = rowRef.current;
    if (!row) return;

    // Calculate how much to scroll. We'll scroll by 75% of the row's width.
    const scrollAmount = row.clientWidth * 0.75;

    row.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <div
        ref={rowRef}
        className={`flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth ${
          !isScrollable ? "justify-center" : ""
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {galaxies.map((galaxy) => (
          <div key={galaxy.id} className="flex-shrink-0 snap-center mx-3">
            <GalaxyCard
              galaxy={galaxy}
              onClick={() => onCardClick(galaxy)}
              isActive={false}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons: Now use the direct handleNav function */}
      {isScrollable && (
        <>
          <button
            onClick={() => handleNav("prev")}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-10 h-10 bg-neutral-800/60 rounded-full text-white text-xl font-bold flex items-center justify-center transition-all hover:bg-neutral-700 focus:outline-none opacity-0 group-hover:opacity-100"
          >
            &lt;
          </button>
          <button
            onClick={() => handleNav("next")}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-10 h-10 bg-neutral-800/60 rounded-full text-white text-xl font-bold flex items-center justify-center transition-all hover:bg-neutral-700 focus:outline-none opacity-0 group-hover:opacity-100"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};
