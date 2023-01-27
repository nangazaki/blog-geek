import { CardGroup, ContainerStyled } from "../../GlobalStyle.style"
import { CardPost } from "../CardPost"

export const Animes = ({ animesPosts }) => {
  return (
    <ContainerStyled>
      <h2>Animes</h2>
      <CardGroup>
        {animesPosts.map((post) => {
          return (
            <>
              <CardPost post={post} key={post.id} />
            </>
          )
        })}
      </CardGroup>
    </ContainerStyled>
  )
}

