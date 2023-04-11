import React from 'react'
import MovieListItem from '../movieListItem/MovieListItem'

import './MovieList.css'


function MovieList({data, onDelete}) {
  
  return (
    <ul className='movieList'>
      {data.map((item )=>(
        <MovieListItem key={item.id} {...item} onDelete={()=>onDelete(item.id)}/>

      ))}
     
    </ul>
  )
}

export default MovieList