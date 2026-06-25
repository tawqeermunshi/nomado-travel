"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, AnimatePresence, useInView } from "framer-motion";

const regions = [
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "The Valley of Valleys",
    desc: "Houseboats on Dal Lake, saffron fields, Mughal gardens, and mountains that touch the clouds.",
    image: "/images/hero.jpg",
    destinations: [
      { name: "Gulmarg", desc: "Ski slopes & alpine meadows" },
      { name: "Pahalgam", desc: "The shepherd's meadow" },
      { name: "Sonmarg", desc: "Gateway to the glaciers" },
      { name: "Srinagar", desc: "Houseboats & walled city" },
      { name: "Doodhpathri", desc: "Untouched rolling meadows" },
      { name: "Yousmarg", desc: "Pine forests & wildflowers" },
    ],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tagline: "The Land of High Passes",
    desc: "Moonscapes, monasteries, turquoise lakes, and a silence that recalibrates something deep inside you.",
    image: "/images/mountain-lake.jpg",
    destinations: [
      { name: "Leh", desc: "Ancient monasteries under cobalt skies" },
      { name: "Kargil", desc: "Where cultures converge" },
      { name: "Nubra Valley", desc: "Sand dunes & Bactrian camels" },
      { name: "Turtuk", desc: "A Balti village at the edge of the world" },
      { name: "Pangong", desc: "The highest saltwater lake" },
      { name: "Hanle", desc: "Dark skies & ancient monastery" },
    ],
  },
];

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(prev => (prev === id ? null : id));

  return (
    <section id="destinations" ref={ref} className="bg-white py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-8"
          >
            02 — Destinations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2.4rem,6vw,5rem)] font-500 leading-[1.02] text-[#083A7A]"
          >
            Where we{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">take you.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#4B5563] text-base md:text-lg leading-[1.8] max-w-xl mt-8"
          >
            Two of the most extraordinary regions on earth. Click to explore.
          </motion.p>
        </div>

        {/* Region tiles */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {regions.map((region, ri) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: ri * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main tile */}
              <button
                onClick={() => toggle(region.id)}
                className="relative w-full text-left overflow-hidden group focus:outline-none"
                aria-expanded={open === region.id}
              >
                <div className="relative h-[52vh] md:h-[62vh] overflow-hidden">
                  <motion.div
                    animate={{ scale: open === region.id ? 1.04 : 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={asset(region.image)}
                      alt={region.name}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </motion.div>

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/90 via-[#072350]/30 to-[#072350]/10 transition-all duration-500 group-hover:from-[#072350]/95" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <p className="font-cormorant italic text-[#F59E0B] text-base mb-2">{region.tagline}</p>
                    <h3 className="font-clash text-[clamp(2rem,4vw,3.2rem)] font-600 text-[#F5F9FD] leading-tight mb-3">
                      {region.name}
                    </h3>
                    <p className="font-cormorant italic text-[#C9D9E8]/80 text-base leading-relaxed max-w-sm mb-6">
                      {region.desc}
                    </p>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-3">
                      <span className="font-clash text-[11px] tracking-[0.2em] uppercase text-[#F59E0B]">
                        {open === region.id ? "Close" : "Explore destinations"}
                      </span>
                      <motion.span
                        animate={{ rotate: open === region.id ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#F59E0B] text-lg leading-none"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded destinations panel */}
              <AnimatePresence>
                {open === region.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden bg-[#F5F8FD] border border-t-0 border-[#E2E8F0]"
                  >
                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {region.destinations.map((dest, di) => (
                          <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: di * 0.06, duration: 0.4 }}
                            className="group/dest border border-[#E2E8F0] bg-white p-4 hover:border-[#D97706]/50 hover:bg-[#D97706]/[0.03] transition-all duration-300"
                          >
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="font-clash text-sm font-600 text-[#083A7A] group-hover/dest:text-[#D97706] transition-colors duration-300">
                                {dest.name}
                              </h4>
                              <span className="text-[#D97706]/50 text-xs group-hover/dest:text-[#D97706] transition-colors">→</span>
                            </div>
                            <p className="font-cormorant italic text-[#6B7280] text-sm leading-snug">{dest.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
