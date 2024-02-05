import logo from "../../../public/assets/img/desktop/logo.svg";
import ToggleButton from "../ToggleButton";

const Header: React.FC = () => {
  return (
    <header className="bg-patternDesktop rounded-bl-[100px] bg-royalBlue bg-contain bg-no-repeat pb-16 px-[165px] pt-16 flex justify-between items-center">
      <h1>
        <img src={logo} alt="Devjobs app Logo" />
      </h1>
      <ToggleButton />
    </header>
  );
};

export default Header;
