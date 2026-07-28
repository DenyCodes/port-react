import javascript from '../../images/javascript-original.svg'
import typescript from '../../images/typescript-original.svg'
import react from '../../images/react-original.svg'
import python from '../../images/python-original.svg'
import html from '../../images/html5-original.svg'
import jquery from '../../images/jquery-original.svg'
import node from '../../images/icon-nodejs.svg'
import postgre from '../../images/icon-postgresql.svg'
import { Container, IcDiv, Icons, Skils } from './styles'

const skills = [
  [react, 'React'],
  [typescript, 'TypeScript'],
  [javascript, 'JavaScript'],
  [python, 'Python'],
  [node, 'Node.js'],
  [postgre, 'PostgreSQL'],
  [jquery, 'jQuery'],
  [html, 'HTML & CSS']
]

const Skill = () => (
  <Container id="skills">
    <div>
      <Skils>
        <h1>Stack técnica</h1>
        <p>Tecnologias utilizadas em aplicações, integrações e sistemas em produção.</p>
      </Skils>
      <Icons>
        {skills.map(([icon, name]) => (
          <IcDiv key={name}>
            <img src={icon} alt="" aria-hidden="true" />
            {name}
          </IcDiv>
        ))}
      </Icons>
    </div>
  </Container>
)

export default Skill
