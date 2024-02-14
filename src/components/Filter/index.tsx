import FilterIcon from "../../Icon/FilterIcon";

const Component = ({ css }: { css: string }) => {
  return (
    <form
      action=""
      className={`flex justify-end rounded bg-white py-4 pl-8 pr-4 ${css}`}
    >
      <div className="flex w-[463px]">
        <FilterIcon kind="search" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Filter by title, companies, expertise, ..."
          className="h-full w-3/4 self-center"
        />
      </div>

      <div className="flex w-[302px] border-x-[1px] border-x-athensGray px-4">
        <FilterIcon kind="location" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Filter by location, ..."
        />
      </div>

      <div className="flex w-[345px] justify-end gap-x-7">
        <div className="flex items-center gap-x-4">
          <input
            type="checkbox"
            id="fullTimeOnly"
            className="checked:bg-checkbox h-[24px] w-[24px] cursor-pointer appearance-none self-center rounded bg-athensGray transition-[background, opacity] duration-300 checked:bg-royalBlue checked:bg-[length:15px] checked:bg-center checked:bg-no-repeat hover:bg-royalBlue hover:opacity-25 checked:hover:opacity-100"
          />
          <label
            htmlFor="fullTimeOnly"
            className="cursor-pointer self-center font-bold text-mirage"
          >
            Full Time Only
          </label>
        </div>
        <input
          type="submit"
          value="Search"
          className="w-[123px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage"
        />
      </div>
    </form>
  );
};

export default Component;
