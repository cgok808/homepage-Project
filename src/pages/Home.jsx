// Home.jsx
import React from "react";
import bgImage from "../assets/pictures/day.png";
import TimeDisplay from "../components/TimeDisplay";
import AppsDisplay from "../components/AppsDisplay";

const Home = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <TimeDisplay />
      <AppsDisplay />
    </div>
  );
};

export default Home;
