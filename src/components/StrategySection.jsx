import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, TrendingUp } from "lucide-react";
import { staggerAnimation, fadeUpAnimation, Eyebrow, Display } from "./ui/SharedUi.jsx";

const strategies = [
  { title: "Digital Presence", period: "Bulan 1–3", icon: Globe, items: ["SEO & content marketing", "Social media (IG, TikTok)", "Influencer niche lingkungan", "Press release nasional"] },
  { title: "Kolaborasi Strategis", period: "Bulan 4–7", icon: Users, items: ["Kemitraan NGO & pemerintah", "Corporate CSR outreach", "Program kampus & sekolah", "Co-branding events"] },
  { title: "Aksi & Skalabilitas", period: "Bulan 8–12", icon: TrendingUp, items: ["Event penanaman nasional", "Ekspansi ke 17 kota", "Launch fitur premium", "Sertifikat karbon resmi"] },
];

export default function StrategySection() {
  return (
    <section id="strategi" className="py-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div {...fadeUpAnimation} className="mb-[52px] text-center md:text-left">
          <Eyebrow>Strategi Pemasaran</Eyebrow>
          <Display>
            Dari layar
            <br />
            ke lapangan.
          </Display>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-[#bbf7d0]/90 to-[#bbf7d0]/20" />
          <div className="flex flex-col gap-5">
            {strategies.map(({ title, period, icon: Icon, items }, i) => (
              <motion.div key={title} {...staggerAnimation(i * 0.1)} className="flex gap-6 items-flex-start">
                <div className="w-[46px] h-[46px] rounded-[14px] shrink-0 z-10 glass-liquid-green flex items-center justify-center">
                  <Icon size={18} className="text-[#16a34a]" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex-1 glass-liquid rounded-[22px] px-6 py-[22px] relative overflow-hidden transition-all duration-250 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.9),0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <span className="text-[15px] font-extrabold text-[#1c1c1e] tracking-[-0.03em]">{title}</span>
                    <span className="text-[10px] text-[#9ca3af] bg-black/5 px-2.2 py-1 rounded-lg font-semibold">{period}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#636366]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#86efac] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
