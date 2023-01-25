import { Link } from "react-router-dom";

export const CardJogos = ({ post }) => {

  const link = post.titulo.toLowerCase().replace(/[ ]+/g, '-')

  return (
    <div className="card-jogos">
      <div className="gradient"></div>
      <img src={post.capa} alt="" />
      <div className="detalhes">
        <Link to={`/post/${post.id}/${link}`}>
          <h3>{post.titulo}</h3>
        </Link>
      </div>
    </div>
  );
}