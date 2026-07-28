import { ThemeProvider, DefaultTheme } from 'styled-components'
import { useMemo, useState } from 'react'

import EstiloGlobal from './styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'
import Avaliacao from './containers/Avaliacao'
import Skill from './containers/Skill'
import Footer from './containers/Footer'

import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState<boolean>(true)

  function trocaTema() {
    setEstaUsandoTemaDark((prev) => !prev)
  }

  const theme: DefaultTheme = useMemo(
    () => (estaUsandoTemaDark ? temaDark : temaLight),
    [estaUsandoTemaDark]
  )

  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} />
      <main>
        <Hero />
        <Projects />
        <Avaliacao />
        <Skill />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
