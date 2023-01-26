import { Header } from "./components/Header"
import { Router } from "./router";

import { CSSReset } from "./style";

function App() {

  return (
    <>
      <CSSReset />
      <Header />
      <Router />
    </>
  )
}

export default App
