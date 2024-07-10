import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao, SecSobre } from './styles'

const Sobre = () => (
  <SecSobre>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Domínio de HTML, Python, JavaScript, CSS e layouts Front-end ● Criação de
      microsserviços ● Automatização de fluxos de trabalho ● Integração Front e
      Back-end ● Desenvolvimento e testes com Django, Postgres e APIs ●
      Implantação de softwares com abordagem DevOps ● Experiência com SQL e
      bancos de dados
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DenyCodes&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DenyCodes&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </SecSobre>
)

export default Sobre
