import { useState } from "react";

import Image from "next/image";

import DisableScroll from "@/components/layout/disable-scroll";
import Ring from "@/icons/180-ring.svg";
import XMark from "@/icons/xmark.svg";

export type PhotographPreviewProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export default function PhotographPreview({
  src,
  alt,
  onClick,
}: PhotographPreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <dialog
      className="space-y fixed inset-0 z-10 flex h-full w-full cursor-pointer items-center overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClick}
      open
    >
      <button
        className="fill-foreground-dimmed hover:fill-foreground-strong fixed top-4 right-4 cursor-pointer p-4 transition-colors"
        onClick={onClick}
      >
        <XMark className="w-3" />
      </button>

      <Image
        className={`${!isLoaded ? "w-0 opacity-0" : "opacity-100"} m-auto transition-opacity`}
        onLoad={() => setIsLoaded(true)}
        quality={100}
        width={1440}
        height={0}
        src={src}
        alt={alt}
      />

      {!isLoaded ? (
        <span className="flex grow justify-center">
          <Ring className="fill-foreground-muted w-8" />
        </span>
      ) : (
        <></>
      )}

      <DisableScroll />
    </dialog>
  );
}
