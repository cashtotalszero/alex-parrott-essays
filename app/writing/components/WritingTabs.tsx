"use client";

import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import type { PostMeta } from "@/lib/posts";
import Link from "next/link";

type Props = {
  posts: PostMeta[];
};

export const WritingTabs = (props: Props) => {
  const { posts } = props;

  return (
    <Tabs focusTabOnClick={false}>
      <TabList>
        <Tab>Essays</Tab>
        <Tab>Notes</Tab>
      </TabList>

      <TabPanel>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Short essays about life, software engineering, and the occasional
          Apollo Creed monologue.
        </p>

        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link
                href={`/writing/${post.slug}`}
                className="flex row gap-4 items-center"
              >
                <div className="flex justify-center align-middle">
                  <Image
                    src={post.hero?.src ?? ""}
                    alt={post.hero?.alt ?? ""}
                    // fill
                    priority
                    width={50}
                    height={50}
                    className="object-cover rounded-md bg-zinc-100 dark:bg-zinc-800 w-16 h-16 flex-1"
                  />
                </div>

                <div className="group block flex-3">
                  <h2 className="text-md sm:text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base italic text-zinc-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </TabPanel>

      <TabPanel>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Engineering notes on architecture, systems thinking and the strange
          realities of modern software development.
        </p>

        <p className="mt-6 text-sm italic text-zinc-600 dark:text-zinc-400">
          Coming soon...
        </p>
      </TabPanel>
    </Tabs>
  );
};
