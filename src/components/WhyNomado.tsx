"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    word: "Curated",
    desc: "Every journey is thoughtfully designed around authentic experiences, never crowded tourist circuits.",
  },
  {
    word: "Local",
    desc: "Our experiences are created and hosted by people born and raised in the valley — who know it intimately.",
  },
  {
    word: "Personal",
    desc: "Flexible, meaningful, and tailored to you. No two Nomado journeys are ever quite the same.",
  },
];

export default function WhyNomado() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F5F8FD] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        {/* Left: image + heading */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#D97706]" />
            <span className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706]">
              03 — Why Nomado
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(1.8rem,3.5vw,2.8rem)] font-500 leading-[1.05] text-[#083A7A] mb-6"
          >
            Travel with{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">intention.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-[5/4] overflow-hidden"
          >
            <Image
              src={asset("/images/dal-lake.jpg")}
              alt="Boats on Dal Lake at dawn"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083A7A]/30 to-transparent" />
          </motion.div>
        </div>

        {/* Right: pillars */}
        <div className="md:col-span-7 flex flex-col justify-center divide-y divide-[#E2E8F0]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="py-5 md:py-6 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="block w-6 h-px bg-[#D97706]" />
                <h3 className="font-clash text-3xl md:text-4xl font-500 text-[#083A7A] transition-colors duration-300 group-hover:text-[#0F4C9C]">
                  {p.word}
                </h3>
              </div>
              <p className="text-[#4B5563] text-base leading-[1.8] max-w-md md:pl-10">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
