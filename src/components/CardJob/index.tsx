import { JobOffer } from "../../types/types";
import { Link } from "react-router-dom";
import ConvertHSLtoHex from "../../utils/ConvertHSLtoHex";
import ExtractHSLValue from "../../utils/ExtractHSLValue";
import { useEffect, useState } from "react";

type jobInfosProps = {
  jobInformations: JobOffer;
};

const Component = ({ jobInformations }: jobInfosProps) => {
  const [convertedColor, setConvertedColor] = useState<string>("");

  useEffect(() => {
    const hslValues = ExtractHSLValue(jobInformations.logoBackground);

    if (hslValues) {
      const { hue, saturation, lightness } = hslValues;
      const hexColor = ConvertHSLtoHex({ hue, saturation, lightness });
      setConvertedColor(hexColor);
    }
  }, [jobInformations.logoBackground]);

  console.log("------------");
  console.log(convertedColor);
  console.log("------------");

  return (
    <>
      <li className="min-w-[350px] rounded-md bg-white px-8 pb-9 pt-12">
        <div style={{backgroundColor: convertedColor}}>
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
        <p className="location font-bold text-royalBlue">
          {jobInformations.location}
        </p>
      </li>
    </>
  );
};

export default Component;
