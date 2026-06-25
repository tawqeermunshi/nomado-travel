"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    tag: "Heritage",
    title: "Downtown Safari",
    image: "/images/oldcity.jpg",
    desc: "Walk the old city's lanes — mosques, Mughal terraces, the wooden bridges of the Jhelum.",
  },
  {
    tag: "Heritage",
    title: "Mughal Gardens",
    image: "/images/forest.jpg",
    desc: "Terraced gardens, fountains, and chinar groves built for emperors who loved beauty.",
  },
  {
    tag: "Heritage",
    title: "Temple & Shrine Tours",
    image: "/images/mountain-lake.jpg",
    desc: "Ancient shrines, Sufi dargahs, and hilltop temples steeped in living devotion.",
  },
  {
    tag: "Craft",
    title: "Craft Safari",
    image: "/images/textiles.jpg",
    desc: "Visit carpet weavers, Pashmina spinners, and Papier Maché artists at work in their studios.",
  },
  {
    tag: "Craft",
    title: "Wood Carving Ateliers",
    image: "/images/weaving.jpg",
    desc: "Watch master carvers transform walnut wood into heirlooms, then take a piece home.",
  },
  {
    tag: "Culinary",
    title: "Wazwan Feast",
    image: "/images/wazwan-new.jpg",
    desc: "The ceremonial multi-course banquet of Kashmir, eaten together from a shared platter.",
  },
  {
    tag: "Culinary",
    title: "Bakeries & Cafés",
    image: "/images/village.jpg",
    desc: "Girda bread at sunrise, kahwa at a lakeside café — the everyday flavours of Srinagar.",
  },
  {
    tag: "Culinary",
    title: "Home Kitchen Visits",
    image: "/images/houses-lake.jpg",
    desc: "Cook alongside Kashmiri families and eat as they eat — unhurried, generous, real.",
  },
];

const tagColors: Record<string, string> = {
  Heritage: "bg-[#083A7A]",
  Craft:    "bg-[#065F46]",
  Culinary: "bg-[#D97706]",
};

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experiences" className="bg-[#FAFAF8] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="max-w-3xl mb-8 md:mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-4"
          >
            Experiences
          </motion.span>
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
            className="text-[#4B5563] text-sm md:text-base leading-[1.7] max-w-xl"
          >
            Every experience is designed to bring you closer to the heart of the valley — its people, its craft, its silence, and its joy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[38vh] sm:h-[42vh] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={asset(exp.image)}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/95 via-[#072350]/20 to-transparent" />
                <span className={`absolute top-4 left-4 font-clash text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 ${tagColors[exp.tag]} text-white`}>
                  {exp.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3 className="font-clash text-base md:text-lg font-600 text-[#F5F9FD] leading-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-cormorant italic text-[#C9D9E8]/75 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
