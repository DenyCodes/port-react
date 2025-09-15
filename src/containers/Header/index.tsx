import { Navbar, Li, Banner, BottonCV, Icon, Ul, ligt, Links } from './styles'
import Background from '../../images/Denis Oliveira (2).png'
import light from '../../images/Icon.svg'
import DownloadButton from '../../components/Download'
import Lightmode from '@mui/icons-material/LightMode'
import { useLanguage } from '../../LanguageProvider'

type Props = {
  trocaTema: () => void
}

const Header = (props: Props) => {
  // Função para scrollar até a penúltima seção (id="projetos")
  const { lang, toggleLang } = useLanguage()

  const scrollToProjetos = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    const section = document.getElementById('projetos')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Navbar>
        <Ul>
          <Li>
            <Links>
              <a href="https://github.com/DenyCodes">GitHub</a>
            </Links>
            <Links>
              <a href="#projetos" onClick={scrollToProjetos}>
                Projetos
              </a>
            </Links>
          </Li>
        </Ul>
      </Navbar>
    </div>
  )
}

export default Header
