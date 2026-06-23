import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Fitur", id: "fitur" },
  { label: "Model", id: "model" },
  { label: "Strategi", id: "strategi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollBg = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScrollBg, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollBg);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const navbarOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      /* 🌟 PERBAIKAN DI SINI: Mengunci lebar kapsul kaca agar proporsional di tengah layar */
      className={`fixed top-3 left-0 right-0 z-[100] mx-auto w-[calc(100%-24px)] max-w-[1100px] px-5 transition-all duration-[350ms] rounded-[20px] ${scrolled ? "glass-liquid" : "bg-transparent border-none shadow-none"}`}
    >
      <div className="w-full h-13 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 no-underline"
        >
          <div className="w-7 h-7 rounded-lg glass-liquid-green flex items-center justify-center">
            <Leaf size={13} className="text-[#16a34a]" />
          </div>
          <span className="font-sans font-extrabold text-[15px] text-[#1c1c1e] tracking-[-0.04em]">Greenify</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`font-sans text-sm px-3.5 py-1.5 rounded-xl no-underline transition-all duration-300 font-medium ${
                  isActive ? "text-[#16a34a] bg-[#dcfce7]/60 border border-[#bbf7d0]/40 shadow-xs font-semibold" : "text-[#636366] border border-transparent hover:text-[#1c1c1e] hover:bg-black/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="w-px h-4 bg-black/10 mx-2" />
          <button className="text-[13px] font-bold text-white bg-[#166534] border-none rounded-xl px-[18px] py-2 cursor-pointer tracking-[-0.02em] hover:bg-[#14532d] hover:-translate-y-px active:translate-y-0 transition-all duration-200">
            Mulai Aksi
          </button>
        </div>

        <button className="md:hidden text-[#636366] bg-none border-none cursor-pointer p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pb-4 px-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block py-3 px-3 rounded-xl font-sans text-sm no-underline mb-1 transition-all ${isActive ? "text-[#16a34a] bg-[#dcfce7]/60 font-bold" : "text-[#1c1c1e] hover:bg-black/5"}`}
                >
                  {item.label}
                </a>
              );
            })}
            <button className="mt-2 w-full py-2.5 rounded-xl bg-[#166534] text-white border-none text-sm font-bold cursor-pointer shadow-xs">Mulai Aksi</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
