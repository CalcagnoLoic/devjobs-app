import FilterIcon from "../../../Icon/FilterIcon";

const Component = () => (
  <div className="hidden w-[200px] border-x-[1px] border-x-athensGray px-4 md:flex lg:w-[302px]">
    <FilterIcon kind="location" />
    <input
      type="text"
      name=""
      id=""
      placeholder="Filter by location, ..."
      className="bg-transparent"
    />
  </div>
);

export default Component;
