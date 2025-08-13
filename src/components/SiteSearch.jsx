import React, { useState } from "react";
import { GlassCard } from "./GlassCard";

const SimpleSearch = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(googleUrl, "_blank");

    // Clear the search box
    setQuery("");
  };

  return (
    <GlassCard className='z-40 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg min-w-0'>
      <form onSubmit={handleSearch} className='flex gap-3'>
        <input
          type='text'
          placeholder='Search Google...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='focus:outline-none flex-grow min-w-0 p-2 sm:p-3 rounded-lg border border-white/30 bg-white/10 placeholder-black/60 transition-colors duration-300 ease-in-out text-sm sm:text-base'
          aria-label='Search query'
        />
        <button
          type='submit'
          className='w-full sm:w-auto px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/50 rounded-lg text-white font-semibold text-sm sm:text-base transition-colors duration-300 ease-in-out'
          aria-label='Search'
        >
          Search
        </button>
      </form>
    </GlassCard>
  );
};

export default SimpleSearch;
