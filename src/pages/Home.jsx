// Home.jsx
import React from "react";
import Wallpaper from "../components/Wallpaper";
import TimeDisplay from "../components/TimeDisplay";
import ToDoList from "../components/ToDoList";
import AppsDisplay from "../components/AppsDisplay";

const Home = () => {
  return (
    <Wallpaper>
      <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around min-h-screen p-4'>
        {/* Left side - ToDoList (centered vertically on desktop, top on mobile) */}
        <div className='flex justify-center md:items-center md:h-full mb-8 md:mb-0 min-w-0'>
          <ToDoList />
        </div>

        {/* Right side - vertical stack with proper alignment */}
        <div className='flex flex-col justify-center items-center gap-8 min-w-0'>
          <div className='my-4 md:my-8'>
            <TimeDisplay />
          </div>
          <div className='my-4 md:my-8'>
            <AppsDisplay />
          </div>
        </div>
      </div>
    </Wallpaper>
  );
};

export default Home;
