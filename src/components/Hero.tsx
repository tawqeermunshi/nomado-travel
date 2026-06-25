"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const quotes = [
  { lang: "Persian",  dir: "rtl" as const, text: "«اگر بر روی زمین هست، همین‌جاست، همین‌جاست، همین‌جاست»" },
  { lang: "English",  dir: "ltr" as const, text: "“If there is a paradise on earth, it is here, it is here, it is here.”" },
  { lang: "Hindi",    dir: "ltr" as const, text: "«अगर धरती पर कहीं स्वर्ग है, तो यहीं है, यहीं है, यहीं है»" },
  { lang: "French",   dir: "ltr" as const, text: "«S’il existe un paradis sur terre, c’est ici, c’est ici, c’est ici.»" },
  { lang: "Malay",    dir: "ltr" as const, text: "“Jika ada syurga di bumi, ia di sini, ia di sini, ia di sini.”" },
  { lang: "Japanese", dir: "ltr" as const, text: "「地上に楽園があるとすれば、それはここだ、ここだ、ここだ。」" },
  { lang: "German",   dir: "ltr" as const, text: "„Wenn es ein Paradies auf Erden gibt, dann ist es hier, hier, hier.“" },
  { lang: "Russian",  dir: "ltr" as const, text: "«Если на земле есть рай, то он здесь, здесь, здесь.»" },
];

const INTERVAL = 3400;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % quotes.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const current = quotes[index];

  return (
    <section ref={ref} className="relative h-[82vh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[120%]">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={asset("/images/hero.jpg")}
            alt="Houseboats on Dal Lake against snow-capped mountains, Srinagar"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: scrimOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#072350]/70 via-transparent to-[#072350]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#072350]/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-16"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="block w-12 h-px bg-[#D97706]" />
            <span className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#C9D9E8]">
              Kashmir · Curated Journeys
            </span>
          </motion.div>

          <h1 className="font-clash font-600 text-[#F5F9FD] leading-[0.95] tracking-tight mb-6">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(2.4rem,7.5vw,6.5rem)]"
              >
                Discover Kashmir
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[clamp(2.4rem,7.5vw,6.5rem)] italic font-cormorant font-400 text-[#F59E0B]"
              >
                beyond the postcards.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative h-10 mb-8 overflow-hidden max-w-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                dir={current.dir}
                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                exit={{   opacity: 0, y: -14, filter: "blur(5px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute font-cormorant italic text-[#C9D9E8]/85 text-base md:text-lg leading-snug"
              >
                {current.text}
                <span className="font-clash not-italic text-[9px] tracking-[0.25em] uppercase text-[#F59E0B]/60 ml-3 align-middle">
                  {current.lang}
                </span>
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <a
              href="#contact"
              className="font-clash text-[12px] tracking-[0.15em] uppercase px-8 py-4 bg-[#D97706] text-white hover:bg-[#F59E0B] transition-all duration-300"
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
