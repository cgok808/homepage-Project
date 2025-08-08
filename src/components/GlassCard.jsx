import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <section
      className={`rounded-xl p-6 shadow-xl border border-white/20 bg-white/10 bg-gradient-to-br from-white/07 to-white/03 backdrop-blur-sm inline-block ${className}`}
      aria-hidden='false'
    >
      {children}
    </section>
  );
};

export { GlassCard };
