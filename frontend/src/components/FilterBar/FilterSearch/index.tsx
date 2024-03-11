import FilterIcon from "../../../Icon/FilterIcon";

const Component = () => (
  <div className="flex w-[200px] lg:w-[463px]">
    <div className="hidden md:flex md:self-center">
      <FilterIcon kind="search" />
    </div>

    <input
      type="text"
      name=""
      id=""
      placeholder={
        window.innerWidth > 850
          ? "Filter by title, companies, expertise, ..."
          : "Filter by title..."
      }
      className="ml-6 h-full self-center bg-transparent md:ml-0 md:w-3/4 "
    />
  </div>
);

export default Component;
