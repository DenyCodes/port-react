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

type Projeto = {
  nome: string
  linguagem: string[]
  imagem: string
  descricao: string
  link: string
}

const projetos: Projeto[] = [
  {
    nome: 'Menuden',
    linguagem: ['React', 'Prisma', 'Tailwind'],
    imagem: menuden,
    descricao:
      'Sistema de pedidos online desenvolvido em Next.js 15, React 19, Prisma 6 e Tailwind CSS 4.',
    link: 'https://menu-den.vercel.app/'
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
