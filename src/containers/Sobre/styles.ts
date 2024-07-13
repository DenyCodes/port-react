import styled from 'styled-components'

export const About = styled.div`
  display: flex;
  padding: 96px 80px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background: ${(props) => props.theme.corFundoSobre};
  color: ${(props) => props.theme.corSecundaria};
`
export const Me = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${(props) => props.theme.corDaBorda};
  color: ${(props) => props.theme.corDeFundoBotao};
`
export const Curious = styled.div`
  width: 50px;
  margin-left: 37%;
  display: flex;
  min-width: 444px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
`

export const Container = styled.div`
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
`
