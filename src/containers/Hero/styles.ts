import styled from 'styled-components'

export const Container = styled.section`
  background: linear-gradient(135deg, #0d1117 0%, #111827 55%, #172033 100%);
  color: #f9fafb;
  padding: 128px 80px 96px;

  @media (max-width: 900px) {
    padding: 104px 24px 72px;
  }
`

export const Content = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
  align-items: center;
  gap: 72px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
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
    font-size: clamp(2.6rem, 6vw, 5.7rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  p {
    max-width: 720px;
    margin-top: 28px;
    color: #cbd5e1;
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.7;
  }
`

export const Eyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 24px;
  padding: 8px 14px;
  border: 1px solid rgba(216, 255, 87, 0.35);
  border-radius: 999px;
  color: #d8ff57;
  background: rgba(216, 255, 87, 0.07);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  a {
    padding: 13px 20px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    color: #f9fafb;
    text-decoration: none;
    font-weight: 700;
    transition: 0.2s ease;
  }

  a:first-child {
    background: #d8ff57;
    border-color: #d8ff57;
    color: #10130d;
  }

  a:hover {
    transform: translateY(-2px);
    border-color: #d8ff57;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  color: #94a3b8;
  font-size: 0.92rem;

  span::before {
    content: '•';
    margin-right: 8px;
    color: #d8ff57;
  }
`

export const PicPerfil = styled.div`
  display: flex;
  justify-content: center;
`

export const Pic = styled.img`
  width: min(100%, 360px);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.35);
`

export const Icones = styled.div``
export const Disponivel = styled.div``
export const Linkedin = styled.div``
