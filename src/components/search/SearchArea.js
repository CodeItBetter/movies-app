import React,{useContext} from 'react';
import MovieContext from "../../context/MoviesContext";
import './SearchArea.css';

const SearchArea = () => {
    const {searchMovie, setSearchMovie} = useContext(MovieContext);
    const inputHandler = (e) =>{
        setSearchMovie(e.target.value);
      }
    return (
        <div className='search'>
            <label>
                <input type="search" placeholder="search for movies here" value={searchMovie}
                onChange={inputHandler} />
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i> 
            </label>
        </div>  
    );
};

export default SearchArea;