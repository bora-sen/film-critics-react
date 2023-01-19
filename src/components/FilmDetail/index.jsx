import React from 'react'

function FilmDetail({movie}) {
  return (
    <section className='p-2 flex flex-col w-full'>
      <div className='mb-4'>
        <img className='w-[25rem] mx-auto' src={movie.posterUrl} alt="" />
      </div>
      <div>
        <span className='font-bold font-title text-4xl'>{movie.title}</span>
        <div className='flex justify-between mx-4'>
          <span className=''>{movie.director}</span>
          <span className=''>{movie.year}</span>
        </div>
        <p className='font-paragraph mt-2'>{movie.plot}</p>
      </div>
      

    </section>

  )
}

export default FilmDetail