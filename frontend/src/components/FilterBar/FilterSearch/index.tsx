import FilterIcon from "../../../Icon/FilterIcon";
import InputField from "../../InputField";

const Component = () => (
  <div className="flex w-[200px] lg:w-[463px]">
    <div className="hidden md:flex md:self-center">
      <FilterIcon kind="search" />
    </div>

    <InputField
      type="text"
      placeholder={
        window.innerWidth > 850
          ? "Filter by title, companies, expertise, ..."
          : "Filter by title..."
      }
      css="ml-6 h-full self-center bg-transparent md:ml-0 md:w-3/4 "
    />
  </div>
);

export default Component;
