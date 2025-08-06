import React from "react";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { PiSteamLogo } from "react-icons/pi";
import { PiGithubLogo } from "react-icons/pi";
import { PiRedditLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";

const Apps = () => {
  return (
    <div className='glass-card apps-position'>
      <div className='z-10 text-6xl'>
        <PiSpotifyLogoBold className='transform scale-90 transition-transform duration-300 hover:scale-110' />
        <PiSteamLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
        <PiGithubLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
        <PiRedditLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
        <PiYoutubeLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
      </div>
    </div>
  );
};

export default Apps;
