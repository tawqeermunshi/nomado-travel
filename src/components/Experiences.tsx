"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

type Exp = {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  image: string;
};

const experiences: Exp[] = [
  {
    number: "01",
    title: "Downtown Srinagar",
    subtitle: "Lanes of a thousand stories",
    desc: "Wander centuries-old neighbourhoods, cross wooden bridges over the Jhelum, and find hidden shrines and bustling bazaars.",
    tag: "Heritage",
    image: "/images/oldcity.jpg",
  },
  {
    number: "02",
    title: "Craft & Artisan",
    subtitle: "Preserving traditions",
    desc: "Watch master craftsmen weave Pashmina, carve walnut wood, and knot carpets using techniques passed down for generations.",
    tag: "Culture",
    image: "/images/textiles.jpg",
  },
  {
    number: "03",
    title: "Culinary Journeys",
    subtitle: "Kashmir's flavours",
    desc: "Discover the valley through its kitchens, bakeries, tea houses, family recipes and the grand traditional feast — Wazwan.",
    tag: "Food",
    image: "/images/wazwan.jpg",
  },
  {
    number: "04",
    title: "Nature & Landscape",
    subtitle: "Another masterpiece at every turn",
    desc: "From serene lakes and alpine meadows to dense forests and snow-capped peaks — landscapes that have inspired for centuries.",
    tag: "Nature",
    image: "/images/forest.jpg",
  },
  {
    number: "05",
    title: "Photography",
    subtitle: "Capturing light and life",
    desc: "Designed for enthusiasts and professionals alike, these journeys take you well beyond the obvious viewpoints.",
    tag: "Photography",
    image: "/images/mountain-lake.jpg",
  },
  {
    number: "06",
    title: "Heritage & Spiritual",
    subtitle: "The soul of Kashmir",
    desc: "An identity shaped by centuries of diverse cultural and spiritual traditions — explored slowly and intimately.",
    tag: "Spiritual",
    image: "/images/houses-mountain.jpg",
  },
  {
    number: "07",
    title: "Village Life",
    subtitle: "Everyday Kashmir",
    desc: "Walk through orchards and farmlands, meet local families, and experience a life still closely tied to the land and seasons.",
    tag: "Village",
    image: "/images/village.jpg",
  },
  {
    number: "08",
    title: "Orchard & Harvest",
    subtitle: "The rhythm of the seasons",
    desc: "Follow Kashmir's agricultural heritage through its orchards and harvests, as the seasons reshape the valley.",
    tag: "Seasonal",
    image: "/images/leaves.jpg",
  },
  {
    number: "09",
    title: "Winter Kashmir",
    subtitle: "A different kind of beauty",
    desc: "When snow blankets the valley, Kashmir transforms into a landscape of silence, warmth, and quiet wonder.",
    tag: "Winter",
    image: "/images/snow-village.jpg",
  },
];

function Card({ exp, index }: { exp: Exp; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="relative aspect-square overflow-hidden group"
    >
      {/* Image */}
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={asset(exp.image)} alt={exp.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(7,35,80,0.95) 0%, rgba(7,35,80,0.55) 45%, rgba(7,35,80,0.2) 100%)"
            : "linear-gradient(to top, rgba(7,35,80,0.85) 0%, rgba(7,35,80,0.1) 55%, rgba(7,35,80,0.05) 100%)",
        }}
      />

      {/* Top row: number + tag */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        <span className="font-clash text-[13px] tracking-[0.2em] text-[#F5F9FD]/70">{exp.number}</span>
        <span className="font-clash text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 bg-[#D97706] text-white">
          {exp.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-cormorant italic text-[#F59E0B] text-xs mb-1">{exp.subtitle}</p>
        <h3 className="font-clash text-lg md:text-xl font-600 text-[#F5F9FD] leading-tight mb-0">
          {exp.title}
        </h3>

        {/* Reveal description */}
        <motion.div
          initial={false}
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-[#C9D9E8]/80 text-[13px] leading-relaxed pt-2.5">{exp.desc}</p>
          <div className="flex items-center gap-2 mt-3 text-[#F59E0B] font-clash text-[11px] tracking-[0.2em] uppercase">
            <span>Discover</span>
            <span>→</span>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experiences" className="bg-[#FAFAF8] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="max-w-3xl mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-8"
          >
            02 — Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2.4rem,6vw,5rem)] font-500 leading-[1.02] text-[#083A7A] mb-8"
          >
            Nine ways to{" "}
            <span className="font-cormorant italic font-400 text-[#F59E0B]">know</span> Kashmir.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#4B5563] text-base md:text-lg leading-[1.8] max-w-xl"
          >
            Every experience is designed to bring you closer to the heart of the
            valley — its people, its craft, its silence, and its joy.
          </motion.p>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, i) => (
            <Card key={exp.number} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
