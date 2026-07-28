import styled from 'styled-components'

export const Container = styled.section`
  padding: 96px 80px;
  background: #0d1117;
  color: #f9fafb;

  @media (max-width: 900px) {
    padding: 72px 24px;
  }
`

export const MainCard = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Head = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 24px;
  align-items: end;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Span = styled.span`
  h1 {
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 1;
    letter-spacing: -0.04em;
  }
`

export const SpanDesc = styled.span`
  h2 {
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
  }
`

export const Cards = styled.div`
  display: grid;
  gap: 16px;
`

export const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(230px, 0.7fr) 1.3fr;
  gap: 32px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  background: #151b24;

  p {
    color: #cbd5e1;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const NameP = styled.div`
  h2 {
    font-size: 1.15rem;
    color: #f9fafb;
  }

  h3 {
    margin-top: 5px;
    color: #d8ff57;
    font-size: 0.95rem;
  }

  span {
    display: block;
    margin-top: 10px;
    color: #64748b;
    font-size: 0.88rem;
  }
`

export const IconDiv = styled.div``
