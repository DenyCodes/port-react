import {
  CampoTag,
  Container,
  Content,
  DescricaoDiv,
  Div,
  Head,
  IconB,
  ImageP,
  Subtitulo,
  Titulo
} from './styles'

import efood from '../../images/efood.png'
import eplay from '../../images/eplay.png'
import disney from '../../images/disney.png'
import icon from '../../images/Iconb.svg'

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
          <h2>Efood</h2>
          <p>
            O eFood é uma aplicação web moderna e responsiva desenvolvida para
            fornecer uma experiência de usuário intuitiva e eficiente na
            encomenda de alimentos. O projeto utiliza tecnologias avançadas como
            React.js e TypeScript para criar uma interface de usuário interativa
            e dinâmica. Com um design minimalista e funcional, o eFood permite
            aos usuários navegar pelo menu, adicionar itens ao carrinho e
            finalizar a compra com facilidade. Este projeto demonstra minha
            habilidade em desenvolver aplicações full stack, integrando frontend
            e backend de forma harmoniosa para criar uma experiência de usuário
            fluida e agradável.
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
          <IconB>
            <a href="https://efood-orpin.vercel.app/">
              <img src={icon} />
            </a>
          </IconB>
        </DescricaoDiv>
      </Content>
      <Content>
        <ImageP>
          <img src={eplay} />
        </ImageP>
        <DescricaoDiv>
          <h2>Eplay</h2>
          <p>
            O ePlay é uma plataforma de streaming de jogos online, desenvolvida
            para proporcionar aos usuários uma experiência imersiva e
            envolvente. Este projeto utiliza tecnologias modernas como React.js
            e Next.js para criar uma interface de usuário dinâmica e altamente
            responsiva. A plataforma permite que os usuários explorem uma vasta
            biblioteca de jogos, assistam a transmissões ao vivo e se conectem
            com outros jogadores. O ePlay demonstra minha habilidade em criar
            aplicações web complexas e escaláveis, focando na performance e na
            experiência do usuário.
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
          <IconB>
            <a href="https://eplay-one.vercel.app/">
              <img src={icon} />
            </a>
          </IconB>
        </DescricaoDiv>
      </Content>
      <Content>
        <ImageP>
          <img src={disney} />
        </ImageP>
        <DescricaoDiv>
          <h2>Disney+ Clone</h2>
          <p>
            O Disney+ Clone é uma réplica da famosa plataforma de streaming
            Disney+, desenvolvida para demonstrar minhas habilidades em criação
            de interfaces de usuário atraentes e funcionais. Este projeto foi
            construído utilizando React.js e Next.js, proporcionando uma
            experiência de navegação fluida e responsiva. A plataforma permite
            que os usuários explorem uma ampla gama de conteúdos, incluindo
            filmes, séries e documentários, com uma interface visualmente
            atraente e intuitiva. O Disney+ Clone destaca minha capacidade de
            recriar interfaces complexas e otimizar a experiência do usuário.
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
          <IconB>
            <a href="https://disney-ooya.vercel.app/">
              <img src={icon} />
            </a>
          </IconB>
        </DescricaoDiv>
      </Content>
    </Div>
  </Container>
)

export default Projects
