import styled from 'styled-components'
import fundo from '../../images/fundo.jpg'

export const Container = styled.div`
  display: flex;
  padding: 96px 80px;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 20px solid #82000f;

  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Skils = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  p {
    color: ${(props) => props.theme.corSecundaria};
    margin-left: 20%;
  }
  h1 {
    margin-left: 47%;
    border-radius: 12px;
    color: var(--Gray-600, #4b5563);
    /* Body3/Medium - All */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    background: var(--Gray-200, #e5e7eb);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  gap: 8px;
  img {
    width: 50px;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`
export const IcDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
}
`
