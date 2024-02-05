import logo from '../../public/assets/img/desktop/logo.svg';

// type HeaderProps = {

// }

const Header: React.FC = () => {
  return (
    <header className="bg-purple-500">
      <h1>
        <img src={logo} alt="" />
      </h1>
      <div>
        
      </div>
    </header>
  )
}

export default Header