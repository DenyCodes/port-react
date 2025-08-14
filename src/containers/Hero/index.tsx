import icondot from '../../images/icon-dot-emerald-500.png'
import denis from '../../images/eu.jpg'
import {
  Container,
  Disponivel,
  Icones,
  Pic,
  PicPerfil,
  Sobre,
  SobreText
} from './styles'

const Hero = () => (
  <Container>
    <Sobre>
      <SobreText>
        <h1>Oi, Meu nome é Denis, tudo bem?!</h1>
        <p
          style={{
            padding: '2%',
            borderRadius: '10px',
            backgroundColor: '#fff',
            color: 'black'
          }}
        >
          Sou desenvolvedor full stack com experiência sólida Desenvolvimento
          Web, atuando tanto no front quanto no back-end. Tenho como foco a
          criação de aplicações modernas, rápidas, acessíveis e responsivas,
          sempre com atenção à performance, usabilidade e qualidade de código.
          Gosto de transformar ideias em soluções reais, com interfaces bem
          construídas e arquiteturas eficientes.
        </p>
        <Disponivel>
          <Task />
        </Disponivel>
      </SobreText>
      <Icones></Icones>
    </Sobre>
    <PicPerfil>
      <Pic src={denis} />
    </PicPerfil>
    <header></header>
  </Container>
)

export default Hero
export const Task = () => {
  return (
    <>
      {[1].map((item) => (
        <div key={item}>
          <img src={icondot} title="Disponivel" /> Disponivel para novos
          projetos{' '}
        </div>
      ))}
    </>
  )
}
