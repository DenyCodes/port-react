import { Foot } from './styles'

const Footer = () => (
  <Foot>
    <div>
      <strong>Denis Oliveira</strong>
      <span>Desenvolvedor Full Stack · Rio de Janeiro</span>
    </div>
    <nav aria-label="Links profissionais">
      <a href="https://github.com/DenyCodes" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/denisoliveiradev/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a href="mailto:denisdev3loper@gmail.com">E-mail</a>
    </nav>
  </Foot>
)

export default Footer
