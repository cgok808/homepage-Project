// Home.jsx
import React from "react";
import Wallpaper from "../components/Wallpaper";
import TimeDisplay from "../components/TimeDisplay";
import ToDoList from "../components/ToDoList";
import AppsDisplay from "../components/AppsDisplay";

const Home = () => {
  return (
    <Wallpaper>
      <div className='flex justify-between h-screen p-4'>
        {/* Left side - ToDoList (vertically centered) */}
        <div className='flex items-center mx-30'>
          <ToDoList />
        </div>

        {/* Right side - TimeDisplay top, AppsDisplay bottom */}
        <div className='flex flex-col justify-between mx-40 my-30'>
          <TimeDisplay />
          <AppsDisplay />
        </div>
      </div>
    </Wallpaper>
  );
};

export default Home;
