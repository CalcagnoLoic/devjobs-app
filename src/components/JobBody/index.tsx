import { JobOffer } from "../../types/types";
import JobCharacteristic from "../JobCharacteristic";
import JobInformations from "../JobInformations";

const Component = ({ datas }: { datas: JobOffer }) => {
  return (
    <div className="mt-6 bg-white p-12">
      <div className="flex justify-between">
        <JobInformations JobData={datas} />


        <div className="cursor-pointer self-center rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage">
          <a href={datas?.apply} target="_blank">
            Apply Now
          </a>
        </div>
      </div>

      <p className="mt-12 leading-7 text-lynch">{datas?.description}</p>

      <JobCharacteristic content="Requirements" jobData={datas} listStyle="list-disc" />

      <JobCharacteristic content="What You Will Do" jobData={datas} listStyle="list-decimal" />
    </div>
  );
};

export default Component;
