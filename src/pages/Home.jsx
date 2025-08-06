// Home.jsx
import React from "react";
import bgImage from "../assets/pictures/day.png";
import TimeDisplay from "../components/TimeDisplay";
import Apps from "../components/Apps";

const Home = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <TimeDisplay />
      <Apps />
    </div>
  );
};

export default Home;
