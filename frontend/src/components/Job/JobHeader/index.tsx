import { JobOffer } from "../../../types/types";
import { useConvertedColor } from "../../../hooks/useConvertedColor";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { convertWebsiteName } from "../../../utils/convertWebsiteName";

import Anchor from "../../Anchor";

const Component = ({ datas }: { datas: JobOffer }) => {
  const convertedColor = useConvertedColor(datas?.logoBackground);
  const domain = (datas?.website.match(/\/([^\\/]+)\/?$/) || [])[1];
  const website = convertWebsiteName(datas?.website, domain);
  const { isDark } = useDarkMode();

  return (
    <header
      className={`flex overflow-hidden rounded-md rounded-tl-none  ${isDark ? "bg-mirage" : "bg-white"}`}
    >
      <div
        style={{ backgroundColor: convertedColor }}
        className="grid size-[140px] shrink-0 place-content-center "
      >
        <img src={datas?.logo} alt="" className="scale-[2]" />
      </div>

      <div className="my-3 flex flex-1 flex-col items-center justify-between px-10 md:my-0 md:flex-row">
        <div className="-ml-3 md:-ml-0">
          <h2
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-mirage"}`}
          >
            {datas?.company}
          </h2>
          <p className="mt-1 break-all text-base text-lynch md:mt-3">
            {website}
          </p>
        </div>
        <div>
          <Anchor
            href={datas?.website}
            children="Company Site"
            css="flex -ml-3"
          />
        </div>
      </div>
    </header>
  );
};

export default Component;
