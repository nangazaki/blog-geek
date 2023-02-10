import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import { PostView } from "./pages/PostView"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id/:title" element={<PostView />} />
      </Routes>
    </>
  );
}