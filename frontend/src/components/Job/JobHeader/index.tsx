import { JobOffer } from "../../../types/types";
import { useConvertedColor } from "../../../hooks/useConvertedColor";
import { useDarkMode } from "../../../hooks/useDarkMode";

import Anchor from "../../Anchor";

const Component = ({ datas }: { datas: JobOffer }) => {
  const convertedColor = useConvertedColor(datas?.logoBackground);
  const { isDark } = useDarkMode();

  return (
    <header
      className={`flex overflow-hidden rounded-md rounded-tl-none bg-white ${isDark ? "bg-mirage" : "bg-white"}`}
    >
      <div
        style={{ backgroundColor: convertedColor }}
        className="grid size-[140px] shrink-0 place-content-center"
      >
        <img src={datas?.logo} alt="" className="scale-[2]" />
      </div>

      <div className="flex flex-1 items-center justify-between px-10">
        <div>
          <h2
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-mirage"}`}
          >
            {datas?.company}
          </h2>
          <p className="mt-3 break-all text-base text-lynch">
            {datas?.website}
          </p>
        </div>
        <div>
          <Anchor href={datas?.website} children="Company Site" />
        </div>
      </div>
    </header>
  );
};

export default Component;
