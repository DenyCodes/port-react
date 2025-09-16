import styled from 'styled-components'
import fundo from '../../images/fundo3.jpg'
import fundo2 from '../../images/fundo2.jpg'
export const Container = styled.div`
  max-width: 100%;
  width: auto;
  display: flex;
  padding: 96px 80px;
  justify-content: space-between;
  // align-items: flex-start;
  // align-self: stretch;
  background-color: #fff;
  color: ${(props) => props.theme.corSecundaria};
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding: 65px 15px;
  }
`
export const Sobre = styled.div`
  display: flex;
  max-width: 768px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  h1 {
    color: #000;
    padding: 2%;
    border-radius: 10px;
  }
  h4 {
    color: #262626;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export const SobreText = styled.div`
  text-align: center;
  margin: 10%;
  text-shadow: 2px 2px solid;
`
export const PicPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Pic = styled.img`
  width: 332px;
  height: 498px;
  border-radius: 17px;
  img {
    width: 280px;
    height: 320px;
    flex-shrink: 0;
    border: 8px solid var(--Gray-Default, #fff);
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`
export const Icones = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`
export const Disponivel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  a {
    color: var(--Gray-600, #4b5563);

    /* Body2/Normal - All */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`
export const Linkedin = styled.div`
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`
