import React from 'react'

function movieCard({movie}) {

  /*
  function renderStars(val) {
    let images = [];
    for (let i = 0; i < val; i++) {
      images.push(<img className="w-4 h-4" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png'/>)
    }
    return images
  }
  */

  return (
    <div className='flex w-[10rem] sm:w-[13rem] md:w-[15rem] flex-col bg-gray-400 p-2 rounded-md hover:bg-gray-500 hover:cursor-pointer'>
      <img className='w-full' src={movie.posterUrl} alt="Film Poster" />
    <div>
      <div className='flex flex-col mt-1'>
        <span className='text-xl font-title font-bold'>{movie.title}</span>
        
        <div className='flex justify-between items-center'>
          <span className='text-xs mb-2'>{movie.year}</span>
          <span className='text-sm mb-2'>{movie.director}</span>
        </div>
        <span className='text-sm font-paragraph line-clamp-3 text-ellipsis overflow-hidden mb-1'>{movie.plot}</span>
        <div className='flex text-xs gap-1 w-full font-paragraph flex-wrap'>
          {movie.genres.map(genre => {
            return (
              <span className='bg-gray-800 text-white p-1 rounded-md'>{genre}</span>
            )
          })}
        </div>
        </div>
    </div>
  </div>
  )
}

export default movieCard