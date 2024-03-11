import logo from "/assets/img/desktop/logo.svg";
import ToggleButton from "../ToggleButton";
import { Link } from "react-router-dom";

const Component: React.FC = () => {
  return (
    <header className="bg-royalBlue bg-patternDesktop bg-contain bg-no-repeat px-6 pb-16 pt-16 md:rounded-bl-[100px] md:px-12 lg:px-[165px] -mt-5">
      <div className="mx-auto flex max-w-[1110px] justify-between">
        <Link to={"/"}>
          <h1>
            <img src={logo} alt="Devjobs app Logo" />
          </h1>
        </Link>

        <div className="flex">
          <ToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Component;
