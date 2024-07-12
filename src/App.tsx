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
import Hero from './containers/Hero'
import Skill from './containers/Skill'
import Projects from './containers/Projects'
import Avaliacao from './containers/Avaliacao'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(true)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Sobre />
      <Skill />
      <Projects />
      <Avaliacao />
      <Footer />
    </ThemeProvider>
  )
}

export default App
