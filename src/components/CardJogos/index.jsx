
const CardJogos = () => {

    const img = "https://iuricode-naped.vercel.app/4.webp";

    return (
        <div className="card-jogos">
            <div className="gradient"></div>
            <img src={img} alt="" />
            <div className="detalhes">
                <h3>Exemplo de título de postagem exemplo de título</h3>
            </div>
        </div>
    );
}

export default CardJogos;