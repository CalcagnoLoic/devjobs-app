import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error("Must have a provider");

  return context;
};
