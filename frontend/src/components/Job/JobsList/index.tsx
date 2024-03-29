import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { JobOffer } from "../../../types/types";

import CardJob from "../../CardJob";
import Error404 from "../../Error404";
import Loader from "../../Loader";

const Component = () => {
  const { isData, isLoading, isError } = useFetch("http://127.0.0.1:5000/");
  const [displayedOffer, setDisplayedOffer] = useState<JobOffer[]>(isData);
  const [visibleOffer, setVisibleOffer] = useState<number>(6);

  const handleClick = () => {
    setVisibleOffer((prevVisibleOffer) => prevVisibleOffer + 3);
  };

  useEffect(() => {
    if (isData) setDisplayedOffer(isData.slice(0, visibleOffer));
  }, [isData, visibleOffer]);

  return (
    <>
      {isLoading && <Loader />}

      {displayedOffer && (
        <ul className="flex flex-wrap justify-center gap-y-16 md:justify-between">
          {displayedOffer.map((job: JobOffer, index) => (
            <CardJob jobInformations={job} key={index} />
          ))}
        </ul>
      )}

      {visibleOffer < isData.length && (
        <button
          onClick={handleClick}
          className="mx-auto mt-14 mb-5 block rounded bg-royalBlue px-8 py-4 font-bold text-white"
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}

      {isError && <Error404 />}
    </>
  );
};

export default Component;
