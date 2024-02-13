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

  return (
    <>
      <li className="relative min-w-[350px] rounded-md bg-white px-8 pb-9 pt-12">
        <div
          style={{ backgroundColor: convertedColor }}
          className="absolute top-0 grid h-12 w-12 -translate-y-1/2 place-content-center rounded-2xl"
        >
          <img
            src={jobInformations.logo}
            alt={`${jobInformations.company} logo`}
          />
        </div>
        <p className="text-base text-lynch">
          {jobInformations.postedAt}
          <span className="mx-3 text-3xl leading-3">.</span>
          {jobInformations.contract}
        </p>
        <Link
          to={`/job-detail/${jobInformations.id}`}
          className="font-bold mt-4 block text-mirage text-xl"
        >
          {jobInformations.position}
        </Link>
        <p className="mt-4 text-base text-lynch">{jobInformations.company}</p>
        <p className="location mt-11 text-sm font-bold text-royalBlue">
          {jobInformations.location}
        </p>
      </li>
    </>
  );
};

export default Component;
