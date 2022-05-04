// Reducer
/* What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as parameters and returns the new state.
*/
import { ADD_POST, GET_POSTS, GET_POST_BY_ID, EDIT_POST, DELETE_POST } from "../actions/types";

// Step 3: Setting up individual reducer
const postReducer = (state = [], action ) => {
  /* action is an obj with type and payload (optional) properties */ 
  
  // Setting up postReducer so that
  // we can combine this reducer with other reducers later 
  // and make a big object for the store 
  // reducer should mandatorily return a state. 

  // Step 8: Let's have switch case for the possible action types 
  // so that we can return appropriate state 
  // Step 8.1 
      //now it is time to understand the concept called 'actions'
      //What are actions? 
        //actions are plain Javascript objects with a type property. 
        //This type property describes the event that is taking place 
        //in the application.
        // action can also have the payload property
  switch(action.type){
    case ADD_POST: 
      return [...state, action.payload];
    
    case GET_POSTS: 
      return action.payload;
    
    case GET_POST_BY_ID: 
      return state; // not implemented yet
    
    case EDIT_POST:
      return state; //not implemented yet

    case DELETE_POST:
      return state; //not implemented yet 

    default: 
      return state;
  }
}

export default postReducer;
