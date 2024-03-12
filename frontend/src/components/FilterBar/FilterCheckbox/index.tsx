import { FilterProps } from "../../../types/types";
import { useDarkMode } from "../../../hooks/useDarkMode";

import InputField from "../../InputField";

const Component = ({ additionalCSS }: FilterProps) => {
  const { isDark } = useDarkMode();

  return (
    <div className="flex items-center gap-x-4 md:ml-3 py-6 md:py-0">
      <InputField
        type="checkbox"
        id="fullTimeOnly"
        css={`transition-[background, opacity] h-[24px] w-[24px] cursor-pointer appearance-none self-center rounded bg-athensGray duration-300 checked:bg-royalBlue checked:bg-checkbox checked:bg-[length:15px] checked:bg-center checked:bg-no-repeat hover:bg-royalBlue hover:opacity-25 checked:hover:opacity-100 md:block ${additionalCSS}`}
      />

      <label
        htmlFor="fullTimeOnly"
        className={`${additionalCSS} cursor-pointer self-center font-bold  md:block  ${isDark ? "text-white" : "text-mirage"}`}
      >
        Full Time Only
      </label>
    </div>
  );
};

export default Component;
