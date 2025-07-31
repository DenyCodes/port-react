import { useEffect, useState } from 'react'
import Titulo from '../../components/Titulo'

import { Github, Lista, ListRep, SecProje, Site } from './styles'

type Props = {
  nomeUsuario: string
}

type Repo = {
  id: number
  name: string
  language: string
  html_url: string
  homepage?: string
}

const specificRepos = [
  'efood_',
  'calculadora',
  'twitter_clone',
  'playtecno',
  'eplay',
  'todoreact',
  'sorteador-grunt',
  'ebac_sports',
  'ebac_games_redux',
  'sorteador_grunt'
]

const Projetos = ({ nomeUsuario }: Props) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)
  const [followers, setFollowers] = useState(0)
  const [reposCount, setReposCount] = useState(0)
  const [specificRepoList, setSpecificRepoList] = useState<Repo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let page = 1
      const perPage = 100
      let allRepos: Repo[] = []
      let fetching = true

      while (fetching) {
        const reposRes = await fetch(
          `https://api.github.com/users/${nomeUsuario}/repos?per_page=${perPage}&page=${page}`
        )
        const reposJson: Repo[] = await reposRes.json()

        if (reposJson.length > 0) {
          allRepos = [...allRepos, ...reposJson]
          page++
        } else {
          fetching = false
        }
      }

      const userRes = await fetch(`https://api.github.com/users/${nomeUsuario}`)
      const userJson = await userRes.json()

      setTimeout(() => {
        setEstaCarregando(false)
        setRepos(allRepos)
        setFollowers(userJson.followers)
        setReposCount(userJson.public_repos)

        // Filtrar os repositórios específicos
        const filteredRepos = allRepos.filter((repo: Repo) =>
          specificRepos.includes(repo.name)
        )
        setSpecificRepoList(filteredRepos)
      }, 1000)
    }

    fetchData()
  }, [nomeUsuario])

  return (
    <SecProje>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {specificRepoList.map(({ id, name, language, html_url, homepage }) => (
          <ListRep key={id}>
            <div>
              <b>nome:</b> {name}
            </div>
            <div>
              <b>Linguagem:</b>
              {language}
            </div>
            <Github>
              <a href={html_url}>Github</a>
            </Github>
            <Site>
              <a href={homepage}>site</a>
            </Site>
          </ListRep>
        ))}
      </Lista>
    </SecProje>
  )
}

export default Projetos
