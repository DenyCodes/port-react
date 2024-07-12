import {
  CampoTag,
  Container,
  Content,
  DescricaoDiv,
  Div,
  Head,
  ImageP,
  Subtitulo,
  Titulo
} from './styles'

import efood from '../../images/efood.png'
import eplay from '../../images/eplay.png'
import disney from '../../images/disney.png'

const Projects = () => (
  <Container id="Projetos">
    <Div>
      <Head>
        <Titulo>
          <h1>Projetos</h1>
        </Titulo>
        <Subtitulo>
          <p>Alguns dos projetos notáveis que construí:</p>
        </Subtitulo>
      </Head>
      <Content>
        <ImageP>
          <img src={efood} />
        </ImageP>
        <DescricaoDiv>
          <h2>lorem</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            optio labore expedita beatae deleniti inventore, quasi, ducimus
            dignissimos sequi animi obcaecati officiis atque recusandae maxime
            dolorum praesentium cumque saepe veritatis!
          </p>
          <CampoTag>
            <span>typescript</span>
            <span>react</span>
            <span>react-router-dom</span>
            <span>redux</span>
            <span>styled-components</span>
            <span>jest</span>
            <span>Figma</span>
            <span>Requisição API</span>
          </CampoTag>
        </DescricaoDiv>
      </Content>
      <Content>
        <ImageP>
          <img src={eplay} />
        </ImageP>
        <DescricaoDiv>
          <h2>lorem</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            optio labore expedita beatae deleniti inventore, quasi, ducimus
            dignissimos sequi animi obcaecati officiis atque recusandae maxime
            dolorum praesentium cumque saepe veritatis!
          </p>
          <CampoTag>
            <span>typescript</span>
            <span>react</span>
            <span>react-router-dom</span>
            <span>redux</span>
            <span>styled-components</span>
            <span>jest</span>
            <span>Figma</span>
            <span>Requisição API</span>
          </CampoTag>
        </DescricaoDiv>
      </Content>
      <Content>
        <ImageP>
          <img src={disney} />
        </ImageP>
        <DescricaoDiv>
          <h2>lorem</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            optio labore expedita beatae deleniti inventore, quasi, ducimus
            dignissimos sequi animi obcaecati officiis atque recusandae maxime
            dolorum praesentium cumque saepe veritatis!
          </p>
          <CampoTag>
            <span>typescript</span>
            <span>react</span>
            <span>react-router-dom</span>
            <span>redux</span>
            <span>styled-components</span>
            <span>jest</span>
            <span>Figma</span>
            <span>Requisição API</span>
          </CampoTag>
        </DescricaoDiv>
      </Content>
    </Div>
  </Container>
)

export default Projects
