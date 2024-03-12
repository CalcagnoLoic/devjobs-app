import { useDarkMode } from "../../../hooks/useDarkMode";

import FilterLocation from "../FilterLocation";
import FilterCheckbox from "../FilterCheckbox";
import InputField from "../../InputField";

const Component = () => {
  const { isDark } = useDarkMode();

  return (
    <form>
      <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50"></div>
      <div
        className={`absolute left-1/2 top-0 z-20 mt-72 -translate-x-[50%] rounded p-6 ${isDark ? "bg-mirage " : "bg-white"}`}
      >
        <FilterLocation additionalCSS="flex pb-6" />
        <FilterCheckbox />

        <InputField
          type="submit"
          value="Search"
          css="w-full cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage"
        />
      </div>
    </form>
  );
};

export default Component;
