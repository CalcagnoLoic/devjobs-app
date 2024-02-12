import Header from "../../components/Header";
import JobsList from "../../components/JobsList";
import LayoutContainer from "../../layout/LayoutContainer";
import Filter from "../../components/Filter";

const Page = () => (
  <div className="bg-athensGray">
    <Header />
    <LayoutContainer kind="large">
      <Filter css="mb-24" />
      <JobsList />
    </LayoutContainer>
  </div>
);

export default Page;
