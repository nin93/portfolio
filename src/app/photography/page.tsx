import { Suspense } from "react";

import PhotographsPage from "@/components/layout/photographs-page";
import H2 from "@/components/typography/h2";

const PHOTOGRAPHS_PER_PAGE = 2;

export default function Photography() {
  return (
    <div className="mt-12 flex h-full flex-col justify-between space-y-8">
      <div className="space-y-8">
        <H2>Photography</H2>

        <Suspense>
          <PhotographsPage perPage={PHOTOGRAPHS_PER_PAGE} />
        </Suspense>
      </div>
    </div>
  );
}
