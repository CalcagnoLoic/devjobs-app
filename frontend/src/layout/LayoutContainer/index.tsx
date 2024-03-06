import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
  width?: "large";
  css?: string
}>;

const Layout = ({ children, width, css }: PropsWithChildren<LayoutProps>) => (
  <>
    <div className={`mx-auto ${css} ${width === "large" ? "max-w-[1110px]" : "max-w-[730px]"}`}>
        {children}
    </div>
  </>
);

export default Layout;
