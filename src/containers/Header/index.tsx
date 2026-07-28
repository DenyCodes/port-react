import { BottonCV, Brand, Li, Links, Navbar, Ul } from './styles'

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Navbar>
      <Brand type="button" onClick={() => scrollTo('inicio')}>
        denis<span>.dev</span>
      </Brand>

      <Ul>
        <Li>
          <Links type="button" onClick={() => scrollTo('projetos')}>
            Projetos
          </Links>
          <Links type="button" onClick={() => scrollTo('experiencia')}>
            Experiência
          </Links>
          <Links type="button" onClick={() => scrollTo('skills')}>
            Stack
          </Links>
        </Li>
      </Ul>

      <BottonCV>
        <a href="mailto:denisdev3loper@gmail.com">Falar comigo</a>
      </BottonCV>
    </Navbar>
  )
}

export default Header
