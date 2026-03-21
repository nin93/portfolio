import H2 from "@/components/typography/h2";

import Info from "@/components/layout/info";
import Job from "@/components/models/job";

import { JOBS } from "@/constants/jobs";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-65px)] flex-col justify-center space-y-8 pb-14">
        <Info />
      </div>

      <div className="border-muted-background-dark space-y-8 border-t pt-8 pb-24">
        <H2>Work Experience</H2>

        {JOBS.map((props, i) => (
          <Job key={`job_${i}`} {...props} />
        ))}
      </div>
    </>
  );
}
