// components/GlassCard.jsx
import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <section
      className={`" 
    rounded-xl
    p-6
    shadow-xl
    border
    border-white/20
    bg-white/2
    bg-gradient-to-br
    from-white/07
    to-white/3
    backdrop-blur-xs
   w-fit inline-block ${className}`}
      aria-hidden='false'
    >
      {children}
    </section>
  );
};

export { GlassCard };
