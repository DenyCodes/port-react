import denis from '../../images/eu.png'
import { Container, Icones, Pic, PicPerfil, Sobre, SobreText } from './styles'

const Hero = () => {
  return (
    <Container>
      <Sobre>
        <SobreText>
          <h1>Olá Sou Denis Oliveira Dev Full Stack.</h1>
          <h4>
            Crio aplicações modernas, rápidas, acessíveis e responsivas. Sempre
            com atenção à performance, usabilidade e qualidade de código
          </h4>
        </SobreText>
        <Icones />
      </Sobre>
      <PicPerfil>
        <Pic src={denis} />
      </PicPerfil>
    </Container>
  )
}

export default Hero
