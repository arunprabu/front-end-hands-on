import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Step 1: Setup the the Redux Store here -- do the import
import { createStore, applyMiddleware } from 'redux';  // npm i redux react-redux 
// Step 5: let's import the rootReducer 
// and pass the rootReducer to the creatStore as an argument.
import rootReducer from './reducers';

// Step 6: Let's provide the store data to the entire app 
import { Provider } from 'react-redux'; 

// Step 14: 
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// it will be easier for you to provide the store data to the whole app
// there should be only store in your app.
// Step 2: Exec createStore() method and save it in a variable 
const store = createStore(rootReducer, applyMiddleware(thunk, logger));  //this needs a special param called 'reducer'
console.log(store);

/* //Definition of Provider: The Provider component uses something 
  //called as React Context which allows you to pass the 
  //store object to any components without the need to pass props.
  //Provider should be imported from react-redux 
*/

ReactDOM.render(
  <React.StrictMode>
    {/* this is how we have to provide store data to the whole app */} 
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
