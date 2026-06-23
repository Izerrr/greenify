import React from "react";
import { motion } from "framer-motion";
import { TreePine, ArrowRight, Leaf } from "lucide-react";
import { fadeUpAnimation, IconPill } from "./ui/SharedUi.jsx";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="py-20 px-5 text-center">
        <motion.div {...fadeUpAnimation} className="max-w-[540px] mx-auto flex flex-col items-center">
          <IconPill icon={TreePine} label="Bergabung. Tanam. Ubah." />
          <h2 className="text-[clamp(2.2rem,5vw,3.4rem)] font-black tracking-[-0.05em] text-[#1c1c1e] leading-[1.06] mt-6 mb-4">
            Bumi tidak menunggu.
            <br />
            <span className="text-[#16a34a]">Aksimu dimulai hari ini.</span>
          </h2>
          <p className="text-[15px] text-[#636366] leading-[1.7] mb-8 max-w-[380px]">Jadilah bagian dari generasi yang tidak hanya menyaksikan krisis iklim — tapi menjadi solusinya. Bersama, kita bisa.</p>
          <button className="inline-flex items-center gap-2 px-[30px] py-[15px] rounded-[16px] bg-[#166534] text-white text-base font-bold border-none cursor-pointer shadow-[inset_0_2px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(22,101,52,0.3)] hover:bg-[#14532d] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            Mulai Aksi — Gratis <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>

      <div className="glass-liquid rounded-t-[16px] max-w-[1100px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 relative">
        <div className="flex items-center gap-2">
          <div className="w-[26px] h-[26px] rounded-lg glass-liquid-green flex items-center justify-center">
            <Leaf size={12} className="text-[#16a34a]" />
          </div>
          <span className="text-sm font-extrabold text-[#1c1c1e] tracking-[-0.03em]">Greenify Indonesia</span>
        </div>
        <span className="text-xs text-[#9ca3af] text-center w-full sm:w-auto">"Membawa Hijau Kembali ke Tanah Air"</span>
        <span className="text-xs text-[#c8c8c8]">© 2026</span>
      </div>
    </footer>
  );
}
