import { useEffect, useState } from "react";
import api from "../../service";
import { CardJogos } from "../CardJogos";
import { ContainerStyled, CardGroup } from "../../style/global/global";

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
        <ContainerStyled>
          <div>
            <header>
              <h2>Leia também...</h2>
            </header>
            <CardGroup>
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
            </CardGroup>
          </div>
        </ContainerStyled>
      </section>
    </>
  );
}