import background from '../src/images/backgroundimage.png'

const temaDark = {
  corPrincipal: '#000',
  corSecundaria: '#D1D5DB',
  corDeFundo: '#282a35',
  corDeFundoBotao: '#fff',
  corBotao: '#000',
  corDaBorda: 'black',
  corPerfil: '#0d1117',
  corGithub: '#fff',
  corFundoSobre: '#D1D5DB',
  corFundoCard: '#374151',
  corFundoTitulo: '#374151',
  corDesc: '#D1D5DB',
  corFundocurious: '#282a35',
  backgroundimage: background
}

export default temaDark

export type Theme = {
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
}
