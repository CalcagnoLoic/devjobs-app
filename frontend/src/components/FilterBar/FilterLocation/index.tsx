import { FilterProps } from "../../../types/types";

import FilterIcon from "../../../Icon/FilterIcon";
import InputField from "../../InputField";

const Component = ({ additionalCSS }: FilterProps) => (
  <div className={`w-[302px] md:w-[230px] lg:w-[302px] md:px-4 md:flex ${additionalCSS}`}>
    <div className="flex mr-6">
      <FilterIcon kind="location" />
    </div>
    <InputField
      type="text"
      placeholder="Filter by location, ..."
      css="bg-transparent"
    />
  </div>
);

export default Component;
