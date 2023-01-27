import { CardGroup, ContainerStyled } from "../../GlobalStyle.style"
import { CardJogos } from "../CardJogos"

export const Jogos = ({ jogosPosts }) => {
  return (
    <section>
      <ContainerStyled>
        <h2>Jogos</h2>
        <CardGroup>
          {jogosPosts.map((post, index) => {
            return (
              <>
                <CardJogos post={post} key={index} />
              </>
            )
          })}
        </CardGroup>
      </ContainerStyled>
    </section>
  )
}
