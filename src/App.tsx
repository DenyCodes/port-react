import { ThemeProvider } from 'styled-components'

import EstiloGlobal from './styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'
import Avaliacao from './containers/Avaliacao'
import Skill from './containers/Skill'
import Footer from './containers/Footer'

import temaDark from './themes/dark'

function App() {
  return (
    <ThemeProvider theme={temaDark}>
      <EstiloGlobal />
      <Header />
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
