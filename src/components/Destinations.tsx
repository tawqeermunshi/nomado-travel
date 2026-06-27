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
    image: "/images/kashmir-tile.jpg",
    destinations: [
      { name: "Gulmarg", desc: "Ski slopes & alpine meadows", image: "/images/gulmarg.jpg" },
      { name: "Pahalgam", desc: "The shepherd's meadow", image: "/images/pahalgam.jpg" },
      { name: "Sonmarg", desc: "Gateway to the glaciers", image: "/images/sonmarg.jpg" },
      { name: "Srinagar", desc: "Houseboats & walled city", image: "/images/houses-lake.jpg" },
      { name: "Doodhpathri", desc: "Untouched rolling meadows", image: "/images/doodhpathri.jpg" },
      { name: "Yousmarg", desc: "Pine forests & wildflowers", image: "/images/yousmarg.jpg" },
    ],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    tagline: "The Land of High Passes",
    desc: "Moonscapes, monasteries, turquoise lakes, and a silence that recalibrates something deep inside you.",
    image: "/images/ladakh.jpg",
    destinations: [
      { name: "Leh", desc: "Ancient monasteries under cobalt skies", image: "/images/leh.jpg" },
      { name: "Kargil", desc: "Where cultures converge", image: "/images/kargil.jpg" },
      { name: "Nubra Valley", desc: "Sand dunes & Bactrian camels", image: "/images/nubra.jpg" },
      { name: "Turtuk", desc: "A Balti village at the edge of the world", image: "/images/turtuk.jpg" },
      { name: "Pangong", desc: "The highest saltwater lake", image: "/images/pangong.jpg" },
      { name: "Hanle", desc: "Dark skies & ancient monastery", image: "/images/hanle.jpg" },
    ],
  },
];

type Region = typeof regions[0];

function RegionTile({ region, onClick, inView, delay }: { region: Region; onClick: () => void; inView: boolean; delay: number }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="relative w-full text-left group overflow-hidden rounded-3xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.65)] focus:outline-none"
    >
      <div className="relative h-[44vh] md:h-[52vh] overflow-hidden rounded-3xl">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={asset(region.image)} alt={region.name} fill className="object-cover" sizes="50vw" />
        </motion.div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/30 to-[#06172E]/10 group-hover:from-[#06172E]/[0.98] transition-all duration-700" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
          <div className="flex items-center gap-4">
            <h3 className="font-clash text-[clamp(2.4rem,4.5vw,4rem)] font-600 text-[#F5F9FD] leading-none">
              {region.name}
            </h3>
            <svg viewBox="0 0 32 24" className="w-9 h-7 shrink-0 text-[#F59E0B] transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h24M19 5l8 7-8 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ExpandedRegion({ region, onClose }: { region: Region; onClose: () => void }) {
  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative z-10 pt-1 pb-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-clash text-[clamp(2.4rem,5vw,4.5rem)] font-600 text-[#083A7A] leading-none">
              {region.name}
            </h3>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="flex items-center gap-2 font-clash text-[11px] tracking-[0.25em] uppercase text-[#6B7280] hover:text-[#083A7A] transition-colors duration-300 mt-2"
          >
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" d="M15 5L5 15M5 5l10 10" />
            </svg>
            Close
          </motion.button>
        </div>

        {/* Destination filmstrip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {region.destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group/card relative overflow-hidden rounded-2xl shadow-[0_12px_30px_-14px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={asset(dest.image)}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/25 to-transparent group-hover/card:from-[#06172E]/[0.98] transition-all duration-500" />

                {/* Saffron top accent line on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-[#D97706] origin-left"
                />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-clash text-sm md:text-base font-600 text-[#F5F9FD] leading-tight mb-1">
                    {dest.name}
                  </h4>
                  <p className="text-[#E5EDF5]/85 text-xs md:text-sm leading-snug">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<string | null>(null);

  const activeRegion = regions.find(r => r.id === open) ?? null;

  return (
    <section id="destinations" ref={ref} className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-8 md:mb-10">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(1.8rem,4vw,3.2rem)] font-500 leading-[1.05] text-[#083A7A] mb-2"
          >
            Where we{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">take you.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#4B5563] text-sm md:text-base leading-[1.7] max-w-xl"
          >
            Two of the most extraordinary regions on earth.
          </motion.p>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="tiles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-5 md:gap-6"
            >
              {regions.map((region, ri) => (
                <RegionTile
                  key={region.id}
                  region={region}
                  onClick={() => setOpen(region.id)}
                  inView={inView}
                  delay={ri * 0.15}
                />
              ))}
            </motion.div>
          ) : (
            activeRegion && (
              <ExpandedRegion
                key="expanded"
                region={activeRegion}
                onClose={() => setOpen(null)}
              />
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
