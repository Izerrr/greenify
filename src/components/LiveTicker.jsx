import React from "react";
import { motion } from "framer-motion";
import { Zap, Flame, Target } from "lucide-react";

const tickerData = [
  "PT Bank Mandiri Hijau baru saja mengadopsi 500 pohon Mahoni di Kalimantan Barat (ESG Tier-1)",
  "Rezi (Komunitas Lari Jakarta) mendonasikan 10 bibit Mangrove di Pesisir Jakarta",
  "PT Telkom Eco baru saja memperbarui laporan emisi karbon bulanan — 12.4 Ton CO2 dinetralkan",
  "Komunitas Hijau Lestari menanam 50 bibit Trembesi di area Urban Forest Bogor",
  "Yayasan Alam Nusantara bergabung sebagai Verifikator Lapangan Wilayah Sumatera",
];

export default function LiveTicker() {
  const duplicatedData = [...tickerData, ...tickerData];

  return (
    <div className="w-full bg-[#dcfce7]/40 border-y border-[#bbf7d0]/60 backdrop-blur-md overflow-hidden py-3 relative z-10 select-none">
      <motion.div
        className="flex whitespace-nowrap gap-16 items-center w-max"
        animate={{ x: [0, -1200] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedData.map((text, index) => (
          <div key={index} className="flex items-center gap-3 font-sans text-xs text-[#166534] font-semibold">
            {index % 3 === 0 ? <Zap size={13} className="text-[#16a34a] animate-bounce" /> : index % 3 === 1 ? <Flame size={13} className="text-[#16a34a]" /> : <Target size={13} className="text-[#16a34a]" />}
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
