import Header from "../../components/Header";
import JobsList from "../../components/Job/JobsList";
import LayoutContainer from "../../layout/LayoutContainer";
import FilterBar from "../../components/FilterBar/FilterBar";

const Page = () => (
  <div className="pb-12">
    <Header />
    <LayoutContainer width="large" css="mx-5 -my-10 md:mx-12 lg:mx-auto ">
      <FilterBar css="mb-[105px]" />
      <JobsList />
    </LayoutContainer>
  </div>
);

export default Page;
