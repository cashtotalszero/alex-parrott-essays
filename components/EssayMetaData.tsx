"use client";

import { useEffect, useState } from "react";

import { ShareButton } from "./ShareButton";

type Props = {
  readingTime: string | number;
};

export const EssayMetaData = (props: Props) => {
  const { readingTime } = props;

  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  return (
    <div className="flex items-center">
      <time className="text-sm text-zinc-500 dark:text-zinc-400 flex gap-2">
        <span>Essays</span>
        <span>•</span>
        <span>{readingTime} min read</span>
        <span>•</span>
      </time>

      <ShareButton isDisabled={!canShare} />
    </div>
  );
};
