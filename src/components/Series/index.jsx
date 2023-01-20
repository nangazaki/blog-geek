import CardPost from "../CardPost"

const Series = ({ seriesPosts }) => {
    return (
        <section className="container">
            <h2>Series</h2>
            <div className="series">
                {seriesPosts.map((post, index) => {
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

export default Series
