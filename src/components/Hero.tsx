"use client";
import { useRef } from "react";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-[90vh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[105%]">
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={asset("/images/hero-poster.jpg")}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src={asset("/images/hero.webm")} type="video/webm" />
            <source src={asset("/images/hero.mp4")} type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div style={{ opacity: scrimOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-20 px-6 md:px-16 text-center"
      >
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="font-clash text-[13px] tracking-[0.15em] uppercase px-10 py-5 bg-[#D97706] text-white hover:bg-[#F59E0B] transition-all duration-300"
            >
              Make an Enquiry
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-clash text-[10px] tracking-[0.3em] uppercase text-[#C9D9E8]/60 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-[#F59E0B]"
        />
      </motion.div>
    </section>
  );
}
