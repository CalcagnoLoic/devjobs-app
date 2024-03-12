import { createPortal } from "react-dom";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useState } from "react";

import FilterCheckbox from "../FilterCheckbox";
import FilterDropdown from "../FilterDropdown";
import FilterIcon from "../../../Icon/FilterIcon";
import FilterLocation from "../FilterLocation";
import FilterSearch from "../FilterSearch";
import InputField from "../../InputField";

type FilterBarProps = {
  css?: string;
};

const Component = ({ css }: FilterBarProps) => {
  const { isDark } = useDarkMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <form
      className={`mx-6 flex justify-end rounded py-4 pl-8 pr-4 md:mx-auto ${isDark ? "bg-mirage" : "bg-white"} ${css}`}
    >
      <FilterSearch />

      <FilterLocation additionalCSS="hidden md:flex border-x-[1px] border-x-athensGray" />

      <div className="flex w-[345px] justify-center gap-x-7 lg:justify-end">
        <FilterCheckbox additionalCSS="hidden md:flex" />

        <FilterIcon kind="filter" onClick={handleClick} />

        {window.innerWidth > 768 ? (
          <InputField
            type="submit"
            value="Search"
            css="w-[48px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage md:w-[123px]"
          />
        ) : (
          <div className="relative">
            <InputField
              type="submit"
              value=" "
              css="w-[48px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage md:w-[123px]"
            />
            <FilterIcon kind="search" />
          </div>
        )}
      </div>

      {isOpen && createPortal(<FilterDropdown />, document.body)}
    </form>
  );
};

export default Component;
