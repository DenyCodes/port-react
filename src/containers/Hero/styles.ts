import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 96px 80px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  background: var(--Gray-Default, #fff);
`
export const Sobre = styled.div`
  display: flex;
  max-width: 768px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
`
export const Pic = styled.img`
  height: 320px;
  border-radius: 50%;
  margin-bottom: 24px;
  img {
    width: 280px;
    height: 320px;
    flex-shrink: 0;
    border: 8px solid var(--Gray-Default, #fff);
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
`
export const Local = styled.div`
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
