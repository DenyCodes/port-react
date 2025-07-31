import styled from 'styled-components'

export const About = styled.div`
  display: flex;
  padding: 96px 80px;
  background: ${(props) => props.theme.corFundoSobre};
  color: ${(props) => props.theme.corSecundaria};
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Me = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corBotao};

  @media (max-width: 768px) {
    position: relative;
    left: -65px;
  }
`
export const Curious = styled.div`
  padding: 80px;
  align-items: center;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 0;
  color: ${(props) => props.theme.corDeFundoBotao};
  background: ${(props) => props.theme.corFundocurious};
  border: 2px solid ${(props) => props.theme.corDeFundoBotao};

  h1 {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    left: -30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
    margin-left: 0;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex: 1 0 0;
  }
`
