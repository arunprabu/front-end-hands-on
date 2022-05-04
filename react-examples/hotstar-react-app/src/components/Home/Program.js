import React from 'react';
import PropTypes from 'prop-types';

const Program = ( props ) => {

  /* 
    * Props are objects
    * are read-only 
    * using props we can receive data from parent comp
    * recommeded way to receive props is ... in the name of 'props'
    * props can also have children
  */

  console.log(props);

  return (
    <div className="card text-start mb-3">
      <div className="card-header">
        Featured Program
        <span className="badge bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.children}
        </p>
        <a href="/" className="btn btn-primary">
          Watch Now
        </a>
      </div>
      <div className="card-footer text-muted">{props.time}</div>
    </div>
  )
}

// Setting default props for the fn component
Program.defaultProps = {
  name: "Next TV Program will appear here",
  time: 'Timing will be updated later',
  category: 'Entertainment'
}

// TypeChecking with PropTypes
Program.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Program