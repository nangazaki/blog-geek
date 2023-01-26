import { CardPost } from "../CardPost"
import { Container, Titulo } from "../../style"
import { AnimesContainer } from "./style"

export const Animes = ({ animesPosts }) => {
  return (
    <Container>
      <Titulo>Animes</Titulo>
      <AnimesContainer>
        {animesPosts.map((post) => {
          return (
            <>
              <CardPost post={post} key={post.id} />
            </>
          )
        })}
      </AnimesContainer>
    </Container>
  )
}

