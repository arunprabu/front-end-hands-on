import React, { Component } from 'react'

class Signin extends Component {

  // the following is needed for prefilled form 
  /*
  constructor(props) {
    super(props)
    this.state = {
       email: 'a@b.com',
       password: 'test123'
    }   
  }
  */

  // for prefilled form // fresh form?
  /* 
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value

    const formData = {
      [name]: value
    }
    console.log(formData);

    this.setState({
      ...formData
    });
  }
  */

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.email.value);
    console.log(this.password.value);

    const formData = {
      email: this.email.value,
      password: this.password.value
    }

    // send the following data to the REST API 
    console.log(formData);
  }

  render() {
    return (
      <div className='container'>
        <h1>Signin | Demo of Forms in React</h1>
        <form className='text-start' style={{ width: 500}} 
          onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={(emailInput) => {this.email = emailInput }}
            />

            {/* The following is an example of prefilled form 
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange}
            /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={(passwordInput) => {this.password = passwordInput }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

      </div>

    )
  }
}

export default Signin