import Header from "../../components/Header/index";
import { useParams } from "react-router-dom";
import dataTest from "../../data/data.json";
import { JobOffer } from "../../types/types";

const Page = () => {
  const { JobId } = useParams();

  const datas: JobOffer | undefined = dataTest.find((array) => JobId === String(array.id));

  return (
    <>
      <Header />
      <p>Offre n° {JobId}</p>
      {datas?.company}
      {datas?.role.items}
    </>
  );
};

export default Page;
