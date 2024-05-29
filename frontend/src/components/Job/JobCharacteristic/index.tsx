import { JobCharacteristicProps } from "../../../types/interfaces";
import { parseRequirements } from "../../../utils/parseRequirements";
import { useEffect, useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";

import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";


const Component = ({
  content,
  jobRequirements,
  listStyle,
  jobDescription,
}: JobCharacteristicProps) => {
  const { isDark } = useDarkMode();
  const [requirementsList, setRequirementsList] = useState<Array<string>>([]);

  useEffect(() => {
    const parsedRequirements = parseRequirements(jobRequirements);
    setRequirementsList(parsedRequirements);
  }, [jobRequirements]);

  return (
    <div className="mt-12 text-lynch">
      <Heading
        kind="h2"
        css={`text-xl font-bold ${isDark ? "text-white" : "text-mirage"}`}
        content={content}
      />

      <Paragraph
        kind="p"
        content={jobDescription}
        css="mt-7 leading-7 text-lynch"
      />

      <ul className="ml-4 mt-8">
        {requirementsList.map((requirement: string, index: number) => (
          <li key={index} className={`mt-4 ${listStyle} text-royalBlue`}>
            <Paragraph kind="p" content={requirement} css="ml-8 text-lynch" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
