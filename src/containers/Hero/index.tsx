import iconloc from '../../images/Iconloc.svg'
import icondot from '../../images/icon-dot-emerald-500.png'
import github from '../../images/github.svg'
import linkedin from '../../images/Linkedin.png'
import twitter from '../../images/twitter.svg'
import denis from '../../images/eu.jpg'
import { Container, Disponivel, Linkedin, Local, Pic, Sobre } from './styles'

const Hero = () => (
  <Container>
    <Sobre>
      <h1>Oi, Eu sou Denis</h1>
      <p>
        Sou um desenvolvedor full stack (React.js e Python) com foco na criação
        de experiências digitais excepcionais que sejam rápidas, acessíveis,
        visualmente atraentes e responsivas.
      </p>
      <Local>
        <div>
          <img src={iconloc} /> Rio de janeiro - RJ
        </div>
        <Disponivel>
          <img src={icondot} /> Disponivel para novos projetos
        </Disponivel>
      </Local>
      <div>
        <a href="https://github.com/DenyCodes">
          <img src={github} />
        </a>
        <Linkedin>
          <a href="https://www.linkedin.com/in/denisoliveiradev/">
            <img src={linkedin} />
          </a>
        </Linkedin>
      </div>
    </Sobre>
    <Pic src={denis} />
  </Container>
)

export default Hero
