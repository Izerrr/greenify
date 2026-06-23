import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, HelpCircle } from "lucide-react";
import { fadeUpAnimation } from "./ui/SharedUi.jsx";

export default function CarbonCalculator() {
  const [budget, setBudget] = useState(50000); // State Anggaran dalam Rupiah

  // Asumsi biaya 1 pohon terverifikasi IoT = Rp 25.000
  const treePrice = 25000;
  const calculatedTrees = Math.floor(budget / treePrice);

  // Asumsi 1 pohon menyerap sekitar 22 kg CO2 per tahun
  const carbonOffset = calculatedTrees * 22;

  return (
    <section id="kalkulator" className="py-20 relative z-10 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Header Komponen */}
        <motion.div {...fadeUpAnimation} className="mb-12 text-center md:text-left">
          <span className="text-[11px] font-bold text-[#16a34a] tracking-[0.12em] uppercase mb-3 block">Simulasi Dampak</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] text-[#1c1c1e] leading-[1.08] m-0">Hitung kontribusi karbonmu.</h2>
          <p className="text-[15px] text-[#636366] mt-3 max-w-[420px] mx-auto md:mx-0">Geser simulator untuk melihat berapa banyak emisi gas rumah kaca yang bisa kamu tebus hari ini.</p>
        </motion.div>

        {/* Struktur Utama Kalkulator Kaca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Panel Kontrol Kiri (Slider) */}
          <div className="md:col-span-2 glass-liquid rounded-[28px] p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl glass-liquid-green flex items-center justify-center">
                <Calculator size={16} className="text-[#16a34a]" />
              </div>
              <span className="font-sans font-bold text-base text-[#1c1c1e]">Alokasi Anggaranmu</span>
            </div>

            {/* Tampilan Output Anggaran Rupiah */}
            <div className="font-sans text-3xl font-black text-[#1c1c1e] tracking-[-0.04em] mb-4">Rp {budget.toLocaleString("id-ID")}</div>

            {/* Slider Batang Input */}
            <input type="range" min="25000" max="1000000" step="25000" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full h-2 bg-black/5 rounded-lg appearance-none cursor-pointer accent-[#16a34a] mb-6" />

            <div className="flex justify-between text-[11px] text-[#9ca3af] font-semibold">
              <span>Rp 25.000 (1 Pohon)</span>
              <span>Rp 1.000.000 (40 Pohon)</span>
            </div>
          </div>

          {/* Panel Hasil Kanan (Visual Hasil Kalkulasi) */}
          <div className="glass-liquid-green rounded-[28px] p-8 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[#16a34a] tracking-[0.1em] uppercase block mb-1">Estimasi Dampak</span>

              {/* Hasil Kalkulasi Jumlah Pohon */}
              <div className="font-sans text-5xl font-black text-[#1c1c1e] tracking-[-0.05em] my-2">
                {calculatedTrees} <span className="text-xl font-bold text-[#636366]">Pohon</span>
              </div>

              {/* Hasil Kalkulasi Serapan Karbon */}
              <div className="text-sm font-medium text-[#374151] mt-4 flex items-center gap-1.5">
                Setara menyerap <strong className="text-[#16a34a] font-bold">~{carbonOffset} kg CO₂</strong> / tahun
              </div>
            </div>

            {/* Tombol Aksi Langsung */}
            <button className="w-full mt-6 py-3 px-4 rounded-xl bg-[#166534] text-white font-sans text-sm font-bold border-none cursor-pointer hover:bg-[#14532d] hover:-translate-y-px active:translate-y-0 transition-all duration-200 shadow-[0_4px_12px_rgba(22,101,52,0.15)]">
              Adopsi {calculatedTrees} Pohon Sekarang
            </button>
          </div>
        </div>

        {/* Info Tambahan Transparansi Mikro */}
        <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs text-[#9ca3af] font-medium px-2">
          <ShieldCheck size={14} className="text-[#16a34a]" />
          Kalkulasi berbasis standardisasi konversi biomassa karbon dari KLHK & BRIN.
        </div>
      </div>
    </section>
  );
}
