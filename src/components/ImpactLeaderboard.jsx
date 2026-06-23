import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Award, ArrowUpRight, ShieldCheck, Users } from "lucide-react";
import { fadeUpAnimation } from "./ui/SharedUi.jsx";

const corporateRank = [
  { rank: 1, name: "PT Astra Internasional (Eco)", trees: "1.250 Btg", carbon: "27.5 Ton", status: "Gold Tier", points: "98/100 ESG" },
  { rank: 2, name: "GoTo Green Movement", trees: "940 Btg", carbon: "20.6 Ton", status: "Gold Tier", points: "94/100 ESG" },
  { rank: 3, name: "PT Bank Central Asia Tbk", trees: "850 Btg", carbon: "18.7 Ton", status: "Silver Tier", points: "91/100 ESG" },
  { rank: 4, name: "Pertamina New Renewable", trees: "620 Btg", carbon: "13.6 Ton", status: "Silver Tier", points: "88/100 ESG" },
];

const publicRank = [
  { rank: 1, name: "Rezi (Run for Earth)", trees: "45 Btg", carbon: "990 Kg", status: "Eco Hero", points: "Level 12" },
  { rank: 2, name: "Budi Sudarsono", trees: "32 Btg", carbon: "704 Kg", status: "Guardian", points: "Level 9" },
  { rank: 3, name: "Siti Rahmaawati", trees: "28 Btg", carbon: "616 Kg", status: "Guardian", points: "Level 8" },
  { rank: 4, name: "Andi Wijaya", trees: "15 Btg", carbon: "330 Kg", status: "Sprout", points: "Level 4" },
];

export default function ImpactLeaderboard() {
  const [activeTab, setActiveTab] = useState("b2b");
  const currentData = activeTab === "b2b" ? corporateRank : publicRank;

  return (
    <section id="leaderboard" className="py-20 relative z-10 px-5">
      <div className="max-w-[1100px] mx-auto">
        <motion.div {...fadeUpAnimation} className="mb-11 text-center md:text-left">
          <span className="text-[11px] font-bold text-[#16a34a] tracking-wider uppercase mb-3 block">Gamifikasi & ESG Tracker</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.045em] text-[#1c1c1e] leading-[1.08] m-0">Papan peringkat dampak.</h2>
          <p className="text-[15px] text-[#636366] mt-3 max-w-[450px] mx-auto md:mx-0">Skema validasi transparansi untuk memicu persaingan positif kontribusi hijau antar-sektor.</p>
        </motion.div>

        {/* Tombol Navigasi Kategori (Tab Switcher) */}
        <div className="flex gap-2 mb-6 justify-center md:justify-start">
          <button
            onClick={() => setActiveTab("b2b")}
            className={`flex items-center gap-2 text-xs font-bold cursor-pointer px-5 py-2.5 rounded-xl transition-all duration-200 ${activeTab === "b2b" ? "bg-[#166534] text-white shadow-sm" : "glass-liquid text-[#636366]"}`}
          >
            <Building2 size={14} /> Alokasi CSR Korporat (B2B)
          </button>
          <button
            onClick={() => setActiveTab("b2c")}
            className={`flex items-center gap-2 text-xs font-bold cursor-pointer px-5 py-2.5 rounded-xl transition-all duration-200 ${activeTab === "b2c" ? "bg-[#166534] text-white shadow-sm" : "glass-liquid text-[#636366]"}`}
          >
            <Users size={14} /> Kontributor Publik (B2C)
          </button>
        </div>

        {/* Panel Tabel Kaca Cair */}
        <div className="glass-liquid rounded-[28px] overflow-hidden p-6 relative">
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5 text-[11px] font-bold text-[#9ca3af] tracking-wider uppercase">
                  <th className="pb-4 pt-2 px-4 w-16">Peringkat</th>
                  <th className="pb-4 pt-2 px-4">Nama Entitas</th>
                  <th className="pb-4 pt-2 px-4">Pohon Diadopsi</th>
                  <th className="pb-4 pt-2 px-4">Serapan CO₂</th>
                  <th className="pb-4 pt-2 px-4 text-right">Skor / Lencana</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr key={row.rank} className="border-b border-black/5 last:border-none group text-sm text-[#374151] hover:bg-black/[0.01] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#1c1c1e]">
                      {row.rank === 1 ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center bg-yellow-400/20 text-yellow-700 rounded-full text-xs">🥇</span>
                      ) : row.rank === 2 ? (
                        <span className="inline-flex w-6 h-6 items-center justify-center bg-slate-300/30 text-slate-700 rounded-full text-xs">🥈</span>
                      ) : (
                        <span className="inline-flex w-6 h-6 items-center justify-center text-[#636366] text-xs pl-1.5">{row.rank}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#1c1c1e] group-hover:text-[#16a34a] transition-colors">{row.name}</td>
                    <td className="py-4 px-4 font-medium text-[#1c1c1e]">{row.trees}</td>
                    <td className="py-4 px-4 text-[#636366]">{row.carbon}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#dcfce7]/60 text-[#16a34a] border border-[#bbf7d0]/40">
                        <Award size={12} /> {row.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informasi Footer Skema Bisnis B2B */}
        <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs text-[#9ca3af] font-medium px-2">
          <ShieldCheck size={14} className="text-[#16a34a]" />
          Laporan terintegrasi otomatis dengan sistem audit Kriteria Penilaian Proper Hijau ESG nasional.
        </div>
      </div>
    </section>
  );
}
