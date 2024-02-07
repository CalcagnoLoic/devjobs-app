import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<{
  kind?: "large" | "medium";
}>;

const Layout = ({ children, kind }: PropsWithChildren<LayoutProps>) => {
  <>
    <div className={kind === "large" ? "max-w-[1110px]" : "max-w-[730px]"}>
        {children}
    </div>
  </>
};

export default Layout;
