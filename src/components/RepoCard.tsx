import React from 'react'
import { IRepo } from '../models/models'
import { useActions } from '../hooks/actions'

function RepoCard({repo}: {repo: IRepo}) {

  const { addFavorite } = useActions()

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
  }

  return (
    <div className="border px-5 py-3 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className='text-lg font-bold'>
            {repo.full_name}
        </h2>
        <p className='text-sm font-thin'>{repo?.description}</p>
        </a>
        <button
          onClick={addToFavorite}
          className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all'>
          Add
        </button>
    </div>
  )
}

export default RepoCard