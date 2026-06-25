"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "Nomado showed us a Kashmir we didn't know existed — a morning with a Pashmina weaver, dinner in a family home in Gurez. Nothing felt staged, everything felt true.", name: "Priya & Arjun Mehta",   place: "Mumbai, India",    trip: "Craft & Village Journey"   },
  { quote: "I've travelled a great deal, but the unhurried pace here changed how I think about travel itself. Our host knew every lane of the old city by heart.",                 name: "Sarah Lindqvist",      place: "Stockholm, Sweden", trip: "Downtown Srinagar Walks"    },
  { quote: "The photography expedition was extraordinary. We stood at Yusmarg before sunrise with not another soul in sight. Worth every single early morning.",                   name: "Daniel Okafor",        place: "London, UK",        trip: "Photography Expedition"     },
  { quote: "We came for Gulmarg but left with a deeper love for Kashmir itself — its people, its food, its resilience. Nomado made it feel personal from day one.",               name: "Rina & Kenji Watanabe",place: "Tokyo, Japan",      trip: "Winter Kashmir"             },
  { quote: "The Wazwan experience in a local home was unlike anything I've experienced in 30 years of travel. Generosity doesn't quite capture it.",                              name: "Fatima Al-Rashid",     place: "Dubai, UAE",        trip: "Culinary Journey"           },
  { quote: "Every detail felt considered — from the family we stayed with to the craftsman who taught us to knot a carpet. Nothing felt like a tourist box-tick.",                name: "Marcus & Leila Dubois",place: "Paris, France",     trip: "Heritage & Craft Trail"    },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="#D97706">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function NavBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir} className="w-10 h-10 border border-[#CBD5E1] hover:border-[#D97706] hover:bg-[#D97706] text-[#475569] hover:text-white transition-all duration-300 flex items-center justify-center">
      {dir === "prev"
        ? <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-6-6 6-6" /></svg>
        : <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" /></svg>}
    </button>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const shown = Array.from({ length: 3 }, (_, k) => testimonials[(idx + k) % total]);

  return (
    <section ref={ref} className="bg-[#F5F8FD] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(1.8rem,3.5vw,3rem)] font-500 leading-[1.02] text-[#083A7A]">
            Words from{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">our travellers.</span>
          </motion.h2>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="shrink-0">
            <NavBtn dir="prev" onClick={() => setIdx(i => (i - 1 + total) % total)} />
          </div>
          <div className="flex-1 grid md:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="wait">
            {shown.map((t, i) => (
              <motion.figure key={`t-${idx}-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-[#E2E8F0] p-6 md:p-7 flex flex-col">
                <Stars />
                <blockquote className="font-cormorant italic text-[#1F2937] text-base md:text-lg leading-[1.55] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[#E2E8F0]">
                  <div className="font-clash text-sm font-600 text-[#083A7A]">{t.name}</div>
                  <div className="font-clash text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mt-1">{t.place}</div>
                  <div className="font-clash text-[10px] tracking-[0.15em] uppercase text-[#D97706] mt-1">{t.trip}</div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
          </div>
          <div className="shrink-0">
            <NavBtn dir="next" onClick={() => setIdx(i => (i + 1) % total)} />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
