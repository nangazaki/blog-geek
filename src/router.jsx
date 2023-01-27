import { Routes, Route } from "react-router-dom"

import Inicio from "./pages/Inicio"
import Animes from "./pages/Animes"
import Filmes from "./pages/Filmes"
import Jogos from "./pages/Jogos"
import Series from "./pages/Series"
import { PostView } from "./pages/PostView"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/post/:id/:title" element={<PostView />} />
      </Routes>
    </>
  );
}