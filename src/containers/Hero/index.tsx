import denis from '../../images/eu.jpg'
import { Container, Icones, Pic, PicPerfil, Sobre, SobreText } from './styles'

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
