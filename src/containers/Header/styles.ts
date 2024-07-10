import styled from 'styled-components'

export const Navbar = styled.div`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  height: 100px;
  padding-top: 100px;
  margin-top: 0;
`
export const Li = styled.div`
  display: flex;
  justify-content: space-evenly;
  a {
    background-color: ${(props) => props.theme.corDeFundo};
    padding: 10px;
    border-radius: 5px;
    color: ${(props) => props.theme.corPrincipal};
    text-decoration: none;
  }
`
export const Banner = styled.img`
  background-size: cover;
  width: 100%;
`
