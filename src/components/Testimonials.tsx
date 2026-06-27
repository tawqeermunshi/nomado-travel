"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "We had a lovely experience in Kashmir.. From hotel to pick up, the driver and food, everything was taken utmost care. We just decided 2 days ahead of travelling and Nomado gave us a very good package !! Thanks for making our trip a memorable one !! Will surely recommend friends and relatives.", name: "Fatima Em",          place: "Mangalore, India"  },
  { quote: "The team's attentiveness and commitment to customer satisfaction truly set them apart. We highly recommend their services for anyone planning a trip to Kashmir or anywhere else!",                                                                                                                       name: "Japnam Kaur Bindra", place: "Delhi, India"      },
  { quote: "Traveling in Kashmir can be challenging due to unpredictable weather and road conditions, but with nomado.travel, we felt completely at ease and entire family including my kids were comfortable.",                                                                                                       name: "Pranesh Panoli",     place: "Kerala, India"     },
  { quote: "Kashmir is definitely a beautiful place and can be enjoyed only through these kind of people who keeps customer experience as their top priority.",                                                                                                                                                        name: "Jithin Jawahar",     place: "Hyderabad, India"  },
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
    <button onClick={onClick} aria-label={dir} className="w-11 h-11 rounded-full bg-white border border-[#E8EDF3] shadow-md hover:shadow-lg hover:bg-[#D97706] hover:border-[#D97706] text-[#475569] hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center">
      {dir === "prev"
        ? <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
        : <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>}
    </button>
  );
}

function usePerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [page, setPage] = useState(0);
  const perPage = usePerPage();
  const pageCount = Math.ceil(testimonials.length / perPage);
  const safePage = Math.min(page, pageCount - 1);
  const shown = testimonials.slice(safePage * perPage, safePage * perPage + perPage);

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
            <NavBtn dir="prev" onClick={() => setPage(() => (safePage - 1 + pageCount) % pageCount)} />
          </div>
          <div className={`flex-1 grid gap-5 md:gap-6 ${perPage === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            {shown.map((t, i) => (
              <motion.figure key={`t-${safePage}-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-[#EEF2F7] rounded-3xl shadow-[0_10px_30px_-15px_rgba(8,58,122,0.28)] hover:shadow-[0_18px_40px_-15px_rgba(8,58,122,0.38)] transition-shadow duration-500 p-6 md:p-7 flex flex-col">
                <Stars />
                <blockquote className="font-cormorant italic text-[#1F2937] text-base md:text-lg leading-[1.55] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[#E2E8F0]">
                  <div className="font-clash text-sm font-600 text-[#083A7A]">{t.name}</div>
                  <div className="font-clash text-[10px] tracking-[0.1em] uppercase text-[#6B7280] mt-1">{t.place}</div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
          </div>
          <div className="shrink-0">
            <NavBtn dir="next" onClick={() => setPage(() => (safePage + 1) % pageCount)} />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: pageCount }, (_, p) => (
            <button key={p} onClick={() => setPage(p)} aria-label={`Page ${p + 1}`}
              className={`h-1 transition-all duration-300 ${p === safePage ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
