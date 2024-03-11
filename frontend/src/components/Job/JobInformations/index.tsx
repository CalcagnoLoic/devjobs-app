import { JobOffer } from "../../../types/types";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";

interface JobInformations {
  JobData: JobOffer;
  styleLocation: string;
  css: string;
  isRedirect: boolean;
  isCompanyName: boolean;
}

const Component = ({
  JobData,
  styleLocation,
  css,
  isRedirect,
  isCompanyName,
}: JobInformations) => {
  const { isDark } = useDarkMode();

  return (
    <div>
      <p className="text-base text-lynch">
        {JobData?.postedAt}
        <span className="mx-3 text-3xl leading-3">.</span>
        {JobData?.contract}
      </p>

      {isRedirect ? (
        <Link
          to={`/job-detail/${JobData.id}`}
          className={`mt-2 block text-xl font-bold transition-all  duration-300 hover:text-lynch md:mt-4 ${isDark ? "text-white" : "text-mirage"}`}
        >
          {" "}
          {JobData.position}
        </Link>
      ) : (
        <p
          className={`mt-2 block text-xl font-bold md:mt-4 md:text-3xl ${isDark ? "text-white" : "text-mirage"}`}
        >
          {JobData.position}
        </p>
      )}

      {isCompanyName && <p className={`${css}`}>{JobData?.company}</p>}

      <p className={`font-bold text-royalBlue ${styleLocation}`}>
        {JobData?.location}
      </p>
    </div>
  );
};

export default Component;
