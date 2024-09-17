import { Navbar, Li, Banner, BottonCV, Icon, Ul } from './styles'
import Background from '../../images/Denis Oliveira (2).png'
import light from '../../images/Icon.svg'
import DownloadButton from '../../components/Download'
type Props = {
  trocaTema: () => void
}
const Header = (props: Props) => (
  <div>
    <Navbar>
      <Ul>
        <Li>
          <a href="https://www.linkedin.com/in/denisoliveiradev/">Sobre</a>
          <a href="https://github.com/DenyCodes?tab=repositories">Projetos</a>
          <Icon onClick={props.trocaTema}>
            <img src={light} />
          </Icon>
          <BottonCV>
            <DownloadButton />
          </BottonCV>
        </Li>
      </Ul>
    </Navbar>
  </div>
)

export default Header
