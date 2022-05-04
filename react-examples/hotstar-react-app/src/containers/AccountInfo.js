import React, { Component } from 'react'

class AccountInfo extends Component {

  state = {
    accountName: 'arun'
  }

  handleAccountNameChange = (event) => {
    console.log('Inside handleAccountNameChange')
    console.log(event.target.value);
    this.setState({
      accountName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>AccountInfo</h3>
        <p>Update Account Info</p>
        {/* the following input without onChange handler 
          will become just read-only field -- Refer console */}
        <input value={this.state.accountName} onChange={this.handleAccountNameChange}></input>
        <p>Account Name: {this.state.accountName}</p>
      </div>
    )
  }
}

export default AccountInfo