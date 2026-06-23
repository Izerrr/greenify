import React from "react";

export function IconPill({ icon: Icon, label }) {
  return (
    <div className="glass-liquid-green inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-[#16a34a] tracking-wider uppercase">
      <Icon size={11} />
      {label}
    </div>
  );
}

export function Eyebrow({ children }) {
  return <div className="text-[11px] font-bold text-[#16a34a] tracking-[0.12em] uppercase mb-3">{children}</div>;
}

export function Display({ children }) {
  return <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] text-[#1c1c1e] leading-[1.08] m-0">{children}</h2>;
}

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeUp = fadeUpAnimation;

export const staggerAnimation = (i = 0) => ({
  ...fadeUpAnimation,
  transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
});
