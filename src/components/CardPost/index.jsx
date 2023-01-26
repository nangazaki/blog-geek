import { Link } from "react-router-dom";

import { CardPostContainer, ImgContainer, Titulo, Detalhes, Descricao, LinkPost } from "./style";

export const CardPost = ({ post }) => {
  const link = post.titulo.toLowerCase().replace(/[ ]+/g, '-')

  return (
    <CardPostContainer>
      <ImgContainer>
        <img src={post.capa} alt={post.titulo} />
      </ImgContainer>
      <Detalhes>
        <Link to={`post/${post.id}/${link}`}>
          <Titulo>{post.titulo}</Titulo>
        </Link>
        <Descricao>{post.descricao}</Descricao>
        <Link to={`post/${post.id}/${link}`}>
          <LinkPost>Ler mais &gt;</LinkPost>
        </Link>
      </Detalhes>
    </CardPostContainer>
  );
}
