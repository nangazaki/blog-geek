import CardPost from "../CardPost"

const Filmes = () => {
    return (
        <section className="container">
            <h2>Filmes</h2>
            <div className="filmes">
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
        </section>
    )
}

export default Filmes
