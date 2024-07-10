import { Navbar, Li, Banner } from './styles'
import Background from '../../images/Denis Oliveira (2).png'

const Header = () => (
  <div>
    <Navbar>
      <ul>
        <Li>
          <a href="/">inicio</a>
          <a href="/">Projetos</a>
          <a href="/">Contato</a>
          <a href="/">Quem sou eu</a>
        </Li>
      </ul>
    </Navbar>
    <div>
      <Banner src={Background} />
    </div>
  </div>
)

export default Header
