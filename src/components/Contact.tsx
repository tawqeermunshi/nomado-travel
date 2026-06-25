"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { motion, useInView } from "framer-motion";

// Paste your Google Apps Script web-app URL here after deploying it.
// See: https://developers.google.com/apps-script/guides/web
const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL ?? "";

const interests = ["Culture & Heritage", "Food & Culinary", "Photography", "Nature & Trekking", "Craft & Artisan", "Village Life", "Winter Kashmir", "Spiritual Trails"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const toggle = (item: string) =>
    setSelected(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name:      (form.elements.namedItem("name")  as HTMLInputElement).value,
      email:     (form.elements.namedItem("email") as HTMLInputElement).value,
      phone:     (form.elements.namedItem("phone") as HTMLInputElement).value,
      interests: selected.join(", "),
      timestamp: new Date().toISOString(),
    };
    if (SHEET_URL) {
      try {
        await fetch(SHEET_URL, {
          method: "POST",
          mode: "no-cors", // required for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (_) { /* no-cors means we can't read the response — treat as success */ }
    }
    setSending(false);
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setSelected([]);
  };

  return (
    <section id="contact" ref={ref} className="bg-white">
      <div className="grid lg:grid-cols-2 lg:items-center">
        {/* Left: image */}
        <div className="relative h-[42vh] lg:h-[58vh] overflow-hidden flex items-end">
          <Image
            src={asset("/images/snow.jpg")}
            alt="Snow-capped mountains of Kashmir"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072350]/85 via-[#072350]/20 to-[#072350]/25" />
          <div className="relative p-8 md:p-12 lg:p-16">
            <span className="block w-12 h-px bg-[#F59E0B] mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="font-cormorant italic text-[clamp(1.5rem,2.4vw,2.3rem)] text-[#F5F9FD] leading-[1.3] max-w-sm"
            >
              Every great journey begins with a single conversation.
            </motion.p>
          </div>
        </div>

        {/* Right: form */}
        <div className="px-6 md:px-16 lg:px-20 py-10 md:py-14 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-clash text-[11px] tracking-[0.4em] uppercase text-[#D97706] block mb-6"
            >
              — Make an Enquiry
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-[clamp(1.8rem,3.5vw,2.8rem)] font-500 leading-[1.05] text-[#083A7A] mb-4"
            >
              Tell us what{" "}
              <span className="font-cormorant italic font-400 text-[#D97706]">inspires you.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[#4B5563] text-sm leading-[1.8] mb-8"
            >
              Culture, food, photography, nature, or simply Kashmir at a slower
              pace — we&apos;d love to craft a journey that&apos;s entirely yours.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#D97706]/40 p-10 text-center"
              >
                <div className="font-clash text-4xl text-[#D97706] mb-4">✦</div>
                <h3 className="font-clash text-xl font-500 text-[#083A7A] mb-2">We&apos;ve received your enquiry.</h3>
                <p className="font-cormorant italic text-[#4B5563] text-base mb-8">
                  Someone from the team will reach out within 48 hours.
                </p>
                <button
                  onClick={reset}
                  className="font-clash text-[11px] tracking-[0.2em] uppercase px-8 py-3 border border-[#D97706] text-[#D97706] hover:bg-[#D97706] hover:text-white transition-all duration-300"
                >
                  Make Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25, duration: 0.7 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",  label: "Your Name",  placeholder: "Amir Khan",          type: "text"  },
                    { id: "email", label: "Email",       placeholder: "amir@example.com",   type: "email" },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label htmlFor={f.id} className="font-clash text-[10px] tracking-[0.25em] uppercase text-[#475569]">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="bg-transparent border-b border-[#CBD5E1] focus:border-[#D97706] py-2.5 text-[#1F2937] placeholder-[#9CA3AF] text-sm outline-none transition-colors duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-clash text-[10px] tracking-[0.25em] uppercase text-[#475569]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-transparent border-b border-[#CBD5E1] focus:border-[#D97706] py-2.5 text-[#1F2937] placeholder-[#9CA3AF] text-sm outline-none transition-colors duration-300"
                  />
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-clash text-[10px] tracking-[0.25em] uppercase text-[#475569]">
                    What interests you?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className="font-clash text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border transition-all duration-300"
                        style={{
                          borderColor: selected.includes(item) ? "#D97706" : "#CBD5E1",
                          background:  selected.includes(item) ? "rgba(217,119,6,0.10)" : "transparent",
                          color:       selected.includes(item) ? "#B45309" : "#475569",
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start font-clash text-[12px] tracking-[0.2em] uppercase px-10 py-4 bg-[#D97706] text-white hover:bg-[#F59E0B] disabled:opacity-60 transition-all duration-300 mt-1"
                >
                  {sending ? "Sending…" : "Send Enquiry →"}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
