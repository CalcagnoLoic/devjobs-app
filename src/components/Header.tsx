import logo from "../../public/assets/img/desktop/logo.svg";

// type HeaderProps = {

// }

const Header: React.FC = () => {
  return (
    <header className="bg-patternDesktop rounded-bl-[100px] bg-royalBlue from-white to-royalBlue bg-contain bg-no-repeat pb-16 pl-[165px] pt-16">
      <h1>
        <img src={logo} alt="Devjobs app Logo" />
      </h1>
      <div></div>
    </header>
  );
};

export default Header;
