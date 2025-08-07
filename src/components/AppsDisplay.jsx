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

const AppIcon = ({ href, children, label }) => (
  <li>
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:opacity-75'
      aria-label={label}
    >
      {children}
    </a>
  </li>
);

const appIcons1 = [
  {
    id: 1,
    href: "https://youtube.com/",
    label: "YouTube",
    icon: (
      <PiYoutubeLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
  {
    id: 2,
    href: "https://reddit.com",
    label: "Reddit",
    icon: (
      <PiRedditLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
  {
    id: 3,
    href: "https://spotify.com",
    label: "Spotify",
    icon: (
      <PiSpotifyLogoBold className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
  {
    id: 4,
    href: "https://store.steampowered.com/",
    label: "Steam",
    icon: (
      <PiSteamLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
];

const appIcons2 = [
  {
    id: 5,
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <PiGithubLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
  {
    id: 6,
    href: "https://drive.google.com/",
    label: "Google Drive",
    icon: (
      <PiGoogleDriveLogo className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
  {
    id: 7,
    href: "https://mail.google.com",
    label: "Gmail",
    icon: (
      <PiMailbox className='transform scale-90 transition-transform duration-300 hover:scale-110' />
    ),
  },
];

const AppsDisplay = () => {
  return (
    <div
      className='
    fixed
    bottom-4 left-1/2 -translate-x-1/2
    flex flex-col space-y-6 items-center
    w-full max-w-md
    lg:items-end lg:right-[7%] lg:left-auto lg:bottom-[5%] lg:translate-x-0
    z-10
  '
      style={{
        bottom: "5%",
        right: "7%",
        zIndex: 10,
      }}
    >
      <section className='glass-card apps-position__1'>
        <ul>
          <li className='z-10 flex space-x-4 text-3xl md:text-4xl lg:text-6xl'>
            {appIcons1.map((app) => (
              <AppIcon key={app.id} href={app.href} label={app.label}>
                {app.icon}
              </AppIcon>
            ))}
          </li>
        </ul>
      </section>
      <section className='glass-card apps-position__2'>
        <ul>
          <li className='z-10 flex space-x-4 text-3xl md:text-4xl lg:text-6xl'>
            {appIcons2.map((app) => (
              <AppIcon key={app.id} href={app.href} label={app.label}>
                {app.icon}
              </AppIcon>
            ))}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AppsDisplay;
