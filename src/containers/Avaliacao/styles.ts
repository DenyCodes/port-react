import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 96px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--Gray-50, #f9fafb);
`
export const MainCard = styled.div`
  display: flex;
  padding: 0px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`
export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  h1 {
    display: flex;
    padding: 4px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--Gray-200, #e5e7eb);
    color: var(--Gray-600, #4b5563);

    /* Body3/Medium - All */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`
export const SpanDesc = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  h2 {
    max-width: 576px;
    align-self: stretch;
    color: var(--Gray-600, #4b5563);
    text-align: center;

    /* Subtitle/Normal - Desktop */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }
`
export const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 12px;
`
export const Card = styled.div`
  display: flex;
  min-width: 300px;
  padding: 48px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  background: var(--Gray-Default, #fff);

  /* Drop Shadow/md */
  box-shadow:
    0px 4px 3px 0px rgba(0, 0, 0, 0.07),
    0px 2px 2px 0px rgba(0, 0, 0, 0.06);
  p {
    color: var(--Gray-600, #4b5563);
    /* Body2/Normal - All */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`
export const IconDiv = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 64px;
  background: #9ca3af;
  img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
`
export const NameP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  h2 {
    align-self: stretch;
    color: var(--Gray-900, #111827);
    text-align: center;

    /* Subtitle/Semi Bold - Desktop */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
  }
  h3 {
    align-self: stretch;
    color: var(--Gray-600, #4b5563);
    text-align: center;

    /* Body3/Normal - All */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`
