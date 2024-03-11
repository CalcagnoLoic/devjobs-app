import { InputFieldProps } from "../../types/types";

const Component = ({
  type,
  css,
  value,
  id,
  placeholder,
  onClick,
  ref,
}: InputFieldProps) => (
  <input
    type={type}
    className={css}
    value={value}
    id={id}
    placeholder={placeholder}
    onClick={onClick}
    ref={ref}
  />
);

export default Component;
