import React, { useState } from "react";
import { GlassCard } from "./GlassCard";

const SimpleSearch = () => {
  const [query, setQuery] = useState("");

  const engines = {
    g: (q) => `https://www.google.com/search?q=${q}`,
    r: (q) => `https://www.reddit.com/search/?q=${q}`,
    yt: (q) => `https://www.youtube.com/results?search_query=${q}`,
    am: (q) => `https://www.amazon.com/s?k=${q}`,
    sp: (q) => `https://open.spotify.com/search/${q}`,
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const [cmd, ...rest] = query.trim().split(" ");
    const searchTerm = encodeURIComponent(rest.join(" "));

    if (engines[cmd]) {
      // Use the command-specific engine
      window.open(engines[cmd](searchTerm), "_blank");
    } else {
      // Default to Google
      window.open(engines["g"](encodeURIComponent(query)), "_blank");
    }

    setQuery("");
  };

  return (
    <GlassCard className='z-40 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg min-w-0'>
      <form onSubmit={handleSearch} className='flex gap-3'>
        <input
          type='text'
          placeholder='Search (r, g, yt, am, sp)'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='focus:outline-none flex-grow min-w-0 p-2 sm:p-3 rounded-lg border border-white/30 bg-white/10 placeholder-black/60 transition-colors duration-300 ease-in-out text-sm sm:text-base text-white'
          aria-label='Search query'
        />
        <button
          type='submit'
          className='w-full sm:w-auto px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/50 rounded-lg text-white font-semibold text-sm sm:text-base transition-colors duration-300 ease-in-out'
          aria-label='Search'
        >
          Go
        </button>
      </form>
    </GlassCard>
  );
};

export default SimpleSearch;
