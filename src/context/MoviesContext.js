import { useState, createContext } from "react";

const MovieContext = createContext({
    searchMovie: '',
    movies: [],
    setMovies: () =>{},
    fetchMovies: () => {},
    setSearchMovie: () =>{},
    pg: 1,
    setPg: () => {},
    error: '',
    setError: () => {}
})

export const MovieProvider  = ({children}) =>{
    const [searchMovie, setSearchMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [pg, setPg] = useState(1);
    const [error, setError] = useState('');

    console.log(movies, pg);

    const fetchMovies = (user) =>{
        Object.entries(user.page).map(([key, value]) => {
            return key === 'content-items' && Object.values(value).map((item, idx) => setMovies(item))
          })
    }
    return(
        <MovieContext.Provider value={{
            searchMovie,
            movies,
            setSearchMovie,
            fetchMovies,
            setMovies,
            pg,
            setPg,
            error,
            setError
        }}>{children}</MovieContext.Provider>
    )
}

export default MovieContext;