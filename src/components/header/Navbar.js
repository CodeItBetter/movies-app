import React from 'react';
import SearchArea from '../search/SearchArea';
import './Navbar.css';

const Navbar = ({title}) => {
    return (
          <div className="navbar">
            <a href="#">
              <i className="fa-solid fa-arrow-left left-arrow"></i>
              <span>{title}</span>
            </a>
            <SearchArea />
          </div>
    );
};

export default Navbar;