import { useDarkMode } from "../../hooks/useDarkMode";

import Header from "../../components/Header";
import JobsList from "../../components/Job/JobsList";
import LayoutContainer from "../../layout/LayoutContainer";
import Filter from "../../components/Filter";

const Page = () => {
  const { isDark } = useDarkMode();

  return (
    <div className={isDark ? "bg-vulcan" : "bg-athensGray"}>
      <Header />
      <LayoutContainer width="large" css="mx-5 -my-10 md:mx-12 lg:mx-auto">
        <Filter css="mb-[105px]" />
        <JobsList />
      </LayoutContainer>
    </div>
  );
};

export default Page;
