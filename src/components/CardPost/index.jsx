

const CardPost = (props) => {
    
    const img = "https://iuricode-naped.vercel.app/4.webp";

    return (
        <div className="card-post">
            <div className="">
                <img src={img} />
            </div>
            <div className="detalhes">
                <h3>Exemplo de título de postagem exemplo de título</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus...</p>
                <a href="">Ler mais &gt; </a>
            </div>
        </div>
    );
}

export default CardPost