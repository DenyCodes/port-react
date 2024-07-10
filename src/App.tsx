import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Siderbar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Header from './containers/Header'
import Footer from './containers/Footer'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(true)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <Header />
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos nomeUsuario={'denycodes'} />
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
