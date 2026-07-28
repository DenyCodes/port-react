import styled from 'styled-components'

export const Foot = styled.footer`
  min-height: 120px;
  padding: 32px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: #cbd5e1;
  background: #090c11;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  strong {
    color: #f9fafb;
  }

  nav {
    display: flex;
    gap: 18px;
  }

  a {
    color: #cbd5e1;
    text-decoration: none;
  }

  a:hover {
    color: #d8ff57;
  }

  @media (max-width: 700px) {
    padding: 28px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`
