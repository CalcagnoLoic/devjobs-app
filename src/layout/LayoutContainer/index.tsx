import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
  kind?: "large" | "medium";
}>;

const Layout = ({ children, kind }: PropsWithChildren<LayoutProps>) => (
  <>
    <div className={`mx-auto -my-10 ${kind === "large" ? "max-w-[1110px]" : "max-w-[730px]"}`}>
        {children}
    </div>
  </>
);

export default Layout;
