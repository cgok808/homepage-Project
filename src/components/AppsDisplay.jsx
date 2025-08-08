import React from "react";
import {
  PiSpotifyLogoBold,
  PiSteamLogo,
  PiGithubLogo,
  PiRedditLogo,
  PiGoogleDriveLogo,
  PiYoutubeLogo,
  PiMailbox,
} from "react-icons/pi";
import { GlassCard } from "./GlassCard";

const AppIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='hover:opacity-75 focus:outline-none rounded'
    aria-label={label}
  >
    <Icon className='transform scale-90 transition-transform duration-300 hover:scale-110' />
  </a>
);

const appIcons = [
  {
    id: 1,
    href: "https://youtube.com/",
    label: "YouTube",
    Icon: PiYoutubeLogo,
    group: 1,
  },
  {
    id: 2,
    href: "https://reddit.com",
    label: "Reddit",
    Icon: PiRedditLogo,
    group: 1,
  },
  {
    id: 3,
    href: "https://spotify.com",
    label: "Spotify",
    Icon: PiSpotifyLogoBold,
    group: 1,
  },
  {
    id: 4,
    href: "https://store.steampowered.com/",
    label: "Steam",
    Icon: PiSteamLogo,
    group: 1,
  },
  {
    id: 5,
    href: "https://github.com",
    label: "GitHub",
    Icon: PiGithubLogo,
    group: 2,
  },
  {
    id: 6,
    href: "https://drive.google.com/",
    label: "Google Drive",
    Icon: PiGoogleDriveLogo,
    group: 2,
  },
  {
    id: 7,
    href: "https://mail.google.com",
    label: "Gmail",
    Icon: PiMailbox,
    group: 2,
  },
];

const AppsDisplay = () => {
  return (
    <div className='flex flex-col items-end gap-4 w-full'>
      {" "}
      {/* Right-aligns the cards */}
      {[1, 2].map((groupId) => (
        <GlassCard key={groupId}>
          <ul className='flex flex-row justify-end gap-4 text-2xl md:text-4xl lg:text-6xl text-white'>
            {appIcons
              .filter((app) => app.group === groupId)
              .map((app) => (
                <li key={app.id}>
                  <AppIcon {...app} />
                </li>
              ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  );
};

export default AppsDisplay;
