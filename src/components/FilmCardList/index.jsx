import React from 'react'
import { PaginatedList } from 'react-paginated-list';
import FilmCard from '../FilmCard';

function FilmCardList({movies}) {
  return (

    <PaginatedList
    list={movies}
    itemsPerPage={8}
    renderList={(list) => (
      <div className='flex p-1 flex-wrap justify-center gap-1'>
      <>
        {list.map((item, id) => {
          return (
            <FilmCard key={id} movie={item} />
          );
        })}
      </>
      </div>
    )}
  />



  )

}

export default FilmCardList