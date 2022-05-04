/* 
Reducer 
    -- is a fn will take it two params (state, action)
    -- mandatorily return state 
    -- action is an obj- will have two properties inside. 
        one is type, another one is payload 
*/

const todoReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO': 
      return [...state, action.payload];
    
    default: 
      return state;
  }
}

export default todoReducer;