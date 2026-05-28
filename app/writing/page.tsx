import type { Metadata } from "next";

import { getAllPosts } from "@/lib/posts";
import { HeroImage } from "@/components/HeroImage";

import { WritingTabs } from "./components/WritingTabs";

export const metadata: Metadata = {
  title: "Writing — Alex Parrott",
  description:
    "Essays and notes on technology, mountains, pop culture, uncertainty and the human side of modern software engineering.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 pb-12">
      <HeroImage
        hero={{
          src: "/images/writing.png",
          alt: "Writing",
          size: "contained",
          fit: "cover",
          objectPosition: "center",
        }}
      />

      <h1 className="text-3xl pt-6 mb-6 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Writing
      </h1>

      <WritingTabs posts={posts} />
    </div>
  );
}
