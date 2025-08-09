import React, { useState, useEffect } from "react";
import { GlassCard } from "./GlassCard";

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000); // 1000ms is measured to get those seconds
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  //How do they know the time to greet you?

  const hour = time.getHours();
  let greeting = "Is the clock working?"; // Phrase is subjected to change, shouldn't display this unless issues

  if (hour >= 0 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  //Setting up this manually so can expand for the user to customize? Possibly in future?

  const weekday = time.toLocaleDateString(undefined, { weekday: "long" });
  const month = time.toLocaleDateString(undefined, { month: "long" });
  const day = time.getDate(); // returns number
  const year = time.getFullYear();

  const customDate = `${weekday.slice(0, 3)} • ${month.slice(
    0,
    3
  )} ${day}, ${year}`; // oh yeah this is it for now

  return (
   <GlassCard className="border-white/40 w-fit max-w-lg text-black/60">
    <div className='text-center lg:text-left'>
      <h1 className='font-bold mb-2 leading-tight border-white/30 border-b-2 pb-2 text-3xl md:text-4xl lg:text-5xl'>
        {greeting}!
      </h1>
      <h2 className='mb-1 text-lg md:text-xl lg:text-2xl leading-tight'>
        {customDate}
      </h2>
      <p className='text-base md:text-lg lg:text-xl leading-tight'>
        It is currently:{" "}
        <time dateTime={time.toISOString()}>{time.toLocaleTimeString()}</time>
      </p>
    </div>
  </GlassCard>
  );
};

export default TimeDisplay;
