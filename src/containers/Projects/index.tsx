import { useState } from 'react'
import {
  CampoTag,
  Container,
  Content,
  DescricaoDiv,
  Div,
  Head,
  IconB2,
  ImageP,
  Subtitulo,
  Titulo,
  TituloDesc2
} from './styles'
import geolocal from '../../images/geolocal.png'
import icon from '../../images/Iconb.svg'
import menuden from '../../images/menuden.png'
import debourne from '../../images/debourne.png'
import playtecno from '../../images/playtecno.png'

type Projeto = {
  nome: string
  linguagem: string[]
  imagem: string
  descricao: string
  link: string
}

const projetos: Projeto[] = [
  {
    nome: 'MenuDen',
    linguagem: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Meta API'],
    imagem: menuden,
    descricao:
      'Plataforma SaaS para gestão de cardápios, pedidos, clientes e operações. Implementei autenticação, perfis de acesso, painel administrativo, regras de negócio e integrações relacionadas ao atendimento via WhatsApp.',
    link: 'https://menuden.com.br/'
  },
  {
    nome: 'Debourne',
    linguagem: ['React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Supabase'],
    imagem: debourne,
    descricao:
      'Marketplace com vitrine, carrinho, autenticação e painel para lojistas. O trabalho envolveu construção de componentes reutilizáveis, integração com banco de dados e desenvolvimento da experiência de compra.',
    link: 'https://debourne.com.br/'
  },
  {
    nome: 'PlayTecno',
    linguagem: ['React', 'TypeScript', 'APIs REST', 'Automação', 'E-commerce'],
    imagem: playtecno,
    descricao:
      'Projeto independente para produtos digitais, automações e soluções de e-commerce. Atuação no levantamento de requisitos, modelagem de dados, definição de integrações e implementação ponta a ponta.',
    link: 'https://playtecno.com.br/'
  },
  {
    nome: 'Geolocal',
    linguagem: ['JavaScript', 'Google Maps API', 'Geolocalização'],
    imagem: geolocal,
    descricao:
      'Módulo de geolocalização com rotas, marcadores personalizados e recursos baseados na posição do usuário utilizando Google Maps API.',
    link: 'https://www.youtube.com/watch?v=yz_hCnl1Yko'
  }
]

const Projects = () => {
  const [filtro, setFiltro] = useState<string>('Todos')
  const linguagens = ['Todos', 'React', 'TypeScript', 'JavaScript']
  const projetosFiltrados =
    filtro === 'Todos'
      ? projetos
      : projetos.filter((projeto) => projeto.linguagem.includes(filtro))

  return (
    <Container>
      <section id="projetos">
        <Div>
          <Head>
            <Titulo>
              <h1>Projetos em destaque</h1>
            </Titulo>
            <Subtitulo>
              <p>Produtos e soluções que demonstram experiência real de desenvolvimento Full Stack.</p>
              <div>
                {linguagens.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setFiltro(lang)}
                    aria-pressed={filtro === lang}
                    style={{
                      marginRight: '8px',
                      marginTop: '12px',
                      padding: '8px 14px',
                      borderRadius: '999px',
                      border: filtro === lang ? '2px solid #d8ff57' : '1px solid #64748b',
                      background: filtro === lang ? '#d8ff57' : '#111827',
                      color: filtro === lang ? '#111827' : '#f8fafc',
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
                <img src={projeto.imagem} alt={`Interface do projeto ${projeto.nome}`} />
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
                  <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                    <TituloDesc2>
                      Ver projeto
                      <img src={icon} alt="" aria-hidden="true" />
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
