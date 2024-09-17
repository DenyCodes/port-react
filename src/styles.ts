import styled, { createGlobalStyle } from 'styled-components'

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
    background-color: ${(props) => (props.theme as Theme).corDeFundo};
    @media (max-width: 900px) {
    max-width: 100%;
    }
  }
`

export default EstiloGlobal
