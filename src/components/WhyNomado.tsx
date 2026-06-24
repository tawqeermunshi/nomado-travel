"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    no: "I",
    word: "Curated",
    desc: "Every journey is thoughtfully designed around authentic experiences, never crowded tourist circuits.",
  },
  {
    no: "II",
    word: "Local",
    desc: "Our experiences are created and hosted by people born and raised in the valley — who know it intimately.",
  },
  {
    no: "III",
    word: "Personal",
    desc: "Flexible, meaningful, and tailored to you. No two Nomado journeys are ever quite the same.",
  },
];

export default function WhyNomado() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F4F8FC] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-14 md:gap-24">
        {/* Left: image + heading */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-8 h-px bg-[#F2D24E]" />
            <span className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#1E4060]">
              03 — Why Nomado
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2rem,4.5vw,3.6rem)] font-500 leading-[1.05] text-[#102A43] mb-12"
          >
            Travel with{" "}
            <span className="font-cormorant italic font-400 text-[#C99A1E]">intention.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-[5/4] overflow-hidden"
          >
            <Image
              src="/images/dal-lake.jpg"
              alt="Boats on Dal Lake at dawn"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/30 to-transparent" />
          </motion.div>
        </div>

        {/* Right: pillars */}
        <div className="md:col-span-7 flex flex-col justify-center divide-y divide-[#D5E0EC]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 md:py-10 group flex gap-8 items-start"
            >
              <span className="font-cormorant italic text-3xl text-[#F2D24E] w-12 shrink-0 pt-1 [text-shadow:0_1px_0_rgba(30,64,96,0.15)]">
                {p.no}
              </span>
              <div>
                <h3 className="font-clash text-3xl md:text-4xl font-500 text-[#102A43] mb-3 transition-colors duration-300 group-hover:text-[#1E4060]">
                  {p.word}
                </h3>
                <p className="text-[#516B85] text-base leading-[1.8] max-w-md">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
