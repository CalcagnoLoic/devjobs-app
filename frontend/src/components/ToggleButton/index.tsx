import { useDarkMode } from "../../hooks/useDarkMode";
import { useRef, KeyboardEventHandler } from "react";

import DarkModeIcon from "../../Icon/DarkModeIcon";

const Component = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useDarkMode();

  const handleKeydown: KeyboardEventHandler<HTMLLabelElement> = (
    keyboardEvent,
  ) => {
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
      checkbox.current?.click();
    }
  };

  return (
    <>
      <DarkModeIcon kind="sun" />
      <input
        type="checkbox"
        id="check-button"
        className="hidden"
        title="Toggle dark theme"
        onClick={toggleTheme}
        ref={checkbox}
      />
      <label
        htmlFor="check-button"
        tabIndex={0}
        onKeyDown={handleKeydown}
        className="check-button relative h-5 w-[40px] cursor-pointer select-none self-center rounded-[10px] bg-white before:absolute before:left-[7%] before:top-2/4 before:size-[14px] before:translate-y-[-50%] before:rounded-3xl before:bg-royalBlue before:content-[''] [&:before]:transition-transform [&:before]:duration-300"
      ></label>
      <DarkModeIcon kind="moon" />
    </>
  );
};

export default Component;
