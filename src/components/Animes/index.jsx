import CardPost from "../CardPost"

const Animes = ({ animesPosts }) => {
    return (
        <section className="container">
            <h2>Animes</h2>
            <div className="animes">
                {animesPosts.map((post, index) => {
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

export default Animes
