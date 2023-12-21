import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  FontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', FontSize }: Props) => (
  <P FontSize={FontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
