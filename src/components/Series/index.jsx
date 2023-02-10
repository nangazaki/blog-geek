import { CardGroup, ContainerStyled } from "../../style/global/global"
import { CardPost } from "../CardPost"

export const Series = ({ seriesPosts }) => {
  return (
    <section>
      <ContainerStyled>
        <h2>Series</h2>
        <CardGroup>
          {seriesPosts.map((post) => {
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
