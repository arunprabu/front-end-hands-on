import React, { useReducer, useRef } from 'react'
import todoReducer from '../../reducers/todoReducer';

const Todo = () => {

  console.log("First line");

  // to capture input from form field in a fn comp
  const todoInput = useRef(null);

  //useReducer will get reducer as input and will return an array
  const [todoState, todoDispatch] =  useReducer(todoReducer);

  console.log(todoState);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log('into add todo');
    console.log(todoInput.current.value);

    todoDispatch({type: 'ADD_TODO', payload: todoInput.current.value}); 
  }

  let myTodos = null; 
  if(todoState && todoState.length > 0){
    myTodos = todoState.map( (todo, index) =>{
      return(
        <li className="list-group-item" key={index}>
          {todo}
          <button type='button' className='btn btn-sm btn-primary'>Edit</button>
          <button type='button' className='btn btn-sm btn-danger'>Delete</button>
        </li>
      )
    })
  }

  return (
    <div >
      <h2>Todo App | useRef and useReducer Demo</h2>

      <input type='text' ref={todoInput} />
      <button type='button' className='btn btn-success' 
      onClick={handleAddTodo}>Add Todo</button>

      <div className='col-md-6 offset-md-3 text-start'>
        <ul className="list-group">
          {myTodos}
        </ul>
      </div>

    </div>
  )
}

export default Todo