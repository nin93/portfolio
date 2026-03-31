import { ReactNode, startTransition, useState } from "react";

import Image from "next/image";

import Paragraph from "@/components/typography/paragraph";
import Link from "@/components/ui/link";
import H3 from "@/components/typography/h3";
import Filled from "@/components/ui/filled";

import Git from "@/icons/git.svg";
import Globe from "@/icons/globe.svg";

export type ProjectTechProps = {
  label: string;
  icon: ReactNode;
};

export type ProjectProps = {
  description: string;
  title: string;
  href: string;
  externalLink?: string;
  className?: string;
  src: string;
  tech: ProjectTechProps[];
  reverse?: boolean;
};

export default function Project({
  title,
  description,
  href,
  externalLink,
  src,
  tech,
  className,
}: ProjectProps) {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const externalPathname = externalLink
    ? URL.parse(externalLink)?.hostname
    : null;

  return (
    <div className={`${className} space-y-4`}>
      <H3>{title}</H3>

      <Image
        className={`${isLoadedImage ? "opacity-100" : "opacity-0"} aspect-3/2 w-full object-cover`}
        onLoad={() => startTransition(() => setIsLoadedImage(true))}
        width={544}
        height={363}
        src={src}
        alt={title}
      />

      <Paragraph>{description}</Paragraph>

      <div className="flex flex-wrap gap-2">
        {tech.map((tech, i) => (
          <Filled key={`project_${title}_tech_${i}`}>
            <span className="fill-foreground w-3 md:w-3.5">{tech.icon}</span>
            {tech.label}
          </Filled>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 md:gap-4">
        <Link href={href} className="text-xs md:text-base" external>
          <Filled interactive>
            <Git className="fill-foreground w-3 md:w-3.5" />
            Source code
          </Filled>
        </Link>

        {externalLink && externalPathname ? (
          <Link href={externalLink} className="text-xs md:text-base" external>
            <Filled interactive>
              <Globe className="fill-foreground w-3 md:w-3.5" />
              {externalPathname}
            </Filled>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
