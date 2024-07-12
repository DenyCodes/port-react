import javascript from '../../images/javascript-original.svg'
import typescript from '../../images/typescript-original.svg'
import react from '../../images/react-original.svg'
import redux from '../../images/redux-original.svg'
import vue from '../../images/vuejs-original.svg'
import python from '../../images/python-original.svg'
import bootstrap from '../../images/bootstrap-original.svg'
import html from '../../images/html5-original.svg'
import jquery from '../../images/jquery-original.svg'
import node from '../../images/icon-nodejs.svg'
import postgre from '../../images/icon-postgresql.svg'
import sass from '../../images/icon-sass.svg'
import { Container, IcDiv, Icons, Skils } from './styles'

const Skill = () => (
  <Container>
    <div>
      <Skils>
        <h1>Skills</h1>
        <p>As habilidades, ferramentas e tecnologias em que sou muito bom</p>
      </Skils>
      <Icons>
        <IcDiv>
          <img src={javascript} />
          JavaScript
        </IcDiv>
        <IcDiv>
          <img src={typescript} />
          TypeScript
        </IcDiv>
        <IcDiv>
          <img src={react} />
          React
        </IcDiv>
        <IcDiv>
          <img src={redux} />
          Redux
        </IcDiv>
        <IcDiv>
          <img src={vue} />
          Vue
        </IcDiv>
        <IcDiv>
          <img src={python} />
          Python
        </IcDiv>
        <IcDiv>
          <img src={bootstrap} />
          Bootstrap
        </IcDiv>
        <IcDiv>
          <img src={html} />
          HTML
        </IcDiv>
        <IcDiv>
          <img src={jquery} />
          Jquery
        </IcDiv>
        <IcDiv>
          <img src={node} />
          Node
        </IcDiv>
        <IcDiv>
          <img src={postgre} />
          PostGres
        </IcDiv>
        <IcDiv>
          <img src={sass} />
          Sass
        </IcDiv>
      </Icons>
    </div>
  </Container>
)

export default Skill
