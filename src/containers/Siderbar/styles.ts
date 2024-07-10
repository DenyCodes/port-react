import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  margin-top: 20px;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`
export const Sidebarcontainer = styled.div`
  margin-left: -100px;
  background-color: ${(props) => props.theme.corPerfil};
  width: 150px;
  padding: 20px;

  border-radius: 10px;
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
export const IconImg = styled.img`
  width: 25px;
`
