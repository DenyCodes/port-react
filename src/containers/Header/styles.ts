import styled from 'styled-components'

export const Navbar = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  min-height: 72px;
  padding: 14px 80px;
  display: flex;
  align-items: center;
  gap: 32px;
  background: rgba(13, 17, 23, 0.88);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);

  @media (max-width: 900px) {
    padding: 14px 24px;
  }
`

export const Brand = styled.button`
  border: 0;
  background: transparent;
  color: #f9fafb;
  font-size: 1.15rem;
  font-weight: 800;
  cursor: pointer;

  span {
    color: #d8ff57;
  }
`

export const Ul = styled.ul`
  margin-left: auto;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const Links = styled.button`
  border: 0;
  background: transparent;
  color: #cbd5e1;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: #d8ff57;
  }
`

export const BottonCV = styled.div`
  a {
    display: inline-flex;
    padding: 10px 16px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    color: #f9fafb;
    text-decoration: none;
    font-weight: 700;
  }

  @media (max-width: 520px) {
    a {
      padding: 9px 13px;
      font-size: 0.88rem;
    }
  }
`

export const Banner = styled.img``
export const Icon = styled.div``
export const ligt = styled.div``
