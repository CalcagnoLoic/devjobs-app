import { HTMLInputTypeAttribute, LinkHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  TagName: keyof JSX.IntrinsicElements;
  typeButton?: HTMLInputTypeAttribute | null;
  href?: LinkHTMLAttributes<HTMLAnchorElement>["href"];
}>;

const Component = ({ children, TagName, href, typeButton }: ButtonProps) => {

  return (
    <TagName href={TagName === "a" ? href : ""} type={typeButton} className="rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage">
      {children}
    </TagName>
  );
};

export default Component;
