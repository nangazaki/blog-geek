import CardPost from "../CardPost"

const Filmes = ({ filmesPosts }) => {
    return (
        <section className="container">
            <h2>Filmes</h2>
            <div className="filmes">
                {filmesPosts.map((post, index) => {
                    return (
                        <>
                            <CardPost post={post} key={index} />
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Filmes
