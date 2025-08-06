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

  return (
    <section className='glass-card text-white relative z-10 top-right-position'>
      <div>
        <h1 className='flex font-bold text-7xl mb-2'>{greeting}!</h1>
        <p className="text-4xl">It is currently: {time.toLocaleTimeString()}</p>
      </div>
    </section>
  );
}
