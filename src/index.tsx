import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './LanguageProvider'
import './lib/i18n-lite'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento raiz #root não encontrado')
}

ReactDOM.createRoot(rootElement).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
)
