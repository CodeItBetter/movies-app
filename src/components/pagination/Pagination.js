import React,{useContext} from 'react';
import './Pagination.css';
import MovieContext from "../../context/MoviesContext";

const Pagination = () => {
    const { next, prev} = useContext(MovieContext);
    return (
    <div className="pagination">
        <button onClick={prev}><i className="fa-solid fa-arrow-left fa-2x"></i></button>
        <button onClick={next}><i className="fa-solid fa-arrow-right fa-2x"></i></button>
      </div>
    );
};

export default Pagination;