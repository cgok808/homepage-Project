import React, { useState, useEffect } from "react";

export default function TimeDisplay() {
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
    <div className='fixed z-10 w-full max-w-md lg:w-auto lg:max-w-xl top-[25%] left-1/2 -translate-x-1/2 lg:top-15 lg:left-auto lg:right-[7%] lg:translate-x-0'>
      <section className='backdrop-blur-lg bg-white/20 border border-white/50 rounded-xl p-6 shadow-lg text-white'>
        <div className='text-center lg:text-left'>
          <h1 className='whitespace-nowrap font-bold mb-2 leading-tight border-b-2 border-[rgba(255,255,255,0.4)] pb-2 text-4xl md:text-5xl lg:text-6xl'>
            {greeting}!
          </h1>
          <h2 className='mb-1 text-2xl md:text-3xl lg:text-4xl leading-tight'>
            {customDate}
          </h2>
          <p className='text-xl md:text-2xl lg:text-3xl leading-tight'>
            It is currently: {time.toLocaleTimeString()}
          </p>
        </div>
      </section>
    </div>
  );
}
