import { useDarkMode } from "../../../hooks/useDarkMode";
import { JobOffer } from "../../../types/types";

import Anchor from "../../Anchor";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ datas }: { datas: JobOffer }) => {
  const { isDark } = useDarkMode();

  return (
    <footer className={`mt-20 ${isDark ? "bg-mirage" : "bg-white"}`}>
      <div className="m-auto flex w-full max-w-[730px] items-center justify-between py-6">
        <div className="hidden md:block">
          <Paragraph
            kind="p"
            content={datas?.position}
            css={`text-xl font-bold ${isDark ? "text-white" : "text-mirage"}`}
          />

          <Paragraph
            kind="p"
            content={datas?.company}
            css="mt-3 capitalize text-lynch"
          />
        </div>
        <Anchor
          href={datas?.apply}
          target="_blank"
          css="text-center w-full md:w-auto mx-6 "
        >
          Apply Now
        </Anchor>
      </div>
    </footer>
  );
};

export default Component;
