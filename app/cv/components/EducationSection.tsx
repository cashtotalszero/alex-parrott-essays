import { SectionHeading } from "./SectionHeading";

type Education = {
  school: string;
  degree: string;
  period: string;
};

const education: Education[] = [
  {
    school: "University of Bristol",
    degree: "MSc Computer Science",
    period: "Graduated 2014",
  },
  {
    school: "University of the West of England",
    degree: "BA (hons) Sociology",
    period: "Graduated 2004",
  },
];

export const EducationSection = () => {
  return (
    <section className="mt-10">
      <SectionHeading>Education</SectionHeading>

      <ul className="mt-6 space-y-6">
        {education.map((item) => (
          <li
            key={item.school}
            className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {item.school}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{item.degree}</p>
            </div>
            <p className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
              {item.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
