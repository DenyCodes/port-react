import styled from 'styled-components'
import fundo from '../../images/fundo3.jpg'
import fundo2 from '../../images/fundo.jpg'

export const Container = styled.div`
  display: flex;
  padding: 96px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px;
  }
`
export const TituloDesc = styled.div`
  background-color: #ffcd37;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TituloDesc2 = styled.div`
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  color: #007bff;
`
export const Div = styled.div`
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Titulo = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--Gray-200, #e5e7eb);
  h1 {
    color: var(--Gray-600, #4b5563);

    /* Body3/Medium - All */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-image: url(${fundo2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Subtitulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  p {
    max-width: 576px;
    align-self: stretch;
    color: #fff;
    text-align: center;

    /* Subtitle/Normal - Desktop */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }
`
export const Content = styled.div`
  display: flex;
  width: 1152px;
  align-items: flex-start;
  border-radius: 12px;
  background: ${(props) => props.theme.corFundoCard};

  /* Drop Shadow/md */
  box-shadow:
    0px 4px 3px 0px rgba(0, 0, 0, 0.07),
    0px 2px 2px 0px rgba(0, 0, 0, 0.06);
`
export const ImageP = styled.div`
  display: flex;
  padding: 48px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px 0px 0px 12px;
  border-right: 1px solid var(--Gray-100, #f3f4f6);
  background: var(--Gray-50, #f9fafb);
  img {
    height: 384px;
    flex: 1 0 0;
    border-radius: 12px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;

    /* Drop Shadow/lg */
    box-shadow:
      0px 4px 3px 0px rgba(0, 0, 0, 0.1),
      0px 10px 8px 0px rgba(0, 0, 0, 0.04);
  }
`
export const DescricaoDiv = styled.div`
  display: flex;
  padding: 48px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px 0px 0px 12px;
  h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;
  }
  p {
    align-self: stretch;
    color: ${(props) => props.theme.corDeFundoBotao};

    /* Body2/Normal - All */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  span {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 8px;
    align-self: stretch;
    flex-wrap: wrap;
  }
`
export const CampoTag = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
  span {
    display: flex;
    padding: 4px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--Gray-200, #e5e7eb);
  }
`
export const IconB = styled.div`
  background-color: #ffcd37;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  color: #fff;
  a {
    text-decoration: none;
    color: #000;
  }
`
export const IconB2 = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  color: #fff;
  a {
    text-decoration: none;
    color: #000;
  }
`
