// Wallpaper.jsx
import React, { useEffect, useState } from "react";
import bgMorning from "../assets/pictures/morning.jpeg";
import bgDay from "../assets/pictures/day.jpeg";
import bgEvening from "../assets/pictures/evening.jpeg";
import bgNight from "../assets/pictures/night.jpeg";

const Wallpaper = ({ children }) => {
  const [bgImage, setBgImage] = useState(bgDay); // Default to day image

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 11) {
      setBgImage(bgMorning);
    } else if (hour >= 11 && hour < 17) {
      setBgImage(bgDay);
    } else if (hour >= 17 && hour <= 20) {
      setBgImage(bgEvening);
    } else {
      setBgImage(bgNight);
    }
  }, []);

  return (
    <div
      className='min-h-screen bg-cover bg-center transition-all duration-500'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Children content like TimeDisplay, AppsDisplay, etc. */}

      {children}
    </div>
  );
};

export default Wallpaper;
