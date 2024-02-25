import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  css?: string;
};

const Component = ({ children, type, css }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`whitespace-nowrap rounded bg-royalBlue px-5 py-3 font-bold text-white transition duration-300 hover:bg-portage ${css}`}
    >
      {children}
    </button>
  );
};

export default Component;
