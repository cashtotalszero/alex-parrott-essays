import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HeroImage } from "@/components/HeroImage";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} — Alex Parrott`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      ...(post.hero && {
        images: [{ url: post.hero.src, alt: post.hero.alt }],
      }),
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const navLinkClassName =
    "relative inline-flex w-36 items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";

  return (
    <article className="mx-auto max-w-3xl px-6 py-4">
      <header className="mt-6">
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {`Essays • ${post.readingTime} min read`}
        </time>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
      </header>

      {post.hero ? <HeroImage hero={post.hero} /> : null}

      <div className="prose prose-lg prose-zinc my-8 max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h3:text-lg prose-h3:mt-6 prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-img:rounded-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="flex justify-between mt-12">
        {post.prev ? (
          <Link href={post.prev} className={navLinkClassName}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute left-5 top-1/2 size-4 -translate-y-1/2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </Link>
        ) : (
          <span />
        )}

        {post.next ? (
          <Link href={post.next} className={navLinkClassName}>
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute right-5 top-1/2 size-4 -translate-y-1/2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
