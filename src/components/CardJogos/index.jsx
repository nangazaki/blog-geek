
const CardJogos = ({post}) => {

    const img = "https://iuricode-naped.vercel.app/4.webp";

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

export default CardJogos;