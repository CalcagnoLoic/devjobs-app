import {
  HTMLInputTypeAttribute,
  LinkHTMLAttributes,
  PropsWithChildren,
} from "react";

type ButtonProps = PropsWithChildren<{
  TagName: keyof JSX.IntrinsicElements;
  typeButton?: HTMLInputTypeAttribute | null;
  href?: LinkHTMLAttributes<HTMLAnchorElement>["href"];
  css?: string;
}>;

const Component = ({
  children,
  TagName,
  href,
  typeButton,
  css,
}: ButtonProps) => {
  return (
    <TagName
      href={TagName === "a" ? href : ""}
      target="_blank"
      type={typeButton}
      className={`rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage ${css}`}
    >
      {children}
    </TagName>
  );
};

export default Component;
