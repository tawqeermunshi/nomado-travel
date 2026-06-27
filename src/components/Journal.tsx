"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { posts } from "@/lib/journal";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

export default function Journal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [page, setPage] = useState(0);
  const perPage = usePerPage();
  const pageCount = Math.ceil(posts.length / perPage);
  const safePage = Math.min(page, pageCount - 1);
  const shown = posts.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <section id="journal" ref={ref} className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-clash text-[clamp(1.8rem,3.5vw,3rem)] font-500 leading-[1.02] text-[#083A7A]">
            Stories from{" "}
            <span className="font-cormorant italic font-400 text-[#D97706]">the valley.</span>
          </motion.h2>
        </div>

        <div className="flex items-stretch gap-3 md:gap-4">
          <div className="shrink-0 flex items-center">
            <NavBtn dir="prev" onClick={() => setPage(() => (safePage - 1 + pageCount) % pageCount)} />
          </div>
          <div className={`flex-1 grid gap-6 md:gap-8 ${perPage === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            {shown.map((post, i) => (
              <motion.article key={`${safePage}-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-[0_10px_28px_-14px_rgba(8,58,122,0.4)] group-hover:shadow-[0_18px_38px_-14px_rgba(8,58,122,0.5)] transition-shadow duration-500 mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} className="absolute inset-0">
                      <Image src={asset(post.image)} alt={post.title} fill className="object-cover" sizes="33vw" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#083A7A]/50 to-transparent" />
                  </div>
                  <h3 className="font-clash text-lg font-500 text-[#083A7A] leading-snug group-hover:text-[#D97706] transition-colors duration-300">{post.title}</h3>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
          </div>
          <div className="shrink-0 flex items-center">
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
