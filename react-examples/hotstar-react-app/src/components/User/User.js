import React from 'react'
import { Link } from 'react-router-dom'

const User = ({id, name, email, phone}) => { // props are destructred
  
  return (
    <div className='col-md-3'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{phone}</p>
          <Link 
            to={`/users/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default User