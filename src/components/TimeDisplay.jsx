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

  const customDate = `${weekday.slice(0,3)} • ${month.slice(0, 3)} ${day}, ${year}`; // oh yeah this is it for now

  return (
    <section className='glass-card text-white relative z-10 top-right-position'>
      <div>
        <h1 className='flex font-bold text-7xl mb-2 border-b-2 border-[rgba(255,255,255,0.4)] pb-2'>
          {greeting}!
        </h1>
        <h2 className='text-5xl mb-2'>{customDate}</h2>
        <p className='text-3xl'>It is currently: {time.toLocaleTimeString()}</p>
      </div>
    </section>
  );
}
