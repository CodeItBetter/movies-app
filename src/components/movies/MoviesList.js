import React, { Fragment, useContext } from 'react';
import MovieContext from '../../context/MoviesContext';
import Movie from './Movie';
import './MovieList.css';

const MoviesList = () => {
    const {movies, searchMovie, error} = useContext(MovieContext);

    return (
        <Fragment>
            <div className='movie-container'>
                {!error && movies.filter(movie => {
                return movie.name.toLowerCase().includes(searchMovie.toLowerCase()) && movie
                }).map((movie, idx) => <Movie movie={movie} key={idx} />)}
            </div>
            {error && <p className='error'>{error}</p>}
        </Fragment>
        
    );
};

export default MoviesList;