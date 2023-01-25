import { CardPost } from "../CardPost"

export const Animes = ({ animesPosts }) => {
  return (
    <section className="container">
      <h2>Animes</h2>
      <div className="animes">
        {animesPosts.map((post) => {
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

