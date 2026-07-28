import styled from 'styled-components'

export const Container = styled.section`
  padding: 128px 80px 96px;
  background-color: #0d1117;
  color: #f9fafb;

  @media (max-width: 900px) {
    padding: 104px 24px 72px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  align-items: center;
  gap: 64px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Sobre = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`

export const SobreText = styled.div`
  h1 {
    max-width: 820px;
    font-size: clamp(2.5rem, 6vw, 5.5rem);
    line-height: 1;
  }

  p {
    max-width: 720px;
    margin-top: 24px;
    color: #cbd5e1;
    font-size: 1.1rem;
    line-height: 1.7;
  }
`

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;
  border: 1px solid #6f7f35;
  border-radius: 999px;
  color: #d8ff57;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  a {
    padding: 12px 18px;
    border: 1px solid #475569;
    border-radius: 999px;
    color: #f9fafb;
    text-decoration: none;
    font-weight: 700;
  }

  a:first-child {
    border-color: #d8ff57;
    background-color: #d8ff57;
    color: #10130d;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  color: #94a3b8;
  font-size: 0.92rem;
`

export const PicPerfil = styled.div`
  display: flex;
  justify-content: center;
`

export const Pic = styled.img`
  width: 100%;
  max-width: 360px;
  height: auto;
  border: 1px solid #334155;
  border-radius: 28px;
`

export const Icones = styled.div``
export const Disponivel = styled.div``
export const Linkedin = styled.div``
