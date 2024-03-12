import { createContext, useState } from "react";

interface DarkModeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  isDark: false,
  toggleTheme: () => {},
});

export const DarkModeProvider = ({ children }: { children: JSX.Element }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  if (isDark) {
    document.body.classList.add("bg-vulcan");
    document.body.classList.remove("bg-athensGray");
  } else {
    document.body.classList.remove("bg-vulcan");
    document.body.classList.add("bg-athensGray");
  }

  const contextValue: DarkModeContextProps = {
    isDark,
    toggleTheme,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
