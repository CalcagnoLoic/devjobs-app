import { LinkHTMLAttributes, PropsWithChildren } from "react";

type AnchorProps = PropsWithChildren<{
  href: LinkHTMLAttributes<HTMLAnchorElement>["href"];
  css?: string;
  target?: string | "__blank";
  rel?: string | "noopener noreferrer";
}>;

const Component = ({ children, href, css, target }: AnchorProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "__blank" ? "noopener noreferrer" : undefined}
      className={`whitespace-nowrap rounded bg-royalBlue px-5 py-3 font-bold text-white transition duration-300 hover:bg-portage ${css}`}
    >
      {children}
    </a>
  );
};

export default Component;
