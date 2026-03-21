import { ProjectProps } from "@/components/models/project";

import Cloudflare from "@/icons/cloudflare.svg";
import Crystal from "@/icons/crystal.svg";
import Gem from "@/icons/gem.svg";
import Qwik from "@/icons/qwik.svg";
import Tailwindcss from "@/icons/tailwindcss.svg";
import TypeScript from "@/icons/typescript.svg";

export const PROJECTS: ProjectProps[] = [
  {
    title: "www.stateofneptune.com",
    description:
      "State Of Neptune's official band website. Server side rendered single page application built with the Qwik framework. Hosted on Cloudflare Pages.",
    externalLink: "https://www.stateofneptune.com/",
    href: "https://github.com/stateofneptune/stateofneptune.com",
    tech: [
      {
        label: "Qwik",
        icon: <Qwik />,
      },
      {
        label: "TypeScript",
        icon: <TypeScript />,
      },
      {
        label: "TailwindCSS",
        icon: <Tailwindcss />,
      },
      {
        label: "Cloudflare",
        icon: <Cloudflare />,
      },
    ],
    src: "/images/projects/stateofneptune-com-img.png",
  },
  {
    title: "Alea",
    description:
      "Library to work with most known probability distributions. Features pseudo-random number generator (PRNG) implementations, high-level APIs for repeatable random sampling and cumulative distribution functions (CDF).",
    href: "https://github.com/nin93/alea",
    tech: [
      {
        label: "Crystal",
        icon: <Crystal />,
      },
      {
        label: "Shards",
        icon: <Gem />,
      },
    ],
    src: "/images/projects/alea-img.png",
  },
  {
    title: "Talgene",
    description:
      "Abstraction layer over genetic algorithm implementations. Fetures auto-iterations over generation advances and built-in genetic cross functions.",
    href: "https://github.com/nin93/talgene",
    tech: [
      {
        label: "Crystal",
        icon: <Crystal />,
      },
      {
        label: "Shards",
        icon: <Gem />,
      },
    ],
    src: "/images/projects/talgene-img.png",
  },
];
