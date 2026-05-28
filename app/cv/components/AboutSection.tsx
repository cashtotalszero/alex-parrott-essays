import Link from "next/link";

import { SectionHeading } from "./SectionHeading";

const linkClasses =
  "relative inline-flex w-36 items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";

export const AboutSection = () => {
  return (
    <section className="mt-10">
      <SectionHeading>About</SectionHeading>

      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Senior software engineer focused on <strong>React</strong>,{" "}
        <strong>React Native</strong> and <strong>frontend architecture</strong>
        . I’ve spent the last decade building web and mobile products, leading
        projects and helping teams navigate the increasingly chaotic pace of
        modern software engineering.
      </p>

      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Interested in developer experience, design systems, communication and
        systems that age gracefully.
      </p>

      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        A selective snapshot rather than the full story. If you’d like a
        complete résumé or want to talk about a project, I’d be happy to share
        more.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/writing/learning-to-code" className={linkClasses}>
          Read my story
        </Link>

        <Link
          href="https://uk.linkedin.com/in/alex-parrott-100613b1"
          className={linkClasses}
        >
          My LinkedIn
        </Link>
      </div>
    </section>
  );
};
