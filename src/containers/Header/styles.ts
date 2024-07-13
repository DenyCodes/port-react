import styled from 'styled-components'

export const Navbar = styled.div`
  background-color: ${(props) => props.theme.corPrincipal};
  height: 100px;
  padding-top: 16px;
  margin-top: 0;
  display: flex;
  padding: 16px 80px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const Ul = styled.ul`
  margin-left: auto;
`
export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-left: 32px;
  background-color: ${(props) => props.theme.corPrincipal};
  a {
    color: ${(props) => props.theme.corSecundaria};
    text-decoration: none;
  }
`
export const BottonCV = styled.div`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${(props) => props.theme.corDeFundoBotao};
  a {
    inline-size: max-content;
    text-decoration: none;
    color: ${(props) => props.theme.corBotao};
  }
`
export const Banner = styled.img`
  position: relative;
  overflow: hidden;
  height: 384px;
  width: 100%;
  display: block;
  background-size: cover;
`
export const Icon = styled.div`
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
`