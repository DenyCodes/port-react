import {
  Card,
  Cards,
  Container,
  Head,
  IconDiv,
  MainCard,
  NameP,
  Span,
  SpanDesc
} from './styles'
import icon from '../../images/icon-user.svg'

const Avaliacao = () => (
  <Container>
    <MainCard>
      <Head>
        <Span>
          <h1>Avaliações</h1>
        </Span>
        <SpanDesc>
          <h2>Coisas legais que as pessoas disseram sobre mim:</h2>
        </SpanDesc>
      </Head>
      <Cards>
        <Card>
          <IconDiv>
            <img src={icon} />
          </IconDiv>
          <p>
            “Trabalho bem feito! Estou realmente impressionado. Ele é muito bom
            no que faz :) Eu recomendaria Denis e irei recontratar no futuro
            para desenvolvimento de Frontend.”
          </p>
          <NameP>
            <h2>John Doe</h2>
            <h3>Founder - xyz.com</h3>
          </NameP>
        </Card>
        <Card>
          <IconDiv>
            <img src={icon} />
          </IconDiv>
          <p>
            “Ótimo cara, altamente recomendado para qualquer trabalho COMPLEXO
            de desenvolvimento front-end! Suas habilidades são excelentes e ele
            será uma adição incrível a qualquer equipe.”
          </p>
          <NameP>
            <h2>John Doe</h2>
            <h3>Founder - xyz.com</h3>
          </NameP>
        </Card>
        <Card>
          <IconDiv>
            <img src={icon} />
          </IconDiv>
          <p>
            “Denis foi extremamente fácil e agradável de trabalhar e ele
            realmente se preocupa com o sucesso do projeto. Sagar tem um alto
            nível de conhecimento e foi capaz de trabalhar em meu aplicativo sem
            problemas.”
          </p>
          <NameP>
            <h2>John Doe</h2>
            <h3>Founder - xyz.com</h3>
          </NameP>
        </Card>
      </Cards>
    </MainCard>
  </Container>
)

export default Avaliacao
