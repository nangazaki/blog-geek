import CardPost from "../CardPost"

const Animes = () => {
    return (
        <section className="container">
            <h2>Animes</h2>
            <div className="animes">
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
        </section>
    )
}

export default Animes
