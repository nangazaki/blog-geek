import { Container, Titulo } from "../../style"
import { CardPost } from "../CardPost"
import { FilmesContainer } from "./style"

export const Filmes = ({ filmesPosts }) => {
  return (
    <section>
      <Container>
        <Titulo>Filmes</Titulo>
        <FilmesContainer>
          {filmesPosts.map((post) => {
            return (
              <>
                <CardPost post={post} key={post.id} />
              </>
            )
          })}
        </FilmesContainer>
      </Container>
    </section>
  )
}

