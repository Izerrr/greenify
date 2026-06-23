import React from "react";

export default function TreeIllustration() {
  return (
    <svg viewBox="0 0 340 380" fill="none" className="w-full max-w-[320px] animate-[float-slow_5s_ease-in-out_infinite]">
      <defs>
        <linearGradient id="t1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(220,252,231,0.6)" />
        </linearGradient>
        <linearGradient id="t2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(187,247,208,0.65)" />
        </linearGradient>
        <linearGradient id="t3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(134,239,172,0.55)" />
        </linearGradient>
        <filter id="treeShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="rgba(34,197,94,0.12)" />
        </filter>
      </defs>

      {/* Batang Pohon */}
      <rect x="158" y="292" width="24" height="70" rx="12" fill="url(#t1)" stroke="rgba(187,247,208,0.8)" strokeWidth="1" />

      {/* Bayangan Tanah */}
      <ellipse cx="170" cy="362" rx="36" ry="7" fill="rgba(187,247,208,0.3)" />

      {/* Lapisan Kanopi 3 — Paling Lebar */}
      <polygon points="170,202 242,240 242,316 170,354 98,316 98,240" fill="url(#t1)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" filter="url(#treeShadow)" />
      <polygon points="170,214 232,248 232,308 170,342 108,308 108,248" fill="rgba(187,247,208,0.22)" />

      {/* Lapisan Kanopi 2 — Tengah */}
      <polygon points="170,144 234,178 234,250 170,284 106,250 106,178" fill="url(#t2)" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" filter="url(#treeShadow)" />
      <polygon points="170,155 224,185 224,243 170,272 116,243 116,185" fill="rgba(167,243,208,0.2)" />

      {/* Lapisan Kanopi 1 — Atas */}
      <polygon points="170,94 226,124 226,190 170,220 114,190 114,124" fill="url(#t3)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" filter="url(#treeShadow)" />
      <polygon points="170,104 216,130 216,182 170,208 124,182 124,130" fill="rgba(134,239,172,0.18)" />

      {/* Pucuk Pohon */}
      <polygon points="170,46 204,90 136,90" fill="rgba(255,255,255,0.88)" stroke="rgba(187,247,208,0.9)" strokeWidth="1.5" filter="url(#treeShadow)" />

      {/* Garis Kilauan Kaca */}
      <line x1="148" y1="94" x2="134" y2="144" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" />
      <line x1="148" y1="158" x2="132" y2="200" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />

      {/* Kartu Data Melayang Khas Liquid Glassmorphism */}
      {[
        { x: 10, y: 130, v: "2.400+", l: "Pohon" },
        { x: 252, y: 118, v: "17", l: "Kota" },
        { x: 10, y: 250, v: "100%", l: "Transparan" },
        { x: 248, y: 238, v: "Rp 10K", l: "mulai dari" },
      ].map(({ x, y, v, l }) => (
        <g key={v}>
          <rect x={x} y={y} width={80} height={46} rx={14} fill="rgba(255,255,255,0.72)" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
          <rect x={x + 1} y={y + 1} width={78} height={6} rx={7} fill="rgba(255,255,255,0.55)" />
          <text x={x + 40} y={y + 20} textAnchor="middle" fontSize="12" fontWeight="800" fill="#1c1c1e" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-0.5">
            {v}
          </text>
          <text x={x + 40} y={y + 34} textAnchor="middle" fontSize="9" fill="#636366" fontFamily="Inter, system-ui, sans-serif">
            {l}
          </text>
          <line x1={x > 170 ? x : x + 80} y1={y + 23} x2={x > 170 ? x - 12 : x + 92} y2={y + 23} stroke="rgba(187,247,208,0.7)" strokeWidth="1" strokeDasharray="3 2" strokeLinecap="round" />
        </g>
      ))}

      {/* Titik Sensor Mikro Tersebar */}
      {[
        [62, 52],
        [280, 72],
        [308, 200],
        [42, 195],
        [170, 20],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(187,247,208,0.7)" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
      ))}
    </svg>
  );
}
