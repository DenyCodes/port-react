import styled from 'styled-components'

export const Container = styled.section`
  padding: 96px 80px;
  background-color: #0d1117;
  color: #f9fafb;

  @media (max-width: 900px) {
    padding: 72px 24px;
  }
`

export const Skils = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 700px;
    margin-top: 18px;
    color: #94a3b8;
    line-height: 1.7;
  }
`

export const Icons = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 40px auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`

export const IcDiv = styled.div`
  min-height: 120px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background-color: #151b24;
  color: #cbd5e1;
  font-weight: 600;

  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }
`
