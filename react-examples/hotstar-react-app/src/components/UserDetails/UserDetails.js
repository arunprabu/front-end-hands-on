import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const UserDetails = (props) => {
  // read URL Parameter 
  // using the hook from react-router-dom to access URL Param
  const myParams = useParams(); 
  console.log(myParams);

  // TODO: Hitting REST API backend from fn comp 
  const data = useFetch(`https://jsonplaceholder.typicode.com/users/${myParams.id}`, 
                        "PUT", 
                        { name: 'Arun', email: 'a@b.com' })

  console.log(data);

  return (
    <div>
      <h2>UserDetails</h2>
      <p>User Id: {myParams.id} </p>
    </div>
  )
}

export default UserDetails