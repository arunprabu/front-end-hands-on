import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  // to catch errors 
  static getDerivedStateFromError(error) {
    console.log(error);
    // side effects should not be caught here
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // side effects can be caught
    console.log(error);
    console.log(errorInfo);
  }

  render() {

    if(this.state.hasError){
      return (
        <div className='alert alert-danger'>
          <p>Some error occured</p>
          <p>Try again after sometime. If the issues persists, contact admin</p>
        </div>
      )
    }else{
      return this.props.children
    }
  }
}

export default ErrorBoundary;