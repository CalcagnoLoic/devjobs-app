import { InputFieldProps } from "../../types/types";
import { useDarkMode } from "../../hooks/useDarkMode";

const Component = ({
  type,
  css,
  value,
  id,
  placeholder,
  onClick,
  reference,
}: InputFieldProps) => {
  const { isDark } = useDarkMode();

  return (
    <input
      type={type}
      className={`${css} ${isDark ? "text-athensGray" : "text-codGray"} `}
      value={value}
      id={id}
      placeholder={placeholder}
      onClick={onClick}
      ref={reference}
    />
  );
};

export default Component;
