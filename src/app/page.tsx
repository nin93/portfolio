import H2 from "@/components/typography/h2";

import Info from "@/components/layout/info";
import Job from "@/components/models/job";

import { JOBS } from "@/constants/jobs";

export default function Me() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-65px)] flex-col justify-center space-y-8 pt-12 pb-26">
        <Info />
      </section>

      <section className="border-background-lighten space-y-8 border-t pt-8 pb-24">
        <H2>Work Experience</H2>

        {JOBS.map((props, i) => (
          <Job key={`job_${i}`} className="space-y-2" {...props} />
        ))}
      </section>
    </>
  );
}
