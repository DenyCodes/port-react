import { Navbar, Li, Banner, BottonCV, Icon, Ul, ligt } from './styles'
import Background from '../../images/Denis Oliveira (2).png'
import light from '../../images/Icon.svg'
import DownloadButton from '../../components/Download'
import Lightmode from '@mui/icons-material/LightMode'

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

          {/* Ícone como fonte de material icons */}
          <Lightmode
            className="material-icons-outlined"
            onClick={props.trocaTema}
            style={{
              fontSize: 40,
              color: 'white',
              cursor: 'pointer',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'yellow')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          />

          <BottonCV>
            <DownloadButton />
          </BottonCV>
        </Li>
      </Ul>
    </Navbar>
  </div>
)

export default Header
