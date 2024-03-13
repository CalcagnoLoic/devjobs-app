import { useEffect } from "react";

type useCloseDropdownProps = {
  state: boolean;
  callback: (newValue: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
};

export const useCloseDropdown = ({
  state,
  callback,
  dropdownRef,
}: useCloseDropdownProps) => {
  useEffect(() => {
    console.log(state);
    console.log(callback);
    console.log(dropdownRef);
    
    const handleOverflow = (shouldOverflow: boolean) => {
      document.body.classList.toggle("no-scroll", shouldOverflow);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (callback && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        callback(false);
      } 
    };

    if (state) {
      handleOverflow(true);
    }

    //document.addEventListener("click", handleClickOutside);

    return (): void => {
      handleOverflow(false);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state, callback, dropdownRef]);
};
