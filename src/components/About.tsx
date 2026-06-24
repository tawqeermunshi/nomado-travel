"use client";
import { useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" ref={ref} className="relative bg-[#102A43] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-14 md:gap-20 lg:gap-28 items-center">
        {/* Image */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.div style={{ y: imgY }} className="absolute inset-0 h-[114%] -top-[7%]">
              <Image
                src={asset("/images/shikara.jpg")}
                alt="A vendor selling fruit from a shikara on Dal Lake"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </motion.div>
            {/* Caption — clean overlay strip inside the image */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/40 to-transparent">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-px bg-[#F7E07A]" />
                <p className="font-cormorant italic text-[#F5F9FD] text-sm">
                  The floating market of Dal Lake, before sunrise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-7">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#F2D24E] block mb-10"
          >
            01 — About Nomado
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(1.9rem,4vw,3.2rem)] font-500 leading-[1.12] text-[#F5F9FD] mb-12"
          >
            Designed around{" "}
            <span className="font-cormorant italic font-400 text-[#F7E07A]">experiences</span>,
            not checklists.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#9DB2C7] text-base md:text-lg leading-[2] max-w-xl mb-10"
          >
            The best journeys are not measured by the number of places visited,
            but by the moments that stay with you long after you return home.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="text-[#6E879E] text-base leading-[2] max-w-xl"
          >
            We create thoughtfully curated experiences that connect travellers
            with Kashmir&apos;s living heritage — its communities, crafts, cuisine,
            and breathtaking landscapes. Every itinerary is handcrafted to offer a
            deeper understanding of the region while keeping the comfort modern
            travellers seek.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
