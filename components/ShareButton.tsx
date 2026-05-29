"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

type Props = {
  isDisabled?: boolean;
};

export function ShareButton(props: Props) {
  const { isDisabled } = props;

  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (isSharing) {
      return;
    }

    try {
      setIsSharing(true);

      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } catch (error) {
      // User cancelled the share sheet
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      console.error("Share failed:", error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      disabled={isSharing || isDisabled}
      aria-label="Share article"
      title="Share article"
      className="cursor-pointer rounded-md p-2 hover:bg-muted disabled:opacity-50"
    >
      <Share2 size={12} className="h-5 w-5 text-zinc-400 dark:text-zinc-400" />
    </button>
  );
}
