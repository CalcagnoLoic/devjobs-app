// import { useFetch } from "../../hooks/useFetch";
import { JobOffer } from "../../types/types";
import CardJob from "../CardJob";
// import Loader from "../Loader";
import jobsList from "../../data/data.json";

const Component = () => {
  // const { isData, isLoading, isError } = useFetch("../../data/data.json");

  return (
    <>
      <ul className="flex flex-wrap gap-y-16 justify-between">
        {jobsList.map((job: JobOffer) => (
          <CardJob key={job.id} jobInformations={job} />
        ))}
      </ul>
    </>
  );
};

export default Component;
