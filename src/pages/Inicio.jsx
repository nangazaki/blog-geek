import api from "../service"
import Hero from "../components/Hero"
import Recentes from "../components/Recentes"
import Animes from "../components/Animes"
import Filmes from "../components/Filmes"
import Jogos from "../components/Jogos"
import Series from "../components/Series"
import Footer from "../components/Footer"
import { useState } from "react"

const Inicio = () => {

  const [posts, setPosts] = useState()

  //api.get('/postagens')
  //  .then((response) => { 
  //    console.log(response)
  //    setPosts(response.data)
  //  })

  return (
    <>
      <Hero />
      <Recentes />
      <Animes />
      <Filmes />
      <Jogos />
      <Series />
      <Footer />
    </>
  );
}

export default Inicio;
