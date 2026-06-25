"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView, AnimatePresence } from "framer-motion";

const posts = [
  {
    tag: "Culture",
    title: "A Morning in Downtown Srinagar",
    excerpt: "Before the city wakes, there is a stillness in the old lanes that feels ancient and alive at once.",
    readTime: "5 min",
    image: "/images/houses-lake.jpg",
  },
  {
    tag: "Craft",
    title: "The Last Weavers of Pashmina",
    excerpt: "Three generations, one loom, and a craft that takes months to master and seconds to undo.",
    readTime: "7 min",
    image: "/images/weaving.jpg",
  },
  {
    tag: "Winter",
    title: "When the Valley Turns to Snow",
    excerpt: "Gulmarg in deep winter exists in a world the rest of Kashmir seems to forget to hurry through.",
    readTime: "6 min",
    image: "/images/snow.jpg",
  },
  {
    tag: "Nature",
    title: "The Forests of Pahalgam",
    excerpt: "Deodar forests so dense the sunlight arrives in shafts. A silence that asks you to stay longer.",
    readTime: "4 min",
    image: "/images/forest.jpg",
  },
  {
    tag: "Culinary",
    title: "Wazwan: A Feast of Belonging",
    excerpt: "To be invited to a Wazwan is to be welcomed into a family. No menu, no choices — only abundance.",
    readTime: "6 min",
    image: "/images/wazwan.jpg",
  },
  {
    tag: "Heritage",
    title: "The Mughal Gardens at Dusk",
    excerpt: "Shalimar, Nishat, Chashme Shahi — as the light fades, they become something beyond history.",
    readTime: "5 min",
    image: "/images/oldcity.jpg",
  },
];

const testimonials = [
  {
    quote: "Nomado showed us a Kashmir we didn't know existed — a morning with a Pashmina weaver, dinner in a family home in Gurez. Nothing felt staged, everything felt true.",
    name: "Priya & Arjun Mehta",
    place: "Mumbai, India",
    trip: "Craft & Village Journey",
  },
  {
    quote: "I've travelled a great deal, but the unhurried pace here changed how I think about travel itself. Our host knew every lane of the old city by heart.",
    name: "Sarah Lindqvist",
    place: "Stockholm, Sweden",
    trip: "Downtown Srinagar Walks",
  },
  {
    quote: "The photography expedition was extraordinary. We stood at Yusmarg before sunrise with not another soul in sight. Worth every single early morning.",
    name: "Daniel Okafor",
    place: "London, UK",
    trip: "Photography Expedition",
  },
  {
    quote: "We came for Gulmarg but left with a deeper love for Kashmir itself — its people, its food, its resilience. Nomado made it feel personal from day one.",
    name: "Rina & Kenji Watanabe",
    place: "Tokyo, Japan",
    trip: "Winter Kashmir",
  },
  {
    quote: "The Wazwan experience in a local home was unlike anything I've experienced in 30 years of travel. Generosity doesn't quite capture it.",
    name: "Fatima Al-Rashid",
    place: "Dubai, UAE",
    trip: "Culinary Journey",
  },
  {
    quote: "Every detail felt considered — from the family we stayed with to the craftsman who taught us to knot a carpet. Nothing felt like a tourist box-tick.",
    name: "Marcus & Leila Dubois",
    place: "Paris, France",
    trip: "Heritage & Craft Trail",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#D97706">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function NavButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="w-11 h-11 border border-[#CBD5E1] hover:border-[#D97706] hover:bg-[#D97706] text-[#475569] hover:text-white transition-all duration-300 flex items-center justify-center"
    >
      {dir === "prev" ? (
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-6-6 6-6" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" />
        </svg>
      )}
    </button>
  );
}

function JournalCarousel({ inView }: { inView: boolean }) {
  const [idx, setIdx] = useState(0);
  const visible = 3;
  const total = posts.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);
  const shown = Array.from({ length: visible }, (_, k) => posts[(idx + k) % total]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-6"
          >
            03 — Journal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2rem,5vw,4rem)] font-500 leading-[1.02] text-[#083A7A]"
          >
            Stories from{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">the valley.</span>
          </motion.h2>
        </div>
        <div className="flex gap-2">
          <NavButton dir="prev" onClick={prev} />
          <NavButton dir="next" onClick={next} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence mode="wait">
          {shown.map((post, i) => (
            <motion.article
              key={`${idx}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image src={asset(post.image)} alt={post.title} fill className="object-cover" sizes="33vw" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#083A7A]/50 to-transparent" />
                <span className="absolute top-4 left-4 font-clash text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 bg-[#D97706] text-white">
                  {post.tag}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-clash text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">{post.readTime} read</span>
                <span className="block flex-1 h-px bg-[#E2E8F0]" />
              </div>
              <h3 className="font-clash text-xl font-500 text-[#083A7A] leading-snug mb-3 group-hover:text-[#D97706] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="font-cormorant italic text-[#4B5563] text-base leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-10">
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel({ inView }: { inView: boolean }) {
  const [idx, setIdx] = useState(0);
  const visible = 3;
  const total = testimonials.length;
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);
  const shown = Array.from({ length: visible }, (_, k) => testimonials[(idx + k) % total]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-6"
          >
            04 — Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(2rem,5vw,4rem)] font-500 leading-[1.02] text-[#083A7A]"
          >
            Words from{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">our travellers.</span>
          </motion.h2>
        </div>
        <div className="flex gap-2">
          <NavButton dir="prev" onClick={prev} />
          <NavButton dir="next" onClick={next} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {shown.map((t, i) => (
            <motion.figure
              key={`t-${idx}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-[#E2E8F0] p-8 md:p-10 flex flex-col"
            >
              <Stars />
              <blockquote className="font-cormorant italic text-[#1F2937] text-lg md:text-xl leading-[1.55] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[#E2E8F0]">
                <div className="font-clash text-base font-600 text-[#083A7A]">{t.name}</div>
                <div className="font-clash text-[11px] tracking-[0.1em] uppercase text-[#6B7280] mt-1">{t.place}</div>
                <div className="font-clash text-[11px] tracking-[0.15em] uppercase text-[#D97706] mt-2">{t.trip}</div>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function JournalTestimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <section id="journal" className="bg-white py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <JournalCarousel inView={inView} />
        </div>
      </section>
      <section className="bg-[#F5F8FD] py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <TestimonialsCarousel inView={inView} />
        </div>
      </section>
    </div>
  );
}
