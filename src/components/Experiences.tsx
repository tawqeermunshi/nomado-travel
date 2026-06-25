"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView, AnimatePresence } from "framer-motion";

const experiences = [
  { title: "Downtown Safari",      image: "/images/oldcity.jpg",     desc: "Walk the old city's lanes — mosques, Mughal terraces, the wooden bridges of the Jhelum." },
  { title: "Mughal Gardens",       image: "/images/forest.jpg",      desc: "Terraced gardens, fountains, and chinar groves built for emperors who loved beauty." },
  { title: "Temple & Shrine Tours",image: "/images/mountain-lake.jpg",desc: "Ancient shrines, Sufi dargahs, and hilltop temples steeped in living devotion." },
  { title: "Craft Safari",         image: "/images/textiles.jpg",    desc: "Visit carpet weavers, Pashmina spinners, and Papier Maché artists at work in their studios." },
  { title: "Wood Carving Ateliers",image: "/images/weaving.jpg",     desc: "Watch master carvers transform walnut wood into heirlooms, then take a piece home." },
  { title: "Wazwan Feast",         image: "/images/wazwan-new.jpg",  desc: "The ceremonial multi-course banquet of Kashmir, eaten together from a shared platter." },
  { title: "Bakeries & Cafés",     image: "/images/village.jpg",     desc: "Girda bread at sunrise, kahwa at a lakeside café — the everyday flavours of Srinagar." },
  { title: "Home Kitchen Visits",  image: "/images/houses-lake.jpg", desc: "Cook alongside Kashmiri families and eat as they eat — unhurried, generous, real." },
];

const PER_PAGE = 3;

function NavBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir} className="w-10 h-10 border border-[#CBD5E1] hover:border-[#D97706] hover:bg-[#D97706] text-[#475569] hover:text-white transition-all duration-300 flex items-center justify-center">
      {dir === "prev"
        ? <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-6-6 6-6" /></svg>
        : <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" /></svg>}
    </button>
  );
}

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [idx, setIdx] = useState(0);
  const total = experiences.length;
  const shown = Array.from({ length: PER_PAGE }, (_, k) => experiences[(idx + k) % total]);

  return (
    <section id="experiences" ref={ref} className="bg-[#FAFAF8] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-[clamp(1.8rem,4vw,3.2rem)] font-500 leading-[1.05] text-[#083A7A] mb-3"
            >
              The{" "}
              <span className="font-cormorant italic font-400 text-[#F59E0B]">Nomado</span> Experience.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[#4B5563] text-sm md:text-base leading-[1.7]"
            >
              Every experience is designed to bring you closer to the heart of the valley — its people, its craft, its silence, and its joy.
            </motion.p>
          </div>
          <div className="flex gap-2 shrink-0">
            <NavBtn dir="prev" onClick={() => setIdx(i => (i - 1 + total) % total)} />
            <NavBtn dir="next" onClick={() => setIdx(i => (i + 1) % total)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="wait">
            {shown.map((exp, i) => (
              <motion.article
                key={`${idx}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative overflow-hidden"
              >
                <div className="relative h-[48vh] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={asset(exp.image)}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/95 via-[#072350]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="font-clash text-lg md:text-xl font-600 text-[#F5F9FD] leading-tight mb-2">
                      {exp.title}
                    </h3>
                    <p className="font-cormorant italic text-[#C9D9E8]/80 text-sm md:text-base leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-6">
          {experiences.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
