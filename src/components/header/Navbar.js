import React,{useContext} from 'react';
import SearchArea from '../search/SearchArea';
import './Navbar.css';
import MovieContext from "../../context/MoviesContext";

const Navbar = ({title}) => {
  const { prev, setPg} = useContext(MovieContext);

  const inital = () => {
    setPg(1);
  }
    return (
          <div className="navbar">
            <a href="#">
              <i className="fa-solid fa-arrow-left left-arrow" onClick={prev}></i>
              <span onClick={inital}>{title}</span>
            </a>
            <SearchArea />
          </div>
    );
};

export default Navbar;