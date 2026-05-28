import Image from "next/image";
import { PrimaryLink } from "@/components/PrimaryLink";
import { SecondaryLink } from "@/components/SecondaryLink";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-6">
      <div className="flex justify-center">
        <Image
          src="/images/learning-to-code/IMG_5249.PNG"
          alt="Alex Parrott"
          width={400}
          height={400}
          priority
          className="max-h-100 w-auto max-w-full rounded-md object-contain"
        />
      </div>

      <h1 className="text-3xl mt-6 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>

      <div className="mt-6 space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <p>
          I build software and write about the experience of building it. Over
          the last decade I&apos;ve worked primarily with{" "}
          <strong>TypeScript</strong>, <strong>React</strong> and{" "}
          <strong>React Native</strong>. Leading projects, solving problems and
          trying to stay sane while the industry reinvents itself every six
          months.
        </p>

        <p>
          This site is part portfolio, part notebook - essays on technology,
          mountains, pop culture, uncertainty and the human side of modern
          software engineering.
        </p>
      </div>

      <div className="mt-8">
        <PrimaryLink href="/writing" label="Start reading" />
      </div>

      <div className="mt-10 flex justify-start gap-4">
        <SecondaryLink href="/writing/learning-to-code" label="My story" />
        <SecondaryLink href="/cv" label="Experience" />
      </div>
    </div>
  );
}
