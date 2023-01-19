import React from 'react'
import { useParams } from 'react-router-dom'
import { FilmDetail, Footer, Header } from '../../components';
import dataset from '../../dataset.json';

function FilmPage() {
    const sel_id = useParams().id;
    const sel_movie = dataset.movies.find(movie => {return movie.id == sel_id});
    console.log(sel_movie);
  return (
    <div>
        <Header />
        <FilmDetail movie={sel_movie} />
        <Footer />
    </div>
  )
}

export default FilmPage