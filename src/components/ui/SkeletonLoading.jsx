import React from "react";

// Balok dasar Shimmering Gray yang halus untuk tema Terang
const PulseBlock = ({ className = "" }) => <div className={`bg-black/5 animate-pulse rounded-md ${className}`} />;

// ── 1. HERO SKELETON ─────────────────────────────────────────────────────────
export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center pt-[100px] pb-[60px] w-full px-5">
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left justify-items-center lg:justify-items-start">
        {/* Sisi Kiri: Teks & Metrik */}
        <div className="flex flex-col items-center lg:items-start w-full">
          {/* Ikon Pill Atas */}
          <PulseBlock className="w-44 h-7 rounded-xl mb-6" />

          {/* Judul Besar (3 Baris) */}
          <PulseBlock className="w-[85%] sm:w-[320px] h-11 mb-3" />
          <PulseBlock className="w-[70%] sm:w-[260px] h-11 mb-3" />
          <PulseBlock className="w-[50%] sm:w-[180px] h-11 mb-6" />

          {/* Deskripsi */}
          <PulseBlock className="w-[90%] sm:w-[380px] h-4 mb-2.5" />
          <PulseBlock className="w-[80%] sm:w-[340px] h-4 mb-8" />

          {/* Dua Tombol Aksi */}
          <div className="flex gap-3 mb-10">
            <PulseBlock className="w-32 h-11 rounded-xl" />
            <PulseBlock className="w-28 h-11 rounded-xl" />
          </div>

          {/* Angka Statistik Bawah */}
          <div className="flex gap-0 pt-8 border-t border-black/5 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 px-4 first:pl-0 border-l border-black/5 first:border-none flex flex-col items-center lg:items-start">
                <PulseBlock className="w-16 h-8 mb-2" />
                <PulseBlock className="w-20 h-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Sisi Kanan: Panel Ilustrasi Kaca */}
        <div className="hidden lg:flex flex-col items-center w-full max-w-[420px] min-h-[440px] glass-liquid rounded-[32px] p-8 justify-between">
          <div className="w-full flex flex-col items-center justify-center flex-1">
            {/* Bentuk Segitiga/Polygon Pohon Palsu */}
            <PulseBlock className="w-24 h-24 clip-path-triangle mb-4 opacity-40 rounded-full" />
            <PulseBlock className="w-40 h-28 opacity-40" />
            <PulseBlock className="w-10 h-16 mt-2" />
          </div>
          {/* Label Bawah */}
          <PulseBlock className="w-48 h-8 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ── 2. FEATURES BENTO SKELETON ────────────────────────────────────────────────
export function FeaturesSkeleton() {
  return (
    <div className="py-20 px-5 max-w-[1100px] mx-auto">
      {/* Header Seksi */}
      <div className="mb-11 flex flex-col items-center md:items-start">
        <PulseBlock className="w-24 h-4 mb-3" />
        <PulseBlock className="w-52 h-8 mb-2" />
        <PulseBlock className="w-40 h-8 mb-4" />
        <PulseBlock className="w-64 h-4" />
      </div>

      {/* Grid Bento Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[{ size: "md:col-span-1" }, { size: "md:col-span-2" }, { size: "md:col-span-2" }, { size: "md:col-span-1" }, { size: "md:col-span-1" }].map((card, i) => (
          <div key={i} className={`glass-liquid rounded-[24px] px-[26px] pt-7 pb-6 min-h-[180px] ${card.size}`}>
            {/* Bulatan Ikon */}
            <PulseBlock className="w-10 h-10 rounded-xl mb-[18px]" />
            {/* Judul Fitur */}
            <PulseBlock className="w-36 h-5 mb-3" />
            {/* Baris Deskripsi */}
            <PulseBlock className="w-full h-3.5 mb-2" />
            <PulseBlock className="w-[85%] h-3.5" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. BUSINESS MODEL SKELETON ──────────────────────────────────────────────
export function BusinessModelSkeleton() {
  return (
    <div className="py-20 px-5 max-w-[1100px] mx-auto">
      <div className="mb-11 flex flex-col items-center md:items-start">
        <PulseBlock className="w-24 h-4 mb-3" />
        <PulseBlock className="w-48 h-8" />
      </div>

      {/* Tab Pills */}
      <div className="flex gap-2 mb-5 justify-center md:justify-start">
        {[1, 2, 3, 4].map((i) => (
          <PulseBlock key={i} className="w-28 h-9 rounded-xl" />
        ))}
      </div>

      {/* Panel Konten Utama Tab */}
      <div className="glass-liquid rounded-[28px] p-9 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[300px]">
        <div>
          <PulseBlock className="w-20 h-5 rounded-lg mb-[18px]" />
          <div className="flex items-center gap-3.5 mb-5">
            <PulseBlock className="w-12 h-12 rounded-2xl" />
            <PulseBlock className="w-36 h-7" />
          </div>
          <PulseBlock className="w-full h-4 mb-2" />
          <PulseBlock className="w-[90%] h-4 mb-2" />
          <PulseBlock className="w-[60%] h-4" />
        </div>
        <div className="flex flex-col gap-2.5 justify-center">
          {[1, 2, 3].map((i) => (
            <PulseBlock key={i} className="w-full h-11 rounded-[14px]" />
          ))}
        </div>
      </div>
    </div>
  );
}
