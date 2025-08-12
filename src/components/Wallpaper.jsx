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

// Change this to customize the update frequency (e.g., 1000 = 1 second, 60000 = 1 minute)
const UPDATE_INTERVAL_MS = 1000; // Change here

const Wallpaper = ({ children }) => {
  const [bgImage, setBgImage] = useState(
    getImageForHour(new Date().getHours())
  );
  const [fade, setFade] = useState(false);
  const firstLoad = useRef(true);

  const updateBackground = () => {
    const currentHour = new Date().getHours();
    const newBg = getImageForHour(currentHour);
    setBgImage((prev) => {
      if (prev !== newBg) {
        setFade(false); // Start fade out
        setTimeout(() => setFade(true), 50); // Trigger fade in after short delay
        return newBg;
      }
      return prev;
    });
  };

  useEffect(() => {
    updateBackground(); // Run once on mount

    if (UPDATE_INTERVAL_MS) {
      const interval = setInterval(updateBackground, UPDATE_INTERVAL_MS);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      setFade(true); // Don't fade on initial load
    }
  }, []);

  return (
    <div
      className={`bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
      style={{
        backgroundImage: `url(${bgImage})`,
        opacity: fade ? 1 : 0,
        // Add these styles:
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: "auto", // Allows scrolling if content exceeds viewport
      }}
    >
      <div className='relative min-h-full w-full'>{children}</div>
    </div>
  );
};

export default Wallpaper;
