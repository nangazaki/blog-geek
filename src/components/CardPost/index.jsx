
const CardPost = (props) => {

    return (
        <div className="card-post">
            <div className="">
                <img src={props.post.capa} alt={props.post.titulo} />
            </div>
            <div className="detalhes">
                <h3>{props.post.titulo}</h3>
                <p>{props.post.descricao}</p>
                <a href="">Ler mais &gt; </a>
            </div>
        </div>
    );
}

export default CardPost