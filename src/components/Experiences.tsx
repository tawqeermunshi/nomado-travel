"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

const ways = [
  {
    tag: "Heritage",
    title: "Heritage",
    image: "/images/oldcity.jpg",
    items: ["Downtown Safari", "Mughal Gardens", "Temple & Shrine Tours"],
    desc: "Walk lanes that have witnessed centuries — mosques, shrines, Mughal terraces, and the wooden bridges of the Jhelum.",
  },
  {
    tag: "Craft",
    title: "Craft",
    image: "/images/textiles.jpg",
    items: ["Carpets", "Pashminas", "Papier Maché", "Wood Carving"],
    desc: "Sit with master craftsmen, watch patterns emerge thread by thread, and take home something that carries a living tradition.",
  },
  {
    tag: "Culinary",
    title: "Culinary",
    image: "/images/wazwan-new.jpg",
    items: ["Wazwan", "Cafes", "Home Food"],
    desc: "Eat as Kashmiris eat — in family kitchens, at bakeries before sunrise, and at the grand ceremonial feast of Wazwan.",
  },
];

function WayCard({ way, index, inView }: { way: typeof ways[0]; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={asset(way.image)}
            alt={way.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </motion.div>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/95 via-[#072350]/30 to-transparent" />
        {/* Tag */}
        <span className="absolute top-5 left-5 font-clash text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 bg-[#D97706] text-white">
          {way.tag}
        </span>
        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <h3 className="font-clash text-[clamp(1.6rem,3vw,2.4rem)] font-500 text-[#F5F9FD] leading-tight mb-3">
            {way.title}
          </h3>
          <p className="font-cormorant italic text-[#C9D9E8]/80 text-base leading-relaxed mb-5">
            {way.desc}
          </p>
          <ul className="flex flex-wrap gap-2">
            {way.items.map(item => (
              <li
                key={item}
                className="font-clash text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 border border-[#F59E0B]/40 text-[#F59E0B]/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experiences" className="bg-[#FAFAF8] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-8"
          >
            01 — Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2.4rem,6vw,5rem)] font-500 leading-[1.02] text-[#083A7A] mb-8"
          >
            Three ways to{" "}
            <span className="font-cormorant italic font-400 text-[#F59E0B]">know</span> Kashmir.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#4B5563] text-base md:text-lg leading-[1.8] max-w-xl"
          >
            Every experience is designed to bring you closer to the heart of the
            valley — its people, its craft, its silence, and its joy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ways.map((way, i) => (
            <WayCard key={way.tag} way={way} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
