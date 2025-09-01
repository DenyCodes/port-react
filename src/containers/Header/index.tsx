import { Navbar, Li, Banner, BottonCV, Icon, Ul, ligt } from './styles'
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
            <div>
              <a href="https://github.com/DenyCodes">GitHub</a>
            </div>
            <div>
              {/* Link agora chama a função de scroll */}
              <a href="#projetos" onClick={scrollToProjetos}>
                Projetos
              </a>
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
            <button
              onClick={toggleLang}
              aria-label="Change language"
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontWeight: 600
              }}
              title={
                lang === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'
              }
            >
              🌐 {lang === 'en' ? 'EN' : 'PT'}
            </button>
          </Li>
        </Ul>
      </Navbar>
    </div>
  )
}

export default Header
