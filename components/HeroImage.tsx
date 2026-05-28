import Image from "next/image";
import type { HeroImageData } from "@/lib/posts";

const sizeStyles = {
  contained: {
    wrapper: "mt-8 aspect-video w-full overflow-hidden rounded-lg",
    sizes: "(max-width: 768px) 100vw, 768px",
  },
  wide: {
    wrapper:
      "mt-8 aspect-[21/9] w-[calc(100%+3rem)] max-w-none -mx-6 overflow-hidden rounded-none min-[769px]:rounded-lg sm:w-[calc(100%+4rem)] sm:-mx-8",
    sizes: "(max-width: 768px) 100vw, 896px",
  },
  full: {
    wrapper:
      "relative left-1/2 mt-8 aspect-[21/9] w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden sm:aspect-[2.4/1]",
    sizes: "100vw",
  },
  square: {
    wrapper:
      "mt-8 mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg",
    sizes: "(max-width: 768px) 100vw, 448px",
  },
  portrait: {
    wrapper:
      "mt-8 mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg",
    sizes: "(max-width: 768px) 100vw, 384px",
  },
} as const satisfies Record<
  HeroImageData["size"],
  { wrapper: string; sizes: string }
>;

type Props = {
  hero: HeroImageData;
};

export const HeroImage = (props: Props) => {
  const { hero } = props;

  const { wrapper, sizes } = sizeStyles[hero.size];

  return (
    <figure
      className={`mx-auto flex w-full flex-col items-center${hero.className ? ` ${hero.className}` : ""}`}
    >
      <div className={`relative ${wrapper}`}>
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes={sizes}
          className={hero.fit === "contain" ? "object-contain" : "object-cover"}
          style={
            hero.objectPosition
              ? { objectPosition: hero.objectPosition }
              : undefined
          }
        />
      </div>

      {hero.caption ? (
        <figcaption className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {hero.caption}
        </figcaption>
      ) : null}
    </figure>
  );
};
