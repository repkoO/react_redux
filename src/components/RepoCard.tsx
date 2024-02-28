import React from 'react'
import { IRepo } from '../models/models'

function RepoCard({repo}: {repo: IRepo}) {
  return (
    <div className="border px-5 py-3 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <a href={repo.html_url} target='_blank' rel="noreferrer">
        <h2 className='text-lg font-bold'>
            {repo.full_name}
        </h2>
        <p className='text-sm font-thin'>{repo?.description}</p>
        </a>
    </div>
  )
}

export default RepoCard