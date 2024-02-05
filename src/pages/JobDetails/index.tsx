import { useParams } from "react-router-dom";

const Pages = () => {
  const { id } = useParams();

  return <h1>Détails du job {`${id}`}</h1>;
};

export default Pages;
