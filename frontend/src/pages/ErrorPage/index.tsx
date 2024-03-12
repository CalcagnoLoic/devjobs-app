import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Error404 from "../../components/Error404";

const Page = () => (
  <div className="flex h-screen flex-col justify-between">
    <Header />
    <div className="mx-auto">
      <Error404 />
    </div>
    <Link
      to={"/"}
      className="mx-auto -mt-5 mb-24 block whitespace-nowrap rounded bg-royalBlue p-5 px-5 py-3 font-bold text-white transition duration-300 hover:bg-portage "
    >
      Return to homepage
    </Link>
  </div>
);

export default Page;
