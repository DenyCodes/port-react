import { About, Container, Curious, Me } from './styles'
import denis from '../../images/deniso.jpg'

const Sobre = () => (
  <About>
    <Container>
      <Me>
        <h4>Sobre mim</h4>
      </Me>
      <Curious>
        <h1>Curioso sobre mim?</h1>
        <p>
          <p>
            {' '}
            Sou desenvolvedor Full Stack especializado em{' '}
            <strong>Python</strong>,<strong>React.js</strong>,
            <strong>JavaScript</strong>, <strong>PHP</strong> e . Tenho paixão
            por criar experiências digitais excepcionais, unindo excelência
            técnica, design refinado e alta performance. Minha abordagem é
            sempre centrada no usuário, priorizando interfaces intuitivas,
            responsivas e a escrita de código limpo, modular e eficiente.{' '}
          </p>{' '}
          <p>
            {' '}
            Minha trajetória na tecnologia começou formalmente em 2016, com a
            graduação em Sistemas de Informação pela Universidade Estácio de Sá
            (concluída em 2021). Buscando aprimoramento constante,
            especializei-me pela EBAC (Escola Britânica de Artes Criativas e
            Tecnologia), onde me formei em 2024, aprofundando meus conhecimentos
            em desenvolvimento Front-end e Back-end com tecnologias modernas.{' '}
          </p>{' '}
        </p>
      </Curious>
    </Container>
  </About>
)

export default Sobre
