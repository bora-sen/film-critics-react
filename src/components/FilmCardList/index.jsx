import React from 'react'
import FilmCard from '../FilmCard';

function FilmCardList(films) {
  let film_array = films.films;
  return (
    <div className='flex'>
      {film_array.map(film => {
        return (
          <FilmCard key={film.id} film={film} />
        )
      })}
    </div>

  )
}

export default FilmCardList