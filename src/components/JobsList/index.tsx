// import { useFetch } from "../../hooks/useFetch";
import { JobOffer } from "../../types/types";
import CardJob from "../CardJob";
// import Loader from "../Loader";
import jobsList from "../../data/data.json";

type JobsListProps = {
  arrayList?: JobOffer[];
};

const Component = ({ arrayList }: JobsListProps) => {
  // const { isData, isLoading, isError } = useFetch("../../data/data.json");

  return (
    <>
      <ul>
        {jobsList.map((job: JobOffer) => (
          <CardJob key={job.id} jobInformations={job} />
        ))}
      </ul>
    </>
  );
};

export default Component;
