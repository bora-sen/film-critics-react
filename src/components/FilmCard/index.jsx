import React from 'react'
import { Link } from 'react-router-dom'

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
 function handleNotImage(e){
  e.target.src = "https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png";
 }

  return (
    <div className='flex w-[10rem] sm:w-[13rem] md:w-[15rem] flex-col hover:bg-gray-200 p-2 rounded-sm hover:cursor-pointer'>
      <Link to={'/film/'+movie.id}>
        <div className='flex items-center justify-center w-full h-[15rem]'>
          <img onError={e => handleNotImage(e)} className='w-full h-full object-cover' src={movie.posterUrl} alt="Film Poster" />
        </div>

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
    </Link>
  </div>
  )
}

export default movieCard