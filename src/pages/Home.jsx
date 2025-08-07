// Home.jsx
import React from "react";
import bgImage from "../assets/pictures/day.jpeg";
import TimeDisplay from "../components/TimeDisplay";
import AppsDisplay from "../components/AppsDisplay";
import Wallpaper from "../components/Wallpaper";

const Home = () => {
  return (
    <Wallpaper>
      <TimeDisplay />
      <AppsDisplay />
    </Wallpaper>
  );
};

export default Home;
