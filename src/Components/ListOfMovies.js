import React from 'react';
import MovieCards from './MovieCards'

const ListOfMovies = ({Lmovies}) => {
    return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
    {Lmovies.map(el=><MovieCards key={el.id} title={el.title} rate={el.rate} description={el.description} url={el.posterUrl} />)}

    </div>)
};

export default ListOfMovies;
