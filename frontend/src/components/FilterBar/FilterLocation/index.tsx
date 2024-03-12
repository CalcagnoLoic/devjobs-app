import FilterIcon from "../../../Icon/FilterIcon";

import InputField from "../../InputField";

const Component = () => (
  <div className="hidden w-[200px] border-x-[1px] border-x-athensGray px-4 md:flex lg:w-[302px]">
    <FilterIcon kind="location" />
    <InputField
      type="text"
      placeholder="Filter by location, ..."
      css="bg-transparent"
    />
  </div>
);

export default Component;
