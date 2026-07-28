import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    overflow-x: hidden;
    background: #0d1117;
  }

  button,
  a {
    font: inherit;
  }

  img {
    max-width: 100%;
  }
`

export default EstiloGlobal
