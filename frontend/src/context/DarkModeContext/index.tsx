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
