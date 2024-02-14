import { JobOffer } from "../../types/types";
import { useParams } from "react-router-dom";

import dataTest from "../../data/data.json";
import Header from "../../components/Header/index";
import JobBody from "../../components/JobBody";
import JobFooter from "../../components/JobFooter";
import JobHeader from "../../components/JobHeader";
import LayoutContainer from "../../layout/LayoutContainer";

const Page = () => {
  const { JobId } = useParams();

  const datas: JobOffer | undefined = dataTest.find(
    (array) => JobId === String(array.id),
  );

  return (
    <div className="bg-athensGray">
      <Header />

      {datas && (
        <LayoutContainer>
          <>
            <JobHeader datas={datas} />
            <JobBody datas={datas} />
            <JobFooter datas={datas} />
          </>
        </LayoutContainer>
      )}
    </div>
  );
};

export default Page;
