import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Building2, ShoppingBag, Star, CheckCircle2 } from "lucide-react";
import { staggerAnimation, fadeUpAnimation, Eyebrow, Display } from "./ui/SharedUi.jsx";

const pillars = [
  {
    icon: Heart,
    title: "Donasi Publik",
    tag: "Community",
    desc: "Donasi mulai Rp 10.000 per pohon. Micro-donation dengan sertifikat digital dan tracking real-time untuk setiap kontributor.",
    points: ["Mulai dari Rp 10.000", "Sertifikat digital otomatis", "Tracking real-time tiap pohon"],
  },
  {
    icon: Building2,
    title: "CSR Corporate",
    tag: "B2B",
    desc: "Paket kemitraan korporat lengkap — branded dashboard, laporan dampak ESG, dan sertifikasi karbon resmi.",
    points: ["Branded impact dashboard", "Laporan ESG siap cetak", "Sertifikasi karbon resmi"],
  },
  {
    icon: ShoppingBag,
    title: "Green Merchandise",
    tag: "D2C",
    desc: "Produk ramah lingkungan bermerek Greenify. 30% margin langsung masuk dana reforestasi.",
    points: ["30% margin untuk reforestasi", "Certified eco-friendly", "Brand storytelling built-in"],
  },
  {
    icon: Star,
    title: "Premium Services",
    tag: "SaaS",
    desc: "API data hutan, white-label dashboard, dan advanced analytics untuk komunitas dan peneliti.",
    points: ["API data hutan", "White-label dashboard", "Advanced analytics & export"],
  },
];

export default function BusinessModel() {
  const [active, setActive] = useState(0);
  const p = pillars[active];
  const Icon = p.icon;

  return (
    <section id="model" className="py-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div {...fadeUpAnimation} className="mb-11 text-center md:text-left">
          <Eyebrow>Model Bisnis</Eyebrow>
          <Display>
            Empat pilar,
            <br />
            satu misi.
          </Display>
        </motion.div>

        <motion.div {...staggerAnimation(1)} className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
          {pillars.map(({ title }, i) => (
            <button
              key={title}
              onClick={() => setActive(i)}
              className={`text-[13px] font-semibold cursor-pointer px-[18px] py-2 rounded-xl transition-all duration-220 ${
                active === i ? "bg-[#166534] text-white border border-[#166534] shadow-[0_2px_8px_rgba(22,101,52,0.25)]" : "glass-liquid text-[#636366]"
              }`}
            >
              {title}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass-liquid rounded-[28px] p-9 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative overflow-hidden"
          >
            <div>
              <span className="inline-block px-2.5 py-[3px] rounded-lg glass-liquid-green text-[10px] font-extrabold text-[#16a34a] tracking-[0.1em] uppercase mb-[18px]">{p.tag}</span>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl glass-liquid-green flex items-center justify-center">
                  <Icon size={22} className="text-[#16a34a]" />
                </div>
                <div className="text-22 font-extrabold text-[#1c1c1e] tracking-[-0.04em]">{p.title}</div>
              </div>
              <p className="text-sm text-[#636366] leading-[1.7] m-0">{p.desc}</p>
            </div>

            <div className="flex flex-col gap-2.5">
              {p.points.map((pt) => (
                <div key={pt} className="flex items-center gap-3 px-4 py-3 rounded-[14px] bg-white/70 border border-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <CheckCircle2 size={15} className="text-[#16a34a] shrink-0" />
                  <span className="text-sm text-[#374151] font-medium">{pt}</span>
                </div>
              ))}
              <div className="px-4 py-3 rounded-[14px] glass-liquid-green text-xs text-[#16a34a] font-semibold">✦ Semua pendapatan dilaporkan publik setiap bulan</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
