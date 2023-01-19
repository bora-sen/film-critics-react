import React from 'react'
import { FilmCardList, Header,Footer } from '../../components';
import dataset from '../../dataset.json';

function Home() {
  return (
    <main className="container mx-auto">
    <Header />
    <FilmCardList movies={dataset.movies} />
    <Footer />
  </main>
  )
}

export default Home