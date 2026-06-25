"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const quotes = [
  { lang: “English”,  dir: “ltr” as const, text: “”If there is a paradise on earth, it is here, it is here, it is here.”” },
  { lang: “Farsi”,    dir: “rtl” as const, text: “«اگر بر روی زمین هست، همین‌جاست، همین‌جاست، همین‌جاست»” },
  { lang: “Hindi”,    dir: “ltr” as const, text: “«अगर धरती पर कहीं स्वर्ग है, तो यहीं है, यहीं है, यहीं है»” },
  { lang: “Japanese”, dir: “ltr” as const, text: “「地上に楽園があるとすれば、それはここだ、ここだ、ここだ。」” },
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
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 text-center"
      >
        <div className="max-w-3xl w-full">
          {/* Animated multilingual quote — main text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative h-36 md:h-28 overflow-hidden mb-12"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                dir={current.dir}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                exit={{   opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              >
                <p className="font-cormorant italic text-[#F5F9FD] text-[clamp(1.4rem,3.8vw,2.4rem)] leading-snug">
                  {current.text}
                </p>
                <span className="font-clash text-[9px] tracking-[0.35em] uppercase text-[#F59E0B]/60">
                  {current.lang}
                </span>
              </motion.blockquote>
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
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
