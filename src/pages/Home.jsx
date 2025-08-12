// Home.jsx
import React from "react";
import Wallpaper from "../components/Wallpaper";
import TimeDisplay from "../components/TimeDisplay";
import ToDoList from "../components/ToDoList";
import AppsDisplay from "../components/AppsDisplay";
import WeatherDisplay from "../components/WeatherDisplay";
import SiteSearch from "../components/SiteSearch";

const Home = () => {
  return (
    <Wallpaper>
      <div className='flex flex-col justify-center items-center gap-8 md:flex-row md:justify-around min-h-screen p-4 box-border overflow-y-auto'>
        {/* Left side - ToDoList */}
        <div className='flex flex-col justify-center md:items-center md:h-full mb-8 md:mb-0 min-w-0 gap-8'>
          <SiteSearch className='w-full max-w-md' />
          <ToDoList />
        </div>

        {/* Right side */}
        <div className='flex flex-col justify-center items-center min-w-0 gap-[2rem] transform-gpu will-change-transform'>
          {/* Weather + Time */}
          <div className='lg:py-[1.25rem] py-4 flex items-center justify-around gap-8 transform-gpu will-change-transform'>
            <WeatherDisplay className='md:w-auto w-48' />
            <div className='md:w-auto w-48 flex justify-center'>
              <TimeDisplay />
            </div>
          </div>

          {/* Apps - Now with permanent upward shift */}
          <div className='mb-4 -translate-y-4'>
            {" "}
            {/* Removed hover effect */}
            <AppsDisplay />
          </div>
        </div>
      </div>
    </Wallpaper>
  );
};

export default Home;
