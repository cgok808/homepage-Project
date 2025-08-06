import React from "react";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { PiSteamLogo } from "react-icons/pi";
import { PiGithubLogo } from "react-icons/pi";
import { PiRedditLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiGoogleDriveLogo } from "react-icons/pi";

const AppsDisplay = () => {
  return (
    <section className='glass-card apps-position'>
      <ul className='z-10 flex text-7xl space-x-4'>
        <li>
          <a
            href='https://spotify.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75'
          >
            <PiSpotifyLogoBold className='transform scale-90 transition-transform duration-300 hover:scale-110' />
          </a>
        </li>
        <li>
          <a
            href='https://steam.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75'
          >
            <PiSteamLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75'
          >
            <PiGithubLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
          </a>
        </li>
        <li>
          <a
            href='https://reddit.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75'
          >
            <PiRedditLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
          </a>
        </li>
        <li>
          <a
            href='https://drive.google.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:opacity-75'
          >
            <PiGoogleDriveLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AppsDisplay;
