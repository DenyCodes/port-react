import styled from 'styled-components'

export const Container = styled.section`
  padding: 96px 80px;
  background: #111827;
  color: #f9fafb;

  @media (max-width: 900px) {
    padding: 72px 24px;
  }
`

export const Div = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Head = styled.header`
  padding-bottom: 8px;
`

export const Titulo = styled.div`
  h1 {
    font-size: clamp(2rem, 4vw, 3.8rem);
    line-height: 1;
    letter-spacing: -0.04em;
  }
`

export const Subtitulo = styled.div`
  margin-top: 18px;

  p {
    max-width: 700px;
    color: #94a3b8;
    font-size: 1rem;
    line-height: 1.7;
  }
`

export const Content = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  background: #151b24;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const ImageP = styled.div`
  min-height: 340px;
  background: #0d1117;

  img {
    width: 100%;
    height: 100%;
    min-height: 340px;
    display: block;
    object-fit: cover;
  }
`

export const DescricaoDiv = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 22px;

  > ${Titulo} {
    padding: 0;
  }

  > ${Titulo}::first-line {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    color: #cbd5e1;
    line-height: 1.75;
  }

  @media (max-width: 600px) {
    padding: 28px;
  }
`

export const CampoTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 7px 11px;
    border: 1px solid rgba(216, 255, 87, 0.2);
    border-radius: 999px;
    background: rgba(216, 255, 87, 0.06);
    color: #d8ff57;
    font-size: 0.8rem;
  }
`

export const IconB2 = styled.div`
  a {
    display: inline-flex;
    text-decoration: none;
  }
`

export const TituloDesc2 = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 11px 17px;
  border-radius: 999px;
  background: #d8ff57;
  color: #10130d;
  font-weight: 700;

  img {
    width: 16px;
    height: 16px;
  }
`
