// src/App.tsx
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { useState, useMemo } from 'react'

import EstiloGlobal from './styles' // certifique-se que exporta default
import Header from './containers/Header'
import Hero from './containers/Hero'
import Skill from './containers/Skill'
import Projects from './containers/Projects'
import Avaliacao from './containers/Avaliacao'
import Footer from './containers/Footer'

// OBS: o import do Sidebar está escrito "Siderbar"; mantenha igual ao nome real do arquivo
// import Sidebar from './containers/Sidebar'; // se for usar, corrija o caminho/nome

import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState<boolean>(true)

  function trocaTema() {
    setEstaUsandoTemaDark((prev) => !prev)
  }

  // dica: memorizar evita re-renderes desnecessários
  const theme: DefaultTheme = useMemo(
    () => (estaUsandoTemaDark ? temaDark : temaLight),
    [estaUsandoTemaDark]
  )

  return (
    <ThemeProvider theme={theme}>
      <EstiloGlobal />
      <Header trocaTema={trocaTema} />
      <Hero />
      <Skill />
      <Projects />
      <Avaliacao />
      <Footer />
    </ThemeProvider>
  )
}

export default App
