import { useFetch } from "../../../hooks/useFetch";
import { JobOffer } from "../../../types/types";

import CardJob from "../../CardJob";
import Loader from "../../Loader";
/* import jobsList from "../../../data/data.json"; */

const Component = () => {
  const { isData, isLoading, isError } = useFetch("http://127.0.0.1:5000/");

  return (
    <>
      {isLoading && <Loader />}

      {isData && (
        <ul className="flex flex-wrap justify-center md:justify-between gap-y-16">
          {isData.map((job: JobOffer) => (
            <CardJob jobInformations={job} />
          ))}
        </ul>
      )}

      {/* <ul className="flex flex-wrap justify-between gap-y-16">
        {jobsList.map((job: JobOffer) => (
          <CardJob key={job.id} jobInformations={job} />
        ))}
      </ul> */}

      {isError && <p>il y a une erreur</p>}
    </>
  );
};

export default Component;
