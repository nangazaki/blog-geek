
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <header>
    <div className="full flex header">
      <nav className="container">
        <div className="logo">
          <a href="/"> <img src={logo} alt="" /> </a>
        </div>
        <ul className="menu">
          <Link to="/">Pagina Inicial</Link>
          <Link to="/categoria/animes">Animes</Link>
          <Link to="/categoria/filmes">Filmes</Link>
          <Link to="/categoria/jogos">Jogos</Link>
          <Link to="/categoria/series">Series</Link>
        </ul>
      </nav>
    </div>
    </header>
  );
}
