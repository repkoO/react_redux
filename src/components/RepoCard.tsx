import React, { useState } from 'react'
import { IRepo } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

function RepoCard({repo}: {repo: IRepo}) {

  const { addFavorite, removeFavourite } = useActions()
  const {favourites} =  useAppSelector(state => state.githib)

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="border px-5 py-3 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className='text-lg font-bold'>
            {repo.full_name}
        </h2>
        <p className='text-sm font-thin'>{repo?.description}</p>
        </a>
        {!isFav && <button
          onClick={addToFavorite}
          className='py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all'>
          Add
        </button>}
        {isFav && <button
          onClick={removeFromFavorite}
          className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'>
          Remove
        </button>}
    </div>
  )
}

export default RepoCard