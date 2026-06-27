"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView, AnimatePresence } from "framer-motion";

const experiences = [
  { title: "Downtown Safari",      image: "/images/downtown.jpg",    desc: "Walk the old city's lanes — mosques, Mughal terraces, the wooden bridges of the Jhelum." },
  { title: "Mughal Gardens",       image: "/images/mughal-garden.jpg",desc: "Terraced gardens, fountains, and chinar groves built for emperors who loved beauty." },
  { title: "Temple & Shrine Tours",image: "/images/shrine.jpg",      desc: "Ancient shrines, Sufi dargahs, and hilltop temples steeped in living devotion." },
  { title: "Craft Safari",         image: "/images/craft.jpg",       desc: "Visit carpet weavers, Pashmina spinners, and Papier Maché artists at work in their studios." },
  { title: "Wood Carving Ateliers",image: "/images/wood-carving.jpg",desc: "Watch master carvers transform walnut wood into heirlooms, then take a piece home." },
  { title: "Wazwan Feast",         image: "/images/wazwan-new.jpg",  desc: "The ceremonial multi-course banquet of Kashmir, eaten together from a shared platter." },
  { title: "Bakeries & Cafés",     image: "/images/cafe.jpg",        desc: "Girda bread at sunrise, kahwa at a lakeside café — the everyday flavours of Srinagar." },
  { title: "Home Kitchen Visits",  image: "/images/houses-lake.jpg", desc: "Cook alongside Kashmiri families and eat as they eat — unhurried, generous, real." },
];

function usePerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

function NavBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir} className="w-11 h-11 rounded-full bg-white border border-[#E8EDF3] shadow-md hover:shadow-lg hover:bg-[#D97706] hover:border-[#D97706] text-[#475569] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center">
      {dir === "prev"
        ? <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
        : <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>}
    </button>
  );
}

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [idx, setIdx] = useState(0);
  const perPage = usePerPage();
  const total = experiences.length;
  const shown = Array.from({ length: perPage }, (_, k) => experiences[(idx + k) % total]);

  return (
    <section id="experiences" ref={ref} className="bg-[#FAFAF8] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-10 max-w-2xl">
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

        <div className="flex items-center gap-3 md:gap-4">
          <div className="shrink-0">
            <NavBtn dir="prev" onClick={() => setIdx(i => (i - 1 + total) % total)} />
          </div>
          <div className={`flex-1 grid gap-5 md:gap-6 ${perPage === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            {shown.map((exp, i) => (
              <motion.article
                key={`${idx}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative flex flex-col h-[58vh] overflow-hidden rounded-3xl bg-[#072350] shadow-[0_10px_30px_-12px_rgba(8,58,122,0.35)] hover:shadow-[0_20px_45px_-12px_rgba(8,58,122,0.45)] transition-shadow duration-500"
              >
                <div className="relative flex-1 overflow-hidden">
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
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#072350] to-transparent" />
                </div>
                <div className="bg-[#072350] px-5 md:px-6 pb-5 md:pb-6 pt-1">
                  <h3 className="font-clash text-lg md:text-xl font-700 text-[#F5F9FD] leading-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#C9D9E8] text-sm md:text-base leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
          </div>
          <div className="shrink-0">
            <NavBtn dir="next" onClick={() => setIdx(i => (i + 1) % total)} />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
