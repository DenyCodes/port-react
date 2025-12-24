import { useState } from 'react'
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
import menuden from '../../images/menuden.png'
import debourne from '../../images/debourne.png'
import playtecno from '../../images/playtecno.png'
type Projeto = {
  nome: string
  linguagem: string[]
  imagem: string
  descricao: string
  link: string
  link2?: string
}

const projetos: Projeto[] = [
  {
    nome: 'Debourne',
    linguagem: [
      'React',
      'Prisma',
      'Tailwind',
      'Auth',
      'Autenticação de usuarios',
      'integração com banco de dados',
      'PostgresSQL',
      'Supabase'
    ],
    imagem: debourne,
    descricao:
      'Sistema completo de e-commerce voltado para o nicho gastronômico. O projeto abrange desde a listagem de restaurantes até o checkout, integrando lógica de carrinho de compras e simulação de fluxo de entrega. A interface foi construída seguindo rigorosamente o Design System proposto no Figma, resultando em uma aplicação React robusta, com componentes estilizados e foco na experiência de compra do usuário final.',
    link: 'https://debourne.com.br/'
  },
  {
    nome: 'Menuden',
    linguagem: [
      'React',
      'Prisma',
      'Tailwind',
      'Auth',
      'Autenticação de usuarios',
      'integração com banco de dados',
      'PostgresSQL',
      'Supabase'
    ],
    imagem: menuden,
    descricao:
      'Plataforma digital para gestão de cardápios e pedidos online. Desenvolvida em React.js, a aplicação funciona como um sistema dinâmico onde o usuário pode visualizar produtos e gerenciar o carrinho de compras. O foco do desenvolvimento foi a lógica de estado global para manipulação de pedidos e a criação de uma interface administrativa intuitiva para o gerenciamento de produtos.',
    link: 'https://menuden.com.br/home/'
  },
  {
    nome: 'PlayTecno',
    linguagem: [
      'React',
      'Prisma',
      'Tailwind',
      'Auth',
      'Autenticação de usuarios',
      'integração com banco de dados',
      'PostgresSQL',
      'Supabase'
    ],
    imagem: playtecno,
    descricao:
      'esse projeto eu reuno todos os trabalhos que realizei e projetos de alguns clientes !! Desenvolvimento de interface web completa com foco em Fidelidade Visual (Pixel Perfect) a partir de protótipos de alta fidelidade no Figma. O projeto utiliza React.js com uma arquitetura moderna baseada em componentes reutilizáveis e rotas dinâmicas (React Router), aplicando as melhores práticas de SEO, performance e UX/UI Design para garantir uma navegação fluida e responsiva, com integração de dados, authenticação ',
    link: 'https://playtecno.com/',
    link2: 'https://playtecno.com.br/'
  },
  {
    nome: 'Rede Social',
    linguagem: ['Python', 'Django', 'PostgreSQL'],
    imagem: RedeSocial,
    descricao:
      'Aplicação de rede social do zero utilizando Django, autenticação, posts e feed em tempo real.',
    link: 'https://social-python.up.railway.app/'
  },
  {
    nome: 'Geolocal',
    linguagem: ['JavaScript', 'Google API'],
    imagem: geolocal,
    descricao:
      'Módulo de geolocalização com Google Maps API, rotas e marcadores personalizados.',
    link: 'https://www.youtube.com/watch?v=yz_hCnl1Yko/'
  },
  {
    nome: 'Efood',
    linguagem: ['TypeScript', 'React'],
    imagem: efood,
    descricao: 'Aplicação de pedidos de comida com React + TypeScript.',
    link: 'https://efood-orpin.vercel.app/'
  },
  {
    nome: 'Eplay',
    linguagem: ['React', 'TypeScript'],
    imagem: eplay,
    descricao: 'Plataforma de streaming de jogos online.',
    link: 'https://eplay-one.vercel.app/'
  },
  {
    nome: 'Disney+ Clone',
    linguagem: ['React', 'Scss'],
    imagem: disney,
    descricao: 'Clone do Disney+ feito com React e SCSS.',
    link: 'https://disney-ooya.vercel.app/'
  }
]

const Projects = () => {
  const [filtro, setFiltro] = useState<string>('Todos')

  const linguagens = [
    'Todos',
    'React',
    'TypeScript',
    'Python',
    'Django',
    'JavaScript'
  ]

  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : projetos.filter((p) => p.linguagem.includes(filtro))

  return (
    <Container id="Projetos">
      <section id="projetos">
        <Div>
          <Head>
            <Titulo>
              <h1>Projetos</h1>
            </Titulo>
            <Subtitulo>
              <p>Alguns dos projetos notáveis que construí:</p>
              <div>
                {linguagens.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setFiltro(lang)}
                    style={{
                      marginRight: '8px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border:
                        filtro === lang ? '2px solid red' : '1px solid gray',
                      background: filtro === lang ? '#222' : '#fff',
                      color: filtro === lang ? '#fff' : '#000',
                      cursor: 'pointer'
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </Subtitulo>
          </Head>

          {projetosFiltrados.map((projeto) => (
            <Content key={projeto.nome}>
              <ImageP>
                <img src={projeto.imagem} />
              </ImageP>
              <DescricaoDiv>
                <Titulo>{projeto.nome}</Titulo>
                <p>{projeto.descricao}</p>
                <CampoTag>
                  {projeto.linguagem.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </CampoTag>
                <IconB2>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TituloDesc2>
                      VEJA
                      <img src={icon} />
                    </TituloDesc2>
                  </a>
                </IconB2>
              </DescricaoDiv>
            </Content>
          ))}
        </Div>
      </section>
    </Container>
  )
}

export default Projects
