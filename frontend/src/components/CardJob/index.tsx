import { JobOffer } from "../../types/types";
import { useConvertedColor } from "../../hooks/useConvertedColor";
import { useDarkMode } from "../../hooks/useDarkMode";

import JobInformations from "../Job/JobInformations";

type jobInfosProps = {
  jobInformations: JobOffer;
};

const Component = ({ jobInformations }: jobInfosProps) => {
  const convertedColor = useConvertedColor(jobInformations.logoBackground);
  const {isDark} = useDarkMode()

  return (
    <>
      <li className={`relative min-w-[350px] rounded-md px-8 pb-9 pt-12 ${isDark ? "bg-mirage" : "bg-white"}`}>
        <div
          style={{ backgroundColor: convertedColor }}
          className="absolute top-0 grid h-12 w-12 -translate-y-1/2 place-content-center rounded-2xl"
        >
          <img
            src={jobInformations.logo}
            alt={`${jobInformations.company} logo`}
          />
        </div>

        <JobInformations
          JobData={jobInformations}
          styleLocation="mt-11 text-sm"
          css="mt-4 text-base text-lynch"
          isRedirect={true}
          isCompanyName={true}
        />
      </li>
    </>
  );
};

export default Component;
