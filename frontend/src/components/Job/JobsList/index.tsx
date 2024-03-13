import { useFetch } from "../../../hooks/useFetch";
import { JobOffer } from "../../../types/types";

import CardJob from "../../CardJob";
import Error404 from "../../Error404";
import Loader from "../../Loader";
/* import jobsList from "../../../data/data.json"; */

const Component = () => {
  const { isData, isLoading, isError } = useFetch("http://127.0.0.1:5000/");

  return (
    <>
      {isLoading && <Loader />}

      {isData && (
        <ul className="flex flex-wrap justify-center gap-y-16 md:justify-between">
          {isData.map((job: JobOffer, index) => (
            <CardJob jobInformations={job} key={index} />
          ))}
        </ul>
      )}

      {/* <ul className="flex flex-wrap justify-between gap-y-16">
        {jobsList.map((job: JobOffer) => (
          <CardJob key={job.id} jobInformations={job} />
        ))}
      </ul> */}

      {isError && <Error404 />}
    </>
  );
};

export default Component;
