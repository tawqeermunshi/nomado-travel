"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Nomado showed us a Kashmir we didn't know existed — a morning with a Pashmina weaver, dinner in a family home in Gurez. Nothing felt staged, everything felt true.",
    name: "Priya & Arjun Mehta",
    place: "Mumbai, India",
    trip: "Craft & Village Journey",
  },
  {
    quote:
      "I've travelled a great deal, but the unhurried pace here changed how I think about travel itself. Our host knew every lane of the old city by heart.",
    name: "Sarah Lindqvist",
    place: "Stockholm, Sweden",
    trip: "Downtown Srinagar Walks",
  },
  {
    quote:
      "The photography expedition was extraordinary. We stood at Yusmarg before sunrise with not another soul in sight. Worth every single early morning.",
    name: "Daniel Okafor",
    place: "London, UK",
    trip: "Photography Expedition",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill="#D97706">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F5F8FD] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-8"
          >
            05 — Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2.4rem,6vw,5rem)] font-500 leading-[1.02] text-[#083A7A]"
          >
            Words from{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">our travellers.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#E2E8F0] p-8 md:p-10 flex flex-col"
            >
              <Stars />
              <blockquote className="font-cormorant italic text-[#1F2937] text-lg md:text-xl leading-[1.55] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[#E2E8F0]">
                <div className="font-clash text-base font-600 text-[#083A7A]">{t.name}</div>
                <div className="font-clash text-[11px] tracking-[0.1em] uppercase text-[#6B7280] mt-1">
                  {t.place}
                </div>
                <div className="font-clash text-[11px] tracking-[0.15em] uppercase text-[#D97706] mt-2">
                  {t.trip}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
