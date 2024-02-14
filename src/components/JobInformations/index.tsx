import { Link } from "react-router-dom";
import { JobOffer } from "../../types/types";

const Component = ({JobData}: {JobData: JobOffer}) => (
    <div>
        <p className="text-base text-lynch">
            {JobData?.postedAt}
            <span className="mx-3 text-3xl leading-3">.</span>
            {JobData?.contract}
        </p>
        <Link
          to={`/job-detail/${JobData.id}`}
          className="mt-4 block text-xl font-bold text-mirage"
        >
          {JobData.position}
        </Link>
        <p className="mt-2 block text-3xl font-bold text-mirage">{JobData?.company}</p>
        <p className="mt-2 text-sm font-bold text-royalBlue">{JobData?.location}</p>
    </div>
);

export default Component