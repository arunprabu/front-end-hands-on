import React, { useEffect, useState } from 'react'


const Blog = () => {
  const [topicName, setTopicName] = useState('My Blog Demo with useEffect Hook');
  console.log(topicName);
  const [ date, setDate ] = useState(new Date());
  console.log('1. Before useEffect');

  useEffect(()=>{
    // effects run after every completed render, upon initial render and upon UI update as well.
    // it is an alternative to both componentDidMount and componentDidUpdate 
    // ideal place for ajax calls 
    console.log('3. Inside useEffect');
    // TODO: use fetch api . 
    // hit the backend REST API https://jsonplaceholder.typicode.com/posts?_limit=5
    document.title = topicName;
  }, [ topicName ]); // second arg is dependency -- it is optional
  // if the dep is changed by any means, useEffect callback fn will be called.
  // by default useEffect callback will be called once automatically
  // remove the dep and have empty array.. then see

  console.log('2. Before return');

  


  const handleChangeTopic = () => {
    console.log('4. handleChangeTopic');
    // mutating state here -- will result in 
    setTopicName("Demo of useEffect Hook!")
  }

  const handleUpdateTime = () => {
    setDate(new Date(2023, 11, 24, 10, 33, 30, 0));
  }

  return (
    <div>
      <h2>useEffect() Hook Demo - Blog</h2>
      <p>{topicName}</p>
      <button onClick={handleChangeTopic}>Change Topic</button>
      <hr />
      <p>{date.getDate()}</p>
      <button onClick={handleUpdateTime}>Update Date</button>
    </div>
  )
}

export default Blog