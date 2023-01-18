import React from 'react'

function Footer() {
  return (
    <section className='flex items-center justify-between h-52 bg-header-image bg-center bg-no-repeat bg-cover'>
    <div className='ml-4'>
      <h1 className='font-bold font-display text-4xl text-white '><a href="/">FilmCritics</a></h1>
    </div>
    <div className=''>
      <ul>
        <li className='w-auto bg-slate-200 p-2 mr-4 rounded-sm text-center text-gray-900 transition-all hover:bg-slate-700 hover:text-gray-100 hover:'><a className='' href="https://github.com/bora-sen">My Github</a></li>
      </ul>
    </div>
  </section>
  )
}

export default Footer