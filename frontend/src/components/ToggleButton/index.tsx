import { useDarkMode } from "../../hooks/useDarkMode";
import { useRef, KeyboardEventHandler, useEffect } from "react";

import DarkModeIcon from "../../Icon/DarkModeIcon";
import InputField from "../InputField";

const Component = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const { toggleTheme, isDark } = useDarkMode();

  const handleKeydown: KeyboardEventHandler<HTMLLabelElement> = (
    keyboardEvent,
  ) => {
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
      checkbox.current?.click();
    }
  };

  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.checked = isDark;
    }
  }, [isDark]);

  return (
    <>
      <DarkModeIcon kind="sun" />
      <InputField
        type="checkbox"
        id="check-button"
        css="hidden"
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
