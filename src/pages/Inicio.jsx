import { useEffect, useState } from "react"

import api from "../service"

import Hero from "../components/Hero"
import Recentes from "../components/Recentes"
import Animes from "../components/Animes"
import Filmes from "../components/Filmes"
import Jogos from "../components/Jogos"
import Series from "../components/Series"
import Footer from "../components/Footer"

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
        let hero = response.data.filter((post) => post.destaque == true)
        let recentes = response.data.slice(3, 9)
        let animes = response.data.filter((post) => post.categoria == 'Animes')
        let filmes = response.data.filter((post) => post.categoria == 'Filmes')
        let jogos = response.data.filter((post) => post.categoria == 'Jogos')
        let series = response.data.filter((post) => post.categoria == 'Series')
        setHero(hero)
        setRecentes(recentes)
        setAnimes(animes)
        setFilmes(filmes)
        setJogos(jogos)
        setSeries(series)
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
