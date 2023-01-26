import { Container, Titulo } from "../../style"
import { CardPost } from "../CardPost"
import { SeriesContainer } from "./style"

export const Series = ({ seriesPosts }) => {
  return (
    <section>
      <Container>
        <Titulo>Series</Titulo>
        <SeriesContainer>
          {seriesPosts.map((post) => {
            return (
              <>
                <CardPost post={post} key={post.id} />
              </>
            )
          })}
        </SeriesContainer>
      </Container>
    </section>
  )
}
