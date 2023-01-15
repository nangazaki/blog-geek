import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Inicio from "./pages/Inicio"
import Animes from "./pages/Animes"
import Filmes from "./pages/Filmes"
import Jogos from "./pages/Jogos"
import Series from "./pages/Series"
import PostView from "./pages/PostView"

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/categoria/animes" element={<Animes />} />
          <Route path="/categoria/filmes" element={<Filmes />} />
          <Route path="/categoria/jogos" element={<Jogos />} />
          <Route path="/categoria/series" element={<Series />} />
          <Route path="/post/:title" element={<PostView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
