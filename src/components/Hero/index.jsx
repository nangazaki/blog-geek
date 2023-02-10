import { Link } from "react-router-dom";
import { HeroSection } from "./style";
import { ContainerStyled } from "../../style/global/global";

export const Hero = ({ heroPosts }) => {
  const links = heroPosts.map((post) => post.titulo.toLowerCase().replace(/[ ]+/g, '-'))

  return (
    <section>
      <ContainerStyled>
        <HeroSection.Hero>
          <HeroSection.HeroCard1>
            <HeroSection.Post>
              <HeroSection.Gradient />
              <img src={heroPosts[0].capa} alt={heroPosts[0].titulo} />
              <HeroSection.Descricao>
                <HeroSection.Tag>
                  <Link to="">
                    {heroPosts[0].categoria}
                  </Link>
                </HeroSection.Tag>
                <div>
                  <Link to={`post/${heroPosts[0].id}/${links[0]}`}>
                    <HeroSection.Titulo> {heroPosts[0].titulo} </HeroSection.Titulo>
                  </Link>
                </div>
              </HeroSection.Descricao>
            </HeroSection.Post>
          </HeroSection.HeroCard1>

          <HeroSection.HeroCard2>
            <HeroSection.Post>
              <HeroSection.Gradient />
              <img src={heroPosts[1].capa} alt={heroPosts[1].titulo} />
              <HeroSection.Descricao>
                <HeroSection.Tag>
                  <Link>{heroPosts[1].categoria}</Link>
                </HeroSection.Tag>
                <div>
                  <Link to={`post/${heroPosts[1].id}/${links[1]}`}>
                    <HeroSection.Titulo>{heroPosts[1].titulo}</HeroSection.Titulo>
                  </Link>
                </div>
              </HeroSection.Descricao>
            </HeroSection.Post>
            <HeroSection.Post>
              <HeroSection.Gradient />
              <img src={heroPosts[2].capa} alt={heroPosts[2].titulo} />
              <HeroSection.Descricao>
                <HeroSection.Tag>
                  <Link>{heroPosts[2].categoria}</Link>
                </HeroSection.Tag>
                <div>
                  <Link to={`post/${heroPosts[2].id}/${links[1]}`}>
                    <HeroSection.Titulo>{heroPosts[2].titulo}</HeroSection.Titulo>
                  </Link>
                </div>
              </HeroSection.Descricao>
            </HeroSection.Post>
          </HeroSection.HeroCard2>
        </HeroSection.Hero>
      </ContainerStyled>
    </section>
  );
}
