"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView, AnimatePresence } from "framer-motion";

const posts = [
  { tag: "Culture",  title: "A Morning in Downtown Srinagar",   excerpt: "Before the city wakes, there is a stillness in the old lanes that feels ancient and alive at once.", readTime: "5 min", image: "/images/houses-lake.jpg" },
  { tag: "Craft",    title: "The Last Weavers of Pashmina",     excerpt: "Three generations, one loom, and a craft that takes months to master and seconds to undo.",             readTime: "7 min", image: "/images/weaving.jpg"     },
  { tag: "Winter",   title: "When the Valley Turns to Snow",    excerpt: "Gulmarg in deep winter exists in a world the rest of Kashmir seems to forget to hurry through.",         readTime: "6 min", image: "/images/snow.jpg"        },
  { tag: "Nature",   title: "The Forests of Pahalgam",          excerpt: "Deodar forests so dense the sunlight arrives in shafts. A silence that asks you to stay longer.",        readTime: "4 min", image: "/images/forest.jpg"      },
  { tag: "Culinary", title: "Wazwan: A Feast of Belonging",     excerpt: "To be invited to a Wazwan is to be welcomed into a family. No menu, no choices — only abundance.",       readTime: "6 min", image: "/images/wazwan.jpg"      },
  { tag: "Heritage", title: "The Mughal Gardens at Dusk",       excerpt: "Shalimar, Nishat, Chashme Shahi — as the light fades, they become something beyond history.",           readTime: "5 min", image: "/images/oldcity.jpg"     },
];

function NavBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label={dir} className="w-10 h-10 border border-[#CBD5E1] hover:border-[#D97706] hover:bg-[#D97706] text-[#475569] hover:text-white transition-all duration-300 flex items-center justify-center">
      {dir === "prev"
        ? <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-6-6 6-6" /></svg>
        : <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4l6 6-6 6" /></svg>}
    </button>
  );
}

export default function Journal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [idx, setIdx] = useState(0);
  const total = posts.length;
  const shown = Array.from({ length: 3 }, (_, k) => posts[(idx + k) % total]);

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

        <div className="flex items-center gap-3 md:gap-4">
          <div className="shrink-0">
            <NavBtn dir="prev" onClick={() => setIdx(i => (i - 1 + total) % total)} />
          </div>
          <div className="flex-1 grid md:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {shown.map((post, i) => (
              <motion.article key={`${idx}-${i}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group">
                <div className="relative aspect-[16/9] overflow-hidden mb-4">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} className="absolute inset-0">
                    <Image src={asset(post.image)} alt={post.title} fill className="object-cover" sizes="33vw" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#083A7A]/50 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-clash text-[10px] tracking-[0.2em] uppercase text-[#6B7280]">{post.readTime} read</span>
                  <span className="block flex-1 h-px bg-[#E2E8F0]" />
                </div>
                <h3 className="font-clash text-lg font-500 text-[#083A7A] leading-snug mb-2 group-hover:text-[#D97706] transition-colors duration-300">{post.title}</h3>
                <p className="font-cormorant italic text-[#4B5563] text-sm leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </AnimatePresence>
          </div>
          <div className="shrink-0">
            <NavBtn dir="next" onClick={() => setIdx(i => (i + 1) % total)} />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {posts.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${i === idx ? "w-8 bg-[#D97706]" : "w-4 bg-[#CBD5E1]"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
