"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

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
];

function PostCard({ post, index, inView }: { post: (typeof posts)[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
      className="group cursor-none"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden mb-6">
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={asset(post.image)} alt={post.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 to-transparent" />
        <span className="absolute top-4 left-4 font-clash text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 bg-[#F2D24E]/90 text-[#102A43]">
          {post.tag}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="font-clash text-[10px] tracking-[0.2em] uppercase text-[#6E879E]">{post.readTime} read</span>
        <span className="block flex-1 h-px bg-[#25496A]" />
      </div>
      <h3 className="font-clash text-xl md:text-2xl font-500 text-[#F5F9FD] leading-snug mb-3 group-hover:text-[#F7E07A] transition-colors duration-300">
        {post.title}
      </h3>
      <p className="font-cormorant italic text-[#6E879E] text-base leading-relaxed">{post.excerpt}</p>
    </motion.article>
  );
}

export default function Journal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journal" ref={ref} className="bg-[#0A2236] py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#F2D24E] block mb-8"
            >
              04 — Journal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-[clamp(2.4rem,6vw,5rem)] font-500 leading-[1.02] text-[#F5F9FD]"
            >
              Stories from{" "}
              <span className="font-cormorant italic font-400 text-[#F7E07A]">the valley.</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="#"
            className="font-clash text-[12px] tracking-[0.2em] uppercase text-[#9DB2C7] hover:text-[#F7E07A] transition-colors flex items-center gap-2 shrink-0"
          >
            All Stories <span>→</span>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
