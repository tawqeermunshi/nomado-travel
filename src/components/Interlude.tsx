"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[85vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax image */}
      <motion.div style={{ y }} className="absolute inset-0 h-[130%] -top-[15%]">
        <Image
          src={asset("/images/autumn.jpg")}
          alt="Golden chinar trees in autumn, Kashmir"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Scrim */}
      <div className="absolute inset-0 bg-[#072350]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#072350]/60 via-transparent to-[#072350]/80" />

      {/* Quote */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#F59E0B] block mb-10"
        >
          The Chinar in Autumn
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant italic text-[clamp(1.8rem,4.5vw,3.6rem)] leading-[1.3] text-[#F5F9FD]"
        >
          &ldquo;If there is a paradise on earth,
          <br className="hidden md:block" /> it is here, it is here, it is here.&rdquo;
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-clash text-[11px] tracking-[0.25em] uppercase text-[#C9D9E8]/60 block mt-10"
        >
          — Amir Khusrau, of Kashmir
        </motion.span>
      </div>
    </section>
  );
}
