import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, Sidebarcontainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <Sidebarcontainer>
      <Avatar />
      <Titulo fontSize={20}>Denis Oliveira</Titulo>
      <Paragrafo>Denis Oliveira</Paragrafo>
      <Descricao tipo="principal" FontSize={12}>
        Desenvolvedor FullStack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </Sidebarcontainer>
  </aside>
)
export default Sidebar
