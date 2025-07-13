import { useState, useEffect } from "react";

interface CharacterSlideshowProps {
  images: string[];
  isActive: boolean; // We need to know if this slideshow is the active one
}

export const CharacterSlideshow = ({
  images,
  isActive,
}: CharacterSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only run the slideshow if this card is active and there's more than one image
    if (isActive && images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      // Clear the interval when the component unmounts or when it becomes inactive
      return () => clearInterval(intervalId);
    }
  }, [isActive, images.length]); // Rerun effect if isActive changes

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Character ${index + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover object-top
            transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-30" : "opacity-0"}
          `}
        />
      ))}
    </>
  );
};
