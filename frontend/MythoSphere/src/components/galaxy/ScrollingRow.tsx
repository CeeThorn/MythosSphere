// src/components/galaxy/ScrollingRow.tsx

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { type Galaxy } from "../../lib/data";
import { GalaxyCard } from "./galaxycard";

interface ScrollingRowProps {
  galaxies: Galaxy[];
  onCardClick: (galaxy: Galaxy) => void;
}

export const ScrollingRow = ({ galaxies, onCardClick }: ScrollingRowProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  /* The `useLayoutEffect` hook in the provided code snippet is responsible for checking if the content
  inside the `ScrollingRow` component is scrollable based on the dimensions of the container element
  (`rowRef`). */
  useLayoutEffect(() => {
    const rowElement = rowRef.current;
    const containerElement = rowElement?.parentElement;

    if (!rowElement || !containerElement) return;

    const observer = new ResizeObserver(() => {
      const isNowScrollable =
        rowElement.scrollWidth > containerElement.clientWidth;
      setIsScrollable(isNowScrollable);
    });

    // We observe the inner row because its width changes as content loads.
    observer.observe(rowElement);

    // Clean up the observer when the component is removed.
    return () => observer.disconnect();
  }, []);

  /* This `useEffect` hook is responsible for starting and stopping the auto-scroll functionality based
  on changes in the length of the `galaxies` array. */
  useEffect(() => {
    if (isScrollable) {
      startAutoScroll();
      return () => stopAutoScroll();
    }
  }, [galaxies.length]);

  /* This `useEffect` hook is responsible for scrolling the active item into view within the
  `ScrollingRow` component. It runs whenever the `activeIndex` state changes. */
  useEffect(() => {
    const activeItem = rowRef.current?.children[activeIndex] as HTMLElement;
    activeItem?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  /**
   * The function `startAutoScroll` sets up an interval to cycle through a list of galaxies every 5
   * seconds in a React component.
   */
  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % galaxies.length);
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleManualNav = (direction: "next" | "prev") => {
    stopAutoScroll();
    if (direction === "next") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % galaxies.length);
    } else {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + galaxies.length) % galaxies.length
      );
    }
  };

  return (
    <div
      className="relative group" // Parent container for button positioning
      onMouseEnter={isScrollable ? stopAutoScroll : undefined}
      onMouseLeave={isScrollable ? startAutoScroll : undefined}
    >
      {/* The scrolling container itself */}
      <div
        className="w-full overflow-x-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          ref={rowRef}
          className={`flex transition-transform duration-500 ease-in-out ${
            isScrollable ? "w-max" : "w-full justify-center"
          }`}
        >
          {galaxies.map((galaxy, index) => (
            <div key={`${galaxy.id}-${index}`} className="mx-4">
              <GalaxyCard
                galaxy={galaxy}
                isActive={false}
                onClick={() => onCardClick(galaxy)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {isScrollable && (
        <>
          {/* Previous Button */}
          <button
            onClick={() => handleManualNav("prev")}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-9 h-9 bg-neutral-800 rounded-full text-white text-lg font-bold flex items-center justify-center transition-colors hover:bg-neutral-700 focus:outline-none"
          >
            &lt;
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleManualNav("next")}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-9 h-9 bg-neutral-800 rounded-full text-white text-lg font-bold flex items-center justify-center transition-colors hover:bg-neutral-700 focus:outline-none"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};
