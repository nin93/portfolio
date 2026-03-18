import Image from "next/image";

import Paragraph from "@/components/typography/paragraph";
import H3 from "@/components/typography/h3";

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
  return (
    <div className={`${className} space-y-4`}>
      <H3>{title}</H3>

      <Image
        className="w-full"
        quality={100}
        width={512}
        height={288}
        src={src}
        alt={title}
      />

      <Paragraph>{medium}</Paragraph>

      <Paragraph className="text-muted-foreground-dark">{date}</Paragraph>
    </div>
  );
}
