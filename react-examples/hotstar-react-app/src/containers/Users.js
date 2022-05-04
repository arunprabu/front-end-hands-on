import React, { Component } from 'react'
import Helmet from 'react-helmet';
import User from '../components/User/User';

class Users extends Component {

  state = {
    userList: []
  }

  componentDidMount(){
    //  ideal place for you to make ajax calls 
    // 1. What is the REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What is the HTTP MEthod? GET
    // 3. What is the Http Client Tool? fetch 

    fetch("https://jsonplaceholder.typicode.com/users")
      .then( (res) => {
        console.log(res);
        return res.json();
      })
      .then( (users ) => {
        console.log(users);
        this.setState({
          userList: users
        });
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      })
    
    // Learn about axios 
  }
  
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("********* inside getSnapshotBeforeUpdate");
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState){
    console.log('Yes! Component is updated');
  }

  render() {
    console.log('************* Rendering Users Component');
    // ideal place for us to loop thru
    let users = null;
    users = this.state.userList.map( (user) => {
      return(
        <User key={user.id} 
              id={user.id}
              name={user.name} 
              email={user.email} 
              phone={user.phone}/>
      )
    });

    return (
      <div className='row'>
        <Helmet>
          <title>Users!</title>
        </Helmet>
        <h2>Users | Lifecycle Hook and AJAX Call Demo</h2>

        {this.state.userList && this.state.userList.length > 0? 
          users
          : 
          <div className='text-center'>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        }
      </div >
    )
  }
}

export default Users