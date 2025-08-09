// Home.jsx
import React from "react";
import Wallpaper from "../components/Wallpaper";
import TimeDisplay from "../components/TimeDisplay";
import ToDoList from "../components/ToDoList";
import AppsDisplay from "../components/AppsDisplay";
import WeatherDisplay from "../components/WeatherDisplay";

const Home = () => {
  return (
    <Wallpaper>
      <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around min-h-screen p-4 box-border overflow-y-auto'>
        {/* Left side - ToDoList (centered vertically on desktop, top on mobile) */}
        <div className='flex justify-center md:items-center md:h-full mb-8 md:mb-0 min-w-0'>
          <ToDoList />
        </div>

        {/* Right side - vertical stack with proper alignment */}
        <div className='flex flex-col justify-center items-center min-w-0'>
          <div className='lg:py-5 py-4 flex items-center justify-around gap-8'>
            <WeatherDisplay className='md:w-auto w-48' />
            <div className='md:w-auto w-48 flex justify-center'>
              <TimeDisplay />
            </div>
          </div>
          <div>
            <AppsDisplay />
          </div>
        </div>
      </div>
    </Wallpaper>
  );
};

export default Home;
