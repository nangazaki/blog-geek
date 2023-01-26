import { Link } from "react-router-dom";

import { CardJogosContainer, Detalhes, Titulo, Gradient } from "./style";

export const CardJogos = ({ post }) => {

  const link = post.titulo.toLowerCase().replace(/[ ]+/g, '-')

  return (
    <CardJogosContainer>
      <Gradient />
      <img src={post.capa} alt="" />
      <Detalhes>
        <Link to={`/post/${post.id}/${link}`}>
          <Titulo>{post.titulo}</Titulo>
        </Link>
      </Detalhes>
    </CardJogosContainer>
  );
}