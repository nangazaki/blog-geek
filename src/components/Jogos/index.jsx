import { CardJogos } from "../CardJogos"
import { Container, Titulo } from "../../style"
import { JogosContainer } from "./style"

export const Jogos = ({ jogosPosts }) => {
  return (
    <section>
      <Container>
        <Titulo>Jogos</Titulo>
        <JogosContainer>
          {jogosPosts.map((post, index) => {
            return (
              <>
                <CardJogos post={post} key={index} />
              </>
            )
          })}
        </JogosContainer>
      </Container>
    </section>
  )
}
