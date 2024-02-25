import { JobOffer } from "../../types/types";

import Anchor from "../Anchor";
import JobCharacteristic from "../JobCharacteristic";
import JobInformations from "../JobInformations";

const Component = ({ datas }: { datas: JobOffer }) => {
  return (
    <div className="mt-6 bg-white p-12">
      <div className="flex justify-between">
        <JobInformations
          JobData={datas}
          styleLocation="mt-2"
          css="mt-2 block text-3xl font-bold text-mirage"
          isRedirect={false}
          isCompanyName={false}
        />

        <Anchor
          href={datas?.apply}
          children="Apply Now"
          css="self-center"
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
