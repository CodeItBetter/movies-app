import React from 'react';
import './Movie.css';

const Movie = ({movie}) => {
    return (
        <div className='movie-card'>
            <img src={require(`../../assets/${movie['poster-image']}`)} alt="card image" />
            <p>{movie.name}</p>
        </div>
    );
};

export default Movie;