import styled from 'styled-components'
import fundo from '../../images/fundo.jpg'

export const Navbar = styled.div`
  border: 1px solid maroon;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 16px 80px;
  background-color: #000;
  padding-top: 16px;
  margin-top: 0;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 50%;
  }
  img {
    cursor: pointer;
  }
`
export const Ul = styled.ul`
  margin-left: auto;
  @media (max-width: 768px) {
    width: 100%;
    right: 90px;
    position: relative;
  }
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-left: 32px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ligt = styled.div`
  width: 24px;
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
  @media (max-width: 768px) {
    width: 100%;
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
  @media (max-width: 768px) {
    width: 100px;
  }
`
export const Links = styled.div`
  width: 10%;
  a {
    color: white;
    text-decoration: none;
    background-color: #000;
  }
`
