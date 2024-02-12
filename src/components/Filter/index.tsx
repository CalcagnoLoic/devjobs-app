import FilterIcon from "../../Icon/FilterIcon";

const Component = ({ css }: { css: string }) => {
  return (
    <form action="" className={`flex rounded bg-white px-8 py-3 ${css}`}>
      <div className="flex w-[463px]">
        <FilterIcon kind="search" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Filter by title, companies, expertise, ..."
          className="w-3/4 self-center"
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

      <div className="ml-7 flex w-[345px] gap-3">
        <div className="flex self-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-4 h-[24px] w-[24px] cursor-pointer appearance-none self-center rounded bg-athensGray"
          />
          <label htmlFor="" className="self-center font-bold ">
            {" "}
            Full time Only
          </label>
        </div>
        <input
          type="submit"
          value="Search"
          className="ml-6 w-[123px] cursor-pointer rounded bg-royalBlue px-8 py-4 font-bold text-white transition duration-300 hover:bg-portage"
        />
      </div>
    </form>
  );
};

export default Component;
