import Header from "../../components/Header";
import JobsList from "../../components/JobsList";
import LayoutContainer from "../../layout/LayoutContainer";
import Filter from "../../components/Filter";

const Page = () => (
  <div className="bg-athensGray">
    <Header />
    <LayoutContainer width="large" css="mx-auto -my-10">
      <Filter css="mb-[105px]" />
      <JobsList />
    </LayoutContainer>
  </div>
);

export default Page;
