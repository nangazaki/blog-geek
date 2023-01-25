import { useEffect, useState } from "react"

import api from "../service"

import { Hero } from "../components/Hero"
import { Recentes } from "../components/Recentes"
import { Animes } from "../components/Animes"
import { Filmes } from "../components/Filmes"
import { Jogos } from "../components/Jogos"
import { Series } from "../components/Series"
import { Footer } from "../components/Footer"

const Inicio = () => {

  const [hero, setHero] = useState()
  const [recentes, setRecentes] = useState()
  const [animes, setAnimes] = useState()
  const [filmes, setFilmes] = useState()
  const [jogos, setJogos] = useState()
  const [series, setSeries] = useState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    api.get('/postagens')
      .then((response) => {
        let auxHero = response.data.filter((post) => post.destaque == true)
        let auxRecentes = response.data.slice(3, 9)
        let auxAnimes = response.data.filter((post) => post.categoria == 'Animes')
        let auxFilmes = response.data.filter((post) => post.categoria == 'Filmes')
        let auxJogos = response.data.filter((post) => post.categoria == 'Jogos')
        let auxSeries = response.data.filter((post) => post.categoria == 'Series')
        setHero(auxHero)
        setRecentes(auxRecentes)
        setAnimes(auxAnimes)
        setFilmes(auxFilmes)
        setJogos(auxJogos)
        setSeries(auxSeries)
      })
  }, [])

  setTimeout(() => {
    setVisible(true)
  }, 1000)


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
