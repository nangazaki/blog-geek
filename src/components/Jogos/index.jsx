import CardJogos from "../CardJogos"

const Jogos = () => {
    return (
        <section className="container">
            <h2>Jogos</h2>
            <div className="jogos">
                <CardJogos />
                <CardJogos />
            </div>
        </section>
    )
}

export default Jogos
