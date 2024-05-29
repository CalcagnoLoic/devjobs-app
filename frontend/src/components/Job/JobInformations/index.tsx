import { JobInformations } from "../../../types/interfaces";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";

import Paragraph from "../../../typographies/Paragraph";

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
      <Paragraph
        kind="p"
        css="text-base text-lynch"
        content={
          <>
            {JobData?.postedAt}
            <span className="mx-3 text-3xl leading-3">.</span>
            {JobData?.contract}
          </>
        }
      />

      {isRedirect ? (
        <Link
          to={`/job-detail/${JobData.id}`}
          className={`mt-2 block text-xl font-bold transition-all  duration-300 hover:text-lynch md:mt-4 ${isDark ? "text-white" : "text-mirage"}`}
        >
          {JobData.position}
        </Link>
      ) : (
        <Paragraph
          kind="p"
          content={JobData.position}
          css={`mt-2 block text-xl font-bold md:mt-4 md:text-3xl ${isDark ? "text-white" : "text-mirage"}`}
        />
      )}

      {isCompanyName && (
        <Paragraph kind="p" content={JobData?.company} css={css} />
      )}

      <Paragraph
        kind="p"
        content={JobData?.location}
        css={`font-bold text-royalBlue ${styleLocation}`}
      />
    </div>
  );
};

export default Component;
