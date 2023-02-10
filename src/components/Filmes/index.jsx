import { CardGroup, ContainerStyled } from "../../style/global/global"
import { CardPost } from "../CardPost"

export const Filmes = ({ filmesPosts }) => {
  return (
    <section>
      <ContainerStyled>
        <h2>Filmes</h2>
        <CardGroup>
          {filmesPosts.map((post) => {
            return (
              <>
                <CardPost post={post} key={post.id} />
              </>
            )
          })}
        </CardGroup>
      </ContainerStyled>
    </section>
  )
}

