import type { Metadata } from "next";
import Image from "next/image";

import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";

export const metadata: Metadata = {
  title: "Experience — Alex Parrott",
  description: "Work history, education, and skills.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex justify-center">
        <Image
          src="/images/IMG_5254.jpeg"
          alt="Alex Parrott"
          width={160}
          height={160}
          priority
          className="rounded-full object-contain"
        />
      </div>

      <AboutSection />

      <ExperienceSection />

      <EducationSection />

      <SkillsSection />
    </div>
  );
}
