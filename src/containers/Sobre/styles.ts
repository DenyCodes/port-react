import styled from 'styled-components'

export const GithubSecao = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
export const SecSobre = styled.section`
  border-radius: 5px;
  padding: 20px;
  background-color: ${(props) => props.theme.corPerfil};
`
