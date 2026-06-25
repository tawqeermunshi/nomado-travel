"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

const regions = [
  {
    name: "Kashmir",
    tagline: "The Valley of Valleys",
    destinations: [
      { name: "Gulmarg", desc: "Ski slopes and alpine meadows at 2,650 m", image: "/images/snow-village.jpg" },
      { name: "Pahalgam", desc: "The shepherd's meadow, along the Lidder River", image: "/images/forest.jpg" },
      { name: "Sonmarg", desc: "The meadow of gold, gateway to the glaciers", image: "/images/mountain-lake.jpg" },
      { name: "Srinagar", desc: "Houseboats, gardens, and the old walled city", image: "/images/houses-lake.jpg" },
      { name: "Doodhpathri", desc: "Rolling meadows untouched by mass tourism", image: "/images/leaves.jpg" },
      { name: "Yousmarg", desc: "Pine forests and wildflower plains in solitude", image: "/images/village.jpg" },
    ],
  },
  {
    name: "Ladakh",
    tagline: "The Land of High Passes",
    destinations: [
      { name: "Leh", desc: "Ancient monasteries under cobalt skies", image: "/images/houses-mountain.jpg" },
      { name: "Kargil", desc: "Where cultures converge at the crossroads", image: "/images/oldcity.jpg" },
      { name: "Nubra Valley", desc: "Sand dunes and double-humped camels", image: "/images/snow.jpg" },
      { name: "Turtuk", desc: "A Balti village at the edge of the world", image: "/images/weaving.jpg" },
      { name: "Pangong", desc: "The shifting blue of the highest saltwater lake", image: "/images/dal-lake.jpg" },
      { name: "Hanle", desc: "Dark skies and an ancient monastery", image: "/images/mountain-lake.jpg" },
    ],
  },
];

function DestCard({ dest, delay, inView }: { dest: { name: string; desc: string; image: string }; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={asset(dest.image)} alt={dest.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 20vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/90 via-[#072350]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h4 className="font-clash text-base md:text-lg font-600 text-[#F5F9FD] leading-tight mb-1">{dest.name}</h4>
          <p className="font-cormorant italic text-[#C9D9E8]/75 text-sm leading-snug">{dest.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
        </div>

        {/* Regions */}
        <div className="flex flex-col gap-24 md:gap-32">
          {regions.map((region, ri) => (
            <div key={region.name}>
              {/* Region header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: ri * 0.1 }}
                className="flex items-center gap-6 mb-10 md:mb-14"
              >
                <div>
                  <h3 className="font-clash text-[clamp(1.6rem,3.5vw,2.8rem)] font-600 text-[#083A7A] leading-none">
                    {region.name}
                  </h3>
                  <p className="font-cormorant italic text-[#D97706] text-base mt-1">{region.tagline}</p>
                </div>
                <span className="flex-1 h-px bg-[#E2E8F0]" />
              </motion.div>

              {/* Destination grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {region.destinations.map((dest, di) => (
                  <DestCard
                    key={dest.name}
                    dest={dest}
                    delay={0.1 + ri * 0.05 + di * 0.06}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
