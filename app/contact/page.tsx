import type { Metadata } from "next";

import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact — Alex Parrott",
  description: "How to get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I&apos;d love to hear from you — whether you have a question, a
        collaboration in mind, or just want to say hello.
      </p>
      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        The best way to reach me is by email:{" "}
        <a
          href="mailto:alex.parrott.dev@gmail.com"
          className="font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
        >
          alex.parrott.dev@gmail.com
        </a>
      </p>

      <SocialLinks className="mt-8" />
    </div>
  );
}
