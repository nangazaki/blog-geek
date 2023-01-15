
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className="full flex">
      <nav className="container">
        <div className="logo">
          <a href="/"> <img src={logo} alt="" /> </a>
        </div>
        <div className="menuMobile">
        </div>
        <ul className="menu">
          <li><a href="">Página Inicial</a></li>
          <li><a href="">Animes</a></li>
          <li><a href="">Filmes</a></li>
          <li><a href="">Jogos</a></li>
          <li><a href="">Series</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
