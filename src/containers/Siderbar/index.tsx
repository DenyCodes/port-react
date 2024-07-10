import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, Sidebarcontainer, IconImg } from './styles'
import python from '../../images/python-original.svg'
import react from '../../images/react-original.svg'
import redux from '../../images/redux-original.svg'
import jquery from '../../images/jquery-original.svg'
import javascript from '../../images/javascript-original.svg'
import typescript from '../../images/typescript-original.svg'
import html from '../../images/html5-original.svg'
import css from '../../images/css3-original.svg'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <Sidebarcontainer>
      <Avatar />
      <Titulo fontSize={20}>Denis Oliveira</Titulo>
      <Descricao tipo="principal" FontSize={12}>
        Desenvolvedor FullStack
      </Descricao>
      <div>
        <IconImg src={python} />
        <IconImg src={react} />
        <IconImg src={typescript} />
        <IconImg src={redux} />
        <IconImg src={javascript} />
        <IconImg src={css} />
        <IconImg src={html} />
        <IconImg src={jquery} />
      </div>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </Sidebarcontainer>
  </aside>
)
export default Sidebar
