import React, { useEffect, useState } from "react";
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

const UPDATE_INTERVAL_MS = 1000;

const Wallpaper = ({ children }) => {
  const [bgImage, setBgImage] = useState(
    getImageForHour(new Date().getHours())
  );

  useEffect(() => {
    const updateBackground = () => {
      const currentHour = new Date().getHours();
      const newBg = getImageForHour(currentHour);
      setBgImage(newBg);
    };

    updateBackground();

    const interval = setInterval(updateBackground, UPDATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='bg-cover bg-center'
      style={{
        backgroundImage: `url(${bgImage})`,
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
