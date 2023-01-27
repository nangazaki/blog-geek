import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { HeaderContainer, Navbar } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar.Container>
        <div className="logo">
          <Link to="/"> <img src={logo} alt="Logotipo Blog Geek" /> </Link>
        </div>
        <Navbar.Menu>
          <Link to="/"> Pagina Inicial </Link>
          <Link to=""> Animes </Link>
          <Link to=""> Filmes </Link>
          <Link to=""> Jogos </Link>
          <Link to=""> Series </Link>
        </Navbar.Menu>
      </Navbar.Container>
    </HeaderContainer>
  );
}