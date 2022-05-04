import React from 'react'

const Calculator = (props) => {
  return (
    <div>
      <h3>Calculator</h3>
      {/*  I do not have calc fn inside props . 
      This should break the app, if i don't have error boundary*/}
      <p>{props.calc()}</p> 
    </div>

  )
}

export default Calculator