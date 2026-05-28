import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/writing");

export type HeroImageSize =
  | "contained"
  | "wide"
  | "full"
  | "square"
  | "portrait";

export type HeroImageFit = "cover" | "contain";

export type HeroImageData = {
  src: string;
  alt: string;
  size: HeroImageSize;
  fit: HeroImageFit;
  className?: string;
  objectPosition?: string;
  caption?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  order: number;
  tags: string[];
  excerpt: string;
  hero: HeroImageData | null;
  content: string;
  prev: string | null;
  next: string | null;
  readingTime: string;
};

export type PostMeta = Omit<Post, "content">;

const heroSizes: HeroImageSize[] = [
  "contained",
  "wide",
  "full",
  "square",
  "portrait",
];

const heroFits: HeroImageFit[] = ["cover", "contain"];

function parseHero(data: Record<string, unknown>): HeroImageData | null {
  const hero = data.hero;

  if (!hero || typeof hero !== "object" || Array.isArray(hero)) {
    return null;
  }

  const record = hero as Record<string, unknown>;
  const src = record.src;
  const alt = record.alt;

  if (typeof src !== "string" || typeof alt !== "string") {
    return null;
  }

  const size =
    typeof record.size === "string" &&
    heroSizes.includes(record.size as HeroImageSize)
      ? (record.size as HeroImageSize)
      : "contained";

  const fit =
    typeof record.fit === "string" &&
    heroFits.includes(record.fit as HeroImageFit)
      ? (record.fit as HeroImageFit)
      : "cover";

  return {
    src,
    alt,
    size,
    fit,
    ...(typeof record.className === "string" && record.className
      ? { className: record.className }
      : {}),
    ...(typeof record.objectPosition === "string" && record.objectPosition
      ? { objectPosition: record.objectPosition }
      : {}),
    ...(typeof record.caption === "string" && record.caption
      ? { caption: record.caption }
      : {}),
  };
}

function parsePostMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    readingTime: (data.readingTime as string) ?? "",
    tags: data.tags ? (data.tags as string).split(",") : [],
    excerpt: (data.excerpt as string) ?? "",
    hero: parseHero(data),
    prev: (data.prev as string) ?? null,
    next: (data.next as string) ?? null,
    order: (data.order as number) ?? 0,
  };
}

function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return (
    getPostSlugs()
      .map((slug) => {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return parsePostMeta(slug, data as Record<string, unknown>);
      })
      // .sort((a, b) => (a.date < b.date ? 1 : -1));
      .sort((a, b) => a.order - b.order)
      .filter((post) => post.order !== 0)
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...parsePostMeta(slug, data as Record<string, unknown>),
    content,
  };
}

export function getAllPostSlugs(): string[] {
  return getPostSlugs();
}
