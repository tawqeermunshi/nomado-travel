"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

const quotes = [
  { lang: "Persian",  dir: "rtl" as const, text: "«اگر بهشتی بر روی زمین هست، همین‌جاست، همین‌جاست، همین‌جاست»" },
  { lang: "English",  dir: "ltr" as const, text: "“If there is a paradise on earth, it is here, it is here, it is here.”" },
  { lang: "Hindi",    dir: "ltr" as const, text: "«अगर धरती पर कहीं स्वर्ग है, तो यहीं है, यहीं है, यहीं है»" },
  { lang: "French",   dir: "ltr" as const, text: "«S’il existe un paradis sur terre, c’est ici, c’est ici, c’est ici.»" },
  { lang: "Malay",    dir: "ltr" as const, text: "“Jika ada syurga di bumi, ia di sini, ia di sini, ia di sini.”" },
  { lang: "Japanese", dir: "ltr" as const, text: "「地上に楽園があるとすれば、それはここだ、ここだ、ここだ。」" },
  { lang: "German",   dir: "ltr" as const, text: "„Wenn es ein Paradies auf Erden gibt, dann ist es hier, hier, hier.“" },
  { lang: "Russian",  dir: "ltr" as const, text: "«Если на земле есть рай, то он здесь, здесь, здесь.»" },
];

const INTERVAL = 3400;

export default function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setIndex(i => (i + 1) % quotes.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [inView]);

  const current = quotes[index];

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

      {/* Scrims */}
      <div className="absolute inset-0 bg-[#072350]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#072350]/60 via-transparent to-[#072350]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#F59E0B] block mb-12"
        >
          The Chinar in Autumn
        </motion.span>

        {/* Quote — fixed height container so page doesn't jump */}
        <div className="relative h-[11rem] md:h-[13rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
              exit={{   opacity: 0, y: -36, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              dir={current.dir}
              className="absolute inset-x-0 px-2"
            >
              <p className="font-cormorant italic text-[clamp(1.55rem,3.8vw,3rem)] leading-[1.4] text-[#F5F9FD]">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Attribution */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-clash text-[11px] tracking-[0.25em] uppercase text-[#C9D9E8]/55 block mt-10"
        >
          — Amir Khusrau, of Kashmir
        </motion.span>

        {/* Language name + dot indicators */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <AnimatePresence mode="wait">
            <motion.span
              key={`lang-${index}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.35 }}
              className="font-clash text-[10px] tracking-[0.3em] uppercase text-[#F59E0B]/65 w-16 text-right"
            >
              {current.lang}
            </motion.span>
          </AnimatePresence>

          <div className="flex gap-1.5 items-center">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={quotes[i].lang}
              >
                <motion.span
                  animate={{
                    width:           i === index ? 20 : 6,
                    backgroundColor: i === index ? "#F59E0B" : "rgba(201,217,232,0.35)",
                  }}
                  transition={{ duration: 0.35 }}
                  className="block h-1.5 rounded-full"
                  style={{ width: 6, backgroundColor: "rgba(201,217,232,0.35)" }}
                />
              </button>
            ))}
          </div>

          <span className="w-16" />
        </div>
      </div>
    </section>
  );
}
