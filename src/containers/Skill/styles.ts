import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 96px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: ${(props) => props.theme.corPrincipal};
`
export const Skils = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  p {
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
`
export const Icons = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  gap: 8px;
  img {
    width: 50px;
  }
`
export const IcDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
}
`
