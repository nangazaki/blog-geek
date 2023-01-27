import { useEffect, useState } from "react"
import useAPI from "../service/useAPI"

import { Hero } from "../components/Hero"
import { Recentes } from "../components/Recentes"
import { Animes } from "../components/Animes"
import { Filmes } from "../components/Filmes"
import { Jogos } from "../components/Jogos"
import { Series } from "../components/Series"
import { Footer } from "../components/Footer"

const Inicio = () => {

  const { hero, recentes, animes, filmes, jogos, series } = useAPI('/postagens')
  const [visible, setVisible] = useState(false)

  setTimeout(() => {
    setVisible(true)
  }, 2000)


  return (
    <>
      {
        visible && (
          <>
            <Hero heroPosts={hero} />
            <Recentes recentesPosts={recentes} />
            <Animes animesPosts={animes} />
            <Filmes filmesPosts={filmes} />
            <Jogos jogosPosts={jogos} />
            <Series seriesPosts={series} />
            <Footer />
          </>
        )
      }
    </>
  );
}

export default Inicio;
