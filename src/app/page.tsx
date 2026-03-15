import { ArrowRight } from "lucide-react";

import DitheringCanvas from "@/components/dithering-canvas";
import DownloadLink from "@/components/download-link";
import H1 from "@/components/h1";
import H2 from "@/components/h2";
import Header from "@/components/header";
import LeftContainer from "@/components/left-container";
import Link from "@/components/link";
import Paragraph from "@/components/paragraph";
import WithCanvas from "@/components/with-canvas";
import Job from "@/components/job";

import { JOBS } from "@/constants/jobs";

function Info() {
  const externalArrow = (
    <>
      <span className="inline-flex">
        <ArrowRight className="-rotate-45" width={12} height={12}></ArrowRight>
      </span>
    </>
  );

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

      <div className="flex items-center gap-4 text-sm transition-colors lg:text-base">
        <Link href="https://www.github.com/nin93/" icon={externalArrow}>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/elia-franzella-20a046234/"
          icon={externalArrow}
        >
          LinkedIn
        </Link>
        —
        <DownloadLink
          href="resume/elia_franzella_cv_202603_en.pdf"
          filename="elia_franzella_cv_202603_en.pdf"
        >
          Download CV
        </DownloadLink>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <WithCanvas
        canvas={
          <>
            <DitheringCanvas
              className="h-full"
              colorBack="#0d0f00"
              colorFront="#770b03"
            />
          </>
        }
      >
        <LeftContainer className="min-h-screen w-full px-4">
          <Header />

          <div className="flex h-full flex-col justify-center space-y-8 pb-32">
            <Info />
          </div>
        </LeftContainer>

        <LeftContainer className="w-full px-4">
          <div className="border-muted-background-dark space-y-8 border-t pt-10">
            <H2>Working Experience</H2>

            {JOBS.map((props, i) => (
              <Job key={`job_${i}`} {...props} />
            ))}
          </div>
        </LeftContainer>
      </WithCanvas>
    </>
  );
}
