import { useDarkMode } from "../../../hooks/useDarkMode";

const Component = () => {
  const { isDark } = useDarkMode();
  return (
    <div className="flex items-center gap-x-4 md:ml-3">
      <input
        type="checkbox"
        id="fullTimeOnly"
        className="transition-[background, opacity] hidden h-[24px] w-[24px] cursor-pointer appearance-none self-center rounded bg-athensGray duration-300 checked:bg-royalBlue checked:bg-checkbox checked:bg-[length:15px] checked:bg-center checked:bg-no-repeat hover:bg-royalBlue hover:opacity-25 checked:hover:opacity-100 md:block"
      />
      <label
        htmlFor="fullTimeOnly"
        className={`hidden cursor-pointer self-center font-bold  md:block  ${isDark ? "text-white" : "text-mirage"}`}
      >
        Full Time Only
      </label>
    </div>
  );
};

export default Component;
