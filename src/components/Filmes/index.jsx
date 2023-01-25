import { CardPost } from "../CardPost"

export const Filmes = ({ filmesPosts }) => {
    return (
        <section className="container">
            <h2>Filmes</h2>
            <div className="filmes">
                {filmesPosts.map((post) => {
                    return (
                        <>
                            <CardPost post={post} key={post.id} />
                        </>
                    )
                })}
            </div>
        </section>
    )
}

