import React from 'react'
import { Button } from './styles'

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.download = 'Curriculo.pdf' // Substitua com o nome desejado do arquivo
    link.click()
  }

  return <Button onClick={handleDownload}>Baixar Curriculo</Button>
}

export default DownloadButton
