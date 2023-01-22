
export const CardJogos = ({ post }) => {
  return (
    <div className="card-jogos">
      <div className="gradient"></div>
      <img src={post.capa} alt="" />
      <div className="detalhes">
        <h3>{post.titulo}</h3>
      </div>
    </div>
  );
}