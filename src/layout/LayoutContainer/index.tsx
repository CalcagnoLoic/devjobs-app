import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
  width?: "large";
}>;

const Layout = ({ children, width }: PropsWithChildren<LayoutProps>) => (
  <>
    <div className={`mx-auto -my-10 ${width === "large" ? "max-w-[1110px]" : "max-w-[730px]"}`}>
        {children}
    </div>
  </>
);

export default Layout;
