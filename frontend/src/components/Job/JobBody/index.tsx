import { useDarkMode } from "../../../hooks/useDarkMode";
import { JobOffer } from "../../../types/types";

import Anchor from "../../Anchor";
import JobCharacteristic from "../JobCharacteristic";
import JobInformations from "../JobInformations";

const Component = ({ datas }: { datas: JobOffer }) => {
  const { isDark } = useDarkMode();

  return (
    <div className={`mt-6 p-12 ${isDark ? "bg-mirage" : "bg-white"}`}>
      <div className="flex flex-col justify-between md:flex-row">
        <JobInformations
          JobData={datas}
          styleLocation="mt-2"
          css="block font-bold"
          isRedirect={false}
          isCompanyName={false}
        />

        <Anchor
          href={datas?.apply}
          children="Apply Now"
          css="self-center mt-12 md:mt-0 text-center w-full md:w-auto"
        />
      </div>

      <p className="mt-12 leading-7 text-lynch">{datas?.description}</p>

      <JobCharacteristic
        content="Requirements"
        jobData={datas}
        listStyle="list-disc"
      />

      <JobCharacteristic
        content="What You Will Do"
        jobData={datas}
        listStyle="list-decimal"
      />
    </div>
  );
};

export default Component;
