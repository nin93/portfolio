import DownloadLink from "@/components/download-link";
import Filled from "@/components/ui/filled";
import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import Job from "@/components/job";
import Link from "@/components/link";
import Paragraph from "@/components/typography/paragraph";

import Download from "@/icons/download.svg";
import Github from "@/icons/github.svg";
import Linkedin from "@/icons/linkedin.svg";

import { JOBS } from "@/constants/jobs";

function Info() {
  return (
    <>
      <H1>Elia Franzella</H1>

      <div className="space-y-4">
        <Paragraph>
          I&apos;m a developer specializing in building highly scalable,
          event-driven backend systems.
        </Paragraph>

        <Paragraph>
          Over the course of 5 years I designed and developed modern backend
          solutions within distributed and cloud-native software ecosystems
          using the NestJS framework. I built, maintained and reformed RESTful,
          gRPC and GraphQL APIs, monitoring and enhancing stability and
          performance using tools like Instana and Kibana (ELK).
        </Paragraph>

        <Paragraph>
          Feel free to reach out to me at{" "}
          <a
            href="mailto:franzella.elia@gmail.com"
            className="text-strong-foreground-dark underline underline-offset-2"
          >
            franzella.elia@gmail.com
          </a>
          .
        </Paragraph>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm transition-colors md:gap-4 lg:text-base">
        <Link href="https://www.github.com/nin93/">
          <Filled>
            <Github className="fill-foreground-dark w-3" />
            GitHub
          </Filled>
        </Link>

        <Link href="https://www.linkedin.com/in/elia-franzella-20a046234/">
          <Filled>
            <Linkedin className="fill-foreground-dark w-3" />
            LinkedIn
          </Filled>
        </Link>

        {"/"}

        <DownloadLink
          href="resume/elia_franzella_cv_202603_en.pdf"
          filename="elia_franzella_cv_202603_en.pdf"
        >
          <Filled>
            <Download className="fill-foreground-dark w-3" />
            Download CV
          </Filled>
        </DownloadLink>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-65px)] flex-col justify-center space-y-8 pb-12">
        <Info />
      </div>

      <div className="border-muted-background-dark space-y-8 border-t pt-8 pb-24">
        <H2>Working Experience</H2>

        {JOBS.map((props, i) => (
          <Job key={`job_${i}`} {...props} />
        ))}
      </div>
    </>
  );
}
