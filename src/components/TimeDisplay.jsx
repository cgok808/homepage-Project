import { useState, useEffect } from "react";
import { GlassCard } from "./GlassCard";

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const weekday = time.toLocaleDateString(undefined, { weekday: "long" });
  const month = time.toLocaleDateString(undefined, { month: "long" });
  const day = time.getDate();
  const year = time.getFullYear();

  const customDate = `${weekday.slice(0, 3)} • ${month.slice(0, 3)} ${day}, ${year}`;

  return (
   <GlassCard className="border-white/40 w-fit max-w-lg text-black/70">
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
