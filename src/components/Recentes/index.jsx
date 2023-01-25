import { CardPost } from "../CardPost"

export const Recentes = ({ recentesPosts }) => {
    return (
        <section className="container">
            <h2>Notícias recentes</h2>
            <div className="recentes">
                {recentesPosts.map((post) => {
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
