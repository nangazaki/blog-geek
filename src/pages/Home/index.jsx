import { useEffect, useState } from "react"
import useAPI from "../../service/useAPI"

import { Hero } from "../../components/Hero"
import { Recentes } from "../../components/Recentes"
import { Animes } from "../../components/Animes"
import { Filmes } from "../../components/Filmes"
import { Jogos } from "../../components/Jogos"
import { Series } from "../../components/Series"
import { Footer } from "../../components/Footer"
import { ClipLoader } from "react-spinners"
import { Loader } from "../../style/global/global"
import { useTheme } from "styled-components"

const Inicio = () => {
  const theme = useTheme()
  const { hero, recentes, animes, filmes, jogos, series } = useAPI('/postagens')
  const [loading, setLoading] = useState(true)

  return (
    <>
      {
        hero ? (
          <>
            <Hero heroPosts={hero} />
            <Recentes recentesPosts={recentes} />
            <Animes animesPosts={animes} />
            <Filmes filmesPosts={filmes} />
            <Jogos jogosPosts={jogos} />
            <Series seriesPosts={series} />
            <Footer />
          </>
        ) : (
          <Loader>
            <ClipLoader color={theme.colors['blue']} loading={loading} size={150} />
          </Loader>
        )
      }
    </>
  );
}

export default Inicio;