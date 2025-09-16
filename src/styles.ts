import styled, { createGlobalStyle } from 'styled-components'
import fundo from './images/fundo.jpg'

import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style: none;
    overflow-x: hidden;
  }

  body {
      background-image: url(${fundo});

    @media (max-width: 900px) {
    max-width: 100%;
    }
  }
`

export default EstiloGlobal
