import { InputFieldProps } from "../../types/types";

const Component = ({
  type,
  css,
  value,
  id,
  placeholder,
  onClick,
  reference,
}: InputFieldProps) => (
  <input
    type={type}
    className={css}
    value={value}
    id={id}
    placeholder={placeholder}
    onClick={onClick}
    ref={reference}
  />
);

export default Component;
