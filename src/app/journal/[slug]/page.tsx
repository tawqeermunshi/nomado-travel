import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";
import { posts, getPost } from "@/lib/journal";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Nomado Travel`, description: post.excerpt };
}

export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero image */}
        <div className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden">
          <Image src={asset(post.image)} alt={post.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/90 via-[#06172E]/30 to-[#06172E]/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto w-full px-6 md:px-12 lg:px-20 pb-10 md:pb-14">
              <span className="font-clash text-[11px] tracking-[0.25em] uppercase text-[#F59E0B]">{post.region}</span>
              <h1 className="font-clash text-[clamp(1.9rem,4.5vw,3.4rem)] font-600 text-[#F5F9FD] leading-tight mt-3" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <Link href="/#journal" className="inline-flex items-center gap-1.5 font-clash text-[11px] tracking-[0.25em] uppercase text-[#6B7280] hover:text-[#D97706] transition-colors duration-300 mb-10">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
            All Stories
          </Link>

          {post.body.map((block, i) => {
            if (block.type === "h")
              return <h2 key={i} className="font-clash text-xl md:text-2xl font-600 text-[#083A7A] mt-10 mb-4 leading-snug">{block.text}</h2>;
            if (block.type === "list")
              return (
                <ul key={i} className="list-disc pl-5 space-y-3 mb-6 text-[#374151] text-[15px] md:text-base leading-[1.8]">
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
            return <p key={i} className="text-[#374151] text-[15px] md:text-base leading-[1.85] mb-6">{block.text}</p>;
          })}
        </article>
      </main>
      <Footer />
    </>
  );
}
