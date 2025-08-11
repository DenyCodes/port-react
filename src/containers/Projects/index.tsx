import {
  CampoTag,
  Container,
  Content,
  DescricaoDiv,
  Div,
  Head,
  IconB,
  IconB2,
  ImageP,
  Subtitulo,
  Titulo,
  TituloDesc,
  TituloDesc2
} from './styles'
import geolocal from '../../images/geolocal.png'
import efood from '../../images/efood.png'
import eplay from '../../images/eplay.png'
import disney from '../../images/disney.png'
import icon from '../../images/Iconb.svg'
import RedeSocial from '../../images/rede-social.png'

const Projects = () => (
  <Container id="Projetos">
    <section id="projetos">
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
            <img src={RedeSocial} />
          </ImageP>
          <DescricaoDiv>
            <Titulo>Rede Social</Titulo>
            <p>
              <TituloDesc2>Python, Django</TituloDesc2>Desenvolvi uma aplicação
              de rede social do zero utilizando Django, com recursos como
              autenticação de usuários, criação de posts, sistema de seguidores,
              upload de fotos de perfil e feed em tempo real. O projeto utiliza
              princípios de Clean Architecture, integrações com PostgreSQL e
              boas práticas de desenvolvimento seguro. Hospedagem em ambiente
              cloud, com deploy automatizado e gestão de arquivos estáticos.
              Stack: Django, Python, HTML, CSS, PostgreSQL, Railway.
            </p>
            <CampoTag>
              <span>python</span>
              <span>django</span>
              <span>postgresql</span>
              <span>html</span>
              <span>css</span>
              <span>clean architecture</span>
            </CampoTag>
            <IconB2>
              <a href="https://social-python.up.railway.app/">
                <TituloDesc2>
                  VEJA
                  <img src={icon} />
                </TituloDesc2>
              </a>
            </IconB2>
          </DescricaoDiv>
        </Content>
        <Content>
          <ImageP>
            <img src={geolocal} />
          </ImageP>
          <DescricaoDiv>
            <Titulo>Geolocal</Titulo>
            <p>
              <TituloDesc>JavaScript puro + Google Maps API</TituloDesc>{' '}
              Desenvolvi um módulo completo de geolocalização para o sistema de
              gestão educacional da Kaits, utilizado em escolas públicas. A
              ferramenta permite visualizar no mapa os endereços de perfis
              diversos (alunos, professores, escolas, responsáveis, veículos
              etc.), com foco em rotas escolares e otimização logística.
              Principais funcionalidades: Renderização dinâmica de marcadores
              personalizados por tipo de perfil; Cálculo de rotas e tempo
              estimado de deslocamento via Google Maps Directions API; Filtros
              por região, perfil e status (ativo/inativo); Exibição detalhada de
              informações no clique do marcador; Integração com banco de dados
              via PHP para carregar coordenadas geográficas; Responsividade e
              performance aprimorada mesmo com grande volume de dados.
            </p>
            <CampoTag>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>SQL SERVER</span>
              <span>GOOGLE API</span>
              <span>GOOGLE MAPS</span>
              <span>AWS</span>
              <span>CSS</span>
            </CampoTag>
            <IconB>
              <a href="https://www.youtube.com/watch?v=yz_hCnl1Yko/">
                <TituloDesc>
                  VEJA
                  <img src={icon} />
                </TituloDesc>
              </a>
            </IconB>
          </DescricaoDiv>
        </Content>
        <Content>
          <ImageP>
            <img src={efood} />
          </ImageP>
          <DescricaoDiv>
            <Titulo>Efood</Titulo>
            <p>
              <TituloDesc>TypeScript, React e API</TituloDesc>O eFood é uma
              aplicação web moderna e responsiva desenvolvida para fornecer uma
              experiência de usuário intuitiva e eficiente na encomenda de
              alimentos. O projeto utiliza tecnologias avançadas como React.js e
              TypeScript para criar uma interface de usuário interativa e
              dinâmica. Com um design minimalista e funcional, o eFood permite
              aos usuários navegar pelo menu, adicionar itens ao carrinho e
              finalizar a compra com facilidade. Este projeto demonstra minha
              habilidade em desenvolver aplicações full stack, integrando
              frontend e backend de forma harmoniosa para criar uma experiência
              de usuário fluida e agradável.
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
                <TituloDesc>
                  VEJA
                  <img src={icon} />
                </TituloDesc>
              </a>
            </IconB>
          </DescricaoDiv>
        </Content>
        <Content>
          <ImageP>
            <img src={eplay} />
          </ImageP>
          <DescricaoDiv>
            <Titulo>Eplay</Titulo>
            <p>
              <TituloDesc>React, TypeScript, redux, APIRest</TituloDesc>O ePlay
              é uma plataforma de streaming de jogos online, desenvolvida para
              proporcionar aos usuários uma experiência imersiva e envolvente.
              Este projeto utiliza tecnologias modernas como React.js e Next.js
              para criar uma interface de usuário dinâmica e altamente
              responsiva. A plataforma permite que os usuários explorem uma
              vasta biblioteca de jogos, assistam a transmissões ao vivo e se
              conectem com outros jogadores. O ePlay demonstra minha habilidade
              em criar aplicações web complexas e escaláveis, focando na
              performance e na experiência do usuário.
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
                <TituloDesc>
                  VEJA
                  <img src={icon} />
                </TituloDesc>
              </a>
            </IconB>
          </DescricaoDiv>
        </Content>
        <Content>
          <ImageP>
            <img src={disney} />
          </ImageP>
          <DescricaoDiv>
            <Titulo>Disney+ Clone</Titulo>
            <p>
              <TituloDesc>Scss e html</TituloDesc>O Disney+ Clone é uma réplica
              da famosa plataforma de streaming Disney+, desenvolvida para
              demonstrar minhas habilidades em criação de interfaces de usuário
              atraentes e funcionais. Este projeto foi construído utilizando
              React.js e Next.js, proporcionando uma experiência de navegação
              fluida e responsiva. A plataforma permite que os usuários explorem
              uma ampla gama de conteúdos, incluindo filmes, séries e
              documentários, com uma interface visualmente atraente e intuitiva.
              O Disney+ Clone destaca minha capacidade de recriar interfaces
              complexas e otimizar a experiência do usuário.
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
                <TituloDesc>
                  VEJA
                  <img src={icon} />
                </TituloDesc>
              </a>
            </IconB>
          </DescricaoDiv>
        </Content>
      </Div>
    </section>
  </Container>
)

export default Projects
