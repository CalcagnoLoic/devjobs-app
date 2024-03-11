import { useDarkMode } from "../../../hooks/useDarkMode";

import FilterCheckbox from "../FilterCheckbox";
import FilterIcon from "../../../Icon/FilterIcon";
import FilterLocation from "../FilterLocation";
import FilterSearch from "../FilterSearch";
import InputField from "../../InputField";

const Component = ({ css }: { css: string }) => {
  const { isDark } = useDarkMode();

  return (
    <form
      action=""
      className={`flex justify-end rounded py-4 pl-8 pr-4 ${isDark ? "bg-mirage" : "bg-white"} ${css}`}
    >
      <FilterSearch />

      <FilterLocation />

      <div className="flex w-[345px] justify-center gap-x-7 lg:justify-end">
        <FilterCheckbox />

        <FilterIcon kind="filter" />
        {window.innerWidth > 768 ? (
          <InputField
            type="submit"
            value="Search"
            css={`w-[48px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage md:w-[123px]`}
          />
        ) : (
          <div className="relative">
            <InputField
              type="submit"
              value=" "
              css={`w-[48px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage md:w-[123px]`}
            />
            <FilterIcon kind="search" />
          </div>
        )}
      </div>
    </form>
  );
};

export default Component;
