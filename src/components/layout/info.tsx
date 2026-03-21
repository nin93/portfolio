import { Link, Github, Linkedin, Download } from "lucide-react";
import Em from "@/components/typography/em";
import H1 from "@/components/typography/h1";
import Paragraph from "@/components/typography/paragraph";
import DownloadLink from "@/components/ui/download-link";
import Filled from "@/components/ui/filled";

export default function Info() {
  return (
    <>
      <H1>Elia Franzella</H1>

      <div className="space-y-4">
        <Paragraph>
          I&apos;m a developer specializing in building highly scalable,
          event-driven applications.
        </Paragraph>

        <Paragraph>
          I started my journey as a Physics student at the University of
          Palermo, getting involved in mathematical modeling and simulation
          computing in the C programming language. Over the course of the years
          I worked in distributed and even-driven environments, building up my
          knowledge in back-end systems <Em /> now I&apos;m leaning into
          full-stack development, with an eye over security.
        </Paragraph>

        <Paragraph>
          I like to play with noise and randomness <Em /> as a programmer, as a
          musician and as a photographer.
        </Paragraph>

        <Paragraph>
          Feel free to reach out to me at{" "}
          <Link
            href="mailto:franzella.elia@gmail.com"
            className="text-strong-foreground-dark underline underline-offset-2"
          >
            franzella.elia@gmail.com
          </Link>
          .
        </Paragraph>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm transition-colors md:gap-4 lg:text-base">
        <Link href="https://www.github.com/nin93/">
          <Filled interactive>
            <Github className="fill-foreground-dark w-3" />
            GitHub
          </Filled>
        </Link>

        <Link href="https://www.linkedin.com/in/elia-franzella-20a046234/">
          <Filled interactive>
            <Linkedin className="fill-foreground-dark w-3" />
            LinkedIn
          </Filled>
        </Link>

        {"/"}

        <DownloadLink
          href="resume/elia_franzella_cv_202603_en.pdf"
          filename="elia_franzella_cv_202603_en.pdf"
        >
          <Filled interactive>
            <Download className="fill-foreground-dark w-3" />
            Download CV
          </Filled>
        </DownloadLink>
      </div>
    </>
  );
}
