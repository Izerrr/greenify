import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Map, BarChart3, Users, Share2 } from "lucide-react";
import { staggerAnimation, fadeUpAnimation, Eyebrow, Display } from "./ui/SharedUi.jsx";

const features = [
  { icon: BookOpen, title: "Edukasi Interaktif", desc: "Modul belajar ekosistem hutan dan krisis iklim. Gamified, berbasis sains, untuk semua usia.", size: "small" },
  { icon: Map, title: "Peta Reforestasi", desc: "Visualisasi real-time titik penanaman di seluruh Indonesia. Klik lokasi untuk detail pohon, spesies, dan koordinator.", size: "wide" },
  { icon: BarChart3, title: "Pelacakan Dampak", desc: "Setiap donasi terlacak dari wallet ke lokasi tanam. Laporan karbon dan sertifikat digital otomatis untuk tiap kontributor.", size: "wide" },
  { icon: Users, title: "Komunitas", desc: "Bergabung dengan gerakan lokal, ikut kegiatan penanaman, bangun jaringan pejuang lingkungan.", size: "small" },
  { icon: Share2, title: "Social Integration", desc: "Bagikan bukti aksimu, tantang teman, dan viralkan dampak penghijauan ke semua platform.", size: "small" },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div {...fadeUpAnimation} className="mb-11 text-center md:text-left">
          <Eyebrow>Fitur Platform</Eyebrow>
          <Display>
            Satu ekosistem,
            <br />
            lima kekuatan.
          </Display>
          <p className="text-[15px] text-[#636366] mt-3 max-w-[380px] mx-auto md:mx-0">Setiap fitur dirancang untuk menurunkan hambatan dan meningkatkan dampak kolektif.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map(({ icon: Icon, title, desc, size }, i) => (
            <motion.div
              key={title}
              {...staggerAnimation(i * 0.07)}
              whileHover={{ y: -3, scale: 1.005 }}
              className={`glass-liquid rounded-[24px] px-[26px] pt-7 pb-6 relative overflow-hidden cursor-default transition-all duration-250 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] ${
                size === "wide" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="w-10 h-10 rounded-xl glass-liquid-green flex items-center justify-center mb-[18px]">
                <Icon size={17} className="text-[#16a34a]" />
              </div>
              <div className="text-[15px] font-bold text-[#1c1c1e] tracking-[-0.03em] mb-2">{title}</div>
              <div className="text-13 text-[#636366] leading-[1.65]">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
