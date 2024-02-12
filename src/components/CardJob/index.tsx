import { JobOffer } from "../../types/types";
import { Link } from "react-router-dom";

type jobInfosProps = {
  jobInformations: JobOffer;
};

const Component = ({ jobInformations }: jobInfosProps) => {
  return (
    <>
      <li className="min-w-[350px] bg-white px-8 pb-9 pt-12 rounded-md">
        <div className={`bg-[${jobInformations.logoBackground}]`}>
          <img
            src={jobInformations.logo}
            alt={`${jobInformations.company} logo`}
          />
        </div>
        <p>
          {jobInformations.postedAt} . {jobInformations.contract}
        </p>
        <Link to={`/job-detail/${jobInformations.id}`}>
          {jobInformations.position}
        </Link>
        <p>{jobInformations.company}</p>
        <p className="location text-royalBlue font-bold">{jobInformations.location}</p>
      </li>
    </>
  );
};

export default Component;
