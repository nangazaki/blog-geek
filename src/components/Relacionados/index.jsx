import { useEffect, useState } from "react";
import api from "../../service";
import { Container } from "../../style";
import { CardJogos } from "../CardJogos";
import { LerTambem, RelacionadosContainer, Titulo } from "./style";

export const Relacionados = () => {

  const [relacionados, setRelacionados] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    api.get('/postagens')
      .then((response) => {
        let auxRelacionados = response.data.slice(9, 11)
        setRelacionados(auxRelacionados)
      })
  }, [])

  setTimeout(() => {
    setVisible(true)
  }, 500)


  return (
    <>
      <section>
        <Container>
          <RelacionadosContainer>

            <header>
              <Titulo>Leia também...</Titulo>
            </header>
            <LerTambem>
              <>
                {visible && (
                  <>
                    {relacionados.map((post) => {
                      return <>
                        <CardJogos post={post} key={post.id} />
                      </>
                    })}
                  </>
                )}
              </>

            </LerTambem>
          </RelacionadosContainer>
        </Container>
      </section>
    </>
  );
}