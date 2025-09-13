import React, { useState } from "react";
import { GlassCard } from "./GlassCard";

const SimpleSearch = () => {
  const [query, setQuery] = useState("");

  const engines = {
    r: {
      name: "Reddit",
      url: (q) => `https://www.reddit.com/search/?q=${q}`,
    },
    yt: {
      name: "YouTube",
      url: (q) => `https://www.youtube.com/results?search_query=${q}`,
    },
    am: {
      name: "Amazon",
      url: (q) => `https://www.amazon.com/s?k=${q}`,
    },
    sp: {
      name: "Spotify",
      url: (q) => `https://open.spotify.com/search/${q}`,
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const [cmd, ...rest] = query.trim().split(" ");
    const searchTerm = encodeURIComponent(rest.join(" "));

    const url = engines[cmd]
      ? engines[cmd].url(searchTerm)
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
  };

  const engineHint =
    query.trim().length > 0
      ? (() => {
          const cmd = query.trim().split(" ")[0];
          return engines[cmd]
            ? `Searching ${engines[cmd].name}...`
            : "Searching Google...";
        })()
      : "";

  return (
    <GlassCard className='z-40 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg min-w-0'>
      <form onSubmit={handleSearch} className='flex flex-col gap-2'>
        <div className='flex gap-3'>
          <input
            type='text'
            placeholder='Search (r, yt, am, sp)...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='focus:outline-none flex-grow min-w-0 p-2 sm:p-3 rounded-lg border border-white/30 bg-white/10 placeholder-black/70 text-black/70 font-bold tracking-wide transition-colors duration-300 ease-in-out text-sm sm:text-base'
            aria-label='Search query'
          />

          <button
            type='submit'
            className='w-full sm:w-auto px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/50 rounded-lg text-white font-semibold text-sm sm:text-base transition-colors duration-300 ease-in-out'
            aria-label='Search'
          >
            Go
          </button>
        </div>
        {engineHint && (
          <span className='text-sm font-bold tracking-wide text-black/70 px-1'>
            {engineHint}
          </span>
        )}
      </form>
    </GlassCard>
  );
};

export default SimpleSearch;
