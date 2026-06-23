import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, Leaf } from "lucide-react"; // ◄ SUDAH DITAMBAHKAN DI SINI
import { staggerAnimation } from "./ui/SharedUi.jsx";
import TreeIllustration from "./ui/TreeIllustration.jsx";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[100px] pb-[60px] relative z-10 px-5">
      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* KONTEN TEKS KIRI */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div {...staggerAnimation(0)} className="mb-6">
            <div className="glass-liquid-green inline-flex items-center gap-[7px] px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-[#16a34a] tracking-wider uppercase">
              <Sprout size={11} />
              Platform Reforestasi Digital
            </div>
          </motion.div>

          <motion.h1 {...staggerAnimation(1)} className="font-sans text-[clamp(2.8rem,6vw,4.2rem)] font-black tracking-[-0.055em] text-[#1c1c1e] leading-[1.04] mb-5">
            Tanam pohon.
            <br />
            Ukur dampak.
            <br />
            <span className="text-[#16a34a]">Ubah Indonesia.</span>
          </motion.h1>

          <motion.p {...staggerAnimation(2)} className="font-sans text-base text-[#636366] leading-[1.7] max-w-[420px] mb-8">
            Greenify menghubungkan individu, komunitas, dan korporasi dalam satu platform reforestasi yang transparan — setiap pohon terlacak, setiap rupiah terjelaskan.
          </motion.p>

          <motion.div {...staggerAnimation(3)} className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#166534] text-white font-sans text-sm font-bold border-none cursor-pointer hover:bg-[#14532d] hover:-translate-y-px active:translate-y-0 transition-all duration-200 shadow-[0_4px_14px_rgba(22,101,52,0.2)]">
              Mulai Aksi <ArrowRight size={14} />
            </button>
            <button className="px-6 py-3.5 rounded-xl text-sm font-semibold cursor-pointer text-[#374151] glass-liquid hover:bg-white/80 transition-all duration-200">Lihat Demo</button>
          </motion.div>

          {/* Grup Angka Statistik */}
          <motion.div {...staggerAnimation(4)} className="flex flex-wrap justify-center lg:justify-start gap-y-4 mt-10 pt-8 border-t border-black/5 w-full">
            {[
              { v: "17 Kota", l: "Target jangkauan" },
              { v: "2.400+", l: "Pohon ditargetkan" },
              { v: "100%", l: "Transparan publik" },
            ].map(({ v, l }, i) => (
              <div key={l} className={`flex-1 min-w-[120px] px-4 first:pl-0 border-black/5 ${i > 0 ? "border-l" : "border-none"}`}>
                <div className="font-sans text-2xl font-black text-[#1c1c1e] tracking-[-0.05em]">{v}</div>
                <div className="font-sans text-[11px] text-[#9ca3af] mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* STRUKTUR VISUAL KANAN */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col items-center min-h-[440px] w-full max-w-[420px] justify-self-center relative overflow-hidden glass-liquid rounded-[32px] px-4 pt-7 pb-5"
        >
          <TreeIllustration />
          <div className="mt-4 rounded-xl glass-liquid-green px-4 py-2 font-sans text-xs font-semibold text-[#16a34a] flex items-center gap-1.5">
            <Leaf size={12} /> Platform Reforestasi #1 Indonesia
          </div>
        </motion.div>
      </div>
    </section>
  );
}
