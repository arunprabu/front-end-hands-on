import React from 'react'
import Helmet from 'react-helmet';
import Blog from './Blog';
import Profile from './Profile';
import Todo from './Todo';

const About = () => {
  // Fragment is used in this example
  return (
    <>
      <Helmet>
        <title>About Hooks!</title>
      </Helmet>
      <h1>About Hooks</h1>
      
      {/* useState Hook Demo  */}
      <Profile />
      <hr />
      {/* useEffect Hook Demo */}
      <Blog />
      <hr/>
      
      {/* useRef and useReducer Hook Demo */}
      <Todo />
    </>
  )
}

export default About;