import { useDarkMode } from "../../../hooks/useDarkMode";
import { useRef } from "react";

import FilterLocation from "../FilterLocation";
import FilterCheckbox from "../FilterCheckbox";
import InputField from "../../InputField";
import { useCloseDropdown } from "../../../hooks/useCloseDropdown";

type FilterDropdownProps = {
  isOpen: boolean;
  setIsOpen: (newValue: boolean) => void;
};

const Component = ({ isOpen, setIsOpen }: FilterDropdownProps) => {
  const { isDark } = useDarkMode();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useCloseDropdown({
    state: isOpen,
    callback: setIsOpen,
    dropdownRef: dropdownRef,
  });

  return (
    <form>
      <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50"></div>
      <div
        ref={dropdownRef}
        className={`absolute left-1/2 top-0 z-20 mt-72 -translate-x-[50%] rounded p-6 ${isDark ? "bg-mirage " : "bg-white"}`}
      >
        <FilterLocation additionalCSS="flex pb-6" />
        <FilterCheckbox />

        <InputField type="submit" value="Search" css="w-full input-submit" />
      </div>
    </form>
  );
};

export default Component;
