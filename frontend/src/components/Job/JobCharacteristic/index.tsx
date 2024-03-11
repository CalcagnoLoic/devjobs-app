import { JobOffer } from "../../../types/types";
import { useDarkMode } from "../../../hooks/useDarkMode";

import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface JobCharacteristicProps {
  content: string;
  jobData: JobOffer;
  listStyle: string;
}

const Component = ({ content, jobData, listStyle }: JobCharacteristicProps) => {
  const { isDark } = useDarkMode();

  return (
    <div className="mt-12 text-lynch">
      <Heading
        kind="h2"
        css={`text-xl font-bold ${isDark ? "text-white" : "text-mirage"}`}
        content={content}
      />

      <Paragraph
        kind="p"
        content={jobData?.requirements.content}
        css="mt-7 leading-7 text-lynch"
      />

      <ul className="ml-4 mt-8">
        {jobData?.requirements.items.map((item: string, index: number) => (
          <li key={index} className={`mt-4 ${listStyle} text-royalBlue`}>
            <Paragraph kind="p" content={item} css="ml-8 text-lynch" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
