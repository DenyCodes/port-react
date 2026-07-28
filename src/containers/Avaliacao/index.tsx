import {
  Card,
  Cards,
  Container,
  Head,
  MainCard,
  NameP,
  Span,
  SpanDesc
} from './styles'

const experiences = [
  {
    role: 'Analista de Automação',
    company: 'Instituto Experience',
    period: 'Ago 2025 — Fev 2026',
    description:
      'Desenvolvimento de automações em Python e interfaces em React para execução, acompanhamento e rastreabilidade de fluxos internos.'
  },
  {
    role: 'Desenvolvedor Full Stack',
    company: 'KAITS',
    period: '2024 — 2025',
    description:
      'Desenvolvimento e manutenção de sistemas administrativos com JavaScript, jQuery, PHP, SQL Server, APIs REST, Postman e ambiente IIS.'
  },
  {
    role: 'Analista de Sistemas',
    company: 'TechnoAuto',
    period: '2023',
    description:
      'Levantamento de requisitos, modelagem de dados e suporte a integrações entre e-commerce, marketplaces e ERP.'
  }
]

const Avaliacao = () => (
  <Container id="experiencia">
    <MainCard>
      <Head>
        <Span>
          <h1>Experiência profissional</h1>
        </Span>
        <SpanDesc>
          <h2>
            Atuação em desenvolvimento, automação, integrações e sistemas em
            produção.
          </h2>
        </SpanDesc>
      </Head>

      <Cards>
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.role}`}>
            <NameP>
              <h2>{experience.role}</h2>
              <h3>{experience.company}</h3>
              <span>{experience.period}</span>
            </NameP>
            <p>{experience.description}</p>
          </Card>
        ))}
      </Cards>

      <p>
        Formação: Sistemas de Informação — Estácio · Desenvolvimento Full Stack
        — EBAC · Inglês avançado
      </p>
    </MainCard>
  </Container>
)

export default Avaliacao
