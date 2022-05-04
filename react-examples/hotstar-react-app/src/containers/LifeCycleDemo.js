// lifecycle hooks are available only for class comp. 
import React, { Component } from 'react'

class LifeCycleDemo extends Component {

  constructor(){
    // if a class comp has constructor -- super method should be called. 
    // constructor will be first one called inside a class comp 
    super();
    console.log("==========[LifeCycleDemo.js] - 1. Inside constructor");
    // ideal place for you to have state - empty state at least
    this.state = {
      isLoaded: false,
      featureName: 'Lifecycle Hooks Demo'
    }
    this.myTimeout = null;
  }

  // lifecycle hook
  componentDidMount(){
    // this will be called only once after the initial rendering
    // upon successful rendering of the JSX -- componentDidMount will be called
    // whenver the comp is coming into view componentDidMount will be called
    console.log("==========[LifeCycleDemo.js] - 3. Inside componentDidMount");
    // ideal place for you to make ajax calls 
    // upon successful ajax call, you have to change the state here
    // mocking ajax call w/ timeout
    this.myTimeout = setTimeout( () => {
      // assuming that we get the data in 2 sec from rest api backend
      // you need to update the state upon getting resp from the backend.
      // you need to update state only if prev state and new state are different.
      this.setState({
        isLoaded: true
      });
    }, 4000);
  }

  shouldComponentUpdate(){
    // when state is updated this method will be called.
    // it has to return true or false mandatorily
    // compare prev state and new state 
    // if changes are there then, return true..otherwise false
    // Refer: https://www.tutorialspoint.com/reactjs-shouldcomponentupdate-method
    console.log("==========[LifeCycleDemo.js] - 4. Inside shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    // called immediately after the update in JSX
    // NOT CALLED AFTER THE INITIAL RENDERING 
    console.log("==========[LifeCycleDemo.js] - 6 Inside componentDidUpdate");
  }

  componentWillUnmount(){
    // whenever the comp goes out of view-- this will be called.
    // ideal place for you to clear intervals / timeouts
    clearTimeout(this.myTimeout);
    console.log('==========[LifeCycleDemo.js]  ==== Component is destroyed');
  }

  render() {
    // NEVER EVER change the state here 
    // if you do so, it will re-render infinitely. 
    // render method will be called automatically 
    // for render method to be called this class comp should extend React.comp 
    console.log("==========[LifeCycleDemo.js] - 2/5 Inside Render");
    console.log(this.state);

    return (
      <div>
        <h3>{this.state.featureName}</h3>
        { this.state.isLoaded? 
          <div>
            <h4>Learn more about Lifecycle Hooks here </h4>
            <a href="https://reactjs.org/docs/react-component.html">Click here to learn more lifecycle hook stuff</a>
          </div>
          :
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        }
      
      </div>
    )
  }
  
}

export default LifeCycleDemo;