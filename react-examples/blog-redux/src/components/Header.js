import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavLink to="/" className="d-flex align-items-center mb-3 ms-4 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4 ">My Blog App in Redux</span>
      </NavLink>
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/posts" className="nav-link">Blog</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
    </header>
  )
}

export default Header;