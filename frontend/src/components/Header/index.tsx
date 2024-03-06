import logo from "/assets/img/desktop/logo.svg";
import ToggleButton from "../ToggleButton";
import { Link } from "react-router-dom";

const Component: React.FC = () => {
  return (
    <header className=" rounded-bl-[100px] bg-royalBlue bg-patternDesktop bg-contain bg-no-repeat px-[165px] pb-16 pt-16">
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
