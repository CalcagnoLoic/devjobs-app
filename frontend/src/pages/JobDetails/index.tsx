import { JobOffer } from "../../types/types";
import { useFetchObject } from "../../hooks/useFetchObject";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/index";
import JobBody from "../../components/Job/JobBody";
import JobFooter from "../../components/Job/JobFooter";
import JobHeader from "../../components/Job/JobHeader";
import LayoutContainer from "../../layout/LayoutContainer";

const Page = () => {
  const { JobId } = useParams();
  const { isData: datas } = useFetchObject<JobOffer>(`job-detail/${JobId}`);

  return (
    <div>
      <Header />

      {datas && (
        <>
          <LayoutContainer css="mx-7 md:mx-auto -my-10">
            <JobHeader datas={datas} />
            <JobBody datas={datas} />
          </LayoutContainer>
          <JobFooter datas={datas} />
        </>
      )}
    </div>
  );
};

export default Page;
