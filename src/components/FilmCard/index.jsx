import React from 'react'
import dataset from '../../dataset.json';

function FilmCard({film}) {

  function renderStars(val) {
    let images = [];
    for (let i = 0; i < val; i++) {
      images.push(<img className="w-4 h-4" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png'/>)
    }
    return images
  }

  return (
    <div className='flex flex-col bg-gray-400 w-52 p-2 rounded-md mx-1 hover:bg-gray-500'>
    <img src={film.img_url} alt="Film" />
    <div>
    <div className='flex items-center justify-between'>
        <div className='flex'>{renderStars(film.score)}</div>
        <div>
        <span className='font-paragraph font-bold text-gray-800'>{film.score}</span>
        <span className='font-paragraph font-bold text-gray-600'>/5</span>
        </div>
      </div>
      <div className='flex flex-col'>
      <span className='text-2xl font-title font-bold'>{film.title}</span>
      <span className='text-sm font-paragraph'>{film.title}</span>
      </div>


    </div>
  </div>
  )
}

export default FilmCard