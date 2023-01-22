import { Link } from "react-router-dom";

const CardPost = ({ post }) => {

    const link = post.titulo.toLowerCase().replace(/[ ]+/g, '-')

    return (
        <div className="card-post">
            <div className="">
                <img src={post.capa} alt={post.titulo} />
            </div>
            <div className="detalhes">
                <Link to={`post/${post.id}/${link}`}>
                    <h3>{post.titulo}</h3>
                </Link>
                <p>{post.descricao}</p>
                <Link to={`post/${post.id}/${link}`}>Ler mais &gt; </Link>
            </div>
        </div>
    );
}

export default CardPost