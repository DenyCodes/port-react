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
          <div>
            <a href="https://www.linkedin.com/in/denisoliveiradev/">Sobre</a>
          </div>
          <div>
            <a href="https://github.com/DenyCodes?tab=repositories">Projetos</a>
          </div>
          <img src={light} alt="icon" onClick={props.trocaTema} />
          <BottonCV>
            <DownloadButton />
          </BottonCV>
        </Li>
      </Ul>
    </Navbar>
  </div>
)

export default Header
