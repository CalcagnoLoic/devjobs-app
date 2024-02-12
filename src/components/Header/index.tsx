import logo from "../../../public/assets/img/desktop/logo.svg";
//import Layout from "../../layout/LayoutContainer";
import ToggleButton from "../ToggleButton";

const Component: React.FC = () => {
  return (
    <header className="flex items-center justify-between rounded-bl-[100px] bg-royalBlue bg-patternDesktop bg-contain bg-no-repeat px-[165px] pb-16 pt-16">
        <h1>
          <img src={logo} alt="Devjobs app Logo" />
        </h1>
        <ToggleButton />
    </header>
  );
};

export default Component;
