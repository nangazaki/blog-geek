import { useState, useEffect } from "react"
import api from "./index"

const useAPI = (url) => {
  const [hero, setHero] = useState()
  const [recentes, setRecentes] = useState()
  const [animes, setAnimes] = useState()
  const [filmes, setFilmes] = useState()
  const [jogos, setJogos] = useState()
  const [series, setSeries] = useState()

  useEffect(() => {
    api.get(url)
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

  return { hero, recentes, animes, filmes, jogos, series }
}

export default useAPI