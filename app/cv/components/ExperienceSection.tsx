import { SectionHeading } from "./SectionHeading";

type Experience = {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
};

const experience: Experience[] = [
  {
    company: "Aforza",
    title: "Principal Software Engineer",
    period: "Since 2020",
    location: "Cardiff, UK · Remote",
    highlights: [
      "Leading development of a React Native mobile platform for global consumer goods companies.",
      "Technical lead across frontend architecture, shared systems and long-term maintainability.",
      "Mentoring engineers and helping shape frontend engineering culture across the mobile team.",
    ],
  },
  {
    company: "Cash Totals Zero Ltd",
    title: "Director & Software Engineer",
    period: "2017—2019",
    location: "UK & USA",
    highlights: [
      "Freelance business.",
      "Working with a variety of clients, from startups to established businesses.",
      "My first real exposure to leadership, client politics and the gap between ideal software and real-world software.",
    ],
  },
  {
    company: "Somo",
    title: "Senior Frontend Developer",
    period: "2015—2017",
    location: "Bristol, UK",
    highlights: [
      "Digital agency. Clients included Audi, Goldman Sachs and more.",
      "Worked across a huge range of products, from marketing platforms to early VR experiences.",
      "Where I discovered React.",
    ],
  },
  {
    company: "Red7 Mobile",
    title: "Games Developer",
    period: "2014—2015",
    location: "Bristol, UK",
    highlights: [
      "My first real step into the industry.",
      "Building web games and gambling apps in JavaScript.",
      "Digital agency. Clients included William Hill and more.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="mt-10">
      <SectionHeading>Selected Experience</SectionHeading>

      <ul className="mt-6 space-y-10">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {role.company}
                </h3>
                <p className="font-medium text-zinc-700 dark:text-zinc-300">
                  {role.title}
                </p>
              </div>
              <div className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400 sm:text-right">
                <p>{role.period}</p>
                <p>{role.location}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="leading-7">
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
