import { SectionHeading } from "./SectionHeading";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "TanStack",
  "Redux",
  "Node",
  "MapBox",
  "Cursor",
  "GCP",
  "Next.js",
];

export const SkillsSection = () => {
  return (
    <section className="mt-10">
      <SectionHeading>Tech I&apos;ve been working with lately</SectionHeading>

      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
