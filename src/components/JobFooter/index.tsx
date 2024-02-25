import { JobOffer } from "../../types/types";
import Anchor from "../Anchor";

const Component = ({ datas }: { datas: JobOffer }) => {
  return (
    <footer className="mt-20 bg-white">
      <div className="w-full max-w-[730px] flex items-center justify-between py-6 m-auto">
        <div>
          <p className="text-xl font-bold text-mirage">{datas?.position}</p>
          <p className="mt-3 capitalize text-lynch">{datas?.company}</p>
        </div>
        <Anchor href={datas?.apply} target="_blank">
          Apply Now
        </Anchor>
      </div>
    </footer>
  );
};

export default Component;
