"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Ken Burns image */}
      <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero.jpg"
            alt="Houseboats on Dal Lake against snow-capped mountains, Srinagar"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Scrims */}
      <motion.div
        style={{ opacity: scrimOpacity }}
        className="absolute inset-0"
        // top + bottom darkening for legibility
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#102A43]/70 via-transparent to-[#102A43]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content — bottom-left editorial */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-28 px-6 md:px-16"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block w-12 h-px bg-[#F2D24E]" />
            <span className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#C9D9E8]">
              Kashmir · Curated Journeys
            </span>
          </motion.div>

          <h1 className="font-clash font-600 text-[#F5F9FD] leading-[0.95] tracking-tight mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(2.8rem,9vw,7.5rem)]"
              >
                Discover Kashmir
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(2.8rem,9vw,7.5rem)] italic font-cormorant font-400 text-[#F7E07A]"
              >
                beyond the postcards.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="text-[#C9D9E8]/80 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            Travel slowly, travel meaningfully — and discover the valley
            through the people who call it home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experiences"
              className="font-clash text-[12px] tracking-[0.15em] uppercase px-8 py-4 bg-[#F2D24E] text-[#102A43] hover:bg-[#F7E07A] transition-all duration-300"
            >
              Explore Experiences
            </a>
            <a
              href="#about"
              className="font-clash text-[12px] tracking-[0.15em] uppercase px-8 py-4 border border-[#F5F9FD]/40 text-[#F5F9FD] hover:bg-[#F5F9FD]/10 transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-clash text-[10px] tracking-[0.3em] uppercase text-[#C9D9E8]/60 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-[#F7E07A]"
        />
      </motion.div>
    </section>
  );
}
