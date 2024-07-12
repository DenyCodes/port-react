import React from 'react'
import { Button } from './styles'

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Curriculo.pdf' // Substitua com o caminho correto do seu arquivo
    link.download = 'Curriculo.pdf' // Substitua com o nome desejado do arquivo
    link.click()
  }

  return <Button onClick={handleDownload}>Baixar Curriculo</Button>
}

export default DownloadButton
