import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-widht: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
export const SecProje = styled.section`
  padding: 20px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
`
export const ListRep = styled.div`
  background-color: ${(props) => props.theme.corDeFundo};
  display: inline-grid;
  gap: 20px;
  padding-top: 11px;
  padding-left: 100px;
  border-radius: 5px;
  color: ${(props) => props.theme.corPrincipal};
`
export const Github = styled.div`
  background-color: ${(props) => props.theme.corGithub};
  width: 50px;
  padding: 10px;
  border-radius: 5px;
  a {
    color: ${(props) => props.theme.corDeFundoBotao};
    text-decoration: none;
  }
`
export const Site = styled.div`
  margin-bottom: 20px;
  position: relative;
  background-color: ${(props) => props.theme.corGithub};
  width: 50px;
  padding: 10px;
  border-radius: 5px;
  a {
    color: ${(props) => props.theme.corDeFundoBotao};
    text-decoration: none;
  }
`
