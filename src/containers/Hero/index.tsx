import { useEffect, useState } from 'react'
import denis from '../../images/eu.jpg'
import { Container, Icones, Pic, PicPerfil, Sobre, SobreText } from './styles'

const mensagens = [
  'Oi, Meu nome é Denis, tudo bem?!',
  'Sou dev full stack 🚀',
  'Sou desenvolvedor full stack com experiência sólida em Desenvolvimento Web, atuando tanto no front quanto no back-end.',
  'Crio aplicações modernas, rápidas, acessíveis e responsivas. Sempre com atenção à performance, usabilidade e qualidade de código.'
]

const Hero = () => {
  const [texto, setTexto] = useState('')
  const [indexMensagem, setIndexMensagem] = useState(0)
  const [indexLetra, setIndexLetra] = useState(0)
  const [historico, setHistorico] = useState<string[]>([])

  useEffect(() => {
    if (indexMensagem < mensagens.length) {
      if (indexLetra < mensagens[indexMensagem].length) {
        const timeout = setTimeout(() => {
          setTexto((prev) => prev + mensagens[indexMensagem][indexLetra])
          setIndexLetra((prev) => prev + 1)
        }, 60)
        return () => clearTimeout(timeout)
      } else {
        // mensagem terminou → adiciona ao histórico
        const timeout = setTimeout(() => {
          setHistorico((prev) => [...prev, mensagens[indexMensagem]])
          setTexto('')
          setIndexMensagem((prev) => prev + 1)
          setIndexLetra(0)
        }, 600)
        return () => clearTimeout(timeout)
      }
    }
  }, [indexLetra, indexMensagem])

  return (
    <Container>
      <Sobre>
        <SobreText>
          <div className="mensagens-container">
            {historico.map((msg, i) => (
              <div key={i} className="mensagem animada">
                {msg}
              </div>
            ))}
            {texto && (
              <div className="mensagem digitando">
                <span>{texto}</span>
                <span className="cursor">|</span>
              </div>
            )}
          </div>
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
