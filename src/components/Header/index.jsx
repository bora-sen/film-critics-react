import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className=''>
      <div className='flex items-center justify-center bg-header-image w-full h-52 bg-center bg-no-repeat bg-cover'>
        <div className='bg-header-anim bg-center bg-clip-text bg-cover'>
          <Link to="/"><h1 className='font-bold font-display text-7xl text-transparent'>FilmCritics</h1></Link>
        </div>

      </div>
    </section>
  )
}

export default Header