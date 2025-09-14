import React, { useState } from "react";
import {
  PiSpotifyLogoBold,
  PiSteamLogo,
  PiGithubLogo,
  PiRedditLogo,
  PiGoogleDriveLogo,
  PiYoutubeLogo,
  PiMailbox,
  PiStudent,
  PiStar,
  PiArrowsClockwise, // added
} from "react-icons/pi";
import { GlassCard } from "./GlassCard";

const AppIcon = ({ href, label, Icon, onPress, animating }) => (
  <a
    href={href}
    rel='noopener noreferrer'
    className='hover:opacity-75 focus:outline-none rounded'
    aria-label={label}
    onMouseDown={onPress}
  >
    <Icon
      className={`transform transition-transform duration-300 hover:scale-110 ${
        animating ? "animate-pop" : ""
      }`}
    />
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

const altGroup2 = [
  {
    id: 21,
    href: "https://lamaku.hawaii.edu/d2l/home",
    label: "Lamaku",
    Icon: PiStudent,
  },
];

const AppsDisplay = () => {
  const [altBottom, setAltBottom] = useState(false);
  const [animatingId, setAnimatingId] = useState(null);

  const triggerAnim = (id) => {
    setAnimatingId(id);
    window.setTimeout(() => setAnimatingId((s) => (s === id ? null : s)), 400);
  };

  return (
    <div className='flex flex-col gap-8 p-4 items-center lg:items-end transform-gpu will-change-transform'>
      {[1, 2].map((groupId) => {
        const isBottom = groupId === 2;
        const iconsToShow = isBottom
          ? altBottom
            ? altGroup2
            : appIcons.filter((a) => a.group === 2)
          : appIcons.filter((a) => a.group === groupId);

        return (
          <GlassCard
            key={groupId}
            // added drawer-resize + tailwind transition utilities so width/height/transform animate
            className='p-4 inline-flex max-w-max drawer-resize transform-gpu will-change-transform'
          >
            <ul className='flex items-center gap-4 text-3xl md:text-4xl lg:text-6xl text-white'>
              {iconsToShow.map((app) => (
                <li key={app.id} className='p-2'>
                  <AppIcon
                    {...app}
                    onPress={() => triggerAnim(app.id)}
                    animating={animatingId === app.id}
                  />
                </li>
              ))}

              {isBottom && (
                <li className='p-2'>
                  <button
                    type='button'
                    onClick={() => {
                      triggerAnim("toggle"); // animate the toggle icon
                      setAltBottom((s) => !s); // change icon set
                    }}
                    className='hover:opacity-75 focus:outline-none rounded'
                    aria-pressed={altBottom}
                    aria-label={
                      altBottom ? "Show default icons" : "Show alternate icons"
                    }
                  >
                    <PiArrowsClockwise
                      className={`transform transition-transform duration-300 hover:scale-110 ${
                        animatingId === "toggle" ? "animate-pop" : ""
                      }`}
                    />
                  </button>
                </li>
              )}
            </ul>
          </GlassCard>
        );
      })}
    </div>
  );
};

export default AppsDisplay;
