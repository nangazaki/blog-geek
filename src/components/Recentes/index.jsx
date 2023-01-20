import CardPost from "../CardPost"

const Recentes = ({ recentesPosts }) => {
    return (
        <section className="container">
            <h2>Notícias recentes</h2>
            <div className="recentes">
                {recentesPosts.map((post, index) => {
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

export default Recentes
