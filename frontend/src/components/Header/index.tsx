import { Link } from "react-router-dom";

import Heading from "../../typographies/Heading";
import LogoIcon from "../../Icon/LogoIcon";
import ToggleButton from "../ToggleButton";

const Component: React.FC = () => {
  return (
    <header className="-mt-5 bg-royalBlue bg-patternDesktop bg-contain bg-no-repeat px-6 pb-16 pt-16 md:rounded-bl-[100px] md:px-12 lg:px-[165px]">
      <div className="mx-auto flex max-w-[1110px] justify-between">
        <Link to={"/"}>
          <Heading kind="h1" content={<LogoIcon />} />
        </Link>

        <div className="flex">
          <ToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Component;
