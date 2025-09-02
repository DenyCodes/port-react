// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    corFundoCard: string
    corFundoSobre: string
    corBotao: string
    corGithub: string
    corPrincipal: string
    corSecundaria: string
    corDeFundo: string
    corDeFundoBotao: string
    corDaBorda: string
    corPerfil: string
    corFundoTitulo: string
    corDesc: string
    corFundoHeader: string
    corFundocurious: string // 👈 adicionei aqui
    backgroundimage?: string
  }
}
