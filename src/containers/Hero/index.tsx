import { useEffect, useState } from 'react'
import denis from '../../images/eu.jpg'
import { Container, Icones, Pic, PicPerfil, Sobre, SobreText } from './styles'

const mensagens = [
  'Oi, Meu nome é Denis, tudo bem?!',
  'Sou dev full stack 🚀',
  'Sou desenvolvedor full stack com experiência sólida Desenvolvimento Web, atuando tanto no front quanto no back-end.',
  'aplicações modernas, rápidas, acessíveis e responsivas, sempre com atenção à performance, usabilidade e qualidade de código. Gosto de transformar ideias em soluções reais, com interfaces bem construídas e arquiteturas eficientes.'
]

const Hero = () => {
  const [texto, setTexto] = useState('')
  const [indexMensagem, setIndexMensagem] = useState(0)
  const [indexLetra, setIndexLetra] = useState(0)

  // efeito de digitação
  useEffect(() => {
    if (indexMensagem < mensagens.length) {
      if (indexLetra < mensagens[indexMensagem].length) {
        const timeout = setTimeout(() => {
          setTexto((prev) => prev + mensagens[indexMensagem][indexLetra])
          setIndexLetra((prev) => prev + 1)
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        // próxima mensagem depois de 1.5s
        const timeout = setTimeout(() => {
          setTexto('')
          setIndexMensagem((prev) => prev + 1)
          setIndexLetra(0)
        }, 1500)
        return () => clearTimeout(timeout)
      }
    }
  }, [indexLetra, indexMensagem])

  return (
    <Container>
      <Sobre>
        <SobreText>
          <h1 style={{ marginBottom: '12px' }}>
            💬{' '}
            <span
              style={{
                color: '#fff'
              }}
            >
              {texto}
            </span>
          </h1>
        </SobreText>
        <Icones></Icones>
      </Sobre>
      <PicPerfil>
        <Pic src={denis} />
      </PicPerfil>
    </Container>
  )
}

export default Hero
