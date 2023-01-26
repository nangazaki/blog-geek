import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

import { Container, Navbar } from "./style";

export const Header = () => {
  return (
    <Container>
      <Navbar.Container>
        <div className="logo">
          <a href="/"> <img src={logo} alt="" /> </a>
        </div>
        <Navbar.Menu>
          <Link to="/">
            <Navbar.Item>Pagina Inicial</Navbar.Item>
          </Link>
          <Link to="/categoria/animes">
            <Navbar.Item>Animes</Navbar.Item>
          </Link>
          <Link to="/categoria/filmes">
            <Navbar.Item>Filmes</Navbar.Item>
          </Link>
          <Link to="/categoria/jogos">
          <Navbar.Item>Jogos</Navbar.Item>
          </Link>
          <Link to="/categoria/series">
          <Navbar.Item>Series</Navbar.Item>
          </Link>
        </Navbar.Menu>
      </Navbar.Container>
    </Container>
  );
}