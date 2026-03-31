import { useState, startTransition } from "react";

import Image from "next/image";

import PhotographPreview from "@/components/models/photograph-preview";
import H3 from "@/components/typography/h3";
import Paragraph from "@/components/typography/paragraph";

import Expand from "@/icons/expand.svg";

export type PhotographProps = {
  className?: string;
  title: string;
  medium: string;
  date: string;
  src: string;
};

export default function Photograph({
  title,
  src,
  className,
  medium,
  date,
}: PhotographProps) {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [isOpenPreview, setIsOpenPreview] = useState(false);

  return (
    <div className={`${className} space-y-4`}>
      <H3>{title}</H3>

      <div className="group relative" onClick={() => setIsOpenPreview(true)}>
        <Image
          className={`${isLoadedImage ? "opacity-100" : "opacity-0"} aspect-3/2 w-full cursor-pointer object-cover`}
          onLoad={() => startTransition(() => setIsLoadedImage(true))}
          width={544}
          height={363}
          quality={100}
          src={src}
          alt={title}
        />

        <span className="fill-foreground-strong absolute right-0 bottom-0 m-5 cursor-pointer opacity-0 mix-blend-exclusion transition-opacity group-hover:opacity-100">
          <Expand className="w-3" />
        </span>
      </div>

      {isOpenPreview ? (
        <PhotographPreview
          onClick={() => setIsOpenPreview(false)}
          src={src}
          alt={title}
        />
      ) : (
        <></>
      )}

      <Paragraph>{medium}</Paragraph>

      <div className="flex flex-wrap items-baseline justify-between">
        <Paragraph className="text-foreground-dimmed">{date}</Paragraph>
      </div>
    </div>
  );
}
