import React, { useEffect, useState, useRef } from "react";
import bgMorning from "../assets/pictures/morning.webp";
import bgDay from "../assets/pictures/day.webp";
import bgEvening from "../assets/pictures/evening.webp";
import bgNight from "../assets/pictures/night.webp";

const getImageForHour = (hour) => {
  if (hour >= 5 && hour < 11) return bgMorning;
  if (hour >= 11 && hour < 17) return bgDay;
  if (hour >= 17 && hour <= 20) return bgEvening;
  return bgNight;
};

// Update frequency (e.g., 60000 = 1 minute)
const UPDATE_INTERVAL_MS = 60000;

const Wallpaper = ({ children }) => {
  const [bgImage, setBgImage] = useState(
    getImageForHour(new Date().getHours())
  );
  const [fade, setFade] = useState(true);
  const currentBgRef = useRef(bgImage);

  useEffect(() => {
    const updateBackground = () => {
      const currentHour = new Date().getHours();
      const newBg = getImageForHour(currentHour);
      if (currentBgRef.current !== newBg) {
        // Start fade out
        setFade(false);

        // After fade out duration, change image and fade in
        setTimeout(() => {
          setBgImage(newBg);
          currentBgRef.current = newBg;
          setFade(true);
        }, 1000); // matches transition-opacity duration (1000ms)
      }
    };

    updateBackground(); // run once on mount

    const interval = setInterval(updateBackground, UPDATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='bg-cover bg-center transition-opacity duration-1000 ease-in-out'
      style={{
        backgroundImage: `url(${bgImage})`,
        opacity: fade ? 1 : 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto",
      }}
    >
      <div className='relative min-h-full w-full'>{children}</div>
    </div>
  );
};

export default Wallpaper;
