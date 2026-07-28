import denis from '../../images/eu.png'
import {
  Actions,
  Container,
  Content,
  Eyebrow,
  Pic,
  PicPerfil,
  SocialLinks,
  Sobre,
  SobreText
} from './styles'

const Hero = () => {
  return (
    <Container id="inicio">
      <Content>
        <Sobre>
          <SobreText>
            <Eyebrow>Disponível para oportunidades profissionais</Eyebrow>
            <h1>
              Desenvolvedor Full Stack focado em aplicações web completas.
            </h1>
            <p>
              Desenvolvo interfaces, APIs, automações e integrações utilizando
              React, TypeScript, JavaScript, Python, PHP, SQL e Supabase.
            </p>
          </SobreText>

          <Actions>
            <a href="#projetos">Ver projetos</a>
            <a
              href="https://www.linkedin.com/in/denisoliveiradev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:denisdev3loper@gmail.com">Entrar em contato</a>
          </Actions>

          <SocialLinks>
            <span>Rio de Janeiro, Brasil</span>
            <span>Inglês avançado</span>
            <span>Disponível para trabalho remoto</span>
          </SocialLinks>
        </Sobre>

        <PicPerfil>
          <Pic src={denis} alt="Denis Oliveira, Desenvolvedor Full Stack" />
        </PicPerfil>
      </Content>
    </Container>
  )
}

export default Hero
