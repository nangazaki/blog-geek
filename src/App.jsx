import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Inicio from "./pages/Inicio"
import Animes from "./pages/Animes"
import Filmes from "./pages/Filmes"
import Jogos from "./pages/Jogos"
import Series from "./pages/Series"

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/animes" element={<Animes />}/>
          <Route path="/filmes" element={<Filmes />}/>
          <Route path="/jogos" element={<Jogos />}/>
          <Route path="/series" element={<Series />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
