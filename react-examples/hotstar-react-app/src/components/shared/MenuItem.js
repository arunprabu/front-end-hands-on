import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = ({name, url}) => {
  return (
    <li className="nav-item">
      <NavLink to={url} 
                className="nav-link" 
                activeclassname="active">{name}</NavLink>
    </li>
  )
}

export default MenuItem;