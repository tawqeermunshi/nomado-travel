"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

const interests = ["Culture & Heritage", "Food & Culinary", "Photography", "Nature & Trekking", "Craft & Artisan", "Village Life", "Winter Kashmir", "Spiritual Trails"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) =>
    setSelected(prev => (prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]));

  return (
    <section id="contact" ref={ref} className="bg-[#102A43]">
      <div className="grid lg:grid-cols-2">
        {/* Left: image panel */}
        <div className="relative min-h-[55vh] lg:min-h-screen overflow-hidden flex items-end">
          <Image
            src={asset("/images/snow.jpg")}
            alt="Snow-capped mountains of Kashmir"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192A]/90 via-[#102A43]/25 to-[#102A43]/30" />
          <div className="relative p-10 md:p-16 lg:p-20">
            <span className="block w-12 h-px bg-[#F7E07A] mb-7" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="font-cormorant italic text-[clamp(1.6rem,2.8vw,2.6rem)] text-[#F5F9FD] leading-[1.3] max-w-sm"
            >
              Every great journey begins with a single conversation.
            </motion.p>
          </div>
        </div>

        {/* Right: form */}
        <div className="px-6 md:px-16 lg:px-24 py-24 md:py-32 lg:py-40 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#F2D24E] block mb-8"
            >
              05 — Plan Your Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-[clamp(2rem,4.5vw,3.4rem)] font-500 leading-[1.05] text-[#F5F9FD] mb-6"
            >
              Tell us what{" "}
              <span className="font-cormorant italic font-400 text-[#F7E07A]">inspires you.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#6E879E] text-base leading-[1.8] mb-12"
            >
              Culture, food, photography, nature, or simply Kashmir at a slower
              pace — we&apos;d love to craft a journey that&apos;s entirely yours.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#F2D24E]/30 p-12 text-center"
              >
                <div className="font-clash text-5xl text-[#F2D24E] mb-4">✦</div>
                <h3 className="font-clash text-2xl font-500 text-[#F5F9FD] mb-3">We&apos;ve received your note.</h3>
                <p className="font-cormorant italic text-[#6E879E] text-lg">
                  Someone from the team will reach out within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.7 }}
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-7"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Your Name", placeholder: "Amir Khan", type: "text" },
                    { id: "email", label: "Email", placeholder: "amir@example.com", type: "email" },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={f.id} className="font-clash text-[10px] tracking-[0.25em] uppercase text-[#6E879E]">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="bg-transparent border-b border-[#25496A] focus:border-[#F2D24E] py-3 text-[#F5F9FD] placeholder-[#3A597A] text-sm outline-none transition-colors duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-clash text-[10px] tracking-[0.25em] uppercase text-[#6E879E]">
                    What interests you?
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {interests.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className="font-clash text-[11px] tracking-[0.1em] uppercase px-3.5 py-2 border transition-all duration-300"
                        style={{
                          borderColor: selected.includes(item) ? "#F2D24E" : "#25496A",
                          background: selected.includes(item) ? "rgba(242,210,78,0.12)" : "transparent",
                          color: selected.includes(item) ? "#F7E07A" : "#6E879E",
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="self-start font-clash text-[12px] tracking-[0.2em] uppercase px-10 py-4 bg-[#F2D24E] text-[#102A43] hover:bg-[#F7E07A] transition-all duration-300 mt-2"
                >
                  Send My Interests →
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
