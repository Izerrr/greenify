import React from "react";
import { motion } from "framer-motion";
import { staggerAnimation, fadeUpAnimation, Eyebrow, Display } from "./ui/SharedUi.jsx";

const budget = [
  { label: "Pengembangan Produk", pct: 40, amount: "Rp 92 jt", color: "#4ade80" },
  { label: "Pemasaran & Komunitas", pct: 30, amount: "Rp 69 jt", color: "#86efac" },
  { label: "Operasional & Tim", pct: 20, amount: "Rp 46 jt", color: "#a7f3d0" },
  { label: "Cadangan", pct: 10, amount: "Rp 23 jt", color: "#d1fae5" },
];

export default function FinancialSection() {
  return (
    <section id="financial" className="py-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div {...fadeUpAnimation} className="mb-12 text-center md:text-left">
          <Eyebrow>Transparansi Keuangan</Eyebrow>
          <Display>
            Rp 230 juta.
            <br />
            <span className="text-[#9ca3af]">Setiap rupiah terjelaskan.</span>
          </Display>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <motion.div {...staggerAnimation(1)} className="glass-liquid rounded-[28px] p-8 relative overflow-hidden">
            <div className="flex flex-col gap-[22px]">
              {budget.map(({ label, pct, amount, color }, i) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-semibold text-[#374151]">{label}</span>
                    <span className="text-xs text-[#9ca3af]">
                      {amount} <strong className="text-[#16a34a]">({pct}%)</strong>
                    </span>
                  </div>
                  <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...staggerAnimation(2)} className="glass-liquid-green rounded-[28px] p-8 relative overflow-hidden">
            <div className="text-[11px] text-[#9ca3af] mb-1 font-semibold">Total anggaran awal</div>
            <div className="text-3xl font-black text-[#1c1c1e] tracking-[-0.05em] mb-7">Rp 230.000.000</div>

            {[{ text: "Sumber: Pendiri & Angel Investor" }, { text: "Target BEP: Bulan ke-8" }, { text: "Laporan keuangan bulanan & publik" }, { text: "Audit pihak ketiga per semester" }].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 py-2.5 border-b border-[#bbf7d0]/50 text-[13px] text-[#374151]">
                <span className="text-[15px]">{icon}</span> {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
