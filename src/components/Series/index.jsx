import { CardPost } from "../CardPost"

export const Series = ({ seriesPosts }) => {
  return (
    <section className="container">
      <h2>Series</h2>
      <div className="series">
        {seriesPosts.map((post) => {
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
